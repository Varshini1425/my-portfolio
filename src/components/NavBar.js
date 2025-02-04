import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'experience' },
        { id: 4, link: 'contact' },
    ];

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-slate-200 bg-slate-950 fixed'>
            <div>
                <h1 className='text-4xl font-signature ml-2'>Swarna Varrsini</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-3 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200'
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={toggleNav} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
                <FaBars size={30} />
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-950 to-gray-800 text-gray-400'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                onClick={toggleNav} // Close nav when clicking a link
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
