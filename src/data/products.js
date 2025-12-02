export const PRODUCT_DATA = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    price: 499.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    description: "Transform your living space with this luxurious modern velvet sofa. Featuring plush cushioning and elegant velvet upholstery, this sofa combines comfort with contemporary style. Perfect for any modern home.",
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    reviews: [
      { id: 1, author: "Sarah M.", rating: 5, date: "2024-11-15", comment: "Absolutely love this sofa! The velvet is so soft and the color is perfect. Very comfortable and looks amazing in my living room." },
      { id: 2, author: "John D.", rating: 4, date: "2024-11-10", comment: "Great quality sofa. Assembly was straightforward. Only minor issue is it's slightly firmer than expected, but still very comfortable." },
      { id: 3, author: "Emily R.", rating: 5, date: "2024-11-05", comment: "Best purchase I've made this year! The quality is exceptional and it's so comfortable. Worth every penny!" }
    ],
    dimensions: "84\" W x 36\" D x 32\" H",
    material: "Velvet upholstery, hardwood frame",
    colors: ["Navy Blue", "Emerald Green", "Blush Pink"]
  },
  {
    id: 2,
    name: "Minimalist Wooden Table",
    price: 199.50,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80",
    description: "A stunning minimalist wooden table crafted from sustainable oak. Clean lines and natural wood grain make this table a timeless centerpiece for any dining room or kitchen.",
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      { id: 1, author: "Michael T.", rating: 5, date: "2024-11-20", comment: "Beautiful table! The wood quality is excellent. Very sturdy and the finish is smooth. Perfect for our dining room." },
      { id: 2, author: "Lisa K.", rating: 4, date: "2024-11-12", comment: "Really nice table. Easy to assemble and looks great. Wish it was slightly larger but overall very happy." }
    ],
    dimensions: "60\" L x 30\" W x 30\" H",
    material: "Solid oak wood",
    colors: ["Natural Oak", "Walnut", "White Oak"]
  },
  {
    id: 3,
    name: "Ceramic Vase Set",
    price: 45.00,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80",
    description: "Elevate your home decor with this elegant set of three ceramic vases. Each piece features a unique shape and matte finish, perfect for displaying your favorite flowers or as standalone decorative pieces.",
    inStock: true,
    rating: 4.3,
    reviewCount: 156,
    reviews: [
      { id: 1, author: "Anna P.", rating: 4, date: "2024-11-18", comment: "Really pretty vases. They look exactly as pictured. Nice quality ceramic." },
      { id: 2, author: "David L.", rating: 5, date: "2024-11-08", comment: "These vases are absolutely stunning! They add such a nice touch to my shelves." }
    ],
    dimensions: "Set of 3: Small 6\"H, Medium 8\"H, Large 10\"H",
    material: "High-quality ceramic with matte glaze",
    colors: ["White", "Sage Green", "Terracotta"]
  },
  {
    id: 4,
    name: "Abstract Wall Art",
    price: 120.00,
    category: "Art",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description: "Make a bold statement with this contemporary abstract wall art. Hand-painted with rich textures and vibrant colors, this piece adds sophistication and personality to any room.",
    inStock: false,
    rating: 4.8,
    reviewCount: 74,
    reviews: [
      { id: 1, author: "Rachel W.", rating: 5, date: "2024-10-28", comment: "Absolutely gorgeous! The colors are even more vibrant in person. It's the perfect focal point for my living room." },
      { id: 2, author: "Tom H.", rating: 5, date: "2024-10-15", comment: "Amazing quality. Came well-packaged and ready to hang. Highly recommend!" }
    ],
    dimensions: "36\" W x 48\" H",
    material: "Canvas print on wooden frame",
    colors: ["Multicolor"]
  },
  {
    id: 5,
    name: "Geometric Rug",
    price: 89.99,
    category: "Rugs",
    image: "https://images.unsplash.com/photo-1575414723300-0d0ae6cf377a?auto=format&fit=crop&w=800&q=80",
    description: "Add modern flair to your space with this geometric patterned rug. Soft, durable, and stain-resistant, it's perfect for high-traffic areas while maintaining its stylish appearance.",
    inStock: true,
    rating: 4.4,
    reviewCount: 203,
    reviews: [
      { id: 1, author: "Jennifer S.", rating: 4, date: "2024-11-22", comment: "Nice rug, good quality. Colors match the photo perfectly. Soft underfoot." },
      { id: 2, author: "Mark B.", rating: 5, date: "2024-11-16", comment: "Love this rug! It's exactly what I was looking for. Great quality and the pattern is beautiful." }
    ],
    dimensions: "5' x 7' (also available in 8' x 10')",
    material: "Polypropylene blend",
    colors: ["Gray & White", "Navy & Cream", "Black & Gold"]
  },
  {
    id: 6,
    name: "Industrial Floor Lamp",
    price: 150.00,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003013-d534d80512b8?auto=format&fit=crop&w=800&q=80",
    description: "Illuminate your space with industrial charm. This floor lamp features an adjustable arm and vintage-inspired bulb, perfect for reading nooks or adding ambient lighting to any room.",
    inStock: true,
    rating: 4.6,
    reviewCount: 92,
    reviews: [
      { id: 1, author: "Chris P.", rating: 5, date: "2024-11-19", comment: "Perfect lamp! Love the industrial look. Very sturdy and the adjustable arm is super convenient." },
      { id: 2, author: "Sophie M.", rating: 4, date: "2024-11-11", comment: "Great quality lamp. Looks fantastic in my office. The only thing is the bulb isn't included." }
    ],
    dimensions: "65\" H, adjustable arm",
    material: "Metal frame with matte black finish",
    colors: ["Matte Black", "Brushed Bronze"]
  },
  {
    id: 7,
    name: "Cozy Knit Throw Blanket",
    price: 35.00,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=800&q=80",
    description: "Wrap yourself in comfort with this ultra-soft knit throw blanket. Made from premium materials, it's perfect for cozy evenings on the couch or adding a touch of warmth to your bedroom decor.",
    inStock: true,
    rating: 4.9,
    reviewCount: 312,
    reviews: [
      { id: 1, author: "Amy L.", rating: 5, date: "2024-11-24", comment: "This blanket is SO soft! I bought two more as gifts. Perfect weight and size." },
      { id: 2, author: "Robert J.", rating: 5, date: "2024-11-21", comment: "Best blanket ever! Super cozy and washes well. Highly recommend!" },
      { id: 3, author: "Nina K.", rating: 5, date: "2024-11-17", comment: "Amazing quality! Exceeded my expectations. So warm and comfortable!" }
    ],
    dimensions: "50\" x 60\"",
    material: "100% premium cotton blend",
    colors: ["Cream", "Gray", "Burgundy", "Navy"]
  },
  {
    id: 8,
    name: "Marble Coasters (Set of 4)",
    price: 25.00,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80",
    description: "Protect your surfaces in style with these elegant marble coasters. Each piece features unique natural veining, making every set one-of-a-kind. Includes cork backing to prevent scratches.",
    inStock: true,
    rating: 4.2,
    reviewCount: 167,
    reviews: [
      { id: 1, author: "Karen W.", rating: 4, date: "2024-11-14", comment: "Beautiful coasters! Each one is unique. A bit heavy but very elegant." },
      { id: 2, author: "Paul D.", rating: 4, date: "2024-11-09", comment: "Nice quality. Look great on my coffee table. Would recommend!" }
    ],
    dimensions: "4\" diameter each",
    material: "Natural marble with cork backing",
    colors: ["White Marble", "Black Marble"]
  },
  {
    id: 9,
    name: "Potted Fiddle Leaf Fig",
    price: 60.00,
    category: "Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
    description: "Bring life to your space with this beautiful fiddle leaf fig plant. A popular choice for interior design, this low-maintenance plant adds a touch of nature and purifies the air in your home.",
    inStock: true,
    rating: 4.5,
    reviewCount: 143,
    reviews: [
      { id: 1, author: "Olivia T.", rating: 5, date: "2024-11-23", comment: "Arrived in perfect condition! Healthy plant and the pot is beautiful. Love it!" },
      { id: 2, author: "James R.", rating: 4, date: "2024-11-13", comment: "Nice plant, good size. Care instructions included were helpful." }
    ],
    dimensions: "3-4 feet tall in 10\" ceramic pot",
    material: "Live plant in ceramic pot",
    colors: ["White Pot", "Gray Pot", "Terracotta Pot"]
  },
  {
    id: 10,
    name: "Rattan Hanging Chair",
    price: 250.00,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1596162954151-cd88dd00e3f5?auto=format&fit=crop&w=800&q=80",
    description: "Create your perfect relaxation spot with this stylish rattan hanging chair. Hand-woven with natural materials, it includes plush cushions and a sturdy hanging system for safe installation.",
    inStock: false,
    rating: 4.7,
    reviewCount: 85,
    reviews: [
      { id: 1, author: "Michelle G.", rating: 5, date: "2024-10-30", comment: "I'm obsessed with this chair! It's my favorite spot to read. Very comfortable and sturdy." },
      { id: 2, author: "Brian K.", rating: 4, date: "2024-10-20", comment: "Great chair, installation was a bit tricky but worth it. Very comfortable!" }
    ],
    dimensions: "47\" H x 31\" W",
    material: "Natural rattan with cotton cushions",
    colors: ["Natural Rattan"]
  },
  {
    id: 11,
    name: "Modern Organic Vase",
    price: 65.00,
    category: "Decor",
    image: "/images/modern-vase.png",
    description: "This contemporary organic-shaped vase is a work of art in itself. Its flowing curves and minimalist design make it perfect for modern interiors, whether filled with flowers or displayed alone.",
    inStock: true,
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      { id: 1, author: "Grace H.", rating: 5, date: "2024-11-25", comment: "Stunning vase! The shape is so unique and elegant. Looks amazing on my dining table." },
      { id: 2, author: "Daniel M.", rating: 4, date: "2024-11-20", comment: "Really nice piece. Quality is great and arrived well-packaged." }
    ],
    dimensions: "12\" H x 8\" W",
    material: "Glazed ceramic",
    colors: ["Matte White", "Glossy Black", "Sage Green"]
  },
  {
    id: 12,
    name: "Gold & Marble Centerpiece",
    price: 180.00,
    category: "Decor",
    image: "/images/gold-marble-centerpiece.png",
    description: "Make a luxurious statement with this gold and marble centerpiece. Featuring genuine marble and brass accents, this piece adds opulence and sophistication to any dining table or console.",
    inStock: true,
    rating: 4.8,
    reviewCount: 62,
    reviews: [
      { id: 1, author: "Victoria S.", rating: 5, date: "2024-11-26", comment: "Absolutely gorgeous! The quality is exceptional. It's the perfect centerpiece for special occasions." },
      { id: 2, author: "Andrew F.", rating: 5, date: "2024-11-18", comment: "Stunning piece! Worth the investment. Looks incredibly luxurious." }
    ],
    dimensions: "14\" L x 6\" W x 4\" H",
    material: "Genuine marble with brass accents",
    colors: ["White Marble/Gold", "Black Marble/Gold"]
  },
  {
    id: 13,
    name: "Boho Macrame Wall Hanging",
    price: 55.00,
    category: "Art",
    image: "/images/boho-macrame.png",
    description: "Add bohemian charm to your walls with this handcrafted macrame wall hanging. Each piece is carefully knotted by skilled artisans, creating unique patterns and textures that bring warmth to any space.",
    inStock: true,
    rating: 4.4,
    reviewCount: 187,
    reviews: [
      { id: 1, author: "Hannah B.", rating: 5, date: "2024-11-22", comment: "Love it! Adds such a cozy, boho vibe to my bedroom. The quality is excellent." },
      { id: 2, author: "Lucas W.", rating: 4, date: "2024-11-15", comment: "Nice wall hanging. Exactly as described. Adds great texture to the room." }
    ],
    dimensions: "36\" L x 24\" W",
    material: "100% cotton cord on wooden dowel",
    colors: ["Natural", "Cream"]
  },
  {
    id: 14,
    name: "Smart Ambient Mood Light",
    price: 95.00,
    category: "Lighting",
    image: "/images/smart-ambient-light.png",
    description: "Set the perfect mood with this smart ambient light. Control colors, brightness, and schedules via smartphone app. Features 16 million color options and sync with music for an immersive experience.",
    inStock: true,
    rating: 4.5,
    reviewCount: 224,
    reviews: [
      { id: 1, author: "Alex C.", rating: 5, date: "2024-11-27", comment: "Amazing light! The app is easy to use and the color options are endless. Love the music sync feature!" },
      { id: 2, author: "Emma J.", rating: 4, date: "2024-11-24", comment: "Great product. Easy setup and works perfectly with Alexa. Very satisfied!" },
      { id: 3, author: "Ryan P.", rating: 5, date: "2024-11-19", comment: "Best smart light I've bought! The colors are vibrant and it's super responsive." }
    ],
    dimensions: "6\" diameter sphere",
    material: "Premium plastic with LED technology",
    colors: ["White (16M color options via app)"]
  },
];
