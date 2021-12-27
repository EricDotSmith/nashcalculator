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
	setLayer2ExchangePair: React.Dispatch<React.SetStateAction<VolumeAndFeePair>>;
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
	earningsManagementFee: string;
	setEarningsManagementFee: React.Dispatch<React.SetStateAction<string>>;
}

export const NashCalculatorContext = createContext<NashCalculatorContextInterface>({
	totalNEX: "",
	setTotalNEX: () => {},
	layer2ExchangePair: { volume: "", fee: "" },
	setLayer2ExchangePair: () => {},
	stakingPeriodMonths: "",
	setStakingPeriodMonths: () => {},
	fiatGatewayPair: { volume: "", fee: "" },
	setFiatGatewayPair: () => {},
	dexMarketPair: { volume: "", fee: "" },
	setDEXMarketPair: () => {},
	setEarningsManagementFee: () => {},
	totalProfit: 0,
	volumePeriod: "",
	setVolumePeriod: () => {},
	yieldPeriod: "",
	setYieldPeriod: () => {},
	layer2ExchangeProfit: 0,
	earningsManagementProfit: 0,
	fiatGatewayProfit: 0,
	dexMarketProfit: 0,
	earningsManagementFee: "0",
});

const NEX_TOTAL_SUPPLY = 50000000;

enum ServiceVolumeDefaults {
	Layer2Exchange = "1000000",
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
	const [stakingPeriodMonths, setStakingPeriodMonths] = useState<string>("0");
	const [layer2ExchangePair, setLayer2ExchangePair] = useState<VolumeAndFeePair>({
		volume: ServiceVolumeDefaults.Layer2Exchange,
		fee: ServiceFeePercentDefaults.Layer2Exchange,
	});
	const [fiatGatewayPair, setFiatGatewayPair] = useState<VolumeAndFeePair>({
		volume: ServiceVolumeDefaults.FiatGateway,
		fee: ServiceFeePercentDefaults.FiatGateway,
	});
	const [dexMarketPair, setDEXMarketPair] = useState<VolumeAndFeePair>({
		volume: ServiceVolumeDefaults.DEXMarkets,
		fee: ServiceFeePercentDefaults.DEXMarkets,
	});
	const [earningsManagementFee, setEarningsManagementFee] = useState<string>(ServiceFeePercentDefaults.Earnings);
	const [totalProfit, setTotalProfit] = useState<number>(0);
	const [volumePeriod, setVolumePeriod] = useState<string>("daily");
	const [yieldPeriod, setYieldPeriod] = useState<string>("monthly");
	const [layer2ExchangeProfit, setLayer2ExchangeProfit] = useState<number>(0);
	const [earningsManagementProfit, setEarningsManagementProfit] = useState<number>(0);
	const [fiatGatewayProfit, setFiatGatewayProfit] = useState<number>(0);
	const [dexMarketProfit, setDexMarketProfit] = useState<number>(0);

	const yearlyNashProfitFromServices = useMemo(() => {
		let layer2ExchangeNashProfitAfterFees =
			Number.parseFloat(layer2ExchangePair.volume) * (Number.parseFloat(layer2ExchangePair.fee) / 100);

		let fiatGatewayNashProfitAfterFees =
			Number.parseFloat(fiatGatewayPair.volume) * (Number.parseFloat(fiatGatewayPair.fee) / 100);

		let dexMarketNashProfitAfterFees =
			Number.parseFloat(dexMarketPair.volume) * (Number.parseFloat(dexMarketPair.fee) / 100);

		if (volumePeriod === "daily") {
			layer2ExchangeNashProfitAfterFees *= 365;
			fiatGatewayNashProfitAfterFees *= 365;
			dexMarketNashProfitAfterFees *= 365;
		} else if (volumePeriod === "monthly") {
			layer2ExchangeNashProfitAfterFees *= 12;
			fiatGatewayNashProfitAfterFees *= 12;
			dexMarketNashProfitAfterFees *= 12;
		}

		return {
			layer2ExchangeNashProfitAfterFees,
			fiatGatewayNashProfitAfterFees,
			dexMarketNashProfitAfterFees,
		};
	}, [layer2ExchangePair, fiatGatewayPair, dexMarketPair, volumePeriod]);

	useEffect(() => {
		const totalOwnedNexToMaxSupply = Number.parseFloat(totalNEX) / NEX_TOTAL_SUPPLY;

		let yourYearlyLayer2ExchangeProfitsShare =
			yearlyNashProfitFromServices.layer2ExchangeNashProfitAfterFees *
			totalOwnedNexToMaxSupply *
			NashCoreServicesRevenueSharePercentages.Layer2Exchange;

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
			yourYearlyFiatGatewayProfitsShare /= 365;
			yourYearlyDEXMarketsProfitsShare /= 365;
		} else if (yieldPeriod === "monthly") {
			yourYearlyLayer2ExchangeProfitsShare /= 12;
			yourYearlyFiatGatewayProfitsShare /= 12;
			yourYearlyDEXMarketsProfitsShare /= 12;
		}

		const yourTotalProfit =
			yourYearlyLayer2ExchangeProfitsShare + yourYearlyFiatGatewayProfitsShare + yourYearlyDEXMarketsProfitsShare;

		setTotalProfit(yourTotalProfit);
		setLayer2ExchangeProfit(yourYearlyLayer2ExchangeProfitsShare);
		setFiatGatewayProfit(yourYearlyFiatGatewayProfitsShare);
		setDexMarketProfit(yourYearlyDEXMarketsProfitsShare);
	}, [
		yieldPeriod,
		volumePeriod,
		totalNEX,
		layer2ExchangePair,
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
				earningsManagementFee,
				setEarningsManagementFee,
			}}
		>
			{children}
		</NashCalculatorContext.Provider>
	);
};

export default NashCalculatorContextProvider;
