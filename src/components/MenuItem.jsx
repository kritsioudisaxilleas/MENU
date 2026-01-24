import React from 'react';
import { motion } from 'framer-motion';

export default function MenuItem({ item, language }) {
  const name = language === 'el' ? item.nameEl : item.nameEn;
  const description = language === 'el' ? item.descEl : item.descEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-stone-200"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base leading-tight mb-2">
            {name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <span className="flex-shrink-0 font-bold text-gray-900 text-lg">
          €{item.price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}