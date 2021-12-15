import React, { useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

interface SelectOption {
	value: string;
	label: string;
}
const options: SelectOption[] = [];

for (let i = 0; i <= 24; i++) {
	options.push({
		value: i.toString(),
		label: i.toString().toUpperCase() + " Months",
	});
}

const StakingPeriodCard: React.FC = () => {
	const [selectedOption, setSelectedOption] =
		useState<SingleValue<SelectOption>>();

	const handleSelectOnChange = (
		newValue: SingleValue<SelectOption>,
		_actionMeta: ActionMeta<SelectOption>
	) => {
		setSelectedOption(newValue);
	};

	return (
		<div className="w-1/2 shadow rounded-md bg-gradient-to-r from-blue-400 to-blue-500 p-4 flex flex-col">
			<div className="text-gray-50 font-bold">Staking Period</div>
			<Select
				value={selectedOption}
				defaultValue={{ value: "0", label: "0" }}
				onChange={handleSelectOnChange}
				options={options}
				isSearchable={false}
			/>
		</div>
	);
};

export default StakingPeriodCard;
