import CardContainer from "./CardContainer";

const NexTokenCard: React.FC = () => {
	return (
		<CardContainer
			title="NEX Token"
			containerClasses="w-full sm:w-1/2"
			subheaderContent={
				<>
					<div className="text-xs">
						<div>Circulating Supply: 29,166,201</div>
						<div>Total Supply: 50,000,000</div>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</>
			}
		>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Total Owned NEX
					</div>
					<div className="flex items-center space-x-1">
						<span className="font-bold text-green-500">
							$
						</span>
						<input
							className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
					</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Price per NEX
					</div>
					<div className="flex items-center space-x-1">
						<span className="font-bold text-green-500">
							$
						</span>
						<input
							className="w-54 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
					</div>
				</div>
			</div>
		</CardContainer>
	);
};

export default NexTokenCard;
