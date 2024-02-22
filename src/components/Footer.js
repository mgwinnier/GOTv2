import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center flex-wrap gap-8 mb-4">
                    <Link to="/" className="hover:text-gold-500 transition-colors duration-300">Home</Link>
                    <Link to="/services" className="hover:text-gold-500 transition-colors duration-300">Resources</Link>
                    <Link to="/about" className="hover:text-gold-500 transition-colors duration-300">Who We Are</Link>
                    <Link to="/veterans" className="hover:text-gold-500 transition-colors duration-300">Veterans</Link>
                    <Link to="/contact" className="hover:text-gold-500 transition-colors duration-300">Contact Us</Link>
                </div>
                <div className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Gramps of Tennessee. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
