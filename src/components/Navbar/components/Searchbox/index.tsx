import React, { useState } from 'react';

// material-ui
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
	handleSearch: (pattern?: string) => void;
};

const Searchbox = ({ handleSearch }: Props) => {
	const [searchboxString, setSearchboxString] = useState<string>('');

	const handleChangeSearchboxString = (event: any) => {
		const {
			target: { value },
		} = event;
		setSearchboxString(value);
	};

	const handleClearSearchboxString = () => {
		setSearchboxString('');
		handleSearch('');
	};

	return (
		<div className="searchbox">
			<TextField
				hiddenLabel
				id="filled-hidden-label-small"
				value={searchboxString}
				variant="filled"
				size="small"
				onChange={(e) => handleChangeSearchboxString(e)}
				onKeyDown={(e) => {
					if (e.keyCode === 13) {
						e.preventDefault();
						handleSearch(searchboxString);
					}
				}}
				InputProps={{
					disableUnderline: true,
					startAdornment: (
						<InputAdornment position="start">
							<SearchOutlinedIcon />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							{searchboxString.length > 0 && (
								<IconButton
									onClick={() => handleClearSearchboxString()}
									edge="end"
								>
									<CloseOutlinedIcon />
								</IconButton>
							)}
							<SearchOutlinedIcon className="searchbox__end-icon" />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default Searchbox;
