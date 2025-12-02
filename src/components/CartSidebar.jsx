import React, { useState } from 'react';
import { OrderConfirmationForm } from './OrderConfirmationForm';

export const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, cartTotal, onClearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleClose = () => {
    setShowCheckout(false);
    setShowConfirmation(false);
    setOrderDetails(null);
    onClose();
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleCancelCheckout = () => {
    setShowCheckout(false);
  };

  const handleOrderSubmit = (formData) => {
    setOrderDetails(formData);
    setShowCheckout(false);
    setShowConfirmation(true);
    onClearCart();
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    setOrderDetails(null);
    onClose();
  };

  return (
    <>
      {/* Overlay (always rendered for smooth transitions) */}
      <div
        onClick={handleClose}
        className={`cart-overlay fixed inset-0 z-40 bg-black transition-opacity ease-out ${
          isOpen ? 'opacity-50 pointer-events-auto backdrop-blur-sm' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      />

      {/* Sidebar (always rendered for smooth slide transitions) */}
      <aside
        className={`cart-sidebar fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-all ease-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {showConfirmation ? 'Order Confirmed' : showCheckout ? 'Checkout' : 'Shopping Cart'}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Close Cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-6">
            {showConfirmation ? (
              /* Confirmation Message */
              <div className="text-center py-8">
                <div className="mb-6">
                  <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Thank You for Your Order!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your order has been successfully placed. A confirmation email has been sent to{' '}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {orderDetails?.email}
                  </span>
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6 text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Delivery Details:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    <span className="font-medium">Name:</span> {orderDetails?.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    <span className="font-medium">Address:</span> {orderDetails?.address}
                  </p>
                </div>
                <button
                  onClick={handleConfirmationClose}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : showCheckout ? (
              /* Checkout Form */
              <OrderConfirmationForm
                cartTotal={cartTotal}
                cartItems={cartItems}
                onSubmit={handleOrderSubmit}
                onCancel={handleCancelCheckout}
              />
            ) : cartItems.length === 0 ? (
              /* Empty State */
              <div className="flex flex-col items-center justify-center h-full text-center animate-scaleIn">
                <svg className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-4 animate-bounceIn" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Your cart is empty</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Add some items to get started!</p>
                <button
                  onClick={handleClose}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 active:scale-95"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className={`flex gap-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lift-effect animate-fadeInUp stagger-${Math.min(index % 6 + 1, 6)}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-all hover:scale-110 active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-800 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-all hover:scale-110 active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all hover:scale-125 active:scale-95"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <button
                  onClick={onClearCart}
                  className="w-full mb-6 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold py-2 transition-all hover:scale-105 active:scale-95"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>

          {/* Footer - Total & Checkout */}
          {!showCheckout && !showConfirmation && cartItems.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-800 dark:text-white">Total:</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
