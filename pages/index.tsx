import type { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";
import Main from "../components/Main";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nash Calculator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Main />
		</>
	);
};

export default Home;
