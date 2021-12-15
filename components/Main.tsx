import WelcomeMessage from "../components/WelcomeMessage";
import ResultOverview from "../components/ResultOverview";
import NashCoreServicesProportionalShareCard from "../components/NashCoreServicesProportionalShareCard";
import NEXTokenAmountCard from "../components/NEXTokenAmountCard";
import React from "react";
import NashCoreServicesVolumeCard from "./NashCoreServicesVolumeCard";
import NashCalculatorContextProvider from "./NashCalculatorContext";

const Main: React.FC = () => {
	return (
		<NashCalculatorContextProvider>
			<div className="m-4 space-y-4">
				<WelcomeMessage />
				<div className="flex flex-col space-y-4 w-full">
					<NEXTokenAmountCard />
					<NashCoreServicesVolumeCard />
				</div>

				<div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
					<NashCoreServicesProportionalShareCard />

					<ResultOverview />
				</div>
			</div>
		</NashCalculatorContextProvider>
	);
};

export default Main;
