import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// material-ui
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// components
import Filters from 'components/FilterDesktop/components/Filters';
import GeneralButton from 'components/GeneralButton';

const variantsMain = {
	open: { opacity: 1 },
	closed: { opacity: 0, x: '0' },
};

const variantsFilter = {
	open: { opacity: 1 },
	closed: { opacity: 0, x: '-100%' },
};

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleChangePriceRange: (obj: { gte: string; lte: string }) => void;
	setRating: React.Dispatch<React.SetStateAction<string>>;
	handleSearch: () => void;
	handleClearFilter: () => void;
};

const FilterMobile = ({
	isOpen,
	setIsOpen,
	handleChangePriceRange,
	setRating,
	handleSearch,
	handleClearFilter,
}: Props) => {
	const [resetInput, setResetInput] = useState<boolean>(false);

	const handleCloseFilter = () => {
		document.body.style.overflow = 'auto';
		setIsOpen(false);
	};

	const handleResetInputsOnClear = () => {
		setResetInput(true);
		handleClearFilter();
		handleCloseFilter();
	};

	const handleApplyFilter = () => {
		handleSearch();
		handleCloseFilter();
	};

	useEffect(() => {
		resetInput && setResetInput(false);
	}, [resetInput]);

	return (
		<motion.div
			className={isOpen ? 'filter-mobile-open' : 'filter-mobile-close'}
			animate={isOpen ? 'open' : 'closed'}
			variants={variantsMain}
			transition={{ type: 'spring', damping: 20, stiffness: 100 }}
		>
			<motion.div
				className="filter-mobile"
				variants={variantsFilter}
				transition={{ type: 'spring', damping: 20, stiffness: 100 }}
			>
				<div className="filter-mobile__header">
					<p>Filters</p>
					<IconButton onClick={() => handleCloseFilter()} edge="end">
						<CloseOutlinedIcon />
					</IconButton>
				</div>
				<Filters
					handleChangePriceRange={handleChangePriceRange}
					setRating={setRating}
					resetInput={resetInput}
				/>
				<div className="filter-mobile__buttons">
					<GeneralButton
						text={'Clear'}
						variant={'text'}
						handleClick={() => handleResetInputsOnClear()}
					/>
					<GeneralButton
						text={'Apply filters'}
						handleClick={() => handleApplyFilter()}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default FilterMobile;
