import React from 'react';
import AnnaImage from './assets/anna.jpg'; // Ensure the path is correct

const WhoWeAre = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Who We Are</h1>
      {/* Centering Anna's Container and adjusting its width */}
      <div className="flex justify-center items-start">
        <div className="w-full max-w-md flex flex-col items-center bg-white border-double border-4 border-yellow-500 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-4 w-full flex justify-center">
            <img src={AnnaImage} alt="Anna Laboy" className="object-cover rounded-md" style={{ height: '250px', maxWidth: '100%' }} />
          </div>
          <div className="bg-white p-6 flex flex-col justify-between space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Anna Laboy</h2>
            <p className="text-sm text-gray-600">Owner & Senior Specialist</p>
            <p className="text-gray-700 text-base">
              Anna Laboy is a Murfreesboro native with a passion for seniors & her community! Her GRAMPS team has over 4 decades of service in the senior sector & consists of specialists in various areas pertaining to our golden years.
              Our goal is to walk beside and relieve the family of any stressors that may arise with changing needs and empower them with knowledge.
              We strive to provide assistance to seniors & their families by taking them step by step through the entire journey of the aging process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
