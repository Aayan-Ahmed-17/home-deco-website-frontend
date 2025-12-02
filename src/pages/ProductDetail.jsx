import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCT_DATA } from '../data/products';

export const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Find product by ID
  const product = PRODUCT_DATA.find(p => p.id === parseInt(id));

  // If product not found, show error
  if (!product) {
    return (
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center py-12 animate-fadeInUp">
          <svg className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    await onAddToCart({ ...product, quantity });
    setTimeout(() => setIsAdding(false), 800);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= Math.floor(rating) ? 'text-yellow-400' : star - 0.5 <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating} ({product.reviewCount} reviews)
        </span>
      </div>
    );
  };

  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden lift-effect animate-fadeInUp">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="animate-fadeInUp stagger-2" style={{ opacity: 0 }}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {/* Category & Stock Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.inStock ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'}`}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mb-6">
                {renderStars(product.rating)}
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                ${product.price.toFixed(2)}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Specifications:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Dimensions:</span>
                    <span className="text-gray-800 dark:text-white font-medium">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Material:</span>
                    <span className="text-gray-800 dark:text-white font-medium">{product.material}</span>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Available Colors:
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === index ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'} text-sm font-medium`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Quantity:</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-xl font-semibold w-12 text-center text-gray-800 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                {isAdding ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Adding to Cart...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fadeInUp stagger-3" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Customer Reviews ({product.reviewCount})
          </h2>

          <div className="space-y-6">
            {product.reviews && product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{review.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
