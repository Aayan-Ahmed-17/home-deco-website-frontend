import { useState, useMemo } from 'react';
import { PRODUCT_DATA } from '../data/products';

export const useProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from product data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(PRODUCT_DATA.map((p) => p.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCT_DATA;
    }
    return PRODUCT_DATA.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
  };

  return {
    filteredProducts,
    selectedCategory,
    filterByCategory,
    clearFilters,
    categories,
  };
};
