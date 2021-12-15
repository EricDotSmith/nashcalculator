interface ListCardGroupProps {
	containerClassName?: string;
	listClasses?: string;
	bgColor?: string;
}

const ListCardGroup: React.FC<ListCardGroupProps> = (props) => {
	const { containerClassName, bgColor, listClasses, children } = props;
	return (
		<div
			className={`${
				containerClassName ?? ""
			} w-full bg-gray-700 shadow overflow-hidden rounded-md`}
		>
			<ul
				role="list"
				className={`flex flex-row divide-x divide-gray-200 ${
					listClasses ?? ""
				}`}
			>
				{children}
			</ul>
		</div>
	);
};

export default ListCardGroup;
