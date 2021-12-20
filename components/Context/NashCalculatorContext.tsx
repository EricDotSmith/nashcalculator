import { createContext, useEffect, useMemo, useState } from "react";

export interface VolumeAndFeePair {
	volume: string;
	fee: string;
}

interface NashCalculatorContextInterface {
	totalNEX: string;
	setTotalNEX: React.Dispatch<React.SetStateAction<string>>;
	stakingPeriodMonths: string;
	setStakingPeriodMonths: React.Dispatch<React.SetStateAction<string>>;
	layer2ExchangePair: VolumeAndFeePair;
	setLayer2ExchangePair: React.Dispatch<
		React.SetStateAction<VolumeAndFeePair>
	>;
	earningsManagementPair: VolumeAndFeePair;
	setEarningsManagementPair: React.Dispatch<
		React.SetStateAction<VolumeAndFeePair>
	>;
	fiatGatewayPair: VolumeAndFeePair;
	setFiatGatewayPair: React.Dispatch<React.SetStateAction<VolumeAndFeePair>>;
	dexMarketPair: VolumeAndFeePair;
	setDEXMarketPair: React.Dispatch<React.SetStateAction<VolumeAndFeePair>>;
	totalProfit: number;
	volumePeriod: string;
	setVolumePeriod: React.Dispatch<React.SetStateAction<string>>;
	yieldPeriod: string;
	setYieldPeriod: React.Dispatch<React.SetStateAction<string>>;
	layer2ExchangeProfit: number;
	earningsManagementProfit: number;
	fiatGatewayProfit: number;
	dexMarketProfit: number;
}

export const NashCalculatorContext =
	createContext<NashCalculatorContextInterface>({
		totalNEX: "",
		setTotalNEX: () => {},
		layer2ExchangePair: { volume: "", fee: "" },
		setLayer2ExchangePair: () => {},
		stakingPeriodMonths: "",
		setStakingPeriodMonths: () => {},
		earningsManagementPair: { volume: "", fee: "" },
		setEarningsManagementPair: () => {},
		fiatGatewayPair: { volume: "", fee: "" },
		setFiatGatewayPair: () => {},
		dexMarketPair: { volume: "", fee: "" },
		setDEXMarketPair: () => {},
		totalProfit: 0,
		volumePeriod: "",
		setVolumePeriod: () => {},
		yieldPeriod: "",
		setYieldPeriod: () => {},
		layer2ExchangeProfit: 0,
		earningsManagementProfit: 0,
		fiatGatewayProfit: 0,
		dexMarketProfit: 0,
	});

const NEX_TOTAL_SUPPLY = 50000000;

enum ServiceVolumeDefaults {
	Layer2Exchange = "1000000",
	Earnings = "250000000",
	FiatGateway = "1000000",
	DEXMarkets = "1000000",
}

enum ServiceFeePercentDefaults {
	Layer2Exchange = "0.25",
	Earnings = "6.5",
	FiatGateway = "1",
	DEXMarkets = "0.4",
}

enum NashCoreServicesRevenueSharePercentages {
	Layer2Exchange = 0.75,
	Earnings = 0.1,
	FiatGateway = 0.1,
	DEXMarkets = 0.1,
}

const NashCalculatorContextProvider: React.FC = (props) => {
	const { children } = props;
	const [totalNEX, setTotalNEX] = useState<string>("10000");
	const [stakingPeriodMonths, setStakingPeriodMonths] =
		useState<string>("0");
	const [layer2ExchangePair, setLayer2ExchangePair] =
		useState<VolumeAndFeePair>({
			volume: ServiceVolumeDefaults.Layer2Exchange,
			fee: ServiceFeePercentDefaults.Layer2Exchange,
		});
	const [earningsManagementPair, setEarningsManagementPair] =
		useState<VolumeAndFeePair>({
			volume: ServiceVolumeDefaults.Earnings,
			fee: ServiceFeePercentDefaults.Earnings,
		});
	const [fiatGatewayPair, setFiatGatewayPair] = useState<VolumeAndFeePair>({
		volume: ServiceVolumeDefaults.FiatGateway,
		fee: ServiceFeePercentDefaults.FiatGateway,
	});
	const [dexMarketPair, setDEXMarketPair] = useState<VolumeAndFeePair>({
		volume: ServiceVolumeDefaults.DEXMarkets,
		fee: ServiceFeePercentDefaults.DEXMarkets,
	});

	const [totalProfit, setTotalProfit] = useState<number>(0);
	const [volumePeriod, setVolumePeriod] = useState<string>("daily");
	const [yieldPeriod, setYieldPeriod] = useState<string>("monthly");

	const [layer2ExchangeProfit, setLayer2ExchangeProfit] =
		useState<number>(0);
	const [earningsManagementProfit, setEarningsManagementProfit] =
		useState<number>(0);
	const [fiatGatewayProfit, setFiatGatewayProfit] = useState<number>(0);
	const [dexMarketProfit, setDexMarketProfit] = useState<number>(0);

	const resetAllFieldsToDefault = () => {};

	// @here
	// earnings tvl volume is weird, look into it when calculating total profit
	const yearlyNashProfitFromServices = useMemo(() => {
		let layer2ExchangeNashProfitAfterFees =
			Number.parseFloat(layer2ExchangePair.volume) *
			(Number.parseFloat(layer2ExchangePair.fee) / 100);

		let earningsManagementNashProfitAfterFees =
			Number.parseFloat(earningsManagementPair.volume) *
			(Number.parseFloat(earningsManagementPair.fee) / 100);

		let fiatGatewayNashProfitAfterFees =
			Number.parseFloat(fiatGatewayPair.volume) *
			(Number.parseFloat(fiatGatewayPair.fee) / 100);

		let dexMarketNashProfitAfterFees =
			Number.parseFloat(dexMarketPair.volume) *
			(Number.parseFloat(dexMarketPair.fee) / 100);

		if (volumePeriod === "daily") {
			layer2ExchangeNashProfitAfterFees *= 365;
			earningsManagementNashProfitAfterFees *= 365;
			fiatGatewayNashProfitAfterFees *= 365;
			dexMarketNashProfitAfterFees *= 365;
		} else if (volumePeriod === "monthly") {
			layer2ExchangeNashProfitAfterFees *= 12;
			earningsManagementNashProfitAfterFees *= 12;
			fiatGatewayNashProfitAfterFees *= 12;
			dexMarketNashProfitAfterFees *= 12;
		}

		return {
			layer2ExchangeNashProfitAfterFees,
			earningsManagementNashProfitAfterFees,
			fiatGatewayNashProfitAfterFees,
			dexMarketNashProfitAfterFees,
		};
	}, [
		layer2ExchangePair,
		earningsManagementPair,
		fiatGatewayPair,
		dexMarketPair,
		volumePeriod,
	]);

	useEffect(() => {
		const totalOwnedNexToMaxSupply =
			Number.parseFloat(totalNEX) / NEX_TOTAL_SUPPLY;

		let yourYearlyLayer2ExchangeProfitsShare =
			yearlyNashProfitFromServices.layer2ExchangeNashProfitAfterFees *
			totalOwnedNexToMaxSupply *
			NashCoreServicesRevenueSharePercentages.Layer2Exchange;

		let yourYearlyEarningsProfitsShare =
			yearlyNashProfitFromServices.earningsManagementNashProfitAfterFees *
			totalOwnedNexToMaxSupply *
			NashCoreServicesRevenueSharePercentages.Earnings;

		let yourYearlyFiatGatewayProfitsShare =
			yearlyNashProfitFromServices.fiatGatewayNashProfitAfterFees *
			totalOwnedNexToMaxSupply *
			NashCoreServicesRevenueSharePercentages.FiatGateway;

		let yourYearlyDEXMarketsProfitsShare =
			yearlyNashProfitFromServices.dexMarketNashProfitAfterFees *
			totalOwnedNexToMaxSupply *
			NashCoreServicesRevenueSharePercentages.DEXMarkets;

		if (yieldPeriod === "daily") {
			yourYearlyLayer2ExchangeProfitsShare /= 365;
			yourYearlyEarningsProfitsShare /= 365;
			yourYearlyFiatGatewayProfitsShare /= 365;
			yourYearlyDEXMarketsProfitsShare /= 365;
		} else if (yieldPeriod === "monthly") {
			yourYearlyLayer2ExchangeProfitsShare /= 12;
			yourYearlyEarningsProfitsShare /= 12;
			yourYearlyFiatGatewayProfitsShare /= 12;
			yourYearlyDEXMarketsProfitsShare /= 12;
		}

		const yourTotalProfit =
			yourYearlyLayer2ExchangeProfitsShare +
			yourYearlyEarningsProfitsShare +
			yourYearlyFiatGatewayProfitsShare +
			yourYearlyDEXMarketsProfitsShare;

		setTotalProfit(yourTotalProfit);
		setLayer2ExchangeProfit(yourYearlyLayer2ExchangeProfitsShare);
		setEarningsManagementProfit(yourYearlyEarningsProfitsShare);
		setFiatGatewayProfit(yourYearlyFiatGatewayProfitsShare);
		setDexMarketProfit(yourYearlyDEXMarketsProfitsShare);
	}, [
		yieldPeriod,
		volumePeriod,
		totalNEX,
		layer2ExchangePair,
		earningsManagementPair,
		fiatGatewayPair,
		dexMarketPair,
		yearlyNashProfitFromServices,
	]);

	return (
		<NashCalculatorContext.Provider
			value={{
				totalNEX,
				setTotalNEX,
				stakingPeriodMonths,
				setStakingPeriodMonths,
				layer2ExchangePair,
				setLayer2ExchangePair,
				earningsManagementPair,
				setEarningsManagementPair,
				fiatGatewayPair,
				setFiatGatewayPair,
				dexMarketPair,
				setDEXMarketPair,
				totalProfit,
				volumePeriod,
				setVolumePeriod,
				yieldPeriod,
				setYieldPeriod,
				layer2ExchangeProfit,
				earningsManagementProfit,
				fiatGatewayProfit,
				dexMarketProfit,
			}}
		>
			{children}
		</NashCalculatorContext.Provider>
	);
};

export default NashCalculatorContextProvider;
