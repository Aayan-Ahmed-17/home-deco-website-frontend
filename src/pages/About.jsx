import React from 'react';

export const About = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          About LuxeDeco
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 lift-effect">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Founded in 2024, LuxeDeco has been at the forefront of curating premium home decor and furniture pieces 
            that transform ordinary spaces into extraordinary living environments.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We believe that your home should reflect your personality and style. That's why we handpick each item 
            in our collection, ensuring quality, aesthetics, and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center lift-effect glow-effect animate-fadeInUp stagger-1" style={{ opacity: 0 }}>
            <div className="text-indigo-600 dark:text-indigo-400 mb-4 group">
              <svg className="w-12 h-12 mx-auto transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every product is carefully selected for superior quality and craftsmanship.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center lift-effect glow-effect animate-fadeInUp stagger-2" style={{ opacity: 0 }}>
            <div className="text-indigo-600 dark:text-indigo-400 mb-4 group">
              <svg className="w-12 h-12 mx-auto transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Secure Shopping</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your privacy and security are our top priorities in every transaction.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center lift-effect glow-effect animate-fadeInUp stagger-3" style={{ opacity: 0 }}>
            <div className="text-indigo-600 dark:text-indigo-400 mb-4 group">
              <svg className="w-12 h-12 mx-auto transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick and reliable shipping to bring your dream decor to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
