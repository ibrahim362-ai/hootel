import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeart, FaUsers, FaClock, FaCalendarAlt, FaUser, FaStar, FaWater, FaFire } from 'react-icons/fa';

export default function UserGym() {
  const fitnessClasses = [
    {
      id: 1,
      name: "Morning Yoga",
      instructor: "Sarah Williams",
      time: "7:00 AM - 8:00 AM",
      duration: 60,
      difficulty: "Beginner",
      capacity: 20,
      enrolled: 15,
      type: "yoga",
      description: "Start your day with gentle stretches and mindfulness",
      price: 25,
      rating: 4.9
    },
    {
      id: 2,
      name: "HIIT Training",
      instructor: "Mike Johnson", 
      time: "6:00 PM - 7:00 PM",
      duration: 45,
      difficulty: "Advanced",
      capacity: 15,
      enrolled: 12,
      type: "cardio",
      description: "High-intensity interval training for maximum calorie burn",
      price: 35,
      rating: 4.8
    }
  ];

  const classTypeIcons = {
    yoga: FaHeart,
    cardio: FaRunning,
    water: FaWater,
    strength: FaDumbbell
  };

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800",
    "Intermediate": "bg-yellow-100 text-yellow-800",
    "Advanced": "bg-red-100 text-red-800"
  };

  return (
    <Layout 
      title="Elite Fitness Center & Spa" 
      subtitle="Transform your wellness journey with world-class facilities and expert instruction"
    >
      <div className="space-y-6">
        {/* Facility Information Banner */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Wellness Experience</h2>
                <p className="text-muted-foreground mb-4">
                  Our 10,000 sq ft fitness center features the latest Technogym equipment, 
                  Olympic-size pool, spa facilities, and expert personal trainers.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Weekdays:</strong> 5:00 AM - 11:00 PM</div>
                  <div><strong>Weekends:</strong> 6:00 AM - 10:00 PM</div>
                  <div><strong>Pool Hours:</strong> 6:00 AM - 10:00 PM</div>
                  <div><strong>Spa Services:</strong> 8:00 AM - 8:00 PM</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Free for Hotel Guests</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-bold text-lg mb-2">Day Pass for Visitors</h4>
                  <p className="text-muted-foreground mb-3">Full facility access</p>
                  <div className="text-2xl font-bold text-primary mb-3">$45 per day</div>
                  <Button className="gradient-primary text-white" data-testid="button-day-pass">
                    Purchase Day Pass
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              Today's Fitness Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {fitnessClasses.map((cls, index) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="border hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                            {(() => {
                              const IconComponent = classTypeIcons[cls.type as keyof typeof classTypeIcons] || FaDumbbell;
                              return <IconComponent className="text-primary text-xl" />;
                            })()}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{cls.name}</h4>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <FaUser className="mr-1" />
                              {cls.instructor}
                            </p>
                          </div>
                        </div>
                        <Badge className={difficultyColors[cls.difficulty as keyof typeof difficultyColors]}>
                          {cls.difficulty}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{cls.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <FaClock className="mr-2 text-primary" />
                          <span>{cls.time}</span>
                        </div>
                        <div className="flex items-center">
                          <FaFire className="mr-2 text-primary" />
                          <span>{cls.duration} minutes</span>
                        </div>
                        <div className="flex items-center">
                          <FaUsers className="mr-2 text-primary" />
                          <span>{cls.enrolled}/{cls.capacity} enrolled</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < Math.floor(cls.rating) ? "text-yellow-500 text-xs" : "text-gray-300 text-xs"} 
                            />
                          ))}
                          <span className="ml-1 text-xs">({cls.rating})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="text-lg font-bold text-primary">${cls.price}</div>
                        <Button 
                          className="gradient-primary text-white" 
                          data-testid={`button-book-class-${cls.id}`}
                        >
                          Book Class
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Personal Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Available Services</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• One-on-one training sessions</li>
                  <li>• Fitness assessments and goal setting</li>
                  <li>• Nutrition consultation</li>
                  <li>• Injury rehabilitation support</li>
                </ul>
              </div>
              <div className="border-t border-blue-200 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Session Rate:</span>
                  <span className="text-xl font-bold text-blue-800">$85/hour</span>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" data-testid="button-book-trainer">
                  Book Personal Trainer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Facility Rules</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valid room key or day pass required</li>
                  <li>• Appropriate workout attire mandatory</li>
                  <li>• Children under 16 must be supervised</li>
                  <li>• Maximum 2-hour pool sessions during peak times</li>
                </ul>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <div className="text-sm">
                  <p><strong>Fitness Desk:</strong> +1 (555) 123-4567 Ext. 3</p>
                  <p><strong>Personal Training:</strong> +1 (555) 123-4567 Ext. 4</p>
                  <p><strong>Spa Reservations:</strong> +1 (555) 123-4567 Ext. 5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
