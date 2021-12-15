import Image from "next/image";
import { useState } from "react";

const NEXTokenAmountCard: React.FC = () => {
	const [tokenAmount, setTokenAmount] = useState<string>();

	return (
		<div className="w-1/2 shadow rounded-md bg-gradient-to-r from-blue-500 to-blue-400 p-4 flex flex-col">
			<div className="flex flex-col w-full space-y-1">
				<div className="flex flex-row space-x-1">
					<div className="text-gray-50 font-bold">Total NEX</div>
				</div>

				<input
					className="h-8  border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					value={tokenAmount}
					onChange={(e) => {
						setTokenAmount(e.target.value);
					}}
					placeholder="NEX"
				/>
			</div>
		</div>
	);
};

export default NEXTokenAmountCard;
