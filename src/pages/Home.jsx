import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { Sidebar } from '../components/Sidebar';
import { useProductFilter } from '../hooks/useProductFilter';

export const Home = ({ searchQuery, onAddToCart }) => {
  const { filteredProducts, selectedCategory, filterByCategory, categories } = useProductFilter();
  const [loadingProduct, setLoadingProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState(new Set());

  // Apply both category filter and search query
  const displayedProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = async (product) => {
    setLoadingProduct(product.id);
    await onAddToCart(product);
    setTimeout(() => setLoadingProduct(null), 800);
  };

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Main Content: Sidebar + Product Grid */}
        <div className="flex">
          {/* Sidebar - Desktop Only */}
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={filterByCategory}
          />

          {/* Product Grid */}
          <div className="flex-grow">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {displayedProducts.length} {displayedProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group lift-effect glow-effect transition-all duration-300 hover:border-2 hover:border-indigo-600 dark:hover:border-indigo-400 border-2 border-transparent animate-fadeInUp stagger-${Math.min(index % 6 + 1, 6)}`}
                  style={{ opacity: 0 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 cursor-pointer"
                      />
                    </Link>
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        onClick={() => toggleLike(product.id)}
                        className={`transition-all ${
                          likedProducts.has(product.id) 
                            ? 'text-red-500 scale-110' 
                            : 'text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:scale-110'
                        }`}
                      >
                        <svg className="w-5 h-5" fill={likedProducts.has(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={loadingProduct === product.id}
                        className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white p-2 rounded-lg transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative"
                        aria-label="Add to cart"
                      >
                        {loadingProduct === product.id ? (
                          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {displayedProducts.length === 0 && (
              <div className="text-center py-12 animate-fadeInUp">
                <svg className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
