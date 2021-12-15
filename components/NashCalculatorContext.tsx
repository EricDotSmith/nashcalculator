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
	layer2ExchangeProportionalShare: number;
	nexSupplyRatio: number;
	totalProfit: number;
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
		layer2ExchangeProportionalShare: 0,
		nexSupplyRatio: 0,
		totalProfit: 0,
	});

const NEX_TOTAL_SUPPLY = 50000000;
const MAX_STAKING_PERIOD_MONTHS = 24;
const MAX_LAYER_2_FEE_SHARE = 0.75;

const NashCalculatorContextProvider: React.FC = (props) => {
	const { children } = props;
	const [totalNEX, setTotalNEX] = useState<string>("0");
	const [stakingPeriodMonths, setStakingPeriodMonths] =
		useState<string>("0");
	const [layer2ExchangePair, setLayer2ExchangePair] =
		useState<VolumeAndFeePair>({ volume: "0", fee: "0.01" });
	const [earningsManagementPair, setEarningsManagementPair] =
		useState<VolumeAndFeePair>({ volume: "0", fee: "0.01" });
	const [fiatGatewayPair, setFiatGatewayPair] = useState<VolumeAndFeePair>({
		volume: "0",
		fee: "0.01",
	});
	const [dexMarketPair, setDEXMarketPair] = useState<VolumeAndFeePair>({
		volume: "0",
		fee: "0.01",
	});
	const [
		layer2ExchangeProportionalShare,
		setLayer2ExchangeProportionalShare,
	] = useState<number>(0);
	const [nexSupplyRatio, setNexSupplyRatio] = useState<number>(0);
	const [totalProfit, setTotalProfit] = useState<number>(0);

	useEffect(() => {
		const nexSupplyRatio = Number.parseFloat(totalNEX) / NEX_TOTAL_SUPPLY;
		const stakingPeriodRatio =
			Number.parseFloat(stakingPeriodMonths) /
			MAX_STAKING_PERIOD_MONTHS;
		const layer2ExchangeProportionalShare =
			stakingPeriodRatio * MAX_LAYER_2_FEE_SHARE;

		const profitLayer2Exchange =
			Number.parseFloat(layer2ExchangePair.volume) *
			Number.parseFloat(layer2ExchangePair.fee);
		const profitEarningsManagement =
			Number.parseFloat(earningsManagementPair.volume) *
			Number.parseFloat(earningsManagementPair.fee);
		const profitFiatGateway =
			Number.parseFloat(fiatGatewayPair.volume) *
			Number.parseFloat(fiatGatewayPair.fee);
		const profitDexMarket =
			Number.parseFloat(dexMarketPair.volume) *
			Number.parseFloat(dexMarketPair.fee);

		const totalNashProfitWithoutLayer2 =
			profitEarningsManagement + profitFiatGateway + profitDexMarket;

		const yourShareOfLayer2Profit =
			profitLayer2Exchange *
			nexSupplyRatio *
			layer2ExchangeProportionalShare;

		const yourShareOfProfit =
			yourShareOfLayer2Profit +
			nexSupplyRatio * 0.1 * totalNashProfitWithoutLayer2;

		setLayer2ExchangeProportionalShare(layer2ExchangeProportionalShare);
		setNexSupplyRatio(nexSupplyRatio);
		setTotalProfit(yourShareOfProfit);
	}, [
		totalNEX,
		stakingPeriodMonths,
		layer2ExchangePair,
		earningsManagementPair,
		fiatGatewayPair,
		dexMarketPair,
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
				layer2ExchangeProportionalShare,
				nexSupplyRatio,
				totalProfit,
			}}
		>
			{children}
		</NashCalculatorContext.Provider>
	);
};

export default NashCalculatorContextProvider;
