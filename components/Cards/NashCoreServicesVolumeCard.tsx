const NashCoreServicesVolumeCard: React.FC = () => {
	return (
		<div className="w-full sm:w-1/2 bg-gradient-to-t from-blue-700 to-blue-600 p-4 rounded-md shadow shadow-gray-500/95 space-y-4">
			<div className="text-center text-blue-50 font-bold text-xl mb-2 h-1/6">
				<div>Nash Core Services</div>
				<div className="text-blue-300 flex items-center justify-center space-x-1">
					<select
						className="bg-sky-300/30 rounded-lg text-base text-blue-100 p-0.5"
						name="volumePeriod"
						id="volumePeriod"
					>
						<option value="daily">Daily</option>
						<option selected value="monthly">
							Monthly
						</option>
						<option value="yearly">Yearly</option>
					</select>
					<div>Volume</div>
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
			<div className="flex flex-col space-y-4 justify-evenly h-5/6">
				<div className="flex items-center">
					<div className="font-bold w-full text-blue-50">
						Layer-2 Exchange
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
						Earnings TVL
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
						Fiat Gateway
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
						DEX Market
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
		</div>
	);
};

export default NashCoreServicesVolumeCard;
