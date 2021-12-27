import axios from "axios";
import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { TVL_DATA } from "../../pages/api/tvl";
import CardContainer from "./CardContainer";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ReferralsCard: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const { data, error, isValidating } = useSWRImmutable<TVL_DATA>("/api/tvl", fetcher);

	useEffect(() => {
		if (!!data && !isValidating && !error) {
			console.log(data);
		}
	}, [data, error, isValidating]);

	return (
		<CardContainer title="Referrals / Special Promotions (Coming Soon)" containerClasses="w-full sm:w-1/2">
			<div className="flex flex-col justify-center">
				Aave TVL
				<div>{0}</div>
			</div>
			<div className="flex flex-col justify-center">
				Anchor TVL
				<div>{0}</div>
			</div>
			<input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
		</CardContainer>
	);
};

export default ReferralsCard;
