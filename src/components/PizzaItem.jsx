import React, { useState } from 'react';

const sizes = [
  { id: '30', label: '30cm', priceKey: 'price30' },
  { id: '40', label: '40cm', priceKey: 'price40' },
  { id: '50', label: '50cm', priceKey: 'price50' },
];

export default function PizzaItem({ pizza }) {
  const [selectedSize, setSelectedSize] = useState('30');

  const currentPrice = pizza[`price${selectedSize}`];

  return (
    <div className="py-3.5 border-b border-gray-100 last:border-0 w-full">
      <div className="flex justify-between items-start gap-3 mb-2.5">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 mb-0.5 leading-tight">{pizza.name}</h3>
          {pizza.description && (
            <p className="text-xs text-gray-500 leading-relaxed">{pizza.description}</p>
          )}
        </div>
      </div>
      
      {/* Size Selection with Price */}
      <div className="flex gap-1.5">
        {sizes.map((size) => {
          const price = pizza[size.priceKey];
          const isSelected = selectedSize === size.id;
          return (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
                isSelected
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <div className="leading-tight">
                <div className="font-semibold">{size.label}</div>
                <div className={`text-xs font-bold mt-0.5 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  €{price.toFixed(2)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}