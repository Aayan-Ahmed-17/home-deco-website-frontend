import React, { useState } from 'react';


export const OrderConfirmationForm = ({ onSubmit, cartTotal, cartItems, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    return newErrors;
  };

  const sendEmail = async (orderData) => {
    try {
      console.log("Sending order to backend...", orderData);
      const response = await fetch('http://localhost:8000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...orderData,
          cartItems,
          cartTotal,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.detail || response.statusText || 'Unknown error';
        console.error('Server responded with error:', response.status, errorMessage);
        throw new Error(`Server error: ${errorMessage}`);
      }

      console.log('Order sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Failed to send order:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Send email notification
    const result = await sendEmail(formData);

    if (!result.success) {
      alert(`Warning: Failed to send order confirmation email. Error: ${result.error}. Please contact support.`);
    }

    // Submit form
    onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            Order Total:
          </span>
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            ${cartTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 max-h-60 overflow-y-auto">
        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Order Summary:</h4>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                {item.name} x{item.quantity}
              </span>
              <span className="text-gray-800 dark:text-white font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 transition-colors ${
            errors.name ? 'ring-2 ring-red-500' : 'focus:ring-indigo-500'
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 transition-colors ${
            errors.email ? 'ring-2 ring-red-500' : 'focus:ring-indigo-500'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Address Field */}
      <div>
        <label htmlFor="address" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Delivery Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={isSubmitting}
          rows="3"
          className={`w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.address ? 'ring-2 ring-red-500' : 'focus:ring-indigo-500'
          }`}
          placeholder="123 Main Street, City, State, ZIP"
        ></textarea>
        {errors.address && (
          <p className="mt-1 text-sm text-red-500">{errors.address}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Place Order'
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        An order notification will be sent to the store admin
      </p>
    </form>
  );
};
