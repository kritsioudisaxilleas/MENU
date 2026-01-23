import React, { useState } from 'react';

const sizes = [
  { id: '30', label: '30 cm', priceKey: 'price30' },
  { id: '40', label: '40 cm', priceKey: 'price40' },
  { id: '50', label: '50 cm', priceKey: 'price50' },
];

export default function PizzaItem({ pizza }) {
  const [selectedSize, setSelectedSize] = useState('30');

  const currentPrice = pizza[`price${selectedSize}`];

  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 mb-1">{pizza.name}</h3>
          {pizza.description && (
            <p className="text-sm text-gray-500 leading-relaxed">{pizza.description}</p>
          )}
        </div>
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-gray-900 transition-all duration-200">
            €{currentPrice.toFixed(2)}
          </span>
        </div>
      </div>
      
      {/* Size Selection */}
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setSelectedSize(size.id)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
              selectedSize === size.id
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}