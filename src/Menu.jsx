import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from '@/components/LanguageToggle';
import CategoryTabs from '@/components/CategoryTabs';
import MenuItem from '@/components/MenuItem';
import PizzaItem from '@/components/PizzaItem';
import { menuData, categoryKeys } from '@/components/menuData';

const headerText = {
  el: {
    title: 'PizzaTapas',
    subtitle: 'Αυθεντική Ιταλική Κουζίνα'
  },
  en: {
    title: 'PizzaTapas',
    subtitle: 'Authentic Italian Cuisine'
  }
};

export default function Menu() {
  const [language, setLanguage] = useState('el');
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCategoryKey = categoryKeys[activeCategory];
  const items = menuData[currentCategoryKey];
  const isPizzaCategory = currentCategoryKey === 'pizzas';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-700 to-rose-800 text-white px-4 pt-8 pb-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight mb-1">
            {headerText[language].title}
          </h1>
          <p className="text-rose-100 text-sm">
            {headerText[language].subtitle}
          </p>
        </div>
        
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-0 z-20 bg-gray-50/95 backdrop-blur-sm px-4 py-3 border-b border-gray-200">
        <CategoryTabs 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          language={language}
        />
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategoryKey}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {isPizzaCategory ? (
                  <PizzaItem item={item} language={language} />
                ) : (
                  <MenuItem item={item} language={language} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-4 py-8 text-center">
        <p className="text-gray-500 text-sm mb-2">
          {language === 'el'
            ? 'Για αλλεργίες, παρακαλώ ενημερώστε το προσωπικό μας'
            : 'For allergies, please inform our staff'}
        </p>
        <p className="text-gray-400 text-sm">
          {language === 'el' 
            ? '© 2024 PizzaTapas. Όλα τα δικαιώματα διατηρούνται.'
            : '© 2024 PizzaTapas. All rights reserved.'}
        </p>
        <p className="text-gray-300 text-xs mt-2">
          {language === 'el'
            ? 'Οι τιμές περιλαμβάνουν ΦΠΑ'
            : 'Prices include VAT'}
        </p>
      </div>
    </div>
  );
}