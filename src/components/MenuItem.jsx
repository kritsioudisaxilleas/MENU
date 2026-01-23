import React from 'react';

export default function MenuItem({ item }) {
  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-gray-100 last:border-0 active:bg-gray-50 transition-colors duration-150">
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900 mb-1">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="flex-shrink-0">
        <span className="text-lg font-bold text-gray-900">€{item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}