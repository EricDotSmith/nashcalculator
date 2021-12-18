const ReferralsCard: React.FC = () => {
	return (
		<div className="w-full sm:w-1/2 bg-gradient-to-t from-blue-700 to-blue-600 p-4 rounded-md shadow shadow-gray-500/95 space-y-4">
			<div className="text-center text-blue-50 font-bold text-xl mb-2">
				<div>Referrals (Coming soon)</div>
				<div className="text-blue-300 flex items-center justify-center space-x-1">
					<div className="text-xs">
						<div>...</div>
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
				</div>
			</div>
			<div className="flex flex-col space-y-4"></div>
		</div>
	);
};

export default ReferralsCard;
