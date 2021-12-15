import React from "react";
import ListCardGroup from "./ListCard/ListCardGroup";
import ListCardItem from "./ListCard/ListCardItem";

interface CoreServicesSectionProps {
	serviceName: string;
	percentage: number;
}

const CoreServicesSection: React.FC<CoreServicesSectionProps> = (props) => {
	const { serviceName, percentage } = props;

	return (
		<>
			<div className="text-sm text-center sm:text-md text-gray-100 font-bold">
				{serviceName}
			</div>
			<span className="w-12 sm:w-16 inline-flex justify-center items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
				<span className="text-md sm:text-lg font-bold">
					{percentage}
				</span>
				<span className="text-md sm:text-lg">%</span>
			</span>
		</>
	);
};

const NashCoreServicesProportionalShareCard: React.FC = () => {
	return (
		<ListCardGroup
			containerClassName="sm:w-32"
			listClasses="sm:flex-col sm:divide-x-0 sm:divide-y "
		>
			<ListCardItem listItemClassName="justify-between flex flex-col items-center space-y-2">
				<CoreServicesSection
					serviceName="Layer-2 Exchange"
					percentage={75}
				/>
			</ListCardItem>
			<ListCardItem listItemClassName="justify-between flex flex-col items-center space-y-2">
				<CoreServicesSection
					serviceName="Earnings Management"
					percentage={10}
				/>
			</ListCardItem>
			<ListCardItem listItemClassName="justify-between flex flex-col items-center space-y-2">
				<CoreServicesSection
					serviceName="Fiat Gateway"
					percentage={10}
				/>
			</ListCardItem>
			<ListCardItem listItemClassName="justify-between flex flex-col items-center space-y-2">
				<CoreServicesSection
					serviceName="DEX Market"
					percentage={10}
				/>
			</ListCardItem>
		</ListCardGroup>
	);
};

export default NashCoreServicesProportionalShareCard;
