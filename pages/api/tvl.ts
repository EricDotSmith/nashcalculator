import type { NextApiRequest, NextApiResponse } from "next";

export type TVL_DATA = {
	lastUpdatedTimestamp: number;
	tvl: {
		aave: number;
		anchor: number;
	};
};

let currentResultsFromExternalAPI: TVL_DATA = {
	lastUpdatedTimestamp: 0,
	tvl: {
		aave: 0,
		anchor: 0,
	},
};
let isUpdating = false;

async function updateCurrentResultFromExternalAPI() {
	try {
		const aaveMetadataResponse = await fetch("https://api.llama.fi/protocol/aave");
		const anchorMetadataResponse = await fetch("https://api.llama.fi/protocol/anchor");

		const aaveMetadata = await aaveMetadataResponse.json();
		const anchorMetadata = await anchorMetadataResponse.json();

		const tvlAave = aaveMetadata.tvl[aaveMetadata.tvl.length - 1];
		const tvlAnchor = anchorMetadata.tvl[anchorMetadata.tvl.length - 1];

		currentResultsFromExternalAPI = {
			lastUpdatedTimestamp: new Date().valueOf(),
			tvl: {
				aave: tvlAave.totalLiquidityUSD,
				anchor: tvlAnchor.totalLiquidityUSD,
			},
		};
	} catch (e) {
		console.error("updateCurrentResultFromExternalAPI Exception - [ " + e + " ]");
	}

	isUpdating = false;
}

const SECONDS_IN_A_MINUTE = 60;
const SECONDS_IN_A_HOUR = 60 * SECONDS_IN_A_MINUTE;
const SECONDS_IN_A_DAY = 24 * SECONDS_IN_A_HOUR;

export default async function handler(_req: NextApiRequest, res: NextApiResponse<TVL_DATA>) {
	const requestTimestamp = new Date().valueOf();

	const elapsedSecondsSinceLastResultUpdated =
		(requestTimestamp - currentResultsFromExternalAPI.lastUpdatedTimestamp) / 1000;

	if (elapsedSecondsSinceLastResultUpdated > SECONDS_IN_A_DAY) {
		if (isUpdating === false) {
			isUpdating = true;

			// Only synchronously get data on first request
			if (currentResultsFromExternalAPI.lastUpdatedTimestamp === 0) {
				await updateCurrentResultFromExternalAPI();
			} else {
				updateCurrentResultFromExternalAPI();
			}
		}
	}

	res.status(200).json(currentResultsFromExternalAPI);
}
