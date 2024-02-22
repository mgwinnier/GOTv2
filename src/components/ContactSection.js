import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function ContactSection() {
  return (
    <section id="contact-us" className="py-12 pt-12 pb-4 bg-gray-300"> {/* Adjusted bottom padding */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-6"> {/* Reduced margin below the text */}
          <h2 className="text-3xl font-semibold">Contact Us For More Information</h2> {/* Updated heading */}
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            For more information about our services or to get in touch, please use the contact details below.
          </p>
          {/* Golden button linking to the contact us page */}
          <Link to="/contact">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300" style={{ backgroundColor: '#D4AF37' }}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
