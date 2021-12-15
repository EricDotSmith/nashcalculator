interface ListCardGroupProps {
	containerClassName?: string;
	listClasses?: string;
	useBlue?: boolean;
}

const ListCardGroup: React.FC<ListCardGroupProps> = (props) => {
	const { containerClassName, useBlue, listClasses, children } = props;
	return (
		<div
			className={`${containerClassName ?? ""} w-full ${
				useBlue
					? "bg-gradient-to-r from-blue-700 to-blue-500"
					: "bg-gray-700"
			} shadow overflow-hidden rounded-md`}
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
