import React from 'react';

// material-ui
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';

const NavbarButton = () => {
	return (
		<IconButton className="navbar__menu-button">
			<MenuOutlinedIcon />
		</IconButton>
	);
};

export default NavbarButton;
