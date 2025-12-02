import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { useCart } from './hooks/useCart';
import PageTransition from './components/PageTransition';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // Ensure theme hook runs at top-level so the `dark` class is set early
  const { theme } = useTheme();
  
  // Initialize cart functionality
  const { cartItems, addToCart, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header 
          onCartOpen={() => setIsCartOpen(true)} 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cartCount={cartCount}
        />
        
        <Routes>
          <Route path="/" element={<PageTransition><Home searchQuery={searchQuery} onAddToCart={addToCart} /></PageTransition>} />
          <Route path="/shop" element={<PageTransition><Shop searchQuery={searchQuery} onAddToCart={addToCart} /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetail onAddToCart={addToCart} /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>

        <Footer />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          cartTotal={cartTotal}
          onClearCart={clearCart}
        />
      </div>
    </Router>
  );
}

export default App;
