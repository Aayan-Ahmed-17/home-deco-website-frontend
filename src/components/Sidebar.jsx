import React from 'react';

export const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="hidden lg:block w-64 mr-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Categories
        </h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
