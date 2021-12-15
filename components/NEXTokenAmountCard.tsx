import { useState } from "react";

const CoreServiceVolumeSection: React.FC = () => {
	const [volume, setVolume] = useState<string>();

	return (
		<div className="w-4/5 flex flex-col space-y-1">
			<div className="flex flex-row space-x-1">
				<div className="text-gray-50 font-bold">Total NEX</div>
			</div>

			<input
				className="h-8  border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
				type="number"
				value={volume}
				onChange={(e) => {
					setVolume(e.target.value);
				}}
				placeholder="NEX"
			/>
		</div>
	);
};

const NEXTokenAmountCard: React.FC = () => {
	const [tokenAmount, setTokenAmount] = useState<string>();
	const [stakingDuration, setStakingDuration] = useState<string>();

	return (
		<div className="w-full shadow rounded-md bg-gradient-to-r from-blue-500 to-blue-400 p-4 flex flex-row space-x-2">
			<div className="w-3/5 flex flex-col space-y-1">
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

			<div className="w-2/5 flex flex-col space-y-1">
				<div className="flex flex-row space-x-1">
					<div className="text-gray-50 font-bold">Staking</div>
				</div>

				<input
					className="h-8 border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					value={stakingDuration}
					onChange={(e) => {
						setStakingDuration(e.target.value);
					}}
					placeholder="# Months"
				/>
			</div>
		</div>
	);
};

export default NEXTokenAmountCard;
