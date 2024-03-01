import React from 'react';
import veteransImage from './assets/veterans.jpg'
import vaImage from './assets/va.jpg'

const VeteransBenefitsPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-white to-blue-500 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* GRAMPS Statement */}
        <div className="text-center border-yellow-500 border-2 p-4 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl text-yellow-500 font-semibold">Veteran Benefits</h2>
          <p className="mt-2">GRAMPS of Tennessee has extensive knowledge when it comes to getting veterans the help they need. Veterans may even qualify for up to $2400/month for senior living options.</p>
        </div>

        <main>
          {/* Benefits Overview */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-6 border-2 border-yellow-500">
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">Benefits Overview</h2>
            <p className="mb-4">Senior veterans are entitled to a wide range of benefits in recognition of their service. These benefits aim to support their health, financial well-being, and quality of life as they age. Here’s a comprehensive overview of key benefits:</p>
            
            {/* Each Benefit Detail */}
            <div className="space-y-4">
              {/* Healthcare Services */}
              <div>
                <h3 className="text-lg font-semibold">Healthcare Services</h3>
                <p>Access to VA healthcare includes medical, surgical, mental health care, and prescription drugs. Specialized geriatrics and extended care services help those with complex needs.</p>
              </div>
              
              {/* Disability Compensation */}
              <div>
                <h3 className="text-lg font-semibold">Disability Compensation</h3>
                <p>Veterans suffering from service-related disabilities are eligible for tax-free compensation, enhancing their financial stability.</p>
              </div>
              
              {/* Pension Programs */}
              <div>
                <h3 className="text-lg font-semibold">Pension Programs</h3>
                <p>Low-income wartime veterans may qualify for VA pensions, including Aid and Attendance benefits for those needing daily personal assistance.</p>
              </div>
              
              {/* Long-Term Care */}
              <div>
                <h3 className="text-lg font-semibold">Long-Term Care</h3>
                <p>The VA offers long-term care options such as nursing homes and at-home care for veterans requiring ongoing assistance.</p>
              </div>
              
              {/* More benefits can be added in a similar manner */}
            </div>
          </section>

           {/* External Links */}
          <section className="flex justify-center items-center space-x-12 mt-8">
            {/* VetAssist */}
            <div className="text-center">
              <img src={veteransImage} alt="VetAssist Logo" className="mx-auto mb-4 rounded-lg" style={{ width: '150px', height: '150px' }} />
              <a href="https://veteranshomecare.com/vet-assist/" target="_blank" rel="noopener noreferrer"
                 className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded block">
                Visit VetAssist
              </a>
            </div>

            {/* VA Benefits */}
            <div className="text-center">
              <img src={vaImage} alt="VA Logo" className="mx-auto mb-4 rounded-lg" style={{ width: '150px', height: '150px' }} />
              <a href="https://www.benefits.va.gov" target="_blank" rel="noopener noreferrer"
                 className="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded block">
                Visit VA Benefits
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VeteransBenefitsPage;