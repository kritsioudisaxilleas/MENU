import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizeLabels = {
  el: { small: '30cm', medium: '40cm', large: '50cm' },
  en: { small: '30cm', medium: '40cm', large: '50cm' }
};

export default function PizzaItem({ item, language }) {
  const [selectedSize, setSelectedSize] = useState('medium');
  
  const name = language === 'el' ? item.nameEl : item.nameEn;
  const description = language === 'el' ? item.descEl : item.descEn;
  const labels = sizeLabels[language];

  const sizes = [
    { key: 'small', label: labels.small, price: item.prices.small },
    { key: 'medium', label: labels.medium, price: item.prices.medium },
    { key: 'large', label: labels.large, price: item.prices.large }
  ];

  const currentPrice = item.prices[selectedSize];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-stone-200"
    >
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base leading-tight mb-2">
            {name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <motion.span 
          key={currentPrice}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="flex-shrink-0 font-bold text-stone-900 text-lg"
        >
          €{currentPrice.toFixed(2)}
        </motion.span>
      </div>

      <div className="flex gap-2 pt-3 border-t border-gray-100">
        {sizes.map(size => (
          <motion.button
            key={size.key}
            onClick={() => setSelectedSize(size.key)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              selectedSize === size.key
                ? 'bg-rose-700 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
            whileTap={{ scale: 0.97 }}
          >
            <div>{size.label}</div>
            <div className={`text-xs mt-0.5 ${
              selectedSize === size.key ? 'text-rose-100' : 'text-gray-400'
            }`}>
              €{size.price.toFixed(2)}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}