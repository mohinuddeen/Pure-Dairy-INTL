import React from 'react';

const Brands = () => (
  <section className="py-16 bg-dairy-softblue">
    <div className="container mx-auto px-6 text-center reveal">
      <span className="text-primary-600 font-semibold">OUR PORTFOLIO</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Trusted Brands & Private Label</h2>
      <div className="flex flex-wrap justify-center gap-12 mt-12 items-center">
        {['DairyPure', 'Chef\'s Crown', 'GoldenCream', 'MozzaRoma', 'ProChef Sauce'].map(brand => (
          <div key={brand} className="bg-white px-7 py-4 rounded-2xl shadow-sm text-xl font-bold text-gray-700 border border-gray-100 hover:shadow-md">
            <i className="fas fa-certificate text-primary-600 mr-2"></i>{brand}
          </div>
        ))}
      </div>
      <p className="mt-12 text-gray-600 max-w-3xl mx-auto">We offer custom formulations, co-packing, and premium branded products delivered to over 40+ countries.</p>
    </div>
  </section>
);

export default Brands;