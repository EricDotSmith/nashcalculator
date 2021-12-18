const NashCoreServicesFeesCard: React.FC = () => {
	return (
		<div className="w-full sm:w-1/2 bg-gradient-to-t from-blue-700 to-blue-600 p-4 rounded-md shadow shadow-gray-500/95 space-y-4">
			<div className="text-center text-blue-50 font-bold text-xl mb-2">
				<div>Nash Core Services</div>
				<div className="text-blue-300 flex items-center justify-center space-x-1">
					<div>Fees</div>
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
							d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="bg-green-100 rounded-md text-green-800 p-2 text-sm shadow-inner shadow-gray-300">
				There are some assumptions being made for the fees here.
				Please see the thing if this makes any sense
			</div>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Layer-2 Exchange
					</div>
					<div className="flex items-center space-x-1">
						<input
							className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
						<span className="font-bold text-gray-200">%</span>
					</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Earnings Management
					</div>
					<div className="flex items-center space-x-1">
						<input
							className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
						<span className="font-bold text-gray-200">%</span>
					</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Fiat Gateway
					</div>
					<div className="flex items-center space-x-1">
						<input
							className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
						<span className="font-bold text-gray-200">%</span>
					</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						DEX Market
					</div>
					<div className="flex items-center space-x-1">
						<input
							className="w-20 rounded-md p-1 focus:border-blue-100 text-base text-gray-700 opacity-90"
							type="text"
						/>
						<span className="font-bold text-gray-200">%</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NashCoreServicesFeesCard;
