import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import VeteransSection from './components/VeteransSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css'; // Assuming Tailwind CSS is imported here

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          {/* Using "element" prop to render components. Note: React Router v6 uses "element", not "component". */}
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <AboutUsSection />
              <VeteransSection />
              <ContactSection />
            </>
          } />
          {/* If you have additional pages, they would be added as separate Route entries here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
