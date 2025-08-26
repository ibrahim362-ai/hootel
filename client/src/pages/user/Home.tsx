import UserLayout from '@/components/layout/UserLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBed, FaUtensils, FaDumbbell, FaWifi, FaCar, FaSwimmingPool, FaSpa, FaHeadset, FaPhone, FaClock, FaMapMarkerAlt, FaStar, FaUser, FaArrowRight, FaCalendar, FaGift, FaShieldAlt, FaCreditCard } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function UserHome() {
  const hotelFeatures = [
    { icon: FaWifi, title: "Free WiFi", description: "High-speed internet throughout the property", color: "bg-blue-500" },
    { icon: FaCar, title: "Valet Parking", description: "Complimentary parking service available 24/7", color: "bg-green-500" },
    { icon: FaSwimmingPool, title: "Pool & Spa", description: "Outdoor pool with spa treatments", color: "bg-cyan-500" },
    { icon: FaSpa, title: "Wellness Center", description: "Full-service gym and fitness classes", color: "bg-purple-500" },
    { icon: FaHeadset, title: "Concierge", description: "24/7 concierge service for all your needs", color: "bg-orange-500" },
    { icon: FaUtensils, title: "Fine Dining", description: "Multiple restaurants and room service", color: "bg-red-500" }
  ];

  const quickActions = [
    { 
      title: "Book a Room", 
      description: "Find your perfect accommodation", 
      path: "/user/rooms", 
      icon: FaBed,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      title: "Restaurant Menu", 
      description: "Explore our dining options", 
      path: "/user/restaurant", 
      icon: FaUtensils,
      gradient: "from-green-500 to-green-600"
    },
    { 
      title: "Fitness Classes", 
      description: "Join our wellness programs", 
      path: "/user/gym", 
      icon: FaDumbbell,
      gradient: "from-purple-500 to-purple-600"
    },
    { 
      title: "Rewards Program", 
      description: "Check your loyalty points", 
      path: "/user/crm", 
      icon: FaGift,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Guest Satisfaction", value: "98%", icon: FaStar },
    { label: "Years of Excellence", value: "25+", icon: FaCalendar },
    { label: "Daily Guests", value: "500+", icon: FaUser },
    { label: "Premium Suites", value: "120", icon: FaBed }
  ];

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
      <div className="min-h-screen space-y-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${styles.heroSection} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 opacity-90"></div>
          <div className="relative z-10 p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.5 + i * 0.1, 
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                    >
                      <FaStar className="text-yellow-300 mr-1 text-xl" />
                    </motion.div>
                  ))}
                  <Badge variant="secondary" className="ml-4 bg-white/20 text-white border-white/30">
                    5-Star Luxury
                  </Badge>
                </div>
                
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Grand Palace Hotel
                </motion.h1>
                
                <motion.div 
                  className="space-y-4 text-lg text-blue-100 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-3 text-blue-300 text-xl" />
                    <span>123 Luxury Boulevard, Downtown District</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-blue-300 text-xl" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-3 text-blue-300 text-xl" />
                    <span>24/7 Guest Services Available</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    className={`${styles.modernButton} ${styles.buttonPrimary} text-lg px-8 py-3`}
                    data-testid="button-book-now"
                  >
                    Book Now
                    <FaArrowRight className="ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10"
                    data-testid="button-view-rooms"
                  >
                    View Rooms
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className={`${styles.glassCard} p-8 bg-white/10 backdrop-blur-lg`}>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    <FaGift className="text-6xl text-yellow-300 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Special Welcome Offer</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Book now and save 20% on your stay plus complimentary breakfast
                  </p>
                  <Button 
                    className={`${styles.modernButton} bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:from-yellow-300 hover:to-orange-400`}
                    data-testid="button-special-offer"
                  >
                    Claim Offer
                    <FaGift className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Quick Actions
          </motion.h2>
          
          <div className={`${styles.responsiveGrid} max-w-6xl mx-auto`}>
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                variants={itemVariants}
                className={`${styles.modernCard} ${styles.hoverLift} group cursor-pointer`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`card-${action.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${action.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">{action.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    Explore
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 px-4 rounded-3xl mx-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Why Choose Grand Palace Hotel
          </motion.h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`${styles.statsCard} text-center group`}
                whileHover={{ y: -4 }}
              >
                <div className="relative z-10">
                  <stat.icon className="text-4xl text-blue-600 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <div className={`${styles.statsNumber} text-3xl font-bold text-blue-600 group-hover:text-white transition-colors`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hotel Features */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4"
        >
          <Card className={`${styles.modernCard} max-w-6xl mx-auto`}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold flex items-center justify-center text-gray-800">
                <FaUser className="mr-3 text-blue-600" />
                Hotel Amenities & Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`${styles.featureGrid}`}>
                {hotelFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className={`${styles.featureItem} group`}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`${styles.featureIcon} ${feature.color} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Important Guest Information */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4"
        >
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className={`${styles.modernCard} h-full`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <FaClock className="mr-3 text-blue-600" />
                    Check-in Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Check-in Details</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Check-in Time:</strong> 3:00 PM</div>
                      <div><strong>Check-out Time:</strong> 11:00 AM</div>
                      <div><strong>Early Check-in:</strong> Subject to availability</div>
                      <div><strong>Late Check-out:</strong> Available for loyalty members</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Required Documents</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Valid government-issued photo ID</div>
                      <div>• Credit card for incidentals</div>
                      <div>• Reservation confirmation number</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className={`${styles.modernCard} h-full`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <FaShieldAlt className="mr-3 text-blue-600" />
                    Safety & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Health & Safety</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Enhanced cleaning protocols</div>
                      <div>• Contactless check-in available</div>
                      <div>• 24/7 security staff</div>
                      <div>• Emergency response team on-site</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Payment & Policies</h4>
                    <div className="space-y-1 text-sm">
                      <div>• All major credit cards accepted</div>
                      <div>• Contactless payment options</div>
                      <div>• Flexible cancellation policy</div>
                      <div>• Pet-friendly rooms available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Experience Luxury?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your stay today and discover why guests choose Grand Palace Hotel for their most important moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className={`${styles.modernButton} ${styles.buttonPrimary} text-lg px-8 py-3`}
                data-testid="button-book-stay"
              >
                Book Your Stay
                <FaBed className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                data-testid="button-contact-us"
              >
                Contact Us
                <FaPhone className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </UserLayout>
  );
}