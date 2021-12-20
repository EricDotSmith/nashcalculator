import { useContext } from "react";
import CurrencyInput from "react-currency-input-field";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";
import CardContainer from "./CardContainer";
import CardMessage from "./CardMessage";

const NashCoreServicesVolumeCard: React.FC = () => {
	const {
		layer2ExchangePair,
		setLayer2ExchangePair,
		earningsManagementPair,
		setEarningsManagementPair,
		fiatGatewayPair,
		setFiatGatewayPair,
		dexMarketPair,
		setDEXMarketPair,
		volumePeriod,
		setVolumePeriod,
	} = useContext(NashCalculatorContext);

	return (
		<CardContainer
			title="Nash Core Services"
			containerClasses="w-full sm:w-1/2"
			subheaderContent={
				<>
					<select
						className="bg-sky-300/30 rounded-lg text-base text-blue-100 p-0.5"
						name="volumePeriod"
						id="volumePeriod"
						value={volumePeriod}
						onChange={(e) => {
							setVolumePeriod(e.target.value);
						}}
					>
						<option value="daily">Daily</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					<div>Volume</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</>
			}
		>
			<CardMessage>
				These volumes are completely speculative.
			</CardMessage>
			<div className="flex flex-col space-y-4 justify-evenly h-4/6">
				{/* @here */}
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Layer-2 Exchange
					</div>
					<CurrencyInput
						id="layer-2-exchange-volume"
						name="layer-2-exchange-volume-input"
						placeholder="Please enter a number"
						value={layer2ExchangePair.volume}
						decimalsLimit={2}
						prefix="$"
						onValueChange={(value) => {
							setLayer2ExchangePair((s) => ({
								...s,
								volume: value ?? "0",
							}));
						}}
						className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Earnings TVL
					</div>
					<CurrencyInput
						id="earnings-tvl-volume"
						name="earnings-tvl-volume-input"
						placeholder="Please enter a number"
						value={earningsManagementPair.volume}
						decimalsLimit={2}
						prefix="$"
						onValueChange={(value) => {
							setEarningsManagementPair((s) => ({
								...s,
								volume: value ?? "0",
							}));
						}}
						className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Fiat Gateway
					</div>
					<CurrencyInput
						id="fiat-gateway-volume"
						name="fiat-gateway-volume-input"
						placeholder="Please enter a number"
						value={fiatGatewayPair.volume}
						decimalsLimit={2}
						prefix="$"
						onValueChange={(value) => {
							setFiatGatewayPair((s) => ({
								...s,
								volume: value ?? "0",
							}));
						}}
						className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						DEX Market
					</div>
					<CurrencyInput
						id="dex-market-volume"
						name="dex-market-volume-input"
						placeholder="Please enter a number"
						value={dexMarketPair.volume}
						decimalsLimit={2}
						prefix="$"
						onValueChange={(value) => {
							setDEXMarketPair((s) => ({
								...s,
								volume: value ?? "0",
							}));
						}}
						className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default NashCoreServicesVolumeCard;
