import React from 'react';

// material-ui
import Button from '@mui/material/Button';

type Props = {
	variant?: 'contained' | 'text' | 'outlined';
	handleClick: () => void;
	text: string;
};

const GeneralButton = ({ variant = 'outlined', handleClick, text }: Props) => {
	return (
		<Button
			variant={variant}
			className="filter-button"
			onClick={handleClick}
		>
			<p>{text}</p>
		</Button>
	);
};

export default GeneralButton;
