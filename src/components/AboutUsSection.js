import React from 'react';
import aboutImage from '../assets/about.jpg'; // Ensure you have an appropriate image at this path

function AboutUsSection() {
  return (
    <section id="about-us" className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-start">
          {/* Our Mission, Our Team & What GRAMPS Means (Left and Center) */}
          <div className="w-full lg:w-8/12 px-4 mb-4 text-center md:text-left">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold">Our Mission</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  At GRAMPS of Tennessee, our core commitment is health and happiness through knowledge, as it has been our experience that the single most common factor families face is simply fear from a lack of information. <span className="text-yellow-500 uppercase font-bold tracking-wider" style={{ textShadow: '1px 1px 2px black' }}>Knowledge is power</span>, therefore, it is our mission to educate and inform our local community about all things related to aging!
                </p>
                <h2 className="text-3xl font-semibold mt-8">Our Team</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Behind every service at GRAMPS of Tennessee is a team of dedicated professionals. From healthcare specialists and caregivers to support staff and volunteers, each member brings expertise and empathy to their role. United by a shared vision, our team works tirelessly to create meaningful experiences for our seniors.
                </p>
              </div>

              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-3xl font-semibold text-center pb-2">
                  What does GRAMPS Mean?
                </h2>
                <div className="text-3xl text-center">
                  <div><span className="text-yellow-500 font-bold">G</span><span className="text-black">eriatric</span></div>
                  <div><span className="text-yellow-500 font-bold">R</span><span className="text-black">esources</span></div>
                  <div><span className="text-yellow-500 font-bold">A</span><span className="text-black">dvising</span></div>
                  <div><span className="text-yellow-500 font-bold">M</span><span className="text-black">oving</span></div>
                  <div><span className="text-yellow-500 font-bold">P</span><span className="text-black">lacement</span></div>
                  <div><span className="text-yellow-500 font-bold">S</span><span className="text-black">ervices</span></div>
                  <div><span className="text-black">of Tennessee</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Image (Right) */}
          <div className="w-full lg:w-4/12 px-4 text-center lg:mb-4">
            <img src={aboutImage} alt="About Us" className="shadow-lg rounded max-w-full h-auto align-middle" />
          </div>
        </div>
        {/* Centered Button at the Bottom of the Entire Section */}
        <div className="text-center mt-8">
          <a href="/who-are-we" className="inline-block px-6 py-2 text-white font-bold bg-black rounded hover:bg-yellow-500 transition-colors">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
