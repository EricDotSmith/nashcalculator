import type { NextPage } from "next";
import CoreServicesCard from "../components/CoreServicesCard";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen bg-blue-100">
			<Header />
			<CoreServicesCard />
		</div>
	);
};

export default Home;
