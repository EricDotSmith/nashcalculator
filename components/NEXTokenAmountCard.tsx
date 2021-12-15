import { useContext } from "react";
import { NashCalculatorContext } from "./NashCalculatorContext";

const NEXTokenAmountCard: React.FC = () => {
	const {
		totalNEX,
		setTotalNEX,
		stakingPeriodMonths,
		setStakingPeriodMonths,
	} = useContext(NashCalculatorContext);

	return (
		<div className="w-full shadow rounded-md bg-gradient-to-r from-blue-700 to-blue-500 p-4 flex flex-row space-x-2">
			<div className="w-3/5 flex flex-col space-y-1">
				<div className="flex flex-row justify-center space-x-1">
					<div className="text-gray-50 font-bold text-sm sm:text-md">
						Total NEX
					</div>
				</div>

				<input
					className="h-8  border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					value={totalNEX}
					onChange={(e) => {
						setTotalNEX(e.target.value);
					}}
					placeholder="NEX"
				/>
			</div>

			<div className="w-2/5 flex flex-col space-y-1">
				<div className="flex justify-center flex-row space-x-1">
					<div className="text-gray-50 font-bold text-sm sm:text-md">
						Staking
					</div>
				</div>

				<input
					className="h-8 border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					value={stakingPeriodMonths}
					onChange={(e) => {
						setStakingPeriodMonths(e.target.value);
					}}
					placeholder="# Months"
				/>
			</div>
		</div>
	);
};

export default NEXTokenAmountCard;
