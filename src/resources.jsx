import React, { useState, useEffect } from 'react';
import susieImage from './assets/resources/susie.jpg';
import TNalzImage from './assets/resources/tennalz.jpg';
import ArosaImage from './assets/resources/Arosa.jpg';
import ARUSImage from './assets/resources/ARUS.jpg';
import AveannaHealthcareImage from './assets/resources/AveannaHealthcare.png'; 
import LawImage from './assets/resources/law.jpg'; 
import GOTImage from './assets/logo.png'; 
import TNImage from './assets/resources/tn.jpg'; 
import VetImage from './assets/veterans.jpg'; 
import SunnyImage from './assets/resources/sunny.jpg'; 
import CallsImage from './assets/resources/calls.jpg'; 
import BedsoleImage from './assets/resources/bedsole.jpg'; 
import acunityImage from './assets/resources/acunity.jpg'; 
import MSImage from './assets/resources/MS.jpg'; 
import caringImage from './assets/resources/caring.jpg'; 
import chefImage from './assets/resources/chefs.jpg'; 

const resourcesData = [
  { serviceType: 'End of Life Doula', keyword: 'End of Life Doula', company: 'Susie’s Senior Services', contact: 'susiesseniorservicesoftn@gmail.com', photoUrl: susieImage },
  { serviceType: 'Dementia Practitioner & Resources', keyword: 'Memory Care', company: 'Susie’s Senior Services', contact: 'susiesseniorservicesoftn@gmail.com', photoUrl: susieImage },
  { serviceType: 'Dementia Practitioner & Resources', keyword: 'Memory Care', company: 'Alzheimer\'s Tennessee, Inc', contact: 'https://www.alztennessee.org/', photoUrl: TNalzImage },
  { serviceType: 'Wellness/Fitness/Nutrition Advising', keyword: 'Wellness Advising', company: 'Susie’s Senior Services', contact: 'susiesseniorservicesoftn@gmail.com' , photoUrl: susieImage},
  { serviceType: 'Home Care/ Medical Care Management', keyword: 'Home Care', company: 'Arosa Middle TN | Middle Tennessee Care Management & Home Care', contact: 'https://arosacare.com/locations/middle-tennessee/', photoUrl: ArosaImage },
  { serviceType: 'In-Home Senior Activities', keyword: 'Home Activities', company: 'Activities R Us', contact: 'https://www.activitiesrus.biz/', photoUrl: ARUSImage },
  { serviceType: 'Hospice', keyword: 'Hospice', company: 'Aveanna Hospice', contact: 'https://www.aveanna.com/', photoUrl: AveannaHealthcareImage },
  { serviceType: 'Legal Counsel', keyword: 'Legal', company: 'Ashley Stearns, Trail, Coleman & Stearns, PLLC – Attorneys at Law', contact: 'https://trailstearns.com/', photoUrl: LawImage },
  { serviceType: 'Care Advising & Placement Agent', keyword: 'Placement Advising', company: 'GRAMPS of Tennessee', contact: 'You Are Here!', photoUrl: GOTImage },
  { serviceType: 'Medicaid Help', keyword: 'Medicaid Help', company: 'TN.gov', contact: 'TN.gov', photoUrl: TNImage  },
  { serviceType: 'Veterans Aid', keyword: 'Veterans', company: 'Veterans Home Care', contact: 'https://veteranshomecare.com/vet-assist/zero-interest-loan/', photoUrl: VetImage },
  { serviceType: 'After Loss Services', keyword: 'After Loss Services', company: 'Sunny Care Services', contact: 'https://sunnycareservices.com/', photoUrl: SunnyImage },
  { serviceType: 'Medical Housecalls', keyword: 'Medical Housecalls', company: 'Medical House Calls Tennessee', contact: 'https://medicalhousecallstn.com/', photoUrl: CallsImage },
  { serviceType: 'Senior/Medical “Taxi” Service', keyword: 'Concierge Transportation Services', company: 'Susie’s Senior Services', contact: 'susiesseniorservicesoftn@gmail.com', photoUrl: susieImage },
  { serviceType: 'Real Estate', keyword: 'Real Estate', company: 'The Bedsole Group', contact: 'https://thebedsolegroup.com/', photoUrl: BedsoleImage },
  { serviceType: 'Medicare Specialist', keyword: 'Medicare Specialist', company: 'Acuity Health Advisors', contact: 'https://www.acuityhealthadvisors.com/health-insurance/', photoUrl: acunityImage },
  { serviceType: 'Financial Advising', keyword: 'Financial Advising', company: 'Mortgage South Reverse Mortgages', contact: 'https://www.mortgage-south.com/', photoUrl: MSImage },
  { serviceType: 'Real Estate', keyword: 'Real Estate', company: 'Caring Transitions', contact: 'https://www.caringtransitionssouthernnashvilletn.com/', photoUrl: caringImage },
  { serviceType: 'Meal Preparation', keyword: 'Meal Preparation', company: 'Chefs For Seniors', contact: 'https://chefsforseniors.com/', photoUrl: chefImage },
];

const ResourceList = () => {
  const [filter, setFilter] = useState('');
  const [filteredResources, setFilteredResources] = useState(resourcesData);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    if (value === '') {
      setFilteredResources(resourcesData);
    } else {
      setFilteredResources(resourcesData.filter(resource => resource.serviceType.includes(value)));
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Senior Service Partners</h1>
      <div className="flex justify-center mb-5">
        <div className="w-full max-w-xs">
          <select
            id="service-filter"
            value={filter}
            onChange={handleFilterChange}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow-500 text-center"
          >
            <option value="">All Services</option>
            {Array.from(new Set(resourcesData.map(item => item.serviceType))).map(serviceType => (
              <option key={serviceType} value={serviceType}>{serviceType}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredResources.map((resource, index) => (
  <div key={index} className="p-5 bg-white rounded-lg shadow transition duration-300 hover:shadow-lg border-2 border-yellow-500" style={{ height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ height: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <img 
        src={resource.photoUrl} 
        alt={resource.company} 
        style={{ maxHeight: '100%', maxWidth: '100%', minWidth: '100%', minHeight: '100%', objectFit: 'contain' }}
      />
    </div>
    <div>
      <h2 className="text-xl font-semibold">{resource.serviceType}</h2>
      <p className="mt-3"><strong>Company:</strong> {resource.company}</p>
      <p className="mt-3">
        <strong>Contact:</strong> {resource.contact.startsWith('http') ? (
          <a href={resource.contact} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">{resource.contact}</a>
        ) : (
          <span>{resource.contact}</span>
        )}
      </p>
    </div>
  </div>
))}


      </div>
    </div>
  );
};

export default ResourceList;