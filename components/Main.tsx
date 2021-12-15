import Header from "../components/Header";
import WelcomeMessage from "../components/WelcomeMessage";
import CalculatorView from "../components/CalculatorView";
import NashCoreServicesProportionalShareCard from "../components/NashCoreServicesProportionalShareCard";
import NEXTokenAmountCard from "../components/NEXTokenAmountCard";
import StakingPeriodCard from "../components/StakingPeriodCard";
import Head from "next/head";
import React from "react";

const Main: React.FC = () => {
	return (
		<div className="m-4 space-y-4">
			<WelcomeMessage />
			<div className="flex space-x-4 w-full">
				<NEXTokenAmountCard />
				<StakingPeriodCard />
			</div>

			<div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
				<NashCoreServicesProportionalShareCard />

				<CalculatorView />
			</div>
		</div>
	);
};

export default Main;
