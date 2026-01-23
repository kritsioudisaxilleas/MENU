import React from 'react';

export default function CategoryNav({ categories, activeCategory, onCategoryClick }) {
  return (
    <nav className="sticky top-[61px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeCategory === category.id
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}