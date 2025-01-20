import React from 'react'
import Logo from './Logo';
import CardCount from './CardCount';
import User from './User';
import HamburgerMenu from './HamburgerMenu';
import Search from './Search';

function Navbar() {
    return (
        <div className='flex  text-slate-100 items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-600 '>
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <HamburgerMenu/>
        </div>
    )
}



export default Navbar;