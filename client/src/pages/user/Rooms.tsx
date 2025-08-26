import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FaBed, FaWifi, FaTv, FaShower, FaCoffee, FaStar, FaUsers, FaCalendarAlt, FaSearch, FaFilter, FaHeart, FaShare, FaMapMarkerAlt, FaCar, FaSwimmingPool, FaDumbbell, FaUtensils, FaPhone, FaCheck } from 'react-icons/fa';
import UserLayout from '@/components/layout/UserLayout';
import styles from '@/styles/modern.module.css';

export default function Rooms() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedRoomType, setSelectedRoomType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const roomTypes = [
    {
      id: 1,
      name: "Deluxe King Room",
      type: "Deluxe",
      price: 299,
      originalPrice: 399,
      image: "/images/deluxe-king.jpg",
      size: "45 sqm",
      maxGuests: 2,
      beds: "1 King Bed",
      view: "City View",
      rating: 4.8,
      reviews: 324,
      amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Coffee Machine", "Air Conditioning", "Safe"],
      features: ["Premium Bedding", "Marble Bathroom", "Work Desk", "Blackout Curtains"],
      description: "Spacious and elegant room with modern amenities and stunning city views.",
      discount: 25,
      available: true
    },
    {
      id: 2,
      name: "Executive Suite",
      type: "Suite",
      price: 599,
      originalPrice: 799,
      image: "/images/executive-suite.jpg",
      size: "85 sqm",
      maxGuests: 4,
      beds: "1 King Bed + Sofa Bed",
      view: "Ocean View",
      rating: 4.9,
      reviews: 198,
      amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Coffee Machine", "Air Conditioning", "Safe", "Kitchenette"],
      features: ["Separate Living Area", "Jacuzzi", "Balcony", "Premium Amenities", "Butler Service"],
      description: "Luxurious suite with separate living area and breathtaking ocean views.",
      discount: 25,
      available: true
    },
    {
      id: 3,
      name: "Standard Double Room",
      type: "Standard",
      price: 199,
      originalPrice: 249,
      image: "/images/standard-double.jpg",
      size: "32 sqm",
      maxGuests: 2,
      beds: "1 Double Bed",
      view: "Garden View",
      rating: 4.6,
      reviews: 567,
      amenities: ["Free WiFi", "TV", "Coffee Machine", "Air Conditioning", "Safe"],
      features: ["Modern Design", "Private Bathroom", "Work Area"],
      description: "Comfortable and well-appointed room perfect for leisure travelers.",
      discount: 20,
      available: true
    },
    {
      id: 4,
      name: "Presidential Suite",
      type: "Presidential",
      price: 1299,
      originalPrice: 1699,
      image: "/images/presidential.jpg",
      size: "150 sqm",
      maxGuests: 6,
      beds: "2 King Beds + Living Area",
      view: "Panoramic City View",
      rating: 5.0,
      reviews: 89,
      amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Coffee Machine", "Air Conditioning", "Safe", "Full Kitchen", "Private Terrace"],
      features: ["Private Elevator", "Concierge Service", "Spa Bath", "Dining Area", "Multiple Bedrooms"],
      description: "The ultimate luxury experience with unparalleled amenities and service.",
      discount: 24,
      available: true
    },
    {
      id: 5,
      name: "Family Room",
      type: "Family",
      price: 399,
      originalPrice: 499,
      image: "/images/family-room.jpg",
      size: "65 sqm",
      maxGuests: 6,
      beds: "2 Double Beds",
      view: "Pool View",
      rating: 4.7,
      reviews: 445,
      amenities: ["Free WiFi", "Smart TV", "Mini Fridge", "Coffee Machine", "Air Conditioning", "Safe", "Microwave"],
      features: ["Connecting Rooms Available", "Kids Area", "Extra Space", "Family Amenities"],
      description: "Spacious family-friendly room with all the comforts needed for a memorable stay.",
      discount: 20,
      available: false
    },
    {
      id: 6,
      name: "Business Class Room",
      type: "Business",
      price: 349,
      originalPrice: 449,
      image: "/images/business-room.jpg",
      size: "50 sqm",
      maxGuests: 2,
      beds: "1 King Bed",
      view: "City View",
      rating: 4.8,
      reviews: 289,
      amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Coffee Machine", "Air Conditioning", "Safe", "Printer"],
      features: ["Executive Lounge Access", "Meeting Area", "Premium Workspace", "Express Check-in"],
      description: "Designed for business travelers with enhanced work facilities and services.",
      discount: 22,
      available: true
    }
  ];

  const hotelAmenities = [
    { icon: FaWifi, label: "Free WiFi" },
    { icon: FaSwimmingPool, label: "Swimming Pool" },
    { icon: FaDumbbell, label: "Fitness Center" },
    { icon: FaUtensils, label: "Restaurant" },
    { icon: FaCar, label: "Valet Parking" },
    { icon: FaPhone, label: "24/7 Concierge" }
  ];

  const filteredRooms = roomTypes.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedRoomType === 'all' || room.type.toLowerCase() === selectedRoomType.toLowerCase();
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && room.price < 300) ||
                        (selectedPriceRange === 'mid' && room.price >= 300 && room.price < 600) ||
                        (selectedPriceRange === 'luxury' && room.price >= 600);
    
    return matchesSearch && matchesType && matchesPrice;
  });

  const toggleFavorite = (roomId: number) => {
    setFavorites(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <motion.section
          className={`${styles.heroSection} relative py-20 px-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 opacity-90"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Luxury Rooms & Suites
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-blue-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience unparalleled comfort and elegance in our thoughtfully designed accommodations
            </motion.p>
            
            {/* Quick Booking Widget */}
            <motion.div
              className={`${styles.glassCard} max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-2xl`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <Label className="text-white mb-2 block">Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left bg-white/20 border-white/30 text-white hover:bg-white/30">
                        <FaCalendarAlt className="mr-2" />
                        {checkIn ? checkIn.toLocaleDateString() : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label className="text-white mb-2 block">Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left bg-white/20 border-white/30 text-white hover:bg-white/30">
                        <FaCalendarAlt className="mr-2" />
                        {checkOut ? checkOut.toLocaleDateString() : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label className="text-white mb-2 block">Guests</Label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="2 Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className={`${styles.modernButton} ${styles.buttonPrimary} h-12`}>
                  <FaSearch className="mr-2" />
                  Search Rooms
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 border-b border-blue-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 gap-4 items-center w-full lg:w-auto">
                <div className="relative flex-1 max-w-md">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search rooms by name or type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-blue-200 focus:border-blue-500"
                  />
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-12 px-6 border-blue-200 hover:bg-blue-50"
                >
                  <FaFilter className="mr-2" />
                  Filters
                </Button>
              </div>
              
              <div className="text-sm text-gray-600">
                {filteredRooms.length} rooms available
              </div>
            </div>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">Room Type</Label>
                      <Select value={selectedRoomType} onValueChange={setSelectedRoomType}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Room Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Room Types</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="deluxe">Deluxe</SelectItem>
                          <SelectItem value="suite">Suite</SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="presidential">Presidential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Price Range</Label>
                      <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Prices" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Prices</SelectItem>
                          <SelectItem value="budget">Budget ($0 - $299)</SelectItem>
                          <SelectItem value="mid">Mid-range ($300 - $599)</SelectItem>
                          <SelectItem value="luxury">Luxury ($600+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Hotel Amenities */}
        <section className="py-8 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Hotel Amenities</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {hotelAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.label}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <amenity.icon className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredRooms.map((room) => (
                <motion.div
                  key={room.id}
                  variants={itemVariants}
                  className={`${styles.modernCard} overflow-hidden ${!room.available ? 'opacity-75' : ''}`}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      {/* Room image placeholder with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaBed className="text-6xl text-white opacity-50" />
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {room.discount > 0 && (
                          <Badge className="bg-red-500 text-white font-bold">
                            -{room.discount}% OFF
                          </Badge>
                        )}
                        {!room.available && (
                          <Badge variant="secondary" className="bg-gray-500 text-white">
                            Sold Out
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                          onClick={() => toggleFavorite(room.id)}
                        >
                          <FaHeart className={favorites.includes(room.id) ? 'text-red-500' : ''} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                        >
                          <FaShare />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{room.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaMapMarkerAlt />
                            <span>{room.view}</span>
                            <span>•</span>
                            <span>{room.size}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-yellow-500 mb-1">
                            <FaStar />
                            <span className="text-sm font-bold text-gray-700">{room.rating}</span>
                            <span className="text-xs text-gray-500">({room.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <FaBed className="text-blue-600" />
                          <span>{room.beds}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className="text-blue-600" />
                          <span>Up to {room.maxGuests} guests</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {room.amenities.slice(0, 4).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-600">
                              {amenity}
                            </Badge>
                          ))}
                          {room.amenities.length > 4 && (
                            <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                              +{room.amenities.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                          <span className="text-sm text-gray-500">/night</span>
                          {room.originalPrice > room.price && (
                            <span className="text-sm text-gray-400 line-through">${room.originalPrice}</span>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                            View Details
                          </Button>
                          <Button 
                            className={`${styles.modernButton} ${styles.buttonPrimary}`}
                            disabled={!room.available}
                          >
                            {room.available ? (
                              <>
                                <FaCheck className="mr-2" />
                                Book Now
                              </>
                            ) : (
                              'Unavailable'
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {filteredRooms.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FaBed className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No rooms found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Need Help Choosing the Perfect Room?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our concierge team is available 24/7 to help you find the ideal accommodation for your stay
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <FaPhone className="mr-2" />
                Call Concierge
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FaUtensils className="mr-2" />
                View Dining Options
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}