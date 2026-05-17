import React, { useState, useEffect } from 'react';

const Navbar = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'Products', 'Industries', 'About', 'Contact', 'Career'];
  
  const handleNavigation = (item) => {
    if (item === 'Career') {
      onNavigate('career');
    } else if (item === 'Home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('home');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(item.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-3 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('Home')}>
          <i className="fas fa-cheese text-3xl text-primary-600"></i>
          <span className="font-extrabold text-xl tracking-tight text-gray-800">
            Pure Dairy <span className="text-primary-600">International</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map(item => (
            <button key={item} onClick={() => handleNavigation(item)} 
              className={`hover:text-primary-600 transition ${currentPage === 'career' && item === 'Career' ? 'text-primary-600 font-bold' : ''}`}>
              {item}
            </button>
          ))}
          <button onClick={() => handleNavigation('Contact')} 
            className="bg-primary-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-primary-700 shadow-md">
            Get Quote
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 text-2xl">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl mt-2 py-4 px-6 flex flex-col space-y-4 border-t">
          {navItems.map(item => (
            <button key={item} onClick={() => handleNavigation(item)} 
              className="text-gray-700 font-medium hover:text-primary-600 text-left">
              {item}
            </button>
          ))}
          <button onClick={() => handleNavigation('Contact')} 
            className="bg-primary-600 text-white px-4 py-2 rounded-full text-center">
            Request Sample
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;