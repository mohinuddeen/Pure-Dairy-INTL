import React from 'react';

const Products = () => {
  const productList = [
    { name: 'Cheese Slices', image: 'https://images.unsplash.com/photo-1683314573422-649a3c6ad784?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Processed' },
    { name: 'Mozzarella', image: 'https://images.unsplash.com/photo-1605466237780-80b87584957b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Fresh' },
    { name: 'Parmesan', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Aged' },
    { name: 'Butter Blocks', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Premium' },
    { name: 'Cheese Sauce', image: 'https://images.unsplash.com/photo-1734772257288-d53770c7707f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Convenience' },
    { name: 'Shredded Cheese', image: 'https://images.unsplash.com/photo-1584450086321-06632ca7faa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Blends' },
    { name: 'Gouda', image: 'https://images.unsplash.com/photo-1519411792752-25c2468cccb3?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Semi-hard' },
    { name: 'Cream Cheese', image: 'https://images.unsplash.com/photo-1573810655264-8d1e50f1592d?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Spread' },
  ];
  
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-primary-600 font-semibold">PREMIUM RANGE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">Our Dairy Collection</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">From classic mozzarella to signature sauces — crafted for culinary excellence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {productList.map((prod, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-gray-50 shadow-md product-card transition-all duration-300 reveal">
              <div className="h-52 overflow-hidden">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-xl">{prod.name}</h4>
                <p className="text-primary-600 text-sm mt-1">{prod.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition">
            View Full Catalog →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;