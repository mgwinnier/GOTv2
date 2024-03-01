import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import VeteransSection from './components/VeteransSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Resources from './resources'; 
import WhoWeAre from './whoweare';// Make sure this path is correct
import Vets from './veterans';// Make sure this path is correct
import Contact from './contact';// Make sure this path is correct

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <AboutUsSection />
              <VeteransSection />
              <ContactSection />
            </>
          } />
          <Route path="/resources" element={<Resources />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/veterans" element={<Vets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
