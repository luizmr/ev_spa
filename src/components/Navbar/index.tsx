import React from 'react';

// components
import CartSection from './components/CartSection';
import Logo from './components/Logo';
import NavbarButton from './components/NavbarButton';
import Searchbox from './components/Searchbox';

type Props = {
	handleSearch: (pattern?: string) => void;
};

const Navbar = ({ handleSearch }: Props) => {
	return (
		<div className="navbar">
			<Logo />
			<Searchbox handleSearch={handleSearch} />
			<CartSection />
			<NavbarButton />
		</div>
	);
};

export default Navbar;
