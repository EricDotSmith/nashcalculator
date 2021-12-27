import { createContext, useEffect, useMemo, useState } from "react";

export interface VolumeAndFeePair {
	volume: string;
	fee: string;
}

export interface EarnFeeAndTVLPair {
	fee: string;
	tvl: string;
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
	setEarnAavePair: React.Dispatch<React.SetStateAction<EarnFeeAndTVLPair>>;
	earnAavePair: EarnFeeAndTVLPair;
	setEarnAnchorPair: React.Dispatch<React.SetStateAction<EarnFeeAndTVLPair>>;
	earnAnchorPair: EarnFeeAndTVLPair;
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
	totalProfit: 0,
	volumePeriod: "",
	setVolumePeriod: () => {},
	yieldPeriod: "",
	setYieldPeriod: () => {},
	layer2ExchangeProfit: 0,
	earningsManagementProfit: 0,
	fiatGatewayProfit: 0,
	dexMarketProfit: 0,
	earnAnchorPair: { fee: "", tvl: "" },
	setEarnAnchorPair: () => {},
	earnAavePair: { fee: "", tvl: "" },
	setEarnAavePair: () => {},
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

enum EarnFeeAndTVLDefaults {
	AAVE_FEE = "6.5",
	AAVE_TVL = "100000000",
	ANCHOR_FEE = "6.5",
	ANCHOR_TVL = "100000000",
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
	const [earnAnchorPair, setEarnAnchorPair] = useState<EarnFeeAndTVLPair>({
		fee: EarnFeeAndTVLDefaults.ANCHOR_FEE,
		tvl: EarnFeeAndTVLDefaults.ANCHOR_TVL,
	});
	const [earnAavePair, setEarnAavePair] = useState<EarnFeeAndTVLPair>({
		fee: EarnFeeAndTVLDefaults.AAVE_FEE,
		tvl: EarnFeeAndTVLDefaults.AAVE_TVL,
	});
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

		let annualEarningsAaveNashProfitAfterFees =
			Number.parseFloat(earnAavePair.tvl) * (Number.parseFloat(earnAavePair.fee) / 100);

		let annualEarningsAnchorNashProfitAfterFees =
			Number.parseFloat(earnAnchorPair.tvl) * (Number.parseFloat(earnAnchorPair.fee) / 100);

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
			annualEarningsAaveNashProfitAfterFees,
			annualEarningsAnchorNashProfitAfterFees,
		};
	}, [layer2ExchangePair, fiatGatewayPair, dexMarketPair, volumePeriod, earnAavePair, earnAnchorPair]);

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

		let yourYearlyEarningsProfitsShare =
			yearlyNashProfitFromServices.annualEarningsAaveNashProfitAfterFees *
				totalOwnedNexToMaxSupply *
				NashCoreServicesRevenueSharePercentages.Earnings +
			yearlyNashProfitFromServices.annualEarningsAnchorNashProfitAfterFees *
				totalOwnedNexToMaxSupply *
				NashCoreServicesRevenueSharePercentages.Earnings;

		if (yieldPeriod === "daily") {
			yourYearlyLayer2ExchangeProfitsShare /= 365;
			yourYearlyFiatGatewayProfitsShare /= 365;
			yourYearlyDEXMarketsProfitsShare /= 365;
			yourYearlyEarningsProfitsShare /= 365;
		} else if (yieldPeriod === "monthly") {
			yourYearlyLayer2ExchangeProfitsShare /= 12;
			yourYearlyFiatGatewayProfitsShare /= 12;
			yourYearlyDEXMarketsProfitsShare /= 12;
			yourYearlyEarningsProfitsShare /= 12;
		}

		const yourTotalProfit =
			yourYearlyLayer2ExchangeProfitsShare +
			yourYearlyFiatGatewayProfitsShare +
			yourYearlyDEXMarketsProfitsShare +
			yourYearlyEarningsProfitsShare;

		setTotalProfit(yourTotalProfit);
		setLayer2ExchangeProfit(yourYearlyLayer2ExchangeProfitsShare);
		setFiatGatewayProfit(yourYearlyFiatGatewayProfitsShare);
		setDexMarketProfit(yourYearlyDEXMarketsProfitsShare);
		setEarningsManagementProfit(yourYearlyEarningsProfitsShare);
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
				earnAavePair,
				setEarnAavePair,
				earnAnchorPair,
				setEarnAnchorPair,
			}}
		>
			{children}
		</NashCalculatorContext.Provider>
	);
};

export default NashCalculatorContextProvider;
