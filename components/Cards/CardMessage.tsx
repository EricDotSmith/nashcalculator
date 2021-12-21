interface CardMessageProps {}

const CardMessage: React.FC<CardMessageProps> = (props) => {
	const { children } = props;

	return (
		<div className="bg-green-100 rounded-md text-green-800 p-2 text-sm shadow-inner shadow-gray-300">{children}</div>
	);
};

export default CardMessage;
