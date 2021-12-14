import React, { useState } from "react";

const CoreServicesCard: React.FC = () => {
	const [sliderValue, setSliderValue] = useState<string>("0");
	return (
		<div className="m-4 sm:m-8">
			<h3 className="text-lg leading-6 font-medium text-gray-900">
				Core Services Fees
			</h3>
			<dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
				<div className="px-4 py-5 sm:p-6">
					<dt className="text-base font-normal text-gray-900">
						Earnings Package Management
					</dt>
					<dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
						<div className="flex items-baseline text-2xl font-semibold text-indigo-600">
							<span className="ml-2 text-sm font-medium text-gray-500">
								from
							</span>
						</div>
					</dd>
				</div>
				<div className="px-4 py-5 sm:p-6">
					<dt className="text-base font-normal text-gray-900">
						Fiat Gateway
					</dt>
					<dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
						<div className="flex items-baseline text-2xl font-semibold">
							<input
								type="range"
								max="100"
								min="0"
								value={sliderValue}
								onChange={(e) =>
									setSliderValue(e.target.value)
								}
							/>
						</div>
					</dd>
				</div>
				<div className="px-4 py-5 sm:p-6">
					<dt className="text-base font-normal text-gray-900">
						DEX Market
					</dt>
					<dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
						<div className="flex items-baseline text-2xl font-semibold text-indigo-600">
							<span className="ml-2 text-sm font-medium text-gray-500">
								from
							</span>
						</div>
					</dd>
				</div>
			</dl>
		</div>
	);
};

export default CoreServicesCard;
