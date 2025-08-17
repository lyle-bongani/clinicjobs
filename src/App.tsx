import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import UkVisaServices from './pages/UkVisaServices';
import VisaInterviewCoaching from './pages/VisaInterviewCoaching';
import CVWriting from './pages/CVWriting';
import ContactUs from './pages/ContactUs';
import './App.css';
import Footer from './components/Footer';
import FloatingButtons from './components/common/FloatingButtons';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/uk-visa-services" element={<UkVisaServices />} />
          <Route path="/visa-interview-coaching" element={<VisaInterviewCoaching />} />
          <Route path="/cv-writing" element={<CVWriting />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
