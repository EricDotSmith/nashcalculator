import WelcomeMessage from "../components/WelcomeMessage";
import ResultOverviewCard from "./Cards/ResultOverviewCard";
import React from "react";
import NashCalculatorContextProvider from "./Context/NashCalculatorContext";
import NashCoreServicesFeesCard from "./Cards/NashCoreServicesFeesCard";
import NashCoreServicesVolumeCard from "./Cards/NashCoreServicesVolumeCard";
import NexTokenCard from "./Cards/NexTokenCard";
import ReferralsCard from "./Cards/ReferralsCard";

const Main: React.FC = () => {
	return (
		<NashCalculatorContextProvider>
			<div className="flex flex-col mx-auto p-4 space-y-4 max-w-screen-xl">
				<WelcomeMessage />

				<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
					<NashCoreServicesFeesCard />
					<NashCoreServicesVolumeCard />
				</div>

				<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
					<NexTokenCard />
					<ReferralsCard />
				</div>

				<div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
					<ResultOverviewCard />
				</div>
			</div>
		</NashCalculatorContextProvider>
	);
};

export default Main;
