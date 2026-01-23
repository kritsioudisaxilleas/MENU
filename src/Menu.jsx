import React, { useState, useEffect, useCallback } from 'react';
import MenuHeader from '@/components/MenuHeader';
import CategoryNav from '@/components/CategoryNav';
import MenuSection from '@/components/MenuSection';
import MenuItem from '@/components/MenuItem';
import PizzaItem from '@/components/PizzaItem';

// Translations
const translations = {
  en: {
    categories: [
      { id: 'appetizers', name: 'Appetizers' },
      { id: 'salads', name: 'Salads' },
      { id: 'pizzas', name: 'Pizzas' },
      { id: 'pasta', name: 'Pasta' },
      { id: 'drinks', name: 'Drinks' },
    ],
    appetizers: [
      { name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, basil & olive oil', price: 5.50 },
      { name: 'Garlic Bread', description: 'Crispy bread with garlic butter & herbs', price: 4.00 },
      { name: 'Mozzarella Sticks', description: 'Golden fried mozzarella with marinara sauce', price: 7.50 },
      { name: 'Calamari Fritti', description: 'Crispy fried calamari with lemon aioli', price: 9.00 },
      { name: 'Caprese', description: 'Fresh mozzarella, tomatoes, basil & balsamic glaze', price: 8.50 },
    ],
    salads: [
      { name: 'Greek Salad', description: 'Tomatoes, cucumber, olives, feta & oregano', price: 8.00 },
      { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons & Caesar dressing', price: 9.00 },
      { name: 'Rocket Salad', description: 'Fresh rocket, parmesan shavings & balsamic', price: 7.50 },
      { name: 'Mixed Green Salad', description: 'Seasonal greens with house vinaigrette', price: 6.50 },
    ],
    pizzas: [
      { name: 'Margherita', description: 'Tomato sauce, mozzarella, fresh basil', price30: 9.00, price40: 13.00, price50: 17.00 },
      { name: 'Pepperoni', description: 'Tomato sauce, mozzarella, spicy pepperoni', price30: 10.50, price40: 15.00, price50: 19.50 },
      { name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesan, goat cheese', price30: 11.00, price40: 16.00, price50: 21.00 },
      { name: 'Prosciutto e Funghi', description: 'Tomato sauce, mozzarella, ham, mushrooms', price30: 11.50, price40: 16.50, price50: 21.50 },
      { name: 'Diavola', description: 'Tomato sauce, mozzarella, spicy salami, chili', price30: 11.00, price40: 16.00, price50: 21.00 },
      { name: 'Vegetariana', description: 'Tomato sauce, mozzarella, grilled vegetables', price30: 10.00, price40: 14.50, price50: 19.00 },
      { name: 'Capricciosa', description: 'Tomato, mozzarella, ham, mushrooms, artichokes, olives', price30: 12.00, price40: 17.00, price50: 22.00 },
      { name: 'Quattro Stagioni', description: 'Four seasons with ham, mushrooms, artichokes, olives', price30: 12.50, price40: 17.50, price50: 23.00 },
    ],
    pasta: [
      { name: 'Spaghetti Carbonara', description: 'Eggs, pecorino, guanciale, black pepper', price: 12.00 },
      { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic & chili', price: 10.00 },
      { name: 'Fettuccine Alfredo', description: 'Creamy parmesan sauce with butter', price: 11.00 },
      { name: 'Lasagna', description: 'Layers of pasta, beef ragù, béchamel & cheese', price: 13.00 },
      { name: 'Spaghetti Bolognese', description: 'Classic meat sauce with parmesan', price: 11.50 },
    ],
    drinks: [
      { name: 'Coca-Cola', description: '330ml', price: 2.50 },
      { name: 'Sprite', description: '330ml', price: 2.50 },
      { name: 'Fanta Orange', description: '330ml', price: 2.50 },
      { name: 'Sparkling Water', description: '500ml', price: 2.00 },
      { name: 'Still Water', description: '500ml', price: 1.50 },
      { name: 'Fresh Orange Juice', description: 'Freshly squeezed', price: 4.00 },
      { name: 'Espresso', description: 'Single shot', price: 2.00 },
      { name: 'House Wine', description: 'Glass - Red or White', price: 4.50 },
      { name: 'Beer', description: '330ml bottle', price: 4.00 },
    ],
  },
  el: {
    categories: [
      { id: 'appetizers', name: 'Ορεκτικά' },
      { id: 'salads', name: 'Σαλάτες' },
      { id: 'pizzas', name: 'Πίτσες' },
      { id: 'pasta', name: 'Ζυμαρικά' },
      { id: 'drinks', name: 'Ποτά' },
    ],
    appetizers: [
      { name: 'Μπρουσκέτα', description: 'Ψητό ψωμί με ντομάτα, σκόρδο, βασιλικό & ελαιόλαδο', price: 5.50 },
      { name: 'Σκορδόψωμο', description: 'Τραγανό ψωμί με σκορδόβουτυρο & μυρωδικά', price: 4.00 },
      { name: 'Μοτσαρέλα Στικς', description: 'Τηγανητή μοτσαρέλα με σάλτσα μαρινάρα', price: 7.50 },
      { name: 'Καλαμαράκια Τηγανητά', description: 'Τραγανά καλαμαράκια με σάλτσα λεμονιού', price: 9.00 },
      { name: 'Καπρέζε', description: 'Φρέσκια μοτσαρέλα, ντομάτα, βασιλικός & βαλσάμικο', price: 8.50 },
    ],
    salads: [
      { name: 'Χωριάτικη', description: 'Ντομάτα, αγγούρι, ελιές, φέτα & ρίγανη', price: 8.00 },
      { name: 'Σαλάτα του Καίσαρα', description: 'Μαρούλι, παρμεζάνα, κρουτόν & σάλτσα Caesar', price: 9.00 },
      { name: 'Σαλάτα Ρόκα', description: 'Φρέσκια ρόκα, παρμεζάνα & βαλσάμικο', price: 7.50 },
      { name: 'Πράσινη Σαλάτα', description: 'Εποχιακά πράσινα με βινεγκρέτ', price: 6.50 },
    ],
    pizzas: [
      { name: 'Μαργαρίτα', description: 'Σάλτσα ντομάτας, μοτσαρέλα, φρέσκος βασιλικός', price30: 9.00, price40: 13.00, price50: 17.00 },
      { name: 'Πεπερόνι', description: 'Σάλτσα ντομάτας, μοτσαρέλα, πικάντικο πεπερόνι', price30: 10.50, price40: 15.00, price50: 19.50 },
      { name: 'Κουάτρο Φορμάτζι', description: 'Μοτσαρέλα, γκοργκονζόλα, παρμεζάνα, κατσικίσιο', price30: 11.00, price40: 16.00, price50: 21.00 },
      { name: 'Προσούτο ε Φούνγκι', description: 'Σάλτσα ντομάτας, μοτσαρέλα, ζαμπόν, μανιτάρια', price30: 11.50, price40: 16.50, price50: 21.50 },
      { name: 'Ντιάβολα', description: 'Σάλτσα ντομάτας, μοτσαρέλα, πικάντικο σαλάμι, καυτερή πιπεριά', price30: 11.00, price40: 16.00, price50: 21.00 },
      { name: 'Βετζιτεριάνα', description: 'Σάλτσα ντομάτας, μοτσαρέλα, ψητά λαχανικά', price30: 10.00, price40: 14.50, price50: 19.00 },
      { name: 'Καπριτσιόζα', description: 'Ντομάτα, μοτσαρέλα, ζαμπόν, μανιτάρια, αγκινάρες, ελιές', price30: 12.00, price40: 17.00, price50: 22.00 },
      { name: 'Κουάτρο Σταντζιόνι', description: 'Τέσσερις εποχές με ζαμπόν, μανιτάρια, αγκινάρες, ελιές', price30: 12.50, price40: 17.50, price50: 23.00 },
    ],
    pasta: [
      { name: 'Σπαγγέτι Καρμπονάρα', description: 'Αυγά, πεκορίνο, γκουαντσιάλε, μαύρο πιπέρι', price: 12.00 },
      { name: 'Πένες Αραμπιάτα', description: 'Πικάντικη σάλτσα ντομάτας με σκόρδο & καυτερή πιπεριά', price: 10.00 },
      { name: 'Φετουτσίνι Αλφρέντο', description: 'Κρεμώδης σάλτσα παρμεζάνας με βούτυρο', price: 11.00 },
      { name: 'Λαζάνια', description: 'Στρώσεις ζυμαρικού, ραγού κιμά, μπεσαμέλ & τυρί', price: 13.00 },
      { name: 'Σπαγγέτι Μπολονέζ', description: 'Κλασική σάλτσα κιμά με παρμεζάνα', price: 11.50 },
    ],
    drinks: [
      { name: 'Κόκα-Κόλα', description: '330ml', price: 2.50 },
      { name: 'Σπράιτ', description: '330ml', price: 2.50 },
      { name: 'Φάντα Πορτοκάλι', description: '330ml', price: 2.50 },
      { name: 'Ανθρακούχο Νερό', description: '500ml', price: 2.00 },
      { name: 'Νερό', description: '500ml', price: 1.50 },
      { name: 'Φρέσκος Χυμός Πορτοκάλι', description: 'Φρεσκοστυμμένος', price: 4.00 },
      { name: 'Εσπρέσο', description: 'Μονός', price: 2.00 },
      { name: 'Κρασί Χύμα', description: 'Ποτήρι - Κόκκινο ή Λευκό', price: 4.50 },
      { name: 'Μπύρα', description: 'Μπουκάλι 330ml', price: 4.00 },
    ],
  },
};

export default function Menu() {
  const [language, setLanguage] = useState('el');
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const content = translations[language];

  const scrollToSection = useCallback((categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(categoryId);
    }
  }, []);

  // Track scroll position to update active category
  useEffect(() => {
    const handleScroll = () => {
      const sections = content.categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.categories]);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <MenuHeader 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      
      <CategoryNav 
        categories={content.categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToSection}
      />

      <main className="pb-8 w-full">
        {/* Appetizers */}
        <MenuSection id="appetizers" title={content.categories[0].name}>
          {content.appetizers.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </MenuSection>

        {/* Salads */}
        <MenuSection id="salads" title={content.categories[1].name}>
          {content.salads.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </MenuSection>

        {/* Pizzas */}
        <MenuSection id="pizzas" title={content.categories[2].name}>
          {content.pizzas.map((pizza, idx) => (
            <PizzaItem key={idx} pizza={pizza} />
          ))}
        </MenuSection>

        {/* Pasta */}
        <MenuSection id="pasta" title={content.categories[3].name}>
          {content.pasta.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </MenuSection>

        {/* Drinks */}
        <MenuSection id="drinks" title={content.categories[4].name}>
          {content.drinks.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </MenuSection>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-5 px-3 text-center w-full">
        <p className="text-sm text-gray-400">
          {language === 'el' ? 'Καλή όρεξη!' : 'Buon appetito!'}
        </p>
      </footer>
    </div>
  );
}