import { useContext } from "react";
import CurrencyInput from "react-currency-input-field";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";
import CardContainer from "./CardContainer";
import CardMessage from "./CardMessage";

const NexTokenCard: React.FC = () => {
	const { totalNEX, setTotalNEX } = useContext(NashCalculatorContext);

	return (
		<CardContainer title="NEX Token" containerClasses="w-full sm:w-1/2">
			<CardMessage>
				For the total owned NEX, please include accumulated NEX owned across Ethereum, Polygon and NEO chains.
			</CardMessage>

			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">Total Owned NEX</div>
					<CurrencyInput
						id="total-nex"
						name="total-nex-input"
						placeholder="Please enter a number"
						value={totalNEX}
						decimalsLimit={2}
						onValueChange={(value) => {
							setTotalNEX(value ?? "0");
						}}
						className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default NexTokenCard;
