import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaUtensils, FaStar, FaClock, FaDollarSign, FaLeaf, FaFire, FaSnowflake, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

export default function UserRestaurant() {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          id: 1,
          name: "Truffle Arancini",
          description: "Crispy risotto balls with truffle oil, parmesan, and fresh herbs",
          price: 16,
          dietary: ["vegetarian"],
          spiceLevel: 0,
          rating: 4.8,
          popular: true
        },
        {
          id: 2,
          name: "Seared Scallops",
          description: "Pan-seared scallops with cauliflower puree and pancetta chips",
          price: 24,
          dietary: ["gluten-free"],
          spiceLevel: 0,
          rating: 4.9,
          popular: false
        }
      ]
    },
    {
      name: "Main Courses",
      items: [
        {
          id: 3,
          name: "Wagyu Beef Tenderloin",
          description: "8oz prime wagyu with roasted vegetables and red wine reduction",
          price: 65,
          dietary: ["gluten-free"],
          spiceLevel: 0,
          rating: 5.0,
          popular: true
        },
        {
          id: 4,
          name: "Mediterranean Sea Bass",
          description: "Grilled sea bass with olive tapenade, cherry tomatoes, and herb oil",
          price: 42,
          dietary: ["gluten-free", "healthy"],
          spiceLevel: 1,
          rating: 4.7,
          popular: true
        },
        {
          id: 5,
          name: "Vegan Buddha Bowl",
          description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
          price: 28,
          dietary: ["vegan", "gluten-free", "healthy"],
          spiceLevel: 0,
          rating: 4.6,
          popular: false
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          id: 6,
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center and vanilla ice cream",
          price: 14,
          dietary: ["vegetarian"],
          spiceLevel: 0,
          rating: 4.9,
          popular: true
        }
      ]
    }
  ];

  const dietaryIcons = {
    vegetarian: { icon: FaLeaf, color: "text-green-600", label: "Vegetarian" },
    vegan: { icon: FaLeaf, color: "text-green-700", label: "Vegan" },
    "gluten-free": { icon: FaSnowflake, color: "text-blue-600", label: "Gluten Free" },
    healthy: { icon: FaLeaf, color: "text-emerald-600", label: "Healthy Choice" }
  };

  const restaurantInfo = {
    hours: {
      breakfast: "6:30 AM - 11:00 AM",
      lunch: "12:00 PM - 3:00 PM", 
      dinner: "6:00 PM - 10:00 PM"
    },
    contact: "+1 (555) 123-4567 Ext. 2",
    location: "Main Lobby Level",
    reservations: "Recommended for dinner service"
  };

  return (
    <Layout 
      title="Azure Restaurant & Bar" 
      subtitle="Fine dining experience with fresh, locally-sourced ingredients and exceptional service"
    >
      <div className="space-y-6">
        {/* Restaurant Information Banner */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-0">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Michelin Recommended</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Award-Winning Cuisine</h2>
                <p className="text-muted-foreground mb-4">
                  Experience culinary excellence with our chef's seasonal menu featuring the finest ingredients
                  from local farms and sustainable sources.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Breakfast:</strong> {restaurantInfo.hours.breakfast}
                  </div>
                  <div>
                    <strong>Lunch:</strong> {restaurantInfo.hours.lunch}
                  </div>
                  <div>
                    <strong>Dinner:</strong> {restaurantInfo.hours.dinner}
                  </div>
                  <div>
                    <strong>Reservations:</strong> {restaurantInfo.contact}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Today's Special</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-bold text-lg mb-2">Chef's Tasting Menu</h4>
                  <p className="text-muted-foreground mb-3">5-course seasonal experience</p>
                  <div className="text-2xl font-bold text-primary mb-3">$95 per person</div>
                  <Button className="gradient-primary text-white" data-testid="button-tasting-menu">
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * categoryIndex }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaUtensils className="mr-2 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (categoryIndex + itemIndex) }}
                      className="flex justify-between items-start border-b pb-4 last:border-b-0"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center mb-2">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          {item.popular && (
                            <Badge className="ml-2 bg-orange-100 text-orange-800">Popular</Badge>
                          )}
                          {item.spiceLevel > 0 && (
                            <div className="ml-2 flex">
                              {[...Array(item.spiceLevel)].map((_, i) => (
                                <FaFire key={i} className="text-red-500 text-xs" />
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{item.description}</p>
                        
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < Math.floor(item.rating) ? "text-yellow-500 text-xs" : "text-gray-300 text-xs"} 
                              />
                            ))}
                            <span className="ml-1 text-xs text-gray-600">({item.rating})</span>
                          </div>
                          
                          <div className="flex space-x-2">
                            {item.dietary.map((diet) => {
                              const dietInfo = dietaryIcons[diet as keyof typeof dietaryIcons];
                              return (
                                <div 
                                  key={diet} 
                                  className="flex items-center text-xs"
                                  title={dietInfo?.label}
                                >
                                  <dietInfo.icon className={`${dietInfo?.color} mr-1`} />
                                  <span className="text-gray-600">{dietInfo?.label}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary mb-3">${item.price}</div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-decrease-${item.id}`}>
                            <FaMinus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">0</span>
                          <Button size="sm" variant="outline" data-testid={`button-increase-${item.id}`}>
                            <FaPlus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Order Summary and Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaShoppingCart className="mr-2" />
                Your Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FaShoppingCart className="text-4xl text-gray-400 mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Add items from the menu to get started</p>
              </div>
              <div className="border-t pt-4">
                <Button className="w-full gradient-primary text-white" disabled data-testid="button-place-order">
                  Place Order ($0.00)
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Room service available 24/7 • Delivery fee $5
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dining Options</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dine-in restaurant service</li>
                  <li>• In-room dining (24/7 available)</li>
                  <li>• Poolside service (11 AM - 8 PM)</li>
                  <li>• Private dining for events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Allergen Information</h4>
                <p className="text-sm text-muted-foreground">
                  Please inform our staff of any allergies or dietary restrictions. 
                  All dishes may contain traces of nuts, dairy, or gluten.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment & Charges</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All prices include tax</li>
                  <li>• 18% service charge for groups 6+</li>
                  <li>• Room service delivery fee: $5</li>
                  <li>• Charges applied to room account</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
