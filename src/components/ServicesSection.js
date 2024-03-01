import React, { useState, useEffect } from 'react';
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
import PetImg from '../assets/pet.jpg';
import SnowImg from '../assets/snowbird.jpg';

const keyServices = [
  { 
    name: "Discover Your Care Level", 
    img: DiscImg,
    description: "Not sure what kind of care options or what kind of living options are available and/or appropriate? Text, call or email us!"
  },
  { 
    name: "Free Placement Advising", 
    img: PlaceImg,
    description: "AT NO COST TO YOU, we research, vet, recommend, and tour senior living options with and for you! Text, call, or email us now!"
  },
  { 
    name: "Concierge Transportation Services", 
    img: DrivingImg,
    description: "Trusted and safe transportation to and from local appointments. Home management for snowbirds or travelers, pet care, and more."
  },
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
  { name: "Pet Care", img: PetImg },
  { name: "Concierge Snowbird Home Management", img: SnowImg },
];

function ServicesSection() {
  const [tooltipInfo, setTooltipInfo] = useState({ show: false, content: '', name: '', id: null });
  const [tooltipTimer, setTooltipTimer] = useState(null);

  useEffect(() => {
    // Cleanup timer on component unmount
    return () => {
      if (tooltipTimer) clearTimeout(tooltipTimer);
    };
  }, [tooltipTimer]);

  const handleMouseEnter = (service, index) => {
    // For non-touch devices
    if (!('ontouchstart' in window)) {
      setTooltipInfo({
        show: true,
        content: service.description,
        name: service.name,
        id: index
      });
    }
  };

  const handleTouch = (service, index) => {
    // For touch devices, toggle tooltip visibility
    setTooltipInfo({
      show: !tooltipInfo.show || tooltipInfo.id !== index,
      content: service.description,
      name: service.name,
      id: index
    });
    // Reset timer when tooltip is manually toggled
    if (tooltipTimer) clearTimeout(tooltipTimer);
    setTooltipTimer(setTimeout(() => closeTooltip(), 30000));
  };

  const closeTooltip = () => {
    if (tooltipTimer) clearTimeout(tooltipTimer);
    setTooltipInfo({ show: false, content: '', name: '', id: null });
  };

  useEffect(() => {
    // Automatically hide tooltip after 30 seconds
    if (tooltipInfo.show) {
      const timer = setTimeout(() => {
        closeTooltip();
      }, 30000);
      setTooltipTimer(timer);
    }
  }, [tooltipInfo]);

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Key Services Section */}
        <div>
          <h2 className="text-3xl font-bold uppercase text-yellow-500 mb-4">Key Services</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12 relative">
            {keyServices.map((service, index) => (
              <div 
                key={index} 
                className="w-1/3 sm:w-1/4 md:w-1/5 px-4 mb-6 relative"
                onMouseEnter={() => handleMouseEnter(service, index)}
                onTouchEnd={() => handleTouch(service, index)}
              >
                <div className="aspect-w-1 aspect-h-1 w-full rounded-full overflow-hidden shadow-md transition-shadow duration-300">
                  <img src={service.img} alt={service.name} className="object-cover"/>
                </div>
                <p className="font-bold text-lg mt-3">{service.name}</p>
                {tooltipInfo.show && tooltipInfo.id === index && (
                  <div className="absolute -top-16 -right-2 bg-white text-sm rounded-lg px-4 py-2 shadow-lg z-10 border-2 border-yellow-500" style={{ minWidth: '200px' }}>
                    <button onClick={closeTooltip} className="absolute top-0 right-0 text-lg p-2">&times;</button>
                    <p className="font-bold">{tooltipInfo.name}</p>
                    <p>{tooltipInfo.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advising Services Section */}
        <div>
          <h2 className="text-3xl font-bold uppercase text-gray-800 mb-4">Advising Services</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {advisingServices.map((service, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-1/5 px-4 mb-6">
                  <div className="aspect-w-1 aspect-h-1 w-full rounded-full overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
                    <img src={service.img} alt={service.name} className="object-cover"/>
                  </div>
                  <p className="font-bold text-lg mt-3">{service.name}</p>
                </div>
              ))}
            </div>
        </div>

        {/* Other Services Section */}
        <div>
          <h3 className="text-3xl font-bold uppercase text-gray-800 mb-4">Other Services</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {otherServices.map((service, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-1/5 px-4 mb-6">
                  <div className="aspect-w-1 aspect-h-1 w-full rounded-full overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
                    <img src={service.img} alt={service.name} className="object-cover"/>
                  </div>
                  <p className="font-bold text-lg mt-3">{service.name}</p>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="text-center">
        <Link to="/resources" className="inline-block px-8 py-4 text-white font-bold bg-black rounded hover:bg-yellow-500 transition-colors">
          Learn More About Our Resources
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
