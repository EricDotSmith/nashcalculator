import WelcomeMessage from "../components/WelcomeMessage";
import CalculatorView from "../components/CalculatorView";
import NashCoreServicesProportionalShareCard from "../components/NashCoreServicesProportionalShareCard";
import NEXTokenAmountCard from "../components/NEXTokenAmountCard";
import React from "react";
import NashCoreServicesVolumeCard from "./NashCoreServicesVolumeCard";

const Main: React.FC = () => {
	return (
		<div className="m-4 space-y-4">
			<WelcomeMessage />
			<div className="flex flex-col space-y-4 w-full">
				<NEXTokenAmountCard />
				<NashCoreServicesVolumeCard />
			</div>

			<div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
				<NashCoreServicesProportionalShareCard />

				<CalculatorView />
			</div>
		</div>
	);
};

export default Main;
