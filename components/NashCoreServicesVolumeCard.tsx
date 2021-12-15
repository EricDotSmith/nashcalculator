import ListCardGroup from "./ListCard/ListCardGroup";
import ListCardItem from "./ListCard/ListCardItem";

const NashCoreServicesVolumeCard: React.FC = () => {
	return (
		<>
			<div className="hidden sm:block">
				<ListCardGroup bgColor="green">
					<ListCardItem></ListCardItem>
					<ListCardItem></ListCardItem>
					<ListCardItem></ListCardItem>
					<ListCardItem></ListCardItem>
				</ListCardGroup>
			</div>

			<div className="sm:hidden space-y-4">
				<ListCardGroup>
					<ListCardItem></ListCardItem>
					<ListCardItem></ListCardItem>
				</ListCardGroup>
				<ListCardGroup>
					<ListCardItem></ListCardItem>
					<ListCardItem></ListCardItem>
				</ListCardGroup>
			</div>
		</>
	);
};

export default NashCoreServicesVolumeCard;
