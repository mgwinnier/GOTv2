import React from 'react';
import susieImage from './assets/susie.jpg'

const WhoWeAre = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Who We Are</h1>
      {/* Centering Anna's Container and adjusting its width */}
      <div className="flex justify-center items-start">
        <div className="w-full max-w-md flex flex-col items-center bg-white border-double border-4 border-yellow-500 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-4 w-full flex justify-center">
            <img src={susieImage} alt="Susie Lerma" className="object-cover rounded-md" style={{ height: '250px', maxWidth: '100%' }} />
          </div>
          <div className="bg-white p-6 flex flex-col justify-between space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Susie Eskew</h2>
            <p className="text-sm text-gray-600">Owner & Senior Specialist</p>
            <p className="text-gray-700 text-base">
            Susie Eskew is a Tennessee native, having grown up and graduated college in Martin, Tn, the daughter of college mathematics educators.

She has loved and served the 55+ population her entire life!  She is passionate about advocating for, educating, empowering, and ensuring good health and happiness of all ages, but specifically seniors, as so many are alone.  Having taught them to swim in her teens, bringing Silver Sneakers to much of Tennessee in young adulthood, to serving as a senior consultant/health coach/dementia practitioner in recent years, she has made it her life’s mission to ensure the wellbeing of the aging population.

Susie has 4 amazing children who are her entire heart and keep her inspired outside of her professional endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
