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
import TransImg from '../assets/transportation.jpg';
// Add other imports for your images...

const advisingServices = [
  { name: "Home Health", img: homeHealthImg },
  { name: "Home Care", img: homeCareImg },
  { name: "Independent Living", img: IndepLivingImg },
  { name: "Assisted Living", img: AssistedLivingImg },
  { name: "Memory Care", img: MemoryCare },
  { name: "Hospice", img: hospice },
  { name: "Skilled Nursing Facility", img: Nurse },
  // Add other advising services here...
];

const otherServices = [
  { name: "Legal", img: legalImg },
  { name: "Financial Planning", img: financialPlanningImg },
  { name: "Real Estate", img: RealEstateImg },
  { name: "Counseling", img: CounselingImg },
  { name: "Driving Services", img: DrivingImg },
  { name: "Meal Preparation", img: FoodImg },
  { name: "Transportation", img: TransImg },
  // Add other services here...
];

function ServicesSection() {
  const [showAdvising, setShowAdvising] = useState(true); // Default to true
  const [showOtherServices, setShowOtherServices] = useState(true); // Default to true

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Advising Services Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Advising Services</h2>
          <button 
            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
            onClick={() => setShowAdvising(!showAdvising)}
          >
            {showAdvising ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        {showAdvising && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {advisingServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={service.img} alt={service.name} className="w-64 h-64 object-cover rounded-full shadow-lg mb-2 transition-transform duration-300 hover:scale-105"/>
                <p className="font-bold text-lg">{service.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Other Services Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Other Services</h3>
          <button 
            className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
            onClick={() => setShowOtherServices(!showOtherServices)}
          >
            {showOtherServices ? 'Show Less' : 'Learn More'}
          </button>
          {showOtherServices && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {otherServices.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={service.img} alt={service.name} className="w-64 h-64 object-cover rounded-full shadow-lg mb-2 transition-transform duration-300 hover:scale-105"/>
                  <p className="font-bold text-lg">{service.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 'Click for more information' Button */}
        <div className="mt-8">
          <Link to="/services-page">
            <button className="bg-gold-500 text-white font-bold py-3 px-6 rounded text-lg hover:bg-gold-600 transition duration-300" style={{ fontSize: '1.125rem', backgroundColor: '#D4AF37' }}>
              Click to see our resources
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;