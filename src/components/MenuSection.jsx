import React from 'react';

export default function MenuSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 w-full">
      <div className="px-3 pt-5 pb-1.5">
        <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
        <div className="w-8 h-0.5 bg-red-600 rounded-full" />
      </div>
      <div className="px-3">
        {children}
      </div>
    </section>
  );
}