import React, { useEffect } from 'react';
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

function App() {
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
  }, []);

  return (
    <div className="font-sans bg-white">
      <Navbar />
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