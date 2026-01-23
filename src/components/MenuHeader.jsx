import React from 'react';

export default function MenuHeader({ language, onLanguageChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">Pizzeria Roma</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Since 1985</p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => onLanguageChange('el')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              language === 'el' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🇬🇷
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              language === 'en' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🇬🇧
          </button>
        </div>
      </div>
    </header>
  );
}