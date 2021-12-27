import CurrencyInput from "react-currency-input-field";
import CardContainer from "./CardContainer";
import CardMessage from "./CardMessage";

const EarningsCard: React.FC = () => {
	return (
		<CardContainer title="Nash Earn" subheaderContent="Yearly TVL / APY" containerClasses="w-full sm:w-1/2">
			<CardMessage>
				Nash Earn is powered by a variety of DeFi protocols, with more to come. The defaults here aren&apos;t
				representative of current data.
			</CardMessage>
			<div className="flex flex-col space-y-4">
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-4 sm:space-y-0">
						<div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start w-full sm:w-3/5 min-w-0">
							<div className="text-blue-50 text-base font-bold">Aave TVL</div>
							<CurrencyInput
								id="fiat-gateway-volume"
								name="fiat-gateway-volume-input"
								placeholder="Please enter a number"
								value={100}
								decimalsLimit={2}
								prefix="$"
								onValueChange={(value) => {
									// setFiatGatewayPair((s) => ({
									// 	...s,
									// 	volume: value ?? "0",
									// }));
								}}
								className="w-54 sm:w-full rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							/>
						</div>
						<div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start w-full sm:w-3/5 min-w-0">
							<div className="text-blue-50 text-base font-bold">Aave APY</div>
							<CurrencyInput
								id="fiat-gateway-volume"
								name="fiat-gateway-volume-input"
								placeholder="Please enter a number"
								value={100}
								decimalsLimit={2}
								prefix="$"
								onValueChange={(value) => {
									// setFiatGatewayPair((s) => ({
									// 	...s,
									// 	volume: value ?? "0",
									// }));
								}}
								className="w-20 sm:w-full rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-4">
					<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-4 sm:space-y-0">
						<div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start w-full sm:w-3/5 min-w-0">
							<div className="text-blue-50 text-base font-bold">Anchor TVL</div>
							<CurrencyInput
								id="fiat-gateway-volume"
								name="fiat-gateway-volume-input"
								placeholder="Please enter a number"
								value={100}
								decimalsLimit={2}
								prefix="$"
								onValueChange={(value) => {
									// setFiatGatewayPair((s) => ({
									// 	...s,
									// 	volume: value ?? "0",
									// }));
								}}
								className="w-54 sm:w-full rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							/>
						</div>
						<div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start w-full sm:w-3/5 min-w-0">
							<div className="text-blue-50 text-base font-bold">Anchor APY</div>
							<CurrencyInput
								id="fiat-gateway-volume"
								name="fiat-gateway-volume-input"
								placeholder="Please enter a number"
								value={100}
								decimalsLimit={2}
								prefix="$"
								onValueChange={(value) => {
									// setFiatGatewayPair((s) => ({
									// 	...s,
									// 	volume: value ?? "0",
									// }));
								}}
								className="w-20 sm:w-full rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							/>
						</div>
					</div>
				</div>
			</div>
		</CardContainer>
	);
};

export default EarningsCard;
