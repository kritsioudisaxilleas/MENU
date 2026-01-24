export const menuData = {
  appetizers: [
    {
      id: 1,
      nameEl: 'Μπρουσκέτα Κλασική',
      nameEn: 'Classic Bruschetta',
      descEl: 'Ψημένο ψωμί με φρέσκια ντομάτα, βασιλικό και σκόρδο',
      descEn: 'Toasted bread with fresh tomato, basil and garlic',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
      tags: ['Vegetarian']
    },
    {
      id: 2,
      nameEl: 'Τηγανητά Καλαμαράκια',
      nameEn: 'Fried Calamari',
      descEl: 'Τραγανά καλαμαράκια με σάλτσα ταρτάρ',
      descEn: 'Crispy calamari rings with tartar sauce',
      price: 9.90,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      nameEl: 'Τυροπιτάκια',
      nameEn: 'Cheese Pies',
      descEl: 'Σπιτικά τυροπιτάκια με φέτα και κασέρι',
      descEn: 'Homemade cheese pies with feta and kasseri',
      price: 7.50,
      image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop',
      tags: ['Vegetarian', 'Popular']
    },
    {
      id: 4,
      nameEl: 'Κολοκυθοκεφτέδες',
      nameEn: 'Zucchini Fritters',
      descEl: 'Με γιαούρτι και δυόσμο',
      descEn: 'With yogurt and mint dip',
      price: 7.00,
      image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop',
      tags: ['Vegetarian']
    }
  ],
  salads: [
    {
      id: 5,
      nameEl: 'Χωριάτικη Σαλάτα',
      nameEn: 'Greek Salad',
      descEl: 'Ντομάτα, αγγούρι, πιπεριά, κρεμμύδι, ελιές, φέτα',
      descEn: 'Tomato, cucumber, pepper, onion, olives, feta cheese',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
      tags: ['Vegetarian', 'Classic']
    },
    {
      id: 6,
      nameEl: 'Σαλάτα του Σεφ',
      nameEn: 'Chef\'s Salad',
      descEl: 'Μαρούλι, κοτόπουλο, μπέικον, αυγό, παρμεζάνα',
      descEn: 'Lettuce, chicken, bacon, egg, parmesan',
      price: 11.50,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      tags: ['Popular']
    },
    {
      id: 7,
      nameEl: 'Σαλάτα Καίσαρα',
      nameEn: 'Caesar Salad',
      descEl: 'Μαρούλι, κρουτόν, παρμεζάνα, σάλτσα καίσαρα',
      descEn: 'Romaine, croutons, parmesan, caesar dressing',
      price: 9.50,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      nameEl: 'Σαλάτα Ρόκα Παρμεζάνα',
      nameEn: 'Rocket Parmesan Salad',
      descEl: 'Ρόκα, παρμεζάνα, ντοματίνια, βαλσάμικο',
      descEn: 'Arugula, parmesan, cherry tomatoes, balsamic',
      price: 8.90,
      image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
      tags: ['Vegetarian']
    }
  ],
  pizzas: [
    {
      id: 9,
      nameEl: 'Μαργαρίτα',
      nameEn: 'Margherita',
      descEl: 'Σάλτσα ντομάτας, μοτσαρέλα, φρέσκος βασιλικός',
      descEn: 'Tomato sauce, mozzarella, fresh basil',
      prices: { small: 8.50, medium: 11.50, large: 14.50 },
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      tags: ['Vegetarian', 'Classic']
    },
    {
      id: 10,
      nameEl: 'Πεπερόνι',
      nameEn: 'Pepperoni',
      descEl: 'Σάλτσα ντομάτας, μοτσαρέλα, πικάντικο πεπερόνι',
      descEn: 'Tomato sauce, mozzarella, spicy pepperoni',
      prices: { small: 9.50, medium: 12.90, large: 16.50 },
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
      tags: ['Spicy', 'Popular']
    },
    {
      id: 11,
      nameEl: 'Τέσσερα Τυριά',
      nameEn: 'Quattro Formaggi',
      descEl: 'Μοτσαρέλα, γκοργκοντζόλα, παρμεζάνα, προβολόνε',
      descEn: 'Mozzarella, gorgonzola, parmesan, provolone',
      prices: { small: 10.50, medium: 14.50, large: 18.50 },
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      tags: ['Vegetarian', 'Chef\'s Pick']
    },
    {
      id: 12,
      nameEl: 'Χαβάη',
      nameEn: 'Hawaiian',
      descEl: 'Σάλτσα ντομάτας, μοτσαρέλα, ζαμπόν, ανανάς',
      descEn: 'Tomato sauce, mozzarella, ham, pineapple',
      prices: { small: 9.50, medium: 12.90, large: 16.50 },
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      id: 13,
      nameEl: 'Σπέσιαλ της Ταβέρνας',
      nameEn: 'House Special',
      descEl: 'Μοτσαρέλα, μπέικον, μανιτάρια, πιπεριές, κρεμμύδι',
      descEn: 'Mozzarella, bacon, mushrooms, peppers, onion',
      prices: { small: 11.50, medium: 15.50, large: 19.90 },
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop',
      tags: ['Popular', 'Chef\'s Pick']
    },
    {
      id: 14,
      nameEl: 'BBQ Κοτόπουλο',
      nameEn: 'BBQ Chicken',
      descEl: 'Σάλτσα BBQ, κοτόπουλο, κρεμμύδι, κόλιανδρος',
      descEn: 'BBQ sauce, chicken, red onion, cilantro',
      prices: { small: 10.50, medium: 14.50, large: 18.50 },
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop'
    }
  ],
  pasta: [
    {
      id: 15,
      nameEl: 'Καρμπονάρα',
      nameEn: 'Carbonara',
      descEl: 'Σπαγγέτι με μπέικον, αυγό, παρμεζάνα, πιπέρι',
      descEn: 'Spaghetti with bacon, egg, parmesan, pepper',
      price: 11.50,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
      tags: ['Classic', 'Popular']
    },
    {
      id: 16,
      nameEl: 'Μπολονέζ',
      nameEn: 'Bolognese',
      descEl: 'Σπαγγέτι με σάλτσα κιμά βοδινού',
      descEn: 'Spaghetti with beef meat sauce',
      price: 11.90,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
    },
    {
      id: 17,
      nameEl: 'Αραμπιάτα',
      nameEn: 'Arrabbiata',
      descEl: 'Πένες με πικάντικη σάλτσα ντομάτας και τσίλι',
      descEn: 'Penne with spicy tomato sauce and chili',
      price: 9.50,
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
      tags: ['Spicy', 'Vegetarian']
    },
    {
      id: 18,
      nameEl: 'Αλφρέντο',
      nameEn: 'Alfredo',
      descEl: 'Φετουτσίνι με κρεμώδη σάλτσα παρμεζάνας',
      descEn: 'Fettuccine with creamy parmesan sauce',
      price: 10.90,
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
      tags: ['Vegetarian']
    }
  ],
  drinks: [
    {
      id: 19,
      nameEl: 'Coca-Cola',
      nameEn: 'Coca-Cola',
      descEl: '330ml',
      descEn: '330ml',
      price: 2.50
    },
    {
      id: 20,
      nameEl: 'Νερό',
      nameEn: 'Water',
      descEl: '500ml',
      descEn: '500ml',
      price: 1.50
    },
    {
      id: 21,
      nameEl: 'Πορτοκαλάδα',
      nameEn: 'Orange Juice',
      descEl: 'Φρέσκος χυμός πορτοκάλι',
      descEn: 'Fresh squeezed orange juice',
      price: 4.00,
      tags: ['Fresh']
    },
    {
      id: 22,
      nameEl: 'Μπύρα Lager',
      nameEn: 'Lager Beer',
      descEl: '500ml',
      descEn: '500ml',
      price: 4.50
    },
    {
      id: 23,
      nameEl: 'Κρασί (Ποτήρι)',
      nameEn: 'Wine (Glass)',
      descEl: 'Λευκό ή Κόκκινο',
      descEn: 'White or Red',
      price: 5.00
    },
    {
      id: 24,
      nameEl: 'Εσπρέσο',
      nameEn: 'Espresso',
      descEl: 'Single shot',
      descEn: 'Single shot',
      price: 2.00
    }
  ]
};

export const categoryKeys = ['appetizers', 'salads', 'pizzas', 'pasta', 'drinks'];