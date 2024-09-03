import React from 'react'
// Components
import Logo from '../components/Logo';
import UserAvatar from '@/components/Avatar';
const Navbar = () => {
	return (
		<div className="flex justify-between bg-primary dark:bg-slate-700 text-white py-2 px-5">
			<Logo />
			<UserAvatar />
		</div>
	)
}

export default Navbar;
