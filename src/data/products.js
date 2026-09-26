export const categories = [
  {
    id: 'black-tea',
    name: 'Black Tea',
    description: 'Bold, malty, full-bodied leaves for a strong morning cup.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    description: 'Light, grassy, and packed with antioxidants.',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'milk-tea',
    name: 'Milk Tea',
    description: 'Creamy, comforting blends made for everyday indulgence.',
    image: 'https://images.unsplash.com/photo-1643067077447-78239a403a18?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'herbal-tea',
    name: 'Herbal Tea',
    description: 'Caffeine-free infusions for calm evenings.',
    image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'premium-tea',
    name: 'Premium Tea',
    description: 'Rare, single-origin leaves for the discerning drinker.',
    image: 'https://images.unsplash.com/photo-1518881922778-bacb4debc3d7?q=80&w=800&auto=format&fit=crop',
  },
]

export const products = [
  {
    id: 'p1',
    name: 'Premium Black Tea',
    category: 'black-tea',
    price: 450,
    discount: 10,
    rating: 4.8,
    reviewCount: 132,
    stock: 24,
    badge: 'Best Seller',
    description:
      'A robust, full-bodied black tea hand-picked from high-altitude gardens. Rich amber liquor with notes of malt and dried fruit — perfect with or without milk.',
    ingredients: 'Whole-leaf Assam black tea.',
    images: [
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p2',
    name: 'Green Tea',
    category: 'green-tea',
    price: 380,
    discount: 0,
    rating: 4.6,
    reviewCount: 98,
    stock: 40,
    badge: 'New',
    description:
      'Delicately steamed green tea leaves with a fresh, vegetal aroma and a smooth, slightly sweet finish. Rich in antioxidants for a mindful daily ritual.',
    ingredients: 'Whole-leaf green tea.',
    images: [
      'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p3',
    name: 'Masala Tea',
    category: 'milk-tea',
    price: 420,
    discount: 15,
    rating: 4.9,
    reviewCount: 210,
    stock: 18,
    badge: 'Best Seller',
    description:
      'A warming blend of black tea and hand-ground spices — cardamom, cinnamon, ginger, and clove. Best brewed strong with milk and a touch of sweetness.',
    ingredients: 'Black tea, cardamom, cinnamon, ginger, clove, black pepper.',
    images: [
      'https://images.unsplash.com/photo-1643067077447-78239a403a18?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p4',
    name: 'Tulsi Tea',
    category: 'herbal-tea',
    price: 350,
    discount: 0,
    rating: 4.7,
    reviewCount: 76,
    stock: 30,
    badge: '',
    description:
      'A caffeine-free herbal infusion of holy basil leaves, known for its calming, grounding qualities. Gentle enough for any time of day.',
    ingredients: 'Whole tulsi (holy basil) leaves.',
    images: [
      'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p5',
    name: 'Jasmine Tea',
    category: 'premium-tea',
    price: 650,
    discount: 5,
    rating: 4.9,
    reviewCount: 54,
    stock: 12,
    badge: 'Limited',
    description:
      'Green tea leaves scented over fresh jasmine blossoms through a traditional multi-day process, yielding a delicately floral, honeyed cup.',
    ingredients: 'Green tea leaves, jasmine blossoms.',
    images: [
      'https://images.unsplash.com/photo-1648455321715-e8ed86188c0e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573784540576-21ddeff9479b?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p6',
    name: 'Earl Grey',
    category: 'black-tea',
    price: 480,
    discount: 0,
    rating: 4.5,
    reviewCount: 61,
    stock: 22,
    badge: '',
    description:
      'Classic black tea infused with natural bergamot oil for a bright, citrusy aroma and a clean, brisk finish.',
    ingredients: 'Black tea, natural bergamot oil.',
    images: [
      'https://images.unsplash.com/photo-1606163017137-888c0177b3dd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604697976842-d36fa5a1b2ed?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p7',
    name: 'Chamomile Tea',
    category: 'herbal-tea',
    price: 390,
    discount: 0,
    rating: 4.4,
    reviewCount: 43,
    stock: 26,
    badge: '',
    description:
      'Whole chamomile flowers with a soft, apple-like sweetness. A gentle, caffeine-free companion for winding down.',
    ingredients: 'Whole chamomile flowers.',
    images: [
      'https://images.unsplash.com/photo-1596344084757-b83f2081da8b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521012012373-6a85bade18da?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p8',
    name: 'Silver Needle White Tea',
    category: 'premium-tea',
    price: 890,
    discount: 0,
    rating: 4.9,
    reviewCount: 21,
    stock: 8,
    badge: 'Limited',
    description:
      'Rare, minimally processed white tea buds with a delicate, honey-sweet character. Hand-picked once a year at first flush.',
    ingredients: 'Whole white tea buds.',
    images: [
      'https://images.unsplash.com/photo-1518881922778-bacb4debc3d7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p9',
    name: 'Ginger Tea',
    category: 'herbal-tea',
    price: 360,
    discount: 0,
    rating: 4.6,
    reviewCount: 38,
    stock: 28,
    badge: 'New',
    description:
      'A warming, spicy infusion of fresh ginger root — soothing for digestion and perfect for cold evenings.',
    ingredients: 'Dried ginger root.',
    images: [
      'https://images.unsplash.com/photo-1491720731493-223f97d92c21?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p10',
    name: 'Peppermint Tea',
    category: 'herbal-tea',
    price: 340,
    discount: 0,
    rating: 4.5,
    reviewCount: 47,
    stock: 32,
    badge: '',
    description:
      'A cool, refreshing infusion of whole peppermint leaves — bright, clean, and naturally caffeine-free.',
    ingredients: 'Whole peppermint leaves.',
    images: [
      'https://images.unsplash.com/photo-1627894005682-166e8687356a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606377695906-236fdfcef767?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p11',
    name: 'Rose Green Tea',
    category: 'green-tea',
    price: 420,
    discount: 10,
    rating: 4.7,
    reviewCount: 29,
    stock: 16,
    badge: 'New',
    description:
      'Green tea leaves blended with dried rose petals for a soft, floral aroma and a delicately sweet finish.',
    ingredients: 'Green tea leaves, dried rose petals.',
    images: [
      'https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622480916113-9000ac49b79d?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p12',
    name: 'Darjeeling Tea',
    category: 'premium-tea',
    price: 720,
    discount: 0,
    rating: 4.8,
    reviewCount: 33,
    stock: 14,
    badge: 'Limited',
    description:
      'Often called the "Champagne of Teas" — a light, muscatel-flavoured black tea from the foothills of the Himalayas.',
    ingredients: 'Whole-leaf Darjeeling black tea.',
    images: [
      'https://images.unsplash.com/photo-1641997825980-cbaf406765db?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1641997827576-84d0a7e386bc?q=80&w=1000&auto=format&fit=crop',
    ],
  },
]

export const weightOptions = [
  { label: '100g', multiplier: 1 },
  { label: '250g', multiplier: 2.3 },
  { label: '500g', multiplier: 4.2 },
  { label: '1kg', multiplier: 7.8 },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Nusrat Jahan',
    rating: 5,
    text: 'The masala tea tastes exactly like the one my grandmother used to make. Fast delivery and beautiful packaging too.',
  },
  {
    id: 't2',
    name: 'Rafiul Islam',
    rating: 5,
    text: 'Sip Atelier\u2019s green tea is fresh and fragrant — you can really tell the difference from supermarket tea bags.',
  },
  {
    id: 't3',
    name: 'Tania Akter',
    rating: 4,
    text: 'Ordered the jasmine tea as a gift and it was a hit. Will definitely order again for myself.',
  },
]

export const faqs = [
  {
    id: 'f1',
    question: 'How should I store my tea?',
    answer:
      'Keep your tea in an airtight container, away from direct sunlight, heat, and moisture, to preserve its aroma and flavour for longer.',
  },
  {
    id: 'f2',
    question: 'How long does delivery take?',
    answer:
      'Orders within Dhaka are typically delivered in 1–2 business days. Outside Dhaka, delivery takes 3–5 business days.',
  },
  {
    id: 'f3',
    question: 'Do you offer Cash on Delivery?',
    answer:
      'Yes, Cash on Delivery is available across Bangladesh, alongside online payment options at checkout.',
  },
  {
    id: 'f4',
    question: 'Can I return a product?',
    answer:
      'If a product arrives damaged or incorrect, contact us within 48 hours of delivery for a replacement or refund.',
  },
]