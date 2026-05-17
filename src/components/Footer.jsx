import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <i className="fas fa-cheese text-2xl text-primary-400"></i>
        <p className="mt-3 text-sm">Pure Dairy International — Delivering dairy excellence since 2008.</p>
      </div>
      <div>
        <h4 className="font-bold text-white">Quick Links</h4>
        <ul className="mt-2 space-y-1">
          <li>Products</li><li>Industries</li><li>Sustainability</li><li>Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white">Contact</h4>
        <p><i className="fas fa-phone mr-2"></i> +61 3 9989 4000Y<br/>
        <i className="fas fa-envelope"></i> costumerservice@puredairyinternational.com</p>
      </div>
      <div>
        <h4 className="font-bold text-white">Follow Us</h4>
        <div className="flex gap-4 text-2xl mt-2">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
      © 2025 Pure Dairy International — Crafted for global hospitality
    </div>
  </footer>
);

export default Footer;