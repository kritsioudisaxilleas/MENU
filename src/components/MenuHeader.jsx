import React from 'react';

export default function MenuHeader({ language, onLanguageChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 w-full">
      <div className="flex items-center justify-between px-3 py-2.5 max-w-full">
        {/* Logo & Name */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink">
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base">P</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-bold text-gray-900 tracking-tight truncate">Pizzeria Roma</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Since 1985</p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center bg-gray-100 rounded-full p-0.5 flex-shrink-0">
          <button
            onClick={() => onLanguageChange('el')}
            className={`px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              language === 'el' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600'
            }`}
          >
            🇬🇷
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              language === 'en' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600'
            }`}
          >
            🇬🇧
          </button>
        </div>
      </div>
    </header>
  );
}