import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Luxe<span className="text-indigo-600 dark:text-indigo-400">Deco</span></h3>
            <p className="mb-4">Elevate your living space with our curated collection of premium home decor.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Furniture<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Decor<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Lighting<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Sale<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Contact Us<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">FAQs<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Shipping & Returns<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative group">Privacy Policy<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span></a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="glow-effect bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-l-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r-lg transition-all hover:scale-105 hover:shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LuxeDeco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
