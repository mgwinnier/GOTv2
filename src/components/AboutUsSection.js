import React from 'react';
import aboutImage from '../assets/about.jpg'; // Ensure you have an appropriate image at this path

function AboutUsSection() {
  return (
    <section id="about-us" className="py-12 bg-gray-300"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-4 text-center md:text-left md:w-7/12 md:order-1">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              At GRAMPS of Tennessee, our core commitment is to enhance the quality of life for senior citizens through comprehensive support and services. We believe in fostering an environment that promotes independence, health, and happiness.
            </p>
            <h2 className="text-3xl font-semibold mt-8">Our Team</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Behind every service at GRAMPS of TN is a team of dedicated professionals. From healthcare specialists and caregivers to support staff and volunteers, each member brings expertise and empathy to their role. United by a shared vision, our team works tirelessly to create meaningful experiences for our seniors.
            </p>
          </div>
          <div className="w-full px-4 text-center md:w-5/12 md:order-2">
            <img src={aboutImage} alt="About Us" className="shadow-lg rounded max-w-full h-auto inline-block mx-auto md:mx-0" style={{ maxWidth: '320px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
