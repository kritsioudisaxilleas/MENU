import React from 'react';

export default function CategoryNav({ categories, activeCategory, onCategoryClick }) {
  return (
    <nav className="sticky top-[57px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 w-full">
      <div className="flex gap-1.5 px-3 py-2.5 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`flex-shrink-0 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}