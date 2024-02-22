import React from 'react';
import veteransImage from '../assets/veterans.jpg'; // Ensure you have an appropriate image at this path

function VeteransSection() {
  return (
    <section id="veterans" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap-reverse items-center">
          <div className="w-full px-4 mb-4 text-center lg:w-7/12 lg:order-2 lg:text-left">
            <h2 className="text-3xl font-semibold">Supporting Our Veterans</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              At Gramps of Tennessee, we recognize and deeply appreciate the sacrifices made by our veterans. Our commitment extends to ensuring that veterans receive the utmost care and support through our services.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We are proud to offer specialized services and discounts for veterans as a token of our gratitude for their service. Our team is knowledgeable about the unique needs of veterans and is dedicated to providing personalized care and support to meet those needs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Our appreciation for what veterans have done for us and our country is immense. It's our honor to give back by ensuring they receive the care, respect, and dignity they deserve.
            </p>
          </div>
          <div className="w-full px-4 text-center lg:w-5/12 lg:order-1">
            <img src={veteransImage} alt="Supporting Our Veterans" className="shadow-lg rounded max-w-full h-auto inline-block mx-auto lg:mx-0" style={{ maxWidth: '320px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VeteransSection;
