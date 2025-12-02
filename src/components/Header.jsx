import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const Header = ({ onCartOpen, searchQuery, onSearchChange, cartCount }) => {
  const { theme, toggleTheme } = useTheme();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevCartCount, setPrevCartCount] = useState(0);
  const [cartBounce, setCartBounce] = useState(false);

  // Detect scroll for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate cart badge when items are added
  useEffect(() => {
    if (cartCount > prevCartCount) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 600);
    }
    setPrevCartCount(cartCount);
  }, [cartCount, prevCartCount]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/90 dark:bg-gray-900/90' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight hover:opacity-80 transition-opacity">
              Luxe<span className="text-indigo-600 dark:text-indigo-400">Deco</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-gray-600 dark:text-gray-300 font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Search Bar */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="glow-effect bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all w-48 lg:w-64"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="sm:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all hover:scale-110 active:scale-95"
              aria-label="Toggle Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all focus:outline-none hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
            >
              <div className={`transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
                {theme === 'dark' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Cart Icon */}
            <button
              onClick={onCartOpen}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all relative hover:scale-110 active:scale-95"
              aria-label="Open Cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full transition-transform ${
                  cartBounce ? 'animate-bounceIn' : ''
                }`}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all hover:scale-110 active:scale-95"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="mt-4 sm:hidden animate-fadeInUp">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full glow-effect bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl z-50 md:hidden animate-slideInRight">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/shop', label: 'Shop' },
                  { to: '/about', label: 'About' },
                  { to: '/contact', label: 'Contact' }
                ].map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors py-2 border-b border-gray-200 dark:border-gray-700 animate-fadeInUp stagger-${index + 1}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
