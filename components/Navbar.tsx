import Image from 'next/image';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className='flex items-center justify-center shadow-md'>
			<Image src='/logo.png' alt='logo' width='100' height='100' />
			<h1 className='font-extrabold text-2xl lg:text-3xl font-sans text-rose-500'>
				Remote Kitchen
			</h1>
		</div>
	);
};

export default Navbar;
