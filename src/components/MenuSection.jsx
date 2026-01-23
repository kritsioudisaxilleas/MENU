import React from 'react';

export default function MenuSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="px-4 pt-6 pb-2">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
        <div className="w-8 h-0.5 bg-red-600 rounded-full" />
      </div>
      <div className="px-4">
        {children}
      </div>
    </section>
  );
}