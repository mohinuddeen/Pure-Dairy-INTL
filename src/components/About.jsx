import React from 'react';

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-6 md:flex gap-16 items-center">
      <div className="md:w-1/2 reveal">
        <span className="text-primary-600 font-semibold">OUR STORY</span>
        <h2 className="text-4xl font-bold mt-2">Pure Dairy International</h2>
        <p className="text-gray-600 mt-6 leading-relaxed">
          Founded in 2008, we've grown into a global dairy sourcing and manufacturing leader. From family farms to automated cutting-edge facilities, we ensure every batch meets highest safety & sustainability standards.
          <br/><br/>
          Our mission: bring authentic dairy experiences to food professionals, with consistent quality and unbeatable service.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <i className="fas fa-check-circle text-green-600"></i><span>ISO 22000</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <i className="fas fa-medal text-yellow-500"></i><span>Global Food Safety</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <i className="fas fa-trophy text-yellow-500"></i><span>Export Award 2023</span>
          </div>
        </div>
      </div>
      {/* <div className="md:w-1/2 mt-10 md:mt-0 reveal">
        <img src="https://raw.githubusercontent.com/mohinuddeen/Pure-Dairy-INTL/refs/heads/main/public/logoTarns.png" alt="dairy factory" className="rounded-2xl shadow-2xl"/>
      </div> */}
    </div>
  </section>
);

export default About;