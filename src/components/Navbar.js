import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure the path to your logo image is correct;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black px-2 sm:px-4 py-2.5 rounded black">
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
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className={`${isOpen ? '' : 'hidden'} md:flex md:items-center w-full md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white">Resources</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white">Who We Are</Link>
                        </li>
                        <li>
                            <Link to="/veterans" className="text-white">Veterans</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
