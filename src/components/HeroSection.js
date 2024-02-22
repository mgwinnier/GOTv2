import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpg';
import '../styles/herosection.css';

function HeroSection() {
  const fullTextSubtitle = "Ensuring silver linings of golden years";
  const [subtitleText, setSubtitleText] = useState("");

  useEffect(() => {
    let index = 0;
    const timeoutId = setInterval(() => {
      setSubtitleText((prev) => prev + fullTextSubtitle[index]);
      index++;
      if (index === fullTextSubtitle.length) clearInterval(timeoutId);
    }, 75); // Adjust the speed of typing here

    return () => clearInterval(timeoutId); // Cleanup on component unmount
  }, [fullTextSubtitle]);

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBackground})`, height: '60vh' }}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <div className="text-center px-4 md:px-0">
          {/* Main Title (static) */}
          <h1 className=" text-2xl md:text-3xl xl:text-6xl font-game-of-thrones leading-tight text-yellow-400 shadow-md">Gramps of Tennessee</h1>
          {/* Subtitle with Typewriter Effect */}
          <div className="typewriter">
            <p className="mt-2 text-xl md:text-xl xl:text-3xl font-light text-gray-300 shadow-lg">{subtitleText}</p>
          </div>
          {/* Learn More Button */}
          <Link to="/about" className="mt-8 md:mt-10 inline-block bg-yellow-500 text-black font-medium py-3 px-6 text-lg rounded-lg transition duration-300 hover:bg-yellow-600 hover:text-white shadow-md">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
