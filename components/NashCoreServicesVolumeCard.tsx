import React from "react";
import ListCardGroup from "./ListCard/ListCardGroup";
import ListCardItem from "./ListCard/ListCardItem";

interface CoreServiceVolumeSectionProps {
	title: string;
}

const CoreServiceVolumeSection: React.FC<CoreServiceVolumeSectionProps> = (
	props
) => {
	const { title } = props;

	return (
		<>
			<div className="text-sm text-center sm:text-md text-gray-100 font-bold">
				{title}
			</div>
			<input
				className="w-full h-8 border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
				type="number"
				placeholder="Volume"
			/>
		</>
	);
};

const NashCoreServicesVolumeCard: React.FC = () => {
	const listItemClassName =
		"justify-between flex flex-col items-center space-y-2";

	return (
		<>
			<div className="hidden sm:block">
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Layer-2 Exchange (Volume)" />
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Earnings Management (Volume)" />
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Fiat Gateway (Volume)" />
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="DEX Market (Volume)" />
					</ListCardItem>
				</ListCardGroup>
			</div>

			<div className="sm:hidden space-y-4">
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Layer-2 Exchange (Volume)" />
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Earnings Management (Volume)" />
					</ListCardItem>
				</ListCardGroup>
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="Fiat Gateway (Volume)" />
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection title="DEX Market (Volume)" />
					</ListCardItem>
				</ListCardGroup>
			</div>
		</>
	);
};

export default NashCoreServicesVolumeCard;
