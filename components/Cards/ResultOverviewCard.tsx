import { useContext } from "react";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";

const ResultOverviewCard: React.FC = () => {
	const { totalProfit } = useContext(NashCalculatorContext);

	return (
		<div className="w-full bg-gradient-to-t from-blue-700 to-blue-600 p-4 rounded-md shadow-md space-y-4">
			<div className="text-center text-blue-50 font-bold text-xl mb-2">
				<div>Holding 10,000 NEX</div>
				<div className="text-blue-300 flex items-center justify-center space-x-1">
					<select
						className="bg-sky-300/30 rounded-lg text-base text-blue-100 p-0.5"
						name="volumePeriod"
						id="volumePeriod"
					>
						<option value="daily">Daily</option>
						<option selected value="monthly">
							Monthly
						</option>
						<option value="yearly">Yearly</option>
					</select>
					<div>
						Yields{" "}
						<span className="text-green-500 text-lg">
							$120,300.00
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-between">
					<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
						<div className="font-bold text-blue-50">
							Layer-2 Exchange
						</div>
						<div className="text-green-500 text-xl">
							$12,234.75
						</div>
					</div>
					<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
						<div className="font-bold text-blue-50">
							Earnings Management
						</div>
						<div className="text-green-500 text-xl">
							$12,234.75
						</div>
					</div>
					<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
						<div className="font-bold text-blue-50">
							Fiat Gateway
						</div>
						<div className="text-green-500 text-xl">
							$12,234.75
						</div>
					</div>
					<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
						<div className="font-bold text-blue-50">
							DEX Market
						</div>
						<div className="text-green-500 text-xl">
							$12,234.75
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultOverviewCard;
