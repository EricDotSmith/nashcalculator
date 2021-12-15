interface ListCardItemProps {
	listItemClassName?: string;
}

const ListCardItem: React.FC<ListCardItemProps> = (props) => {
	const { listItemClassName, children } = props;
	return (
		<li className={`p-2 sm:p-4 w-full ${listItemClassName ?? ""}`}>
			{children}
		</li>
	);
};

export default ListCardItem;
