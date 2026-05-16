import React, { useRef, useState, useEffect } from 'react';

const Industries = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const industries = [
    { icon: 'fa-utensils', name: 'Restaurants', desc: 'High-melt cheese & sauces' },
    { icon: 'fa-beer', name: 'Pubs & Bars', desc: 'Perfect cheese bites & dips' },
    { icon: 'fa-hotel', name: 'Hotels', desc: 'Buffet & a la carte dairy' },
    { icon: 'fa-hamburger', name: 'QSR Chains', desc: 'Uniform slices & shreds' },
    { icon: 'fa-hospital', name: 'Hospitals', desc: 'Nutritional dairy solutions' },
    { icon: 'fa-school', name: 'Catering', desc: 'Bulk & cost-effective' },
    { icon: 'fa-building', name: 'Corporate Cafeterias', desc: 'Daily volume solutions' },
    { icon: 'fa-plane', name: 'Airlines', desc: 'In-flight dairy service' }
  ];

  // Background image URL (the one you provided)
  const cardBgImage = 'https://images.unsplash.com/photo-1596633605700-1efc9b49e277?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Mouse/Touch drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
    scrollContainerRef.current.style.userSelect = 'auto';
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Arrow scroll buttons
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Update arrow visibility based on scroll position
  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrows);
      updateArrows();
      return () => container.removeEventListener('scroll', updateArrows);
    }
  }, []);

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-dairy-cream to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center reveal mb-12">
          <span className="text-primary-600 font-semibold tracking-wide">TRUSTED ACROSS SECTORS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">Industries We Serve</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Global food service partners rely on our consistent, high-quality dairy portfolio.
          </p>
        </div>

        {/* Horizontal scroll container with arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm -ml-5"
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left text-2xl"></i>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm -mr-5"
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right text-2xl"></i>
            </button>
          )}

          {/* Horizontal scrollable cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 cursor-grab"
            style={{
              scrollbarWidth: 'thin',
              msOverflowStyle: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${cardBgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="p-8 min-h-[320px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border-2 border-white/30">
                    <i className={`fas ${ind.icon} text-4xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-white/90 text-base">{ind.desc}</p>
                  <div className="mt-6">
                    <button className="text-white border-b-2 border-white/50 hover:border-white pb-1 text-sm font-medium transition-all">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <i className="fas fa-arrows-alt-h"></i> 
            Drag sideways to explore more industries
          </p>
        </div>
      </div>

      {/* Custom CSS for scrollbar styling */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #4338ca;
        }
      `}</style>
    </section>
  );
};

export default Industries;