import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaUtensils, FaSearch, FaHeart, FaShoppingCart, FaStar, FaClock, FaMapMarkerAlt, FaPhone, FaWineGlass, FaCoffee, FaIceCream, FaLeaf, FaFire, FaBan } from 'react-icons/fa';
import UserLayout from '@/components/layout/UserLayout';
import styles from '@/styles/modern.module.css';

export default function Restaurant() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [favorites, setFavorites] = useState<number[]>([]);

  const restaurants = [
    {
      id: 1,
      name: "Azure Fine Dining",
      cuisine: "Modern European",
      rating: 4.9,
      reviews: 234,
      priceRange: "$$$",
      location: "Main Building - Level 2",
      hours: "6:00 PM - 11:00 PM",
      phone: "+1 (555) 123-4567",
      description: "Experience culinary artistry with our award-winning chef's contemporary European creations.",
      image: "/images/azure-restaurant.jpg",
      specialties: ["Tasting Menu", "Wine Pairing", "Chef's Special"],
      ambiance: "Elegant & Romantic"
    },
    {
      id: 2,
      name: "Ocean Breeze Cafe",
      cuisine: "Mediterranean",
      rating: 4.7,
      reviews: 456,
      priceRange: "$$",
      location: "Poolside Terrace",
      hours: "7:00 AM - 10:00 PM",
      phone: "+1 (555) 123-4568",
      description: "Fresh Mediterranean flavors with stunning ocean views and casual elegance.",
      image: "/images/ocean-cafe.jpg",
      specialties: ["Fresh Seafood", "Grilled Dishes", "Healthy Options"],
      ambiance: "Casual & Scenic"
    },
    {
      id: 3,
      name: "The Grand Lobby Bar",
      cuisine: "Bar & Lounge",
      rating: 4.8,
      reviews: 189,
      priceRange: "$$",
      location: "Main Lobby",
      hours: "4:00 PM - 2:00 AM",
      phone: "+1 (555) 123-4569",
      description: "Sophisticated cocktails and light bites in our elegant lobby setting.",
      image: "/images/lobby-bar.jpg",
      specialties: ["Craft Cocktails", "Premium Spirits", "Light Appetizers"],
      ambiance: "Sophisticated & Social"
    }
  ];

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers', icon: FaUtensils },
    { id: 'mains', name: 'Main Courses', icon: FaUtensils },
    { id: 'desserts', name: 'Desserts', icon: FaIceCream },
    { id: 'beverages', name: 'Beverages', icon: FaCoffee },
    { id: 'wine', name: 'Wine & Spirits', icon: FaWineGlass }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Truffle Arancini",
      category: "appetizers",
      restaurant: "Azure Fine Dining",
      price: 24,
      description: "Crispy risotto balls filled with truffle and parmesan, served with roasted tomato sauce",
      image: "/images/truffle-arancini.jpg",
      rating: 4.8,
      reviews: 67,
      dietary: ["vegetarian"],
      prepTime: "15 min",
      spicyLevel: 0,
      popular: true
    },
    {
      id: 2,
      name: "Pan-Seared Halibut",
      category: "mains",
      restaurant: "Azure Fine Dining",
      price: 48,
      description: "Fresh halibut with cauliflower puree, roasted vegetables, and lemon herb butter",
      image: "/images/halibut.jpg",
      rating: 4.9,
      reviews: 89,
      dietary: ["gluten-free"],
      prepTime: "25 min",
      spicyLevel: 0,
      popular: true
    },
    {
      id: 3,
      name: "Mediterranean Mezze Platter",
      category: "appetizers",
      restaurant: "Ocean Breeze Cafe",
      price: 22,
      description: "Hummus, tapenade, grilled vegetables, olives, and warm pita bread",
      image: "/images/mezze.jpg",
      rating: 4.7,
      reviews: 134,
      dietary: ["vegetarian", "vegan"],
      prepTime: "10 min",
      spicyLevel: 1,
      popular: true
    },
    {
      id: 4,
      name: "Grilled Branzino",
      category: "mains",
      restaurant: "Ocean Breeze Cafe",
      price: 36,
      description: "Whole grilled Mediterranean sea bass with lemon, herbs, and olive oil",
      image: "/images/branzino.jpg",
      rating: 4.8,
      reviews: 156,
      dietary: ["gluten-free"],
      prepTime: "20 min",
      spicyLevel: 0,
      popular: false
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      category: "desserts",
      restaurant: "Azure Fine Dining",
      price: 16,
      description: "Warm chocolate cake with molten center, vanilla ice cream, and berry coulis",
      image: "/images/lava-cake.jpg",
      rating: 4.9,
      reviews: 203,
      dietary: ["vegetarian"],
      prepTime: "18 min",
      spicyLevel: 0,
      popular: true
    },
    {
      id: 6,
      name: "Signature Martini",
      category: "beverages",
      restaurant: "The Grand Lobby Bar",
      price: 18,
      description: "Premium gin or vodka with our house-made vermouth and garnish selection",
      image: "/images/martini.jpg",
      rating: 4.8,
      reviews: 78,
      dietary: [],
      prepTime: "5 min",
      spicyLevel: 0,
      popular: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = menuItems.find(i => i.id === parseInt(itemId));
      return total + (item ? item.price * count : 0);
    }, 0);
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian': return <FaLeaf className="text-green-500" />;
      case 'vegan': return <FaLeaf className="text-green-600" />;
      case 'gluten-free': return <FaBan className="text-orange-500" />;
      default: return null;
    }
  };

  const getSpicyLevel = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <FaFire 
        key={i} 
        className={i < level ? 'text-red-500' : 'text-gray-300'} 
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        {/* Hero Section */}
        <motion.section
          className={`${styles.heroSection} relative py-20 px-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 opacity-90"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Exceptional Dining
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-orange-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Savor culinary masterpieces crafted by world-renowned chefs in our elegant restaurants
            </motion.p>
          </div>
        </motion.section>

        {/* Search and Cart */}
        <section className="py-8 px-4 bg-white/80 backdrop-blur-sm border-b border-orange-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-orange-200 focus:border-orange-500"
                />
              </div>
              
              {getTotalItems() > 0 && (
                <Button className={`${styles.modernButton} ${styles.buttonPrimary} relative`}>
                  <FaShoppingCart className="mr-2" />
                  Cart ({getTotalItems()}) - ${getTotalPrice()}
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    {getTotalItems()}
                  </Badge>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Restaurants Overview */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Restaurants
            </motion.h2>
            
            <motion.div
              className="grid lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {restaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  variants={itemVariants}
                  className={`${styles.modernCard} overflow-hidden`}
                  whileHover={{ y: -4 }}
                >
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaUtensils className="text-5xl text-white opacity-50" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{restaurant.name}</h3>
                        <p className="text-orange-600 font-semibold">{restaurant.cuisine}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                          <FaStar />
                          <span className="text-sm font-bold text-gray-700">{restaurant.rating}</span>
                          <span className="text-xs text-gray-500">({restaurant.reviews})</span>
                        </div>
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          {restaurant.priceRange}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-orange-500" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-orange-500" />
                        <span>{restaurant.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-600">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50">
                        View Menu
                      </Button>
                      <Button className={`${styles.modernButton} ${styles.buttonPrimary} flex-1`}>
                        Reserve Table
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-12 px-4 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Menu
            </motion.h2>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8 bg-orange-50 border border-orange-200">
                <TabsTrigger value="all" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                  All Items
                </TabsTrigger>
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    <category.icon className="mr-2" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="space-y-6">
                <motion.div
                  className="grid lg:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className={`${styles.modernCard} overflow-hidden`}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex gap-4 p-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-80"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FaUtensils className="text-2xl text-white opacity-50" />
                          </div>
                          {item.popular && (
                            <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                              <p className="text-sm text-orange-600 font-medium">{item.restaurant}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toggleFavorite(item.id)}
                                className="border-orange-200 hover:bg-orange-50"
                              >
                                <FaHeart className={favorites.includes(item.id) ? 'text-red-500' : 'text-gray-400'} />
                              </Button>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <span>{item.rating}</span>
                              <span>({item.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock />
                              <span>{item.prepTime}</span>
                            </div>
                            {item.spicyLevel > 0 && (
                              <div className="flex items-center gap-1">
                                {getSpicyLevel(item.spicyLevel)}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-orange-600">${item.price}</span>
                              <div className="flex gap-1">
                                {item.dietary.map((diet, index) => (
                                  <span key={index} title={diet}>
                                    {getDietaryIcon(diet)}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {cart[item.id] && (
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => removeFromCart(item.id)}
                                    className="w-8 h-8 p-0 border-orange-200"
                                  >
                                    -
                                  </Button>
                                  <span className="text-sm font-medium w-6 text-center">{cart[item.id]}</span>
                                </div>
                              )}
                              <Button
                                size="sm"
                                onClick={() => addToCart(item.id)}
                                className={`${styles.modernButton} ${styles.buttonPrimary}`}
                              >
                                <FaShoppingCart className="mr-1" />
                                {cart[item.id] ? '+' : 'Add'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {filteredItems.length === 0 && (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <FaUtensils className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria.</p>
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Experience Culinary Excellence
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Make a reservation today and indulge in our world-class dining experiences
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <FaPhone className="mr-2" />
                Make Reservation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FaWineGlass className="mr-2" />
                View Wine List
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}