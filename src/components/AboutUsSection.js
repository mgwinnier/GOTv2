import React from 'react';
import aboutImage from '../assets/about.jpg'; // Ensure you have an appropriate image at this path

function AboutUsSection() {
  return (
    <section id="about-us" className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-start items-stretch">
          {/* Text Section */}
          <div className="w-full lg:w-7/12 px-4 mb-4">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
            At GRAMPS of Tennessee, our core commitment is ensuring silver linings of golden years as we walk beside and advise families on their unique journeys. The single common factor? Uncertainty from a lack of information.  <span className="text-yellow-500 uppercase font-bold tracking-wider" style={{ textShadow: '1px 1px 2px black' }}>Knowledge is power</span>, therefore, it is our mission to educate and inform our local community about all things related to aging!
            </p>
            <h2 className="text-3xl font-semibold mt-8">Our Team</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Behind every service at GRAMPS of Tennessee is a team of dedicated professionals. From healthcare specialists and caregivers to support staff and volunteers, each member brings expertise and empathy to their role. United by a shared vision, our team works tirelessly to create meaningful experiences for our seniors.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-5/12 px-4 text-center lg:flex lg:justify-end">
            <div className="inline-block shadow-lg rounded border-none" style={{ maxWidth: '70%', height: 'auto' }}>
              <img src={aboutImage} alt="About Us" className="rounded align-middle" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        {/* Centered Button at the Bottom */}
        <div className="text-center mt-8">
          <a href="/who-are-we" className="inline-block px-8 py-4 text-white font-bold bg-black rounded hover:bg-yellow-500 transition-colors">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
