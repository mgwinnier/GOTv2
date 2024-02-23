import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg';
import '../styles/herosection.css';

function HeroSection() {
    const fullTextSubtitle = "Ennsuring silver linings of golden years";
    const [subtitleText, setSubtitleText] = useState("");
    const indexRef = useRef(0); // Use useRef to keep track of the current index

    useEffect(() => {
        setSubtitleText(""); // Clear subtitle text on component mount
        indexRef.current = 0; // Reset index to 0 on component mount
        const timeoutId = setInterval(() => {
            if (indexRef.current < fullTextSubtitle.length) {
                setSubtitleText(prev => prev + fullTextSubtitle.charAt(indexRef.current));
                indexRef.current += 1; // Increment the index
            } else {
                clearInterval(timeoutId); // Clear interval when the end of the string is reached
            }
        }, 75); // Adjust the speed of typing here

        return () => clearInterval(timeoutId); // Cleanup on component unmount
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="relative w-full bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBackground})`, height: '60vh' }}>
            <div className="container mx-auto flex flex-col items-center justify-center h-full">
                <div className="text-center px-4 md:px-0">
                    <h1 className="text-2xl md:text-3xl xl:text-6xl font-game-of-thrones leading-tight text-yellow-400 shadow-md">GRAMPS of Tennessee</h1>
                    <div className="typewriter">
                      <p className="mt-2 text-lg sm:text-xl md:text-2xl xl:text-3xl font-light text-gray-300 shadow-lg">{subtitleText}</p>
                    </div>
                    <Link to="/about" className="mt-8 md:mt-10 inline-block bg-yellow-500 text-black font-medium py-3 px-6 text-lg rounded-lg transition duration-300 hover:bg-yellow-600 hover:text-white shadow-md">Learn More</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
