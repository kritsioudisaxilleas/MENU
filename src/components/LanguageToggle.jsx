import React from 'react';
import { motion } from 'framer-motion';

export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-1">
      <motion.button
        onClick={() => setLanguage('el')}
        className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
          language === 'el' 
            ? 'bg-white text-rose-800 shadow-sm' 
            : 'text-white'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        Ελληνικά
      </motion.button>
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
          language === 'en' 
            ? 'bg-white text-rose-800 shadow-sm' 
            : 'text-white'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        English
      </motion.button>
    </div>
  );
}