import { useContext } from "react";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";

const ResultOverviewCard: React.FC = () => {
	const { totalProfit } = useContext(NashCalculatorContext);

	return (
		<div className="w-full p-2 sm:p-4 sm:w-full bg-gray-700 shadow overflow-hidden rounded-md">
			<div className="h-full w-full flex justify-center items-center text-white font-bold">
				<div className="flex flex-col items-center text-lg sm:text-4xl">
					<span>Total Return</span>
					<span className="text-green-500 text-4xl sm:text-8xl">
						${Math.round(totalProfit)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ResultOverviewCard;
