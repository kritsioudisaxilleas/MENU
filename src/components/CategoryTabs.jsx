import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = {
  el: ['Ορεκτικά', 'Σαλάτες', 'Πίτσες', 'Ζυμαρικά', 'Ποτά'],
  en: ['Appetizers', 'Salads', 'Pizzas', 'Pasta', 'Drinks']
};

const categoryIcons = ['🥖', '🥗', '🍕', '🍝', '🥤'];

export default function CategoryTabs({ activeCategory, setActiveCategory, language }) {
  const scrollRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const activeEl = activeRef.current;
      const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {categories[language].map((cat, index) => (
        <motion.button
          key={cat}
          ref={activeCategory === index ? activeRef : null}
          onClick={() => setActiveCategory(index)}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
            activeCategory === index
              ? 'bg-rose-700 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{categoryIcons[index]}</span>
          <span>{cat}</span>
        </motion.button>
      ))}
    </div>
  );
}