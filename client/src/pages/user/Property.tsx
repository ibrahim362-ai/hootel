import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaWifi, FaCar, FaSwimmingPool, FaDumbbell, FaUtensils, FaCoffee, FaConciergeBell, FaBell, FaPhoneAlt, FaInfoCircle, FaClock, FaShieldAlt, FaLeaf, FaAccessibleIcon, FaBusinessTime } from 'react-icons/fa';

export default function UserProperty() {
  const hotelFacilities = [
    {
      name: "Main Building",
      description: "120 luxury rooms and suites across 8 floors",
      features: ["24/7 Front Desk", "Concierge Service", "Room Service", "Laundry Service"],
      hours: "24 Hours",
      location: "Ground Floor - 8th Floor",
      icon: FaBuilding,
      available: true
    },
    {
      name: "Restaurant & Bar",
      description: "Fine dining restaurant and rooftop bar with city views",
      features: ["International Cuisine", "Wine Selection", "Private Dining", "Live Music"],
      hours: "6:00 AM - 11:00 PM",
      location: "2nd Floor",
      icon: FaUtensils,
      available: true
    },
    {
      name: "Fitness Center",
      description: "State-of-the-art gym with personal training services",
      features: ["Modern Equipment", "Personal Trainers", "Group Classes", "Yoga Studio"],
      hours: "5:00 AM - 11:00 PM",
      location: "3rd Floor",
      icon: FaDumbbell,
      available: true
    },
    {
      name: "Spa & Wellness",
      description: "Full-service spa offering relaxation and rejuvenation",
      features: ["Massage Therapy", "Facial Treatments", "Sauna", "Steam Room"],
      hours: "8:00 AM - 8:00 PM",
      location: "4th Floor",
      icon: FaSwimmingPool,
      available: false // Under maintenance
    },
    {
      name: "Conference Center",
      description: "Professional meeting spaces and event venues",
      features: ["Meeting Rooms", "Audio/Visual Equipment", "Catering", "Wi-Fi"],
      hours: "7:00 AM - 10:00 PM",
      location: "1st Floor",
      icon: FaBusinessTime,
      available: true
    },
    {
      name: "Coffee Lounge",
      description: "Casual coffee shop and lobby seating area",
      features: ["Specialty Coffee", "Light Snacks", "Free Wi-Fi", "Newspapers"],
      hours: "6:00 AM - 9:00 PM",
      location: "Ground Floor Lobby",
      icon: FaCoffee,
      available: true
    }
  ];

  const amenities = [
    {
      category: "Essential Services",
      items: [
        { name: "Free High-Speed Wi-Fi", icon: FaWifi, description: "Available throughout the property" },
        { name: "24/7 Security", icon: FaShieldAlt, description: "Professional security staff on duty" },
        { name: "Concierge Service", icon: FaConciergeBell, description: "Personal assistance and recommendations" },
        { name: "Accessibility Features", icon: FaAccessibleIcon, description: "ADA compliant facilities" }
      ]
    },
    {
      category: "Transportation & Parking",
      items: [
        { name: "Valet Parking", icon: FaCar, description: "Secure covered parking available" },
        { name: "Airport Shuttle", icon: FaCar, description: "Complimentary shuttle service" },
        { name: "Car Rental", icon: FaCar, description: "On-site rental desk available" },
        { name: "Taxi Service", icon: FaPhoneAlt, description: "Quick taxi booking assistance" }
      ]
    },
    {
      category: "Guest Services",
      items: [
        { name: "Room Service", icon: FaConciergeBell, description: "24-hour in-room dining" },
        { name: "Laundry Service", icon: FaConciergeBell, description: "Same-day laundry and dry cleaning" },
        { name: "Wake-up Calls", icon: FaBell, description: "Personalized wake-up service" },
        { name: "Luggage Storage", icon: FaConciergeBell, description: "Secure luggage storage" }
      ]
    },
    {
      category: "Sustainability",
      items: [
        { name: "Eco-Friendly Practices", icon: FaLeaf, description: "Green cleaning products and energy efficiency" },
        { name: "Recycling Program", icon: FaLeaf, description: "Comprehensive recycling throughout property" },
        { name: "Water Conservation", icon: FaLeaf, description: "Low-flow fixtures and towel reuse program" },
        { name: "Local Sourcing", icon: FaLeaf, description: "Support for local businesses and suppliers" }
      ]
    }
  ];

  const propertyInfo = {
    address: "123 Grand Palace Avenue, Downtown District",
    phoneMain: "+1 (555) 123-4567",
    phoneReservations: "+1 (555) 123-ROOM",
    emailGeneral: "info@grandpalace.com",
    emailReservations: "reservations@grandpalace.com",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    floors: 8,
    rooms: 120,
    yearBuilt: 2018,
    lastRenovated: 2023
  };

  const emergencyInfo = [
    { service: "Medical Emergency", number: "911", description: "Call for immediate medical assistance" },
    { service: "Fire Emergency", number: "911", description: "Fire department emergency response" },
    { service: "Hotel Security", number: "+1 (555) 123-4567 Ext. 911", description: "24/7 hotel security team" },
    { service: "Front Desk", number: "+1 (555) 123-4567 Ext. 0", description: "General assistance and information" },
    { service: "Maintenance", number: "+1 (555) 123-4567 Ext. 555", description: "Room maintenance and technical issues" }
  ];

  const operatingHours = [
    { service: "Front Desk", hours: "24 Hours", note: "Always available" },
    { service: "Restaurant", hours: "6:00 AM - 11:00 PM", note: "Room service available 24/7" },
    { service: "Fitness Center", hours: "5:00 AM - 11:00 PM", note: "Key card access required" },
    { service: "Spa & Wellness", hours: "8:00 AM - 8:00 PM", note: "Currently under maintenance" },
    { service: "Conference Center", hours: "7:00 AM - 10:00 PM", note: "Reservations required" },
    { service: "Coffee Lounge", hours: "6:00 AM - 9:00 PM", note: "Grab & go items available 24/7" }
  ];

  return (
    <Layout 
      title="Hotel Property & Facilities" 
      subtitle="Explore our facilities, amenities, and important information"
    >
      <div className="space-y-6">
        {/* Property Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Grand Palace Hotel</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-primary mr-3" />
                      <span>{propertyInfo.address}</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-primary mr-3" />
                      <span>{propertyInfo.phoneMain}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBuilding className="text-primary mr-3" />
                      <span>{propertyInfo.floors} floors • {propertyInfo.rooms} rooms</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-lg font-bold text-primary">{propertyInfo.checkIn}</p>
                    <p className="text-sm text-muted-foreground">Check-in Time</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-lg font-bold text-primary">{propertyInfo.checkOut}</p>
                    <p className="text-sm text-muted-foreground">Check-out Time</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-lg font-bold text-green-600">{propertyInfo.yearBuilt}</p>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-lg font-bold text-green-600">{propertyInfo.lastRenovated}</p>
                    <p className="text-sm text-muted-foreground">Last Renovated</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hotel Facilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaBuilding className="mr-2 text-primary" />
              Hotel Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelFacilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-lg border ${facility.available ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <facility.icon className="text-2xl text-primary" />
                    <Badge variant={facility.available ? "default" : "secondary"}>
                      {facility.available ? "Available" : "Maintenance"}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{facility.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <FaClock className="mr-2 text-primary" />
                      <span>{facility.hours}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{facility.location}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">• {feature}</div>
                    ))}
                  </div>
                  {facility.available && (
                    <Button size="sm" className="w-full mt-4 gradient-primary text-white" data-testid={`button-visit-${facility.name.replace(' ', '-').toLowerCase()}`}>
                      Visit Facility
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Amenities & Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaConciergeBell className="mr-2 text-primary" />
              Amenities & Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {amenities.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * itemIndex }}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-primary text-sm" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Operating Hours and Emergency Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClock className="mr-2 text-primary" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {operatingHours.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{service.service}</p>
                      <p className="text-xs text-muted-foreground">{service.note}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.hours}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaShieldAlt className="mr-2 text-primary" />
                Emergency Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyInfo.map((emergency, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm text-red-800">{emergency.service}</h4>
                      <span className="font-mono text-sm text-red-600">{emergency.number}</span>
                    </div>
                    <p className="text-xs text-red-700">{emergency.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Property Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaInfoCircle className="mr-2 text-primary" />
              Important Property Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>General:</strong> {propertyInfo.phoneMain}</div>
                  <div><strong>Reservations:</strong> {propertyInfo.phoneReservations}</div>
                  <div><strong>Email:</strong> {propertyInfo.emailGeneral}</div>
                  <div><strong>Reservations Email:</strong> {propertyInfo.emailReservations}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Guest Policies</h4>
                <div className="space-y-2 text-sm">
                  <div>• Check-in: {propertyInfo.checkIn} (ID required)</div>
                  <div>• Check-out: {propertyInfo.checkOut} (late checkout available)</div>
                  <div>• No smoking throughout property</div>
                  <div>• Pet-friendly (restrictions apply)</div>
                  <div>• Maximum 4 guests per room</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Additional Services</h4>
                <div className="space-y-2 text-sm">
                  <div>• Currency exchange available</div>
                  <div>• ATM located in lobby</div>
                  <div>• Business center with printing</div>
                  <div>• Lost & found service</div>
                  <div>• Package receiving/holding</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <Button className="gradient-primary text-white p-6 h-auto flex flex-col items-center space-y-2" data-testid="button-contact-front-desk">
            <FaPhoneAlt className="text-xl" />
            <span>Contact Front Desk</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2" data-testid="button-request-service">
            <FaConciergeBell className="text-xl" />
            <span>Request Service</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2" data-testid="button-facility-map">
            <FaMapMarkerAlt className="text-xl" />
            <span>Facility Map</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2" data-testid="button-guest-services">
            <FaInfoCircle className="text-xl" />
            <span>Guest Services</span>
          </Button>
        </div>
      </div>
    </Layout>
  );
}