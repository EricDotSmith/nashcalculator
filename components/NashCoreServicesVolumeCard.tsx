import React, { useContext } from "react";
import ListCardGroup from "./ListCard/ListCardGroup";
import ListCardItem from "./ListCard/ListCardItem";
import {
	NashCalculatorContext,
	VolumeAndFeePair,
} from "./NashCalculatorContext";

interface CoreServiceVolumeSectionProps {
	volumeAndFeePair: VolumeAndFeePair;
	setVolumeAndFeePair: React.Dispatch<
		React.SetStateAction<VolumeAndFeePair>
	>;
	title: string;
}

const CoreServiceVolumeSection: React.FC<CoreServiceVolumeSectionProps> = (
	props
) => {
	const { title, volumeAndFeePair, setVolumeAndFeePair } = props;

	return (
		<>
			<div className="text-sm text-center sm:text-md text-gray-100 font-bold">
				{title}
			</div>
			<div className="w-full flex flex-col space-y-4">
				<input
					className="w-full h-8 border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					placeholder="Volume"
					value={volumeAndFeePair.volume}
					onChange={(e) => {
						setVolumeAndFeePair((vf) => ({
							...vf,
							volume: e.target.value,
						}));
					}}
				/>
				<input
					className="w-full h-8 border-2 border-blue-200 rounded-md text-blue-900 font-bold p-1"
					type="number"
					placeholder="Nash Fee"
					value={volumeAndFeePair.fee}
					onChange={(e) => {
						setVolumeAndFeePair((vf) => ({
							...vf,
							fee: e.target.value,
						}));
					}}
				/>
			</div>
		</>
	);
};

const NashCoreServicesVolumeCard: React.FC = () => {
	const listItemClassName =
		"justify-between flex flex-col items-center space-y-2";

	const {
		layer2ExchangePair,
		setLayer2ExchangePair,
		earningsManagementPair,
		setEarningsManagementPair,
		fiatGatewayPair,
		setFiatGatewayPair,
		dexMarketPair,
		setDEXMarketPair,
	} = useContext(NashCalculatorContext);

	return (
		<>
			<div className="hidden sm:block">
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Layer-2 Exchange (Volume / Nash Fee)"
							volumeAndFeePair={layer2ExchangePair}
							setVolumeAndFeePair={setLayer2ExchangePair}
						/>
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Earnings Management (Volume / Nash Fee)"
							volumeAndFeePair={earningsManagementPair}
							setVolumeAndFeePair={
								setEarningsManagementPair
							}
						/>
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Fiat Gateway (Volume / Nash Fee)"
							volumeAndFeePair={fiatGatewayPair}
							setVolumeAndFeePair={setFiatGatewayPair}
						/>
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="DEX Market (Volume / Nash Fee)"
							volumeAndFeePair={dexMarketPair}
							setVolumeAndFeePair={setDEXMarketPair}
						/>
					</ListCardItem>
				</ListCardGroup>
			</div>

			<div className="sm:hidden space-y-4">
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Layer-2 Exchange (Volume / Nash Fee)"
							volumeAndFeePair={layer2ExchangePair}
							setVolumeAndFeePair={setLayer2ExchangePair}
						/>
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Earnings Management (Volume / Nash Fee)"
							volumeAndFeePair={earningsManagementPair}
							setVolumeAndFeePair={
								setEarningsManagementPair
							}
						/>
					</ListCardItem>
				</ListCardGroup>
				<ListCardGroup useBlue>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="Fiat Gateway (Volume / Nash Fee)"
							volumeAndFeePair={fiatGatewayPair}
							setVolumeAndFeePair={setFiatGatewayPair}
						/>
					</ListCardItem>
					<ListCardItem listItemClassName={listItemClassName}>
						<CoreServiceVolumeSection
							title="DEX Market (Volume / Nash Fee)"
							volumeAndFeePair={dexMarketPair}
							setVolumeAndFeePair={setDEXMarketPair}
						/>
					</ListCardItem>
				</ListCardGroup>
			</div>
		</>
	);
};

export default NashCoreServicesVolumeCard;
