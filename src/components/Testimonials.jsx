import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Chef Marco R.', role: 'Head Chef, Bella Vista Hotel', text: 'The mozzarella quality is outstanding — consistent melt and flavor. Pure Dairy is our exclusive partner.' },
    { name: 'Sarah K.', role: 'Procurement Manager, FoodieQSR', text: 'Shredded cheese blends saved us 20% cost while improving texture. Reliable global delivery!' },
    { name: 'James Lee', role: 'Owner, The Pub Collective', text: 'Their cheese sauce is a crowd-pleaser. Bulk pricing and excellent customer support.' },
  ];
  
  return (
    <section className="py-20 bg-dairy-cream">
      <div className="container mx-auto px-6 text-center reveal">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl shadow-sm text-left">
              <i className="fas fa-quote-left text-primary-300 text-3xl mb-3"></i>
              <p className="text-gray-700 italic">"{t.text}"</p>
              <div className="mt-5 font-bold">{t.name}</div>
              <div className="text-sm text-primary-600">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;