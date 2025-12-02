import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 lift-effect">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glow-effect bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glow-effect bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glow-effect bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg animate-scaleIn">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 lift-effect animate-fadeInUp stagger-1" style={{ opacity: 0 }}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Decor Street, Design City, DC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font- semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@luxedeco.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 lift-effect animate-fadeInUp stagger-2" style={{ opacity: 0 }}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
