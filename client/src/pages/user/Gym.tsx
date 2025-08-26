import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FaDumbbell, FaSwimmingPool, FaSpa, FaRunning, FaHeartbeat, FaUsers, FaClock, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaStar, FaFire, FaWater, FaYinYang, FaLeaf, FaCheck, FaPlay, FaUserFriends } from 'react-icons/fa';
import UserLayout from '@/components/layout/UserLayout';
import styles from '@/styles/modern.module.css';

export default function Gym() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookings, setBookings] = useState<number[]>([]);

  const facilities = [
    {
      id: 1,
      name: "State-of-the-Art Fitness Center",
      category: "Fitness",
      description: "Fully equipped gym with latest cardio and strength training equipment",
      image: "/images/fitness-center.jpg",
      capacity: 50,
      size: "500 sqm",
      features: ["Cardio Equipment", "Weight Training", "Free Weights", "Personal Training Available"],
      hours: "5:00 AM - 11:00 PM",
      location: "Ground Floor - West Wing",
      rating: 4.8,
      reviews: 234,
      amenities: ["Air Conditioning", "Sound System", "Towel Service", "Water Station"]
    },
    {
      id: 2,
      name: "Olympic Swimming Pool",
      category: "Pool",
      description: "25-meter Olympic-standard pool with dedicated lanes for swimming",
      image: "/images/olympic-pool.jpg",
      capacity: 30,
      size: "25m x 12m",
      features: ["Olympic Standard", "6 Lanes", "Depth: 1.2m - 2.2m", "Pool Deck"],
      hours: "6:00 AM - 10:00 PM",
      location: "Pool Deck - Level 2",
      rating: 4.9,
      reviews: 189,
      amenities: ["Heated Pool", "Pool Lighting", "Changing Rooms", "Poolside Service"]
    },
    {
      id: 3,
      name: "Luxury Spa & Wellness Center",
      category: "Spa",
      description: "Full-service spa offering massages, treatments, and relaxation",
      image: "/images/spa-center.jpg",
      capacity: 20,
      size: "300 sqm",
      features: ["Massage Rooms", "Sauna", "Steam Room", "Relaxation Lounge"],
      hours: "8:00 AM - 9:00 PM",
      location: "Spa Level - 3rd Floor",
      rating: 4.9,
      reviews: 156,
      amenities: ["Essential Oils", "Herbal Treatments", "Meditation Room", "Tea Service"]
    },
    {
      id: 4,
      name: "Yoga & Meditation Studio",
      category: "Wellness",
      description: "Peaceful studio for yoga, meditation, and mindfulness practices",
      image: "/images/yoga-studio.jpg",
      capacity: 25,
      size: "200 sqm",
      features: ["Mirrored Walls", "Sound System", "Props Available", "Natural Lighting"],
      hours: "6:00 AM - 10:00 PM",
      location: "Wellness Center - 2nd Floor",
      rating: 4.7,
      reviews: 178,
      amenities: ["Yoga Mats", "Meditation Cushions", "Aromatherapy", "Peaceful Ambiance"]
    }
  ];

  const fitnessClasses = [
    {
      id: 1,
      name: "Morning HIIT Blast",
      instructor: "Sarah Johnson",
      time: "7:00 AM - 8:00 AM",
      duration: "60 min",
      level: "Intermediate",
      category: "Cardio",
      capacity: 20,
      enrolled: 16,
      description: "High-intensity interval training to kickstart your day with energy",
      benefits: ["Burns Calories", "Increases Metabolism", "Improves Endurance"],
      equipment: "Bodyweight & Light Weights",
      location: "Fitness Studio A",
      price: "Included",
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: "Aqua Fitness",
      instructor: "Mike Davis",
      time: "9:00 AM - 10:00 AM",
      duration: "60 min",
      level: "All Levels",
      category: "Water",
      capacity: 15,
      enrolled: 12,
      description: "Low-impact water-based workout perfect for all fitness levels",
      benefits: ["Joint-Friendly", "Full Body Workout", "Improves Flexibility"],
      equipment: "Pool Noodles & Water Weights",
      location: "Swimming Pool",
      price: "Included",
      rating: 4.6,
      popular: false
    },
    {
      id: 3,
      name: "Power Yoga Flow",
      instructor: "Emma Chen",
      time: "6:00 PM - 7:00 PM",
      duration: "60 min",
      level: "Beginner-Intermediate",
      category: "Yoga",
      capacity: 25,
      enrolled: 22,
      description: "Dynamic yoga sequence building strength, flexibility, and mindfulness",
      benefits: ["Increases Flexibility", "Builds Strength", "Reduces Stress"],
      equipment: "Yoga Mat Provided",
      location: "Yoga Studio",
      price: "Included",
      rating: 4.9,
      popular: true
    },
    {
      id: 4,
      name: "Spin Class Express",
      instructor: "Tom Wilson",
      time: "7:30 AM - 8:15 AM",
      duration: "45 min",
      level: "All Levels",
      category: "Cardio",
      capacity: 20,
      enrolled: 18,
      description: "High-energy cycling workout with motivating music and coaching",
      benefits: ["Cardiovascular Health", "Lower Body Strength", "Mental Clarity"],
      equipment: "Stationary Bikes",
      location: "Spin Studio",
      price: "Included",
      rating: 4.7,
      popular: true
    },
    {
      id: 5,
      name: "Sunset Meditation",
      instructor: "Lisa Park",
      time: "6:30 PM - 7:15 PM",
      duration: "45 min",
      level: "All Levels",
      category: "Wellness",
      capacity: 30,
      enrolled: 25,
      description: "Guided meditation session to unwind and find inner peace",
      benefits: ["Stress Relief", "Mental Clarity", "Better Sleep"],
      equipment: "Meditation Cushions Provided",
      location: "Rooftop Garden",
      price: "Included",
      rating: 4.8,
      popular: false
    },
    {
      id: 6,
      name: "Strength & Conditioning",
      instructor: "Alex Rodriguez",
      time: "8:00 AM - 9:00 AM",
      duration: "60 min",
      level: "Intermediate-Advanced",
      category: "Strength",
      capacity: 15,
      enrolled: 14,
      description: "Comprehensive strength training with functional movements",
      benefits: ["Builds Muscle", "Improves Power", "Enhances Athletic Performance"],
      equipment: "Free Weights & Resistance Bands",
      location: "Fitness Studio B",
      price: "Included",
      rating: 4.9,
      popular: true
    }
  ];

  const personalTrainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specializations: ["HIIT", "Weight Loss", "Functional Training"],
      experience: "8 years",
      certifications: ["NASM-CPT", "HIIT Specialist"],
      rating: 4.9,
      reviews: 87,
      price: "$75/session",
      bio: "Passionate trainer specializing in high-intensity workouts and functional movement patterns.",
      availability: "Mon-Fri: 6 AM - 2 PM"
    },
    {
      id: 2,
      name: "Mike Davis",
      specializations: ["Swimming", "Aqua Fitness", "Rehabilitation"],
      experience: "12 years",
      certifications: ["Water Safety Instructor", "Aquatic Therapy"],
      rating: 4.8,
      reviews: 65,
      price: "$80/session",
      bio: "Former competitive swimmer and certified aquatic therapy specialist.",
      availability: "Tue-Sat: 8 AM - 4 PM"
    },
    {
      id: 3,
      name: "Emma Chen",
      specializations: ["Yoga", "Pilates", "Flexibility"],
      experience: "6 years",
      certifications: ["200-hr Yoga Alliance", "Pilates Instructor"],
      rating: 4.9,
      reviews: 94,
      price: "$70/session",
      bio: "Mindful movement specialist focused on building strength through flexibility.",
      availability: "Mon-Sun: 7 AM - 7 PM"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', icon: FaDumbbell },
    { id: 'cardio', name: 'Cardio', icon: FaHeartbeat },
    { id: 'strength', name: 'Strength', icon: FaDumbbell },
    { id: 'yoga', name: 'Yoga', icon: FaYinYang },
    { id: 'water', name: 'Water Sports', icon: FaSwimmingPool },
    { id: 'wellness', name: 'Wellness', icon: FaLeaf }
  ];

  const filteredClasses = fitnessClasses.filter(classItem => {
    if (selectedCategory === 'all') return true;
    return classItem.category.toLowerCase() === selectedCategory;
  });

  const bookClass = (classId: number) => {
    setBookings(prev => 
      prev.includes(classId) 
        ? prev.filter(id => id !== classId)
        : [...prev, classId]
    );
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      case 'All Levels': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cardio': return FaHeartbeat;
      case 'strength': return FaDumbbell;
      case 'yoga': return FaYinYang;
      case 'water': return FaSwimmingPool;
      case 'wellness': return FaLeaf;
      default: return FaDumbbell;
    }
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Hero Section */}
        <motion.section
          className={`${styles.heroSection} relative py-20 px-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 opacity-90"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Fitness & Wellness
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-purple-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your body and mind with our world-class fitness facilities and wellness programs
            </motion.p>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <section className="py-8 px-4 bg-white/80 backdrop-blur-sm border-b border-purple-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Facilities</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Classes/Week</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Personal Trainers</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-purple-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">15hrs</div>
                <div className="text-sm text-gray-600">Daily Operation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Overview */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Facilities
            </motion.h2>
            
            <motion.div
              className="grid lg:grid-cols-2 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {facilities.map((facility) => (
                <motion.div
                  key={facility.id}
                  variants={itemVariants}
                  className={`${styles.modernCard} overflow-hidden`}
                  whileHover={{ y: -4 }}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {facility.category === 'Fitness' && <FaDumbbell className="text-5xl text-white opacity-50" />}
                      {facility.category === 'Pool' && <FaSwimmingPool className="text-5xl text-white opacity-50" />}
                      {facility.category === 'Spa' && <FaSpa className="text-5xl text-white opacity-50" />}
                      {facility.category === 'Wellness' && <FaYinYang className="text-5xl text-white opacity-50" />}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {facility.capacity} capacity
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{facility.name}</h3>
                        <Badge variant="outline" className="text-purple-600 border-purple-200">
                          {facility.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                          <FaStar />
                          <span className="text-sm font-bold text-gray-700">{facility.rating}</span>
                          <span className="text-xs text-gray-500">({facility.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-purple-600" />
                        <span>{facility.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-600" />
                        <span>{facility.location}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {facility.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-600">
                            {feature}
                          </Badge>
                        ))}
                        {facility.features.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                            +{facility.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50">
                        View Details
                      </Button>
                      <Button className={`${styles.modernButton} ${styles.buttonPrimary} flex-1`}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Fitness Classes */}
        <section className="py-12 px-4 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Fitness Classes
            </motion.h2>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8 bg-purple-50 border border-purple-200">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
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
                  {filteredClasses.map((classItem) => {
                    const CategoryIcon = getCategoryIcon(classItem.category);
                    const isBooked = bookings.includes(classItem.id);
                    const spotsLeft = classItem.capacity - classItem.enrolled;
                    
                    return (
                      <motion.div
                        key={classItem.id}
                        variants={itemVariants}
                        className={`${styles.modernCard} overflow-hidden`}
                        whileHover={{ y: -2 }}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                                <CategoryIcon className="text-xl text-purple-600" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-800">{classItem.name}</h3>
                                <p className="text-sm text-purple-600 font-medium">with {classItem.instructor}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {classItem.popular && (
                                <Badge className="bg-red-500 text-white text-xs">
                                  Popular
                                </Badge>
                              )}
                              <Badge className={getLevelColor(classItem.level)}>
                                {classItem.level}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4">{classItem.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center gap-2">
                              <FaClock className="text-purple-600" />
                              <span>{classItem.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-purple-600" />
                              <span>{classItem.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaUsers className="text-purple-600" />
                              <span>{spotsLeft} spots left</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaStar className="text-yellow-500" />
                              <span>{classItem.rating} rating</span>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="text-xs text-gray-500 mb-2">Benefits:</h4>
                            <div className="flex flex-wrap gap-1">
                              {classItem.benefits.map((benefit, index) => (
                                <Badge key={index} variant="outline" className="text-xs border-green-200 text-green-600">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-purple-600">{classItem.price}</span>
                              <span className="text-sm text-gray-500">Duration: {classItem.duration}</span>
                            </div>
                            
                            <Button
                              onClick={() => bookClass(classItem.id)}
                              className={`${styles.modernButton} ${isBooked ? styles.buttonSecondary : styles.buttonPrimary}`}
                              disabled={spotsLeft === 0}
                            >
                              {spotsLeft === 0 ? (
                                'Full'
                              ) : isBooked ? (
                                <>
                                  <FaCheck className="mr-2" />
                                  Booked
                                </>
                              ) : (
                                <>
                                  <FaPlay className="mr-2" />
                                  Book Class
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                
                {filteredClasses.length === 0 && (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <FaDumbbell className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No classes found</h3>
                    <p className="text-gray-500">Try selecting a different category.</p>
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Personal Trainers */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Personal Trainers
            </motion.h2>
            
            <motion.div
              className="grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {personalTrainers.map((trainer) => (
                <motion.div
                  key={trainer.id}
                  variants={itemVariants}
                  className={`${styles.modernCard} text-center`}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaUserFriends className="text-3xl text-purple-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{trainer.name}</h3>
                    
                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                      <FaStar />
                      <span className="text-sm font-bold text-gray-700">{trainer.rating}</span>
                      <span className="text-xs text-gray-500">({trainer.reviews} reviews)</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {trainer.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-600">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div><strong>Experience:</strong> {trainer.experience}</div>
                      <div><strong>Price:</strong> <span className="text-purple-600 font-bold">{trainer.price}</span></div>
                      <div><strong>Available:</strong> {trainer.availability}</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50">
                        View Profile
                      </Button>
                      <Button className={`${styles.modernButton} ${styles.buttonPrimary} flex-1`}>
                        Book Session
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Fitness Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join our fitness community and discover what your body is capable of achieving
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <FaPhone className="mr-2" />
                Schedule Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FaDumbbell className="mr-2" />
                View All Classes
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}