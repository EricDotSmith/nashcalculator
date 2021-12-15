interface ShareListItemProps {
	serviceName: string;
	percentage: number;
}

const ShareListItem: React.FC<ShareListItemProps> = (props) => {
	const { serviceName, percentage } = props;
	return (
		<li className="p-2 sm:p-4 w-full justify-between flex flex-col items-center space-y-2">
			<div className="text-sm text-center sm:text-md text-gray-100 font-bold">
				{serviceName}
			</div>
			<span className="w-12 sm:w-16 inline-flex justify-center items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
				<span className="text-md sm:text-lg font-bold">
					{percentage}
				</span>
				<span className="text-md sm:text-lg">%</span>
			</span>
		</li>
	);
};

const NashCoreServicesProportionalShareCard: React.FC = () => {
	return (
		<div className="w-full sm:w-32 bg-gray-700 shadow overflow-hidden rounded-md">
			<ul
				role="list"
				className="flex flex-row sm:flex-col divide-x sm:divide-x-0 sm:divide-y divide-gray-200"
			>
				<ShareListItem
					serviceName="Layer-2 Exchange"
					percentage={75}
				/>
				<ShareListItem
					serviceName="Earnings Management"
					percentage={10}
				/>
				<ShareListItem serviceName="Fiat Gateway" percentage={10} />
				<ShareListItem serviceName="DEX Market" percentage={10} />
			</ul>
		</div>
	);
};

export default NashCoreServicesProportionalShareCard;
