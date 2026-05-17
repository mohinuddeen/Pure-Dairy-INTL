import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import Brands from './components/Brands';
import About from './components/About';
import Testimonials from './components/Testimonials';
import GlobalAndContact from './components/GlobalAndContact';
import Footer from './components/Footer';
import Career from './components/Career';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  // Handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render different pages
  if (currentPage === 'career') {
    return (
      <div className="font-sans bg-white">
        <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
        <Career />
        <Footer />
      </div>
    );
  }

  // Home page
  return (
    <div className="font-sans bg-white">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <Hero />
      <Industries />
      <Products />
      <Brands />
      <About />
      <Testimonials />
      <GlobalAndContact />
      <Footer />
    </div>
  );
}

export default App;