import React from 'react';

// material-ui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import GeneralButton from 'components/GeneralButton';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleChangeOrderBy: (e: any) => void;
	orderBy: string;
};

const SortBySelect = ({ setIsOpen, handleChangeOrderBy, orderBy }: Props) => {
	return (
		<div className="sort-by-section">
			<div className="filter-select-component">
				<FormControl sx={{ m: 1, minWidth: 145 }}>
					<InputLabel id="select-rating">Sort by</InputLabel>
					<Select
						labelId="select-rating"
						id="select-rating"
						value={orderBy}
						label="Rating"
						size="small"
						onChange={(e) => handleChangeOrderBy(e)}
					>
						<MenuItem value={'rating_DESC'}>Rating</MenuItem>
						<MenuItem value={'price_ASC'}>Lowest Price</MenuItem>
						<MenuItem value={'price_DESC'}>Highest Price</MenuItem>
					</Select>
				</FormControl>
			</div>
			<GeneralButton
				text={'Filters'}
				handleClick={() => {
					document.body.style.overflow = 'hidden';
					setIsOpen(true);
				}}
				variant={'text'}
			/>
		</div>
	);
};

export default SortBySelect;
