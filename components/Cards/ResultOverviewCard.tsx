import { useContext } from "react";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";
import CardContainer from "./CardContainer";

const ResultOverviewCard: React.FC = () => {
	const { totalProfit } = useContext(NashCalculatorContext);

	return (
		<CardContainer
			title="Holding 10,000 NEX"
			containerClasses="w-full"
			subheaderContent={
				<>
					<select
						className="bg-sky-300/30 rounded-lg text-base text-blue-100 p-0.5"
						name="volumePeriod"
						id="volumePeriod"
						defaultValue={"monthly"}
					>
						<option value="daily">Daily</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					<div className="flex space-x-1">
						<div>Yields</div>
						<span className="text-green-500 text-lg">
							$120,300.00
						</span>
					</div>
				</>
			}
		>
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
		</CardContainer>
	);
};

export default ResultOverviewCard;
