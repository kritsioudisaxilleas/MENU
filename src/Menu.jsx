import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/button";
import { cn } from "@/components/utils";

const menuData = {
appetizers: [
{
    id: 101,
    name: {
      en: "Garlic Bread",
      el: "Ψωμί Σκόρδου"
    },
    description: {
      en: "Toasted bread with garlic butter and herbs",
      el: "Φρυγανισμένο ψωμί με βούτυρο σκόρδου και μυρωδικά"
    },
    price: 5.50
  }
],
  pizzas: [
    {
      id: 24,
      name: { en: "Tapa's Pizza", el: "Πίτσα του Τάπα" },
      description: { 
        en: "Tomato sauce, mozzarella, rocket, beer salami, pepperoni", 
        el: "Σάλτσα ντομάτας, μοτσαρέλα, ρόκα, σαλάμι μπύρας, πεπερόνι " 
      },
      prices: { "30cm": 14.00, "40cm": 17.00, "50cm": 19.00 }
    },
    {
      id: 1,
      name: { en: "Margherita", el: "Μαργαρίτα" },
      description: { 
        en: "Tomato sauce, gouda ", 
        el: "Σάλτσα ντομάτας, γκούντα" 
      },
      prices: { "30cm": 12.00, "40cm": 14.00, "50cm": 16.00 }
    },
    {
      id: 2,
      name: { en: "Light pizza", el: "Πίτσα λάιτ" },
      description: { 
        en: "Tomato sauce, mozzarella, turkey, chicken, mushrooms, peppers", 
        el: "Σάλτσα ντομάτας, μοτσαρέλα, γαλοπούλα, κοτόπουλο, μανιτάρια, πιπεριά" 
      },
      prices: { "30cm": 14.00, "40cm": 17.00, "50cm": 19.00 }
    },
    {
      id: 3,
      name: { en: "Special", el: "Σπέσιαλ" },
      description: { 
        en: "Tomato sauce, guda, ham, bacon, beer salami, peperoni, mushrooms, peppers", 
        el: "Σάλτσα τομάτας, γκούντα, ζαμπόν, μπέικον, σαλάμι μπύρας, πεπερόνι, μανιτάρια, πιπεριές" 
      },
      prices: { "30cm": 12.50, "40cm": 17.50, "50cm": 23.00 }
    },
    {
      id: 4,
      name: { en: "Prosciutto e Rucola", el: "Προσούτο και Ρόκα" },
      description: { 
        en: "Tomato sauce, mozzarella, prosciutto, arugula, parmesan", 
        el: "Σάλτσα ντομάτας, μοτσαρέλα, προσούτο, ρόκα, παρμεζάνα" 
      },
      prices: { "30cm": 13.00, "40cm": 18.50, "50cm": 24.50 }
    },
    {
      id: 5,
      name: { en: "Vegetariana", el: "Βετζετεριάνα" },
      description: { 
        en: "Tomato sauce, mozzarella, peppers, mushrooms, olives, onions", 
        el: "Σάλτσα ντομάτας, μοτσαρέλα, πιπεριές, μανιτάρια, ελιές, κρεμμύδια" 
      },
      prices: { "30cm": 11.50, "40cm": 16.50, "50cm": 22.00 }
    },
    {
      id: 6,
      name: { en: "Diavola", el: "Ντιάβολα" },
      description: { 
        en: "Tomato sauce, mozzarella, spicy salami, chili flakes", 
        el: "Σάλτσα ντομάτας, μοτσαρέλα, πικάντικο σαλάμι, νιφάδες τσίλι" 
      },
      prices: { "30cm": 12.00, "40cm": 17.00, "50cm": 22.50 }
    }
  ],
  pastas: [
    {
      id: 7,
      name: { en: "Spaghetti Carbonara", el: "Σπαγγέτι Καρμπονάρα" },
      description: { 
        en: "Guanciale, egg yolk, pecorino, black pepper", 
        el: "Γκουαντσιάλε, κρόκος αυγού, πεκορίνο, μαύρο πιπέρι" 
      },
      price: 14.50
    },
    {
      id: 8,
      name: { en: "Penne Arrabbiata", el: "Πένες Αραμπιάτα" },
      description: { 
        en: "Spicy tomato sauce, garlic, chili, parsley", 
        el: "Πικάντικη σάλτσα ντομάτας, σκόρδο, τσίλι, μαϊντανός" 
      },
      price: 12.00
    },
    {
      id: 9,
      name: { en: "Tagliatelle Bolognese", el: "Ταλιατέλες Μπολονέζ" },
      description: { 
        en: "Slow-cooked beef ragù, parmesan", 
        el: "Αργομαγειρεμένο ραγού μοσχαριού, παρμεζάνα" 
      },
      price: 15.00
    },
    {
      id: 10,
      name: { en: "Linguine al Pesto", el: "Λινγκουίνι με Πέστο" },
      description: { 
        en: "Fresh basil pesto, pine nuts, parmesan", 
        el: "Φρέσκο πέστο βασιλικού, κουκουνάρι, παρμεζάνα" 
      },
      price: 13.50
    },
    {
      id: 11,
      name: { en: "Rigatoni alla Norma", el: "Ριγκατόνι αλά Νόρμα" },
      description: { 
        en: "Eggplant, tomato sauce, ricotta salata, basil", 
        el: "Μελιτζάνα, σάλτσα ντομάτας, ρικότα σαλάτα, βασιλικός" 
      },
      price: 13.00
    }
  ],
  salads: [
    {
      id: 12,
      name: { en: "Greek Salad", el: "Χωριάτικη" },
      description: { 
        en: "Tomatoes, cucumbers, onions, olives, feta, oregano", 
        el: "Ντομάτες, αγγούρια, κρεμμύδια, ελιές, φέτα, ρίγανη" 
      },
      price: 9.50
    },
    {
      id: 13,
      name: { en: "Caesar Salad", el: "Σαλάτα Σίζαρ" },
      description: { 
        en: "Romaine lettuce, croutons, parmesan, caesar dressing", 
        el: "Μαρούλι ρομέιν, κρουτόν, παρμεζάνα, σως σίζαρ" 
      },
      price: 10.50
    },
    {
      id: 14,
      name: { en: "Caprese", el: "Καπρέζε" },
      description: { 
        en: "Buffalo mozzarella, tomatoes, basil, olive oil", 
        el: "Μοτσαρέλα βουβαλίσια, ντομάτες, βασιλικός, ελαιόλαδο" 
      },
      price: 11.00
    },
    {
      id: 15,
      name: { en: "Rocket & Parmesan", el: "Ρόκα με Παρμεζάνα" },
      description: { 
        en: "Fresh arugula, parmesan shavings, balsamic glaze", 
        el: "Φρέσκια ρόκα, φλούδες παρμεζάνας, γλάσο βαλσάμικου" 
      },
      price: 9.00
    }
  ],
  drinks: [
    {
      id: 16,
      name: { en: "Water 500ml", el: "Νερό 500ml" },
      description: { en: "Still or sparkling", el: "Φυσικό ή ανθρακούχο" },
      price: 2.00
    },
    {
      id: 17,
      name: { en: "Coca-Cola", el: "Coca-Cola" },
      description: { en: "330ml can", el: "Κουτί 330ml" },
      price: 2.50
    },
    {
      id: 18,
      name: { en: "Fresh Orange Juice", el: "Φρέσκος Χυμός Πορτοκάλι" },
      description: { en: "Freshly squeezed", el: "Φρεσκοστυμμένος" },
      price: 4.50
    },
    {
      id: 19,
      name: { en: "Homemade Lemonade", el: "Σπιτική Λεμονάδα" },
      description: { en: "Fresh lemons, mint", el: "Φρέσκα λεμόνια, δυόσμος" },
      price: 4.00
    },
    {
      id: 20,
      name: { en: "Espresso", el: "Εσπρέσο" },
      description: { en: "Single shot", el: "Μονό" },
      price: 2.50
    },
    {
      id: 21,
      name: { en: "Cappuccino", el: "Καπουτσίνο" },
      description: { en: "With steamed milk foam", el: "Με αφρόγαλα" },
      price: 3.50
    },
    {
      id: 22,
      name: { en: "House Wine", el: "Κρασί Χύμα" },
      description: { en: "Red or white, per glass", el: "Κόκκινο ή λευκό, το ποτήρι" },
      price: 4.00
    },
    {
      id: 23,
      name: { en: "Draft Beer", el: "Μπύρα Βαρελίσια" },
      description: { en: "400ml", el: "400ml" },
      price: 4.50
    }
  ]
};

const categories = [
   { id: 'appetizers', en: 'Appetizers', el: 'Ορεκτικά' },
  { id: 'salads', en: 'Salads', el: 'Σαλάτες' },
  { id: 'pizzas', en: 'Pizzas', el: 'Πίτσες' },
  { id: 'pastas', en: 'Pastas', el: 'Ζυμαρικά' },
  { id: 'drinks', en: 'Drinks', el: 'Ποτά' }
];

const pizzaSizes = ["30cm", "40cm", "50cm"];

function PizzaItem({ item, lang }) {
  const [selectedSize, setSelectedSize] = useState("30cm");
  
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-200 ease-out hover:shadow-md">
      <div className="flex justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug break-words">{item.name[lang]}</h3>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1.5 leading-relaxed break-words">{item.description[lang]}</p>
        </div>
        <span className="text-base sm:text-lg font-bold text-red-600 whitespace-nowrap ml-2 flex-shrink-0">
          €{item.prices[selectedSize].toFixed(2)}
        </span>
      </div>
      <div className="flex gap-1.5 sm:gap-2">
        {pizzaSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={cn(
              "flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-out",
              selectedSize === size
                ? "bg-red-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item, lang }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-200 ease-out hover:shadow-md">
      <div className="flex justify-between items-start gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 break-words">{item.name[lang]}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed break-words">{item.description[lang]}</p>
        </div>
        <span className="text-base sm:text-lg font-bold text-red-600 whitespace-nowrap ml-2 flex-shrink-0">
          €{item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default function Menu() {
  const [lang, setLang] = useState('el');
  const [activeSection, setActiveSection] = useState('pizzas');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['appetizers', 'salads', 'pizzas', 'pastas', 'drinks'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="px-3 sm:px-4 py-2">
          {/* Logo & Language Toggle */}
          <div className="flex items-center justify-between mb-3 sm:mb-5">
            <button
              onClick={scrollToTop} 
              type="button"
              className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/90 border border-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm transition-all duration-200 ease-out active:scale-95"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg sm:text-xl font-bold">🍕</span>
              </div>
              <span className="text-sm sm:text-[15px] font-bold text-gray-900 tracking-tight">PizzaTapas</span>
            </button>

            <div className="inline-flex rounded-full bg-gray-100 p-1 border border-gray-200 flex-shrink-0">
              <button
                type="button"
                onClick={() => setLang("el")}
                className={cn(
                  "px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ease-out",
                  lang === "el"
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                ΕΛ
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ease-out",
                  lang === "en"
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                EN
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveSection(cat.id);
                  scrollToSection(cat.id);
                }}
                className={cn(
                  "min-w-[90px] sm:min-w-[120px] py-2.5 sm:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0",
                  activeSection === cat.id
                    ? "bg-red-50 text-red-700 border border-red-500 shadow-sm"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:scale-95"
                )}
              >
                {cat[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 sm:px-5 py-6 space-y-10 sm:space-y-12 pb-10">
        {/* Appetizers */}
        <section id="appetizers">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            {lang === 'en' ? 'Appetizers' : 'Ορεκτικά'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {menuData.appetizers.map((item) => (
              <MenuItem key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        {/* Salads */}
        <section id="salads">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            {lang === 'en' ? 'Salads' : 'Σαλάτες'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {menuData.salads.map((item) => (
              <MenuItem key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        {/* Pizzas */}
        <section id="pizzas">
          <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mb-3 sm:mb-4">
            {lang === 'en' ? 'Pizzas' : 'Πίτσες'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {menuData.pizzas.map((item) => (
              <PizzaItem key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        {/* Pastas */}
        <section id="pastas">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            {lang === 'en' ? 'Pastas' : 'Ζυμαρικά'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {menuData.pastas.map((item) => (
              <MenuItem key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section id="drinks">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            {lang === 'en' ? 'Drinks' : 'Ποτά'}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {menuData.drinks.map((item) => (
              <MenuItem key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer Information */}
      <div className="px-4 sm:px-5 py-6 bg-white">
        <p className="text-xs font-medium text-gray-400 text-center leading-relaxed">
          {lang === 'en' 
            ? 'All prices include VAT • Please inform us about any food allergies'
            : 'Όλες οι τιμές συμπεριλαμβάνουν ΦΠΑ • Παρακαλούμε ενημερώστε μας για τυχόν τροφικές αλλεργίες'}
        </p>
      </div>
    </div>
  );
}