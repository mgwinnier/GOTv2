import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure the path to your logo image is correct;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Hamburger icon SVG
    const HamburgerIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    );

    // Close icon SVG
    const CloseIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <nav className="bg-black px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">GRAMPS of Tennessee</span>
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? CloseIcon : HamburgerIcon}
                </button>
                <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:items-center md:flex md:space-x-8 w-full md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/resources" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Resources</Link>
                        </li>
                        <li>
                            <Link to="/whoweare" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Who We Are</Link>
                        </li>
                        <li>
                            <Link to="/veterans" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Veterans</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
