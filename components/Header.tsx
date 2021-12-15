import Image from "next/image";

const Header: React.FC = () => {
	return (
		<div className="sticky flex flex-row justify-between top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b border-gray-900/10 bg-blue-50 supports-backdrop-blur:bg-white/95">
			<div className="flex flex-col items-center justify-center px-2 text-lg">
				<Image
					src="/nash-logo.svg"
					alt="Nash Logo"
					width={80}
					height={30}
				/>
				<div className="font-bold text-gray-600 italic">
					Calculator
				</div>
			</div>
			<a
				href="https://nashio.app.link/FCxunRYDZlb"
				target="_blank"
				rel={"noreferrer"}
				className="inline-flex items-center m-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				Register for Nash
			</a>
		</div>
	);
};

export default Header;
