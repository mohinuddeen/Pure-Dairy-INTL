import React from 'react';

const GlobalAndContact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:flex gap-12">
      <div className="lg:w-1/2 reveal">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <i className="fas fa-globe-americas text-primary-600"></i> Global Presence
        </h3>
        <p className="mt-3 text-gray-600">Offices in USA, UK, UAE, Singapore, and Australia. Serving 50+ countries with local warehousing.</p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {['New York', 'London', 'Dubai', 'Singapore', 'Sydney', 'Toronto'].map(city => (
            <div key={city} className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-primary-500"></i><span>{city}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-gray-50 p-6 rounded-xl">
          <i className="fas fa-headset text-primary-600 text-2xl"></i>
          <h4 className="font-bold text-xl mt-2">24/7 Trade Support</h4>
          <p className="text-gray-500">Contact our export team for bulk orders, private labeling, and samples.</p>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 bg-white shadow-xl rounded-2xl p-8 reveal border">
        <h3 className="text-2xl font-bold">Request a Quote or Sample</h3>
        <form className="mt-6 space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our sales team will respond within 24 hours.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="border rounded-xl p-3 w-full" required/>
            <input type="email" placeholder="Business Email" className="border rounded-xl p-3 w-full" required/>
          </div>
          <input type="text" placeholder="Company / Restaurant Name" className="border rounded-xl p-3 w-full"/>
          <select className="border rounded-xl p-3 w-full bg-white">
            <option>Select product interest</option>
            <option>Cheese Slices</option>
            <option>Mozzarella</option>
            <option>Butter / Sauces</option>
            <option>Shredded blends</option>
            <option>Custom order</option>
          </select>
          <textarea rows="3" placeholder="Tell us about your volume requirements..." className="border rounded-xl p-3 w-full"></textarea>
          <button type="submit" className="bg-primary-600 w-full py-3 rounded-xl text-white font-bold hover:bg-primary-700 transition">
            Submit Inquiry →
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. Lead time: 1-2 business days response</p>
      </div>
    </div>
  </section>
);

export default GlobalAndContact;