import { useContext } from "react";
import { NashCalculatorContext } from "../Context/NashCalculatorContext";
import CardContainer from "./CardContainer";

const ResultOverviewCard: React.FC = () => {
	const {
		yieldPeriod,
		setYieldPeriod,
		totalNEX,
		totalProfit,
		layer2ExchangeProfit,
		earningsManagementProfit,
		fiatGatewayProfit,
		dexMarketProfit,
	} = useContext(NashCalculatorContext);

	return (
		<CardContainer
			title={`Holding ${Number.parseFloat(totalNEX).toLocaleString()} NEX`}
			containerClasses="w-full"
			subheaderContent={
				<>
					<select
						className="bg-sky-300/30 rounded-lg text-base text-blue-100 p-0.5"
						name="yieldPeriod"
						id="yieldPeriod"
						value={yieldPeriod}
						onChange={(e) => {
							setYieldPeriod(e.target.value);
						}}
					>
						<option value="daily">Daily</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					<div className="flex space-x-1">
						<div>Yields</div>
						<span className="text-green-500 text-lg">${totalProfit.toLocaleString()}</span>
					</div>
				</>
			}
		>
			<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-between">
				<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
					<div className="font-bold text-blue-50">Layer-2 Exchange</div>
					<div className="rounded-md bg-blue-500 max-w-max p-1.5 text-blue-50 text-xs">
						Proportional Share: <span className="text-yellow-300">75%</span>
					</div>
					<div className="text-green-500 text-xl">${layer2ExchangeProfit.toLocaleString()}</div>
				</div>
				<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
					<div className="font-bold text-blue-50">Earnings Management</div>
					<div className="rounded-md bg-blue-500 max-w-max p-1.5 text-blue-50 text-xs">
						Proportional Share: <span className="text-yellow-300">10%</span>
					</div>
					<div className="text-green-500 text-xl">${earningsManagementProfit.toLocaleString()}</div>
				</div>
				<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
					<div className="font-bold text-blue-50">Fiat Gateway</div>
					<div className="rounded-md bg-blue-500 max-w-max p-1.5 text-blue-50 text-xs">
						Proportional Share: <span className="text-yellow-300">10%</span>
					</div>
					<div className="text-green-500 text-xl">${fiatGatewayProfit.toLocaleString()}</div>
				</div>
				<div className="flex flex-col items-center justify-center text-center text-base font-medium text-blue-100">
					<div className="font-bold text-blue-50">DEX Market</div>
					<div className="rounded-md bg-blue-500 max-w-max p-1.5 text-blue-50 text-xs">
						Proportional Share: <span className="text-yellow-300">10%</span>
					</div>
					<div className="text-green-500 text-xl">${dexMarketProfit.toLocaleString()}</div>
				</div>
			</div>
		</CardContainer>
	);
};

export default ResultOverviewCard;
