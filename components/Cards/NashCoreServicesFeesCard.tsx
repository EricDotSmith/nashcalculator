import { useContext } from "react";
import CurrencyInput from "react-currency-input-field";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";
import CardContainer from "./CardContainer";
import CardMessage from "./CardMessage";

const NashCoreServicesFeesCard: React.FC = () => {
	const {
		layer2ExchangePair,
		setLayer2ExchangePair,
		fiatGatewayPair,
		setFiatGatewayPair,
		dexMarketPair,
		setDEXMarketPair,
	} = useContext(NashCalculatorContext);

	return (
		<CardContainer
			title="Nash Core Services"
			containerClasses="w-full sm:w-1/2"
			subheaderContent={
				<>
					<div>Fees</div>
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
							d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
						/>
					</svg>
				</>
			}
		>
			<CardMessage>
				These fees are set to sensible defaults. However, keep in mind that they may not represent the actual rates used
				by Nash. For this reason these fields are editable.
			</CardMessage>

			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">Layer-2 Exchange</div>
					<CurrencyInput
						id="layer-2-exchange-fee"
						name="layer-2-exchange-fee-input"
						placeholder="Please enter a number"
						value={layer2ExchangePair.fee}
						decimalsLimit={2}
						suffix="%"
						onValueChange={(value) => {
							setLayer2ExchangePair((s) => ({
								...s,
								fee: value ?? "0",
							}));
						}}
						className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">Fiat Gateway</div>
					<CurrencyInput
						id="fiat-gateway-fee"
						name="fiat-gateway-fee-input"
						placeholder="Please enter a number"
						value={fiatGatewayPair.fee}
						decimalsLimit={2}
						suffix="%"
						onValueChange={(value) => {
							setFiatGatewayPair((s) => ({
								...s,
								fee: value ?? "0",
							}));
						}}
						className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">DEX Market</div>
					<CurrencyInput
						id="dex-markets-fee"
						name="dex-markets-fee-input"
						placeholder="Please enter a number"
						value={dexMarketPair.fee}
						decimalsLimit={2}
						suffix="%"
						onValueChange={(value) => {
							setDEXMarketPair((s) => ({
								...s,
								fee: value ?? "0",
							}));
						}}
						className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default NashCoreServicesFeesCard;
