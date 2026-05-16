import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    'https://plus.unsplash.com/premium_photo-1663127123513-a11369f67c8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=2074&auto=format'
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setCurrentIdx(prev => (prev+1)%images.length), 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full transition-all duration-700" 
        style={{ backgroundImage: `url(${images[currentIdx]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
          Pure Dairy Excellence <br /> <span className="text-yellow-300">Globally Trusted</span>
        </h1>
        <p className="text-xl md:text-2xl mt-6 font-light max-w-2xl mx-auto">
          Premium cheese, butter, and dairy solutions — crafted for restaurants, hotels, and food innovators worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition">
            Explore Products →
          </button>
          <button onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white py-3 px-8 rounded-full text-lg font-medium">
            Industries we serve
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;