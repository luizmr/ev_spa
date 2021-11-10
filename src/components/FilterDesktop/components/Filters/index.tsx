import React, { useState, useEffect } from 'react';

// material-ui
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// utils
import PreventInputUpDownKey from 'utils/preventInputUpDownKey';
import PreventInputScrolling from 'utils/preventInputScrolling';

type Props = {
	handleChangePriceRange: (obj: { gte: string; lte: string }) => void;
	setRating: React.Dispatch<React.SetStateAction<string>>;
	resetInput?: boolean;
};

const Filters = ({
	handleChangePriceRange,
	setRating,
	resetInput = false,
}: Props) => {
	const [minValue, setMinValue] = useState<string>('');
	const [maxValue, setMaxValue] = useState<string>('');
	const [ratingValue, setRatingValue] = useState<string>('0');

	const handleChangeMin = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const {
			target: { value },
		} = e;
		setMinValue(`${value}`);
		handleChangePriceRange({
			gte: value.length > 0 ? value : '0',
			lte: maxValue.length > 0 ? maxValue : '',
		});
	};

	const handleChangeMax = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const {
			target: { value },
		} = e;
		setMaxValue(`${value}`);
		handleChangePriceRange({
			gte: minValue.length > 0 ? minValue : '0',
			lte: value.length > 0 ? value : '',
		});
	};

	const handleChangeRatingValue = (e: any) => {
		const {
			target: { value },
		} = e;
		setRatingValue(`${value}`);
		setRating(value);
	};

	useEffect(() => {
		PreventInputScrolling('textfield-min');
		PreventInputScrolling('textfield-max');
	}, []);

	useEffect(() => {
		if (resetInput) {
			setMinValue('');
			setMaxValue('');
			setRatingValue('0');
		}
	}, [resetInput]);

	return (
		<div className="filter-section filter-select-component">
			<TextField
				id={`textfield-min`}
				size="small"
				placeholder="€ Min"
				value={minValue}
				onChange={(e) => handleChangeMin(e)}
				type="number"
				onKeyDown={(e) => PreventInputUpDownKey(e)}
			/>
			<TextField
				id={`textfield-max`}
				size="small"
				placeholder="€ Max"
				value={maxValue}
				onChange={(e) => handleChangeMax(e)}
				onKeyDown={(e) => PreventInputUpDownKey(e)}
				type="number"
			/>
			<FormControl sx={{ m: 1, minWidth: 140 }}>
				<InputLabel id="select-rating">Rating</InputLabel>
				<Select
					labelId="select-rating"
					id={`select-rating`}
					value={ratingValue}
					label="Rating"
					size="small"
					onChange={(e) => handleChangeRatingValue(e)}
				>
					<MenuItem value={'0'}>Zero</MenuItem>
					<MenuItem value={'1'}>1 and above</MenuItem>
					<MenuItem value={'2'}>2 and above</MenuItem>
					<MenuItem value={'3'}>3 and above</MenuItem>
					<MenuItem value={'4'}>4 and above</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Filters;
