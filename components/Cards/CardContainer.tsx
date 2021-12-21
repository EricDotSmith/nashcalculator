interface CardContainerProps {
	title: string;
	containerClasses?: string;
	subheaderContent?: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = (props) => {
	const { title, subheaderContent, containerClasses, children } = props;
	return (
		<div
			className={`${
				containerClasses ?? ""
			} bg-gradient-to-t from-blue-700 to-blue-600 p-4 rounded-md shadow shadow-gray-500/95 space-y-4`}
		>
			<div className="text-center text-blue-50 font-bold text-xl mb-2">
				<div>{title}</div>
				<div className="text-blue-300 flex items-center justify-center space-x-1">{subheaderContent}</div>
			</div>
			{children}
		</div>
	);
};

export default CardContainer;
