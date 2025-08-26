import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaBed, FaWifi, FaTv, FaBath, FaSnowflake, FaCoffee, FaStar, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

export default function UserRooms() {
  const availableRooms = [
    {
      id: 1,
      number: "101",
      type: "Standard King",
      price: 149,
      originalPrice: 199,
      size: "350 sq ft",
      bedType: "King Bed",
      maxGuests: 2,
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Coffee Maker", "Private Bath"],
      images: ["room-101-1.jpg", "room-101-2.jpg"],
      rating: 4.8,
      reviews: 124,
      specialOffer: "25% Off Limited Time",
      available: true
    },
    {
      id: 2,
      number: "205",
      type: "Deluxe Suite",
      price: 289,
      originalPrice: 349,
      size: "650 sq ft",
      bedType: "King + Sofa Bed",
      maxGuests: 4,
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Mini Fridge", "Coffee Maker", "Balcony", "City View"],
      images: ["room-205-1.jpg", "room-205-2.jpg"],
      rating: 4.9,
      reviews: 89,
      specialOffer: "Includes Breakfast",
      available: true
    },
    {
      id: 3,
      number: "301",
      type: "Executive Suite",
      price: 399,
      originalPrice: 499,
      size: "850 sq ft",
      bedType: "King + Living Area",
      maxGuests: 4,
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Mini Bar", "Coffee Station", "Work Desk", "Ocean View"],
      images: ["room-301-1.jpg", "room-301-2.jpg"],
      rating: 5.0,
      reviews: 156,
      specialOffer: "Executive Lounge Access",
      available: true
    }
  ];

  const amenityIcons = {
    "Free WiFi": FaWifi,
    "Smart TV": FaTv,
    "Air Conditioning": FaSnowflake,
    "Coffee Maker": FaCoffee,
    "Coffee Station": FaCoffee,
    "Private Bath": FaBath,
    "Mini Fridge": FaSnowflake,
    "Mini Bar": FaSnowflake,
    "Balcony": FaMapMarkerAlt,
    "City View": FaMapMarkerAlt,
    "Ocean View": FaMapMarkerAlt,
    "Work Desk": FaTv
  };

  return (
    <Layout 
      title="Book Your Perfect Room" 
      subtitle="Choose from our selection of luxury accommodations with exceptional amenities"
    >
      <div className="space-y-6">
        {/* Search and Filter Bar */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Check-in Date</label>
                <div className="flex items-center p-3 border rounded-lg bg-white">
                  <FaCalendarAlt className="text-primary mr-2" />
                  <span className="text-sm">Select date</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Check-out Date</label>
                <div className="flex items-center p-3 border rounded-lg bg-white">
                  <FaCalendarAlt className="text-primary mr-2" />
                  <span className="text-sm">Select date</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Guests</label>
                <div className="flex items-center p-3 border rounded-lg bg-white">
                  <FaUsers className="text-primary mr-2" />
                  <span className="text-sm">2 Adults</span>
                </div>
              </div>
              <div className="flex items-end">
                <Button className="w-full gradient-primary text-white" data-testid="button-search-rooms">
                  Search Rooms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Offers Banner */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-yellow-800">🎉 Special Promotion</h3>
                <p className="text-sm text-yellow-700">Book 3+ nights and save an additional 15% on any room type</p>
              </div>
              <Badge className="bg-yellow-500 text-white">Limited Time</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Available Rooms */}
        <div className="space-y-6">
          {availableRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Room Image */}
                  <div className="md:col-span-2 bg-gray-200 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <FaBed className="text-4xl text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Room {room.number} Image</p>
                    </div>
                  </div>
                  
                  {/* Room Details */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{room.type}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < Math.floor(room.rating) ? "text-yellow-500" : "text-gray-300"} 
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">({room.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                      <div>
                        <strong>Room:</strong> #{room.number}
                      </div>
                      <div>
                        <strong>Size:</strong> {room.size}
                      </div>
                      <div>
                        <strong>Bed:</strong> {room.bedType}
                      </div>
                      <div>
                        <strong>Guests:</strong> Up to {room.maxGuests}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.slice(0, 5).map((amenity) => {
                          const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || FaWifi;
                          return (
                            <div key={amenity} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                              <IconComponent className="mr-1" />
                              {amenity}
                            </div>
                          );
                        })}
                        {room.amenities.length > 5 && (
                          <span className="text-xs text-gray-500">+{room.amenities.length - 5} more</span>
                        )}
                      </div>
                    </div>

                    {room.specialOffer && (
                      <Badge className="bg-green-100 text-green-800 mb-3">
                        {room.specialOffer}
                      </Badge>
                    )}
                  </div>

                  {/* Price and Booking */}
                  <div className="p-6 bg-gray-50 flex flex-col justify-between">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold text-primary">${room.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/night</span>
                      </div>
                      {room.originalPrice > room.price && (
                        <div className="text-sm">
                          <span className="line-through text-gray-400">${room.originalPrice}</span>
                          <span className="text-green-600 ml-1 font-medium">
                            Save ${room.originalPrice - room.price}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full gradient-primary text-white" 
                        data-testid={`button-book-room-${room.id}`}
                      >
                        Book Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        data-testid={`button-view-room-${room.id}`}
                      >
                        View Details
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 mt-3 text-center">
                      Free cancellation until 24hrs before check-in
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Important Booking Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Check-in:</span>
                <span className="font-medium">3:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Check-out:</span>
                <span className="font-medium">Until 11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cancellation:</span>
                <span className="font-medium">Free until 24hrs prior</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment:</span>
                <span className="font-medium">Credit card required</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground">
                  All rates include taxes and fees. Additional resort fee of $25/night applies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Speak with our reservations team</h4>
                <p className="text-2xl font-bold text-primary mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Group bookings:</strong> Call for special rates (10+ rooms)</p>
                <p><strong>Extended stays:</strong> Weekly and monthly discounts available</p>
                <p><strong>Accessibility:</strong> ADA compliant rooms available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
