import React from 'react';
import veteransImage from '../assets/veterans.jpg'; // Ensure the path is correct

function VeteransSection() {
  return (
    <section id="veterans" className="py-12 bg-gradient-to-r from-red-500 via-white to-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 text-center md:w-5/12 md:order-1">
            <img src={veteransImage} alt="Supporting Our Veterans" className="shadow-lg rounded max-w-full h-auto inline-block mx-auto md:mx-0" style={{ maxWidth: '320px' }} />
          </div>
          <div className="w-full px-4 mb-4 text-center md:text-left md:w-7/12 md:order-2">
            <h2 className="text-3xl font-semibold text-gray-800">Supporting Our Veterans</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              At GRAMPS of Tennessee, we recognize and deeply appreciate the sacrifices made by our veterans. Our commitment extends to ensuring that veterans receive the utmost care and support through our services.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              We are proud to offer specialized services and discounts for veterans as a token of our gratitude for their service. Our team is knowledgeable about the unique needs of veterans and is dedicated to providing personalized care and support to meet those needs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Our appreciation for what veterans have done for us and our country is immense. It's our honor to give back by ensuring they receive the care, respect, and dignity they deserve.
            </p>
            <div className="button-container mt-8">
              <a href="/veterans-page" className="inline-block bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                <span className="sm:hidden">Veteran? Click Here</span>
                <span className="hidden sm:inline-block">Are You A Veteran Or Veteran's Spouse? Click Here</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VeteransSection;
