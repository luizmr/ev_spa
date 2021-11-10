import React from 'react';

// components
import Filters from './components/Filters';
import GeneralButton from 'components/GeneralButton';

type Props = {
	handleChangePriceRange: (obj: { gte: string; lte: string }) => void;
	setRating: React.Dispatch<React.SetStateAction<string>>;
	handleSearch: () => void;
	handleClearFilter: () => void;
};

const FilterDesktop = ({
	handleChangePriceRange,
	setRating,
	handleSearch,
	handleClearFilter,
}: Props) => {
	return (
		<div className="filter-desktop">
			<span></span>
			<Filters
				handleChangePriceRange={handleChangePriceRange}
				setRating={setRating}
			/>
			<GeneralButton
				text={'Apply filters'}
				handleClick={() => handleSearch()}
			/>
		</div>
	);
};

export default FilterDesktop;
