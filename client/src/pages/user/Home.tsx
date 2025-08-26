import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaBed, FaUtensils, FaDumbbell, FaWifi, FaCar, FaSwimmingPool, FaSpa, FaHeadset, FaPhone, FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

export default function UserHome() {
  const hotelFeatures = [
    { icon: FaWifi, title: "Free WiFi", description: "High-speed internet throughout the property" },
    { icon: FaCar, title: "Valet Parking", description: "Complimentary parking service available 24/7" },
    { icon: FaSwimmingPool, title: "Pool & Spa", description: "Outdoor pool with spa treatments" },
    { icon: FaSpa, title: "Wellness Center", description: "Full-service gym and fitness classes" },
    { icon: FaHeadset, title: "Concierge", description: "24/7 concierge service for all your needs" },
    { icon: FaUtensils, title: "Fine Dining", description: "Multiple restaurants and room service" }
  ];

  const quickActions = [
    { title: "Book a Room", description: "Find your perfect accommodation", path: "/user/rooms", color: "bg-blue-50 text-blue-700" },
    { title: "Restaurant Menu", description: "Explore our dining options", path: "/user/restaurant", color: "bg-green-50 text-green-700" },
    { title: "Fitness Classes", description: "Join our wellness programs", path: "/user/gym", color: "bg-purple-50 text-purple-700" },
    { title: "Rewards Program", description: "Check your loyalty points", path: "/user/crm", color: "bg-orange-50 text-orange-700" }
  ];

  return (
    <Layout 
      title="Welcome to Grand Palace Hotel" 
      subtitle="Experience luxury, comfort, and exceptional service in the heart of the city"
    >
      <div className="space-y-6">
        {/* Hotel Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-500 mr-1" />
                    <FaStar className="text-yellow-500 mr-1" />
                    <FaStar className="text-yellow-500 mr-1" />
                    <FaStar className="text-yellow-500 mr-1" />
                    <FaStar className="text-yellow-500 mr-2" />
                    <Badge variant="secondary" className="ml-2">5-Star Luxury</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Grand Palace Hotel</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>123 Luxury Boulevard, Downtown District</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-2 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      <span>24/7 Guest Services Available</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Special Welcome Offer</h3>
                  <p className="text-muted-foreground mb-4">Book now and save 20% on your stay plus complimentary breakfast</p>
                  <Button className="gradient-primary text-white" data-testid="button-special-offer">
                    Claim Offer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="hover:shadow-lg transition-all cursor-pointer group" data-testid={`card-${action.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <FaBed className="text-lg" />
                  </div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hotel Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaConcierge className="mr-2 text-primary" />
              Hotel Amenities & Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Guest Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Check-in Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Check-in:</span>
                <span className="font-medium">3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Check-out:</span>
                <span className="font-medium">11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Late check-out:</span>
                <span className="font-medium">Available until 2:00 PM</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground">Valid photo ID and credit card required at check-in</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Emergency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Front Desk:</span>
                <span className="font-medium">Ext. 0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Room Service:</span>
                <span className="font-medium">Ext. 2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Concierge:</span>
                <span className="font-medium">Ext. 3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Emergency:</span>
                <span className="font-medium text-red-600">Dial 911</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
