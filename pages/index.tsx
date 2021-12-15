import type { NextPage } from "next";
import Header from "../components/Header";
import WelcomeMessage from "../components/WelcomeMessage";
import CalculatorView from "../components/CalculatorView";
import NashCoreServicesProportionalShareCard from "../components/NashCoreServicesProportionalShareCard";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<div className="m-4 space-y-4">
				<WelcomeMessage />
				<div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
					<NashCoreServicesProportionalShareCard />

					<CalculatorView />
				</div>
			</div>
		</>
	);
};

export default Home;
