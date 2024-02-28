import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Example image imports, replace with your actual paths
import homeHealthImg from '../assets/homehealth.jpg';
import homeCareImg from '../assets/home-care.jpg';
import IndepLivingImg from '../assets/independent-living.jpg';
import AssistedLivingImg from '../assets/assited-living.jpg';
import MemoryCare from '../assets/memory-care.jpg';
import hospice from '../assets/hospice.jpg';
import Nurse from '../assets/nurse.jpg';
import legalImg from '../assets/legal.jpg';
import financialPlanningImg from '../assets/money.jpg';
import RealEstateImg from '../assets/real-estate.jpg';
import CounselingImg from '../assets/Counseling.jpg';
import DrivingImg from '../assets/driving.jpg';
import FoodImg from '../assets/meal-preparation.jpg';
import PlaceImg from '../assets/placement.jpg';
import DiscImg from '../assets/discovery.jpg';
import HomeImg from '../assets/homeact.jpg';

const keyServices = [
  { name: "Discover Your Care Level", img: DiscImg },
  { name: "Placement Advising", img: PlaceImg },
  { name: "Concierge Transportation Services", img: DrivingImg  },
];

const advisingServices = [
  { name: "Home Health", img: homeHealthImg },
  { name: "Home Care", img: homeCareImg },
  { name: "Independent Living", img: IndepLivingImg },
  { name: "Assisted Living", img: AssistedLivingImg },
  { name: "Memory Care", img: MemoryCare },
  { name: "Hospice", img: hospice },
  { name: "Skilled Nursing Facility", img: Nurse },
];

const otherServices = [
  { name: "Legal", img: legalImg },
  { name: "Financial Planning", img: financialPlanningImg },
  { name: "Real Estate", img: RealEstateImg },
  { name: "Counseling", img: CounselingImg },
  { name: "Meal Preparation", img: FoodImg },
  { name: "Home Activities", img: HomeImg },
];

function ServicesSection() {
  const [showAdvising, setShowAdvising] = useState(false);
  const [showOtherServices, setShowOtherServices] = useState(false);

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Key Services Section */}
        <div>
          <h2 className="text-3xl font-bold uppercase text-yellow-500 mb-4">Key Services</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {keyServices.map((service, index) => (
              <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                <div className="w-full h-64 rounded-full overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                </div>
                <p className="font-bold text-lg mt-3">{service.name}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Advising Services Section */}
       <div>
          <h2 className="text-3xl font-bold uppercase text-gray-800 mb-4">Advising Services</h2>
          <button 
            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 mb-8"
            onClick={() => setShowAdvising(!showAdvising)}
          >
            {showAdvising ? 'Collapse Services' : 'Expand Services'}
          </button>
        </div>
        {showAdvising && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {advisingServices.map((service, index) => (
              <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                <div className="w-full h-64 rounded-full overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                </div>
                <p className="font-bold text-lg mt-3">{service.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Other Services Section */}
        <div>
          <h3 className="text-3xl font-bold uppercase text-gray-800 mb-4">Other Services</h3>
          <button 
            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 mb-8"
            onClick={() => setShowOtherServices(!showOtherServices)}
          >
            {showOtherServices ? 'Collapse Services' : 'Expand Services'}
          </button>
        </div>
        {showOtherServices && (
          <div className="flex flex-wrap justify-center gap-6">
            {otherServices.map((service, index) => (
              <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                <div className="w-full h-64 rounded-full overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                </div>
                <p className="font-bold text-lg mt-3">{service.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Centered Button */}
      <div className="text-center">
        <Link to="/resources" className="mt-4 inline-block px-5 py-2 text-lg text-white font-bold bg-black rounded-lg hover:bg-yellow-500 transition-colors">
          Learn More About Our Resources
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
