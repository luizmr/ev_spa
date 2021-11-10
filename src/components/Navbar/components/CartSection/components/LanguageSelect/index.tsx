import React from 'react';

// material-ui
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LanguageSelect = () => {
	return (
		<div className="language-select">
			<FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
				<Select
					id="select-language"
					value={'0'}
					disableUnderline
					autoWidth
					label="Language"
				>
					<MenuItem value={'0'}>English</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default LanguageSelect;
