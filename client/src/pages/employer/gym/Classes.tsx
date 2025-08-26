import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { FaDumbbell, FaSearch, FaFilter, FaUsers, FaClock, FaCalendarAlt, FaStar, FaPlay, FaPause, FaEdit, FaPlus, FaSwimmingPool, FaYinYang, FaHeartbeat, FaFire, FaLeaf, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerGymClasses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');

  const fitnessClasses = [
    {
      id: 1,
      name: 'Morning HIIT Blast',
      category: 'Cardio',
      instructor: 'John Doe',
      time: '7:00 AM - 8:00 AM',
      duration: '60 min',
      level: 'Intermediate',
      capacity: 20,
      enrolled: 16,
      waitlist: 3,
      location: 'Fitness Studio A',
      status: 'active',
      description: 'High-intensity interval training to kickstart your day with energy and burn maximum calories',
      equipment: ['Dumbbells', 'Resistance Bands', 'Yoga Mats', 'Timer'],
      benefits: ['Burns Calories', 'Increases Metabolism', 'Improves Endurance', 'Builds Strength'],
      price: 15,
      rating: 4.8,
      totalRatings: 45,
      weeklySchedule: ['Monday', 'Wednesday', 'Friday'],
      startDate: '2025-01-15',
      endDate: '2025-03-15',
      specialRequirements: ['Basic fitness level required', 'Bring water bottle'],
      modifications: ['Low-impact alternatives available', 'Beginner modifications provided']
    },
    {
      id: 2,
      name: 'Power Yoga Flow',
      category: 'Yoga',
      instructor: 'John Doe',
      time: '12:00 PM - 1:00 PM',
      duration: '60 min',
      level: 'All Levels',
      capacity: 25,
      enrolled: 22,
      waitlist: 5,
      location: 'Yoga Studio',
      status: 'active',
      description: 'Dynamic yoga sequence building strength, flexibility, and mindfulness through flowing movements',
      equipment: ['Yoga Mats', 'Blocks', 'Straps', 'Bolsters'],
      benefits: ['Increases Flexibility', 'Builds Strength', 'Reduces Stress', 'Improves Balance'],
      price: 18,
      rating: 4.9,
      totalRatings: 67,
      weeklySchedule: ['Tuesday', 'Thursday', 'Saturday'],
      startDate: '2025-01-10',
      endDate: '2025-03-10',
      specialRequirements: ['Yoga mat required', 'Comfortable clothing'],
      modifications: ['Props available for support', 'Chair modifications for seniors']
    },
    {
      id: 3,
      name: 'Evening Strength Training',
      category: 'Strength',
      instructor: 'John Doe',
      time: '6:00 PM - 7:00 PM',
      duration: '60 min',
      level: 'Advanced',
      capacity: 15,
      enrolled: 12,
      waitlist: 0,
      location: 'Weight Room',
      status: 'active',
      description: 'Comprehensive strength training with free weights and functional movements for advanced practitioners',
      equipment: ['Barbells', 'Dumbbells', 'Benches', 'Resistance Bands', 'Kettlebells'],
      benefits: ['Builds Muscle', 'Increases Power', 'Improves Bone Density', 'Enhances Athletic Performance'],
      price: 20,
      rating: 4.7,
      totalRatings: 38,
      weeklySchedule: ['Monday', 'Wednesday', 'Friday'],
      startDate: '2025-01-20',
      endDate: '2025-03-20',
      specialRequirements: ['Advanced fitness level', 'Previous weight training experience'],
      modifications: ['Spot assistance available', 'Weight adjustments for all levels']
    },
    {
      id: 4,
      name: 'Aqua Fitness',
      category: 'Water',
      instructor: 'Sarah Williams',
      time: '9:00 AM - 10:00 AM',
      duration: '60 min',
      level: 'All Levels',
      capacity: 20,
      enrolled: 14,
      waitlist: 0,
      location: 'Swimming Pool',
      status: 'active',
      description: 'Low-impact water-based workout perfect for all fitness levels and joint-friendly exercise',
      equipment: ['Pool Noodles', 'Water Weights', 'Kickboards', 'Pool Dumbbells'],
      benefits: ['Joint-Friendly', 'Full Body Workout', 'Improves Flexibility', 'Cardiovascular Health'],
      price: 12,
      rating: 4.6,
      totalRatings: 29,
      weeklySchedule: ['Tuesday', 'Thursday'],
      startDate: '2025-01-12',
      endDate: '2025-03-12',
      specialRequirements: ['Swimming not required', 'Pool access only'],
      modifications: ['Shallow water options', 'Non-swimmer friendly']
    },
    {
      id: 5,
      name: 'Spin Class Express',
      category: 'Cardio',
      instructor: 'Mike Johnson',
      time: '7:30 AM - 8:15 AM',
      duration: '45 min',
      level: 'All Levels',
      capacity: 20,
      enrolled: 18,
      waitlist: 2,
      location: 'Spin Studio',
      status: 'active',
      description: 'High-energy cycling workout with motivating music and coaching for cardiovascular fitness',
      equipment: ['Stationary Bikes', 'Towels', 'Water Bottles', 'Heart Rate Monitors'],
      benefits: ['Cardiovascular Health', 'Lower Body Strength', 'Mental Clarity', 'Calorie Burn'],
      price: 16,
      rating: 4.7,
      totalRatings: 52,
      weeklySchedule: ['Monday', 'Wednesday', 'Friday'],
      startDate: '2025-01-08',
      endDate: '2025-03-08',
      specialRequirements: ['Cycling shoes recommended', 'Water bottle required'],
      modifications: ['Resistance adjustable', 'Standing/sitting options']
    },
    {
      id: 6,
      name: 'Sunset Meditation',
      category: 'Wellness',
      instructor: 'Emma Chen',
      time: '6:30 PM - 7:15 PM',
      duration: '45 min',
      level: 'All Levels',
      capacity: 30,
      enrolled: 25,
      waitlist: 8,
      location: 'Rooftop Garden',
      status: 'waitlist',
      description: 'Guided meditation session to unwind and find inner peace with breathing techniques and mindfulness',
      equipment: ['Meditation Cushions', 'Blankets', 'Essential Oils', 'Singing Bowls'],
      benefits: ['Stress Relief', 'Mental Clarity', 'Better Sleep', 'Emotional Balance'],
      price: 10,
      rating: 4.8,
      totalRatings: 73,
      weeklySchedule: ['Tuesday', 'Thursday', 'Sunday'],
      startDate: '2025-01-05',
      endDate: '2025-03-05',
      specialRequirements: ['Comfortable clothing', 'Open mind'],
      modifications: ['Chair option available', 'Various techniques taught']
    }
  ];

  const classStats = {
    total: fitnessClasses.length,
    active: fitnessClasses.filter(c => c.status === 'active').length,
    totalEnrolled: fitnessClasses.reduce((sum, c) => sum + c.enrolled, 0),
    avgRating: (fitnessClasses.reduce((sum, c) => sum + c.rating, 0) / fitnessClasses.length).toFixed(1),
    weeklyRevenue: fitnessClasses.reduce((sum, c) => sum + (c.enrolled * c.price), 0)
  };

  const filteredClasses = fitnessClasses.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || classItem.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || classItem.status === statusFilter;
    const matchesLevel = levelFilter === 'all' || classItem.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesLevel;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'waitlist': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
    switch (category) {
      case 'Cardio': return FaHeartbeat;
      case 'Strength': return FaDumbbell;
      case 'Yoga': return FaYinYang;
      case 'Water': return FaSwimmingPool;
      case 'Wellness': return FaLeaf;
      default: return FaDumbbell;
    }
  };

  const categories = Array.from(new Set(fitnessClasses.map(c => c.category)));

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
    <Layout 
      title="Gym Classes" 
      subtitle="Manage and monitor all fitness classes assigned to you"
    >
      <div className="space-y-6">
        {/* Class Summary */}
        <motion.div
          className="grid lg:grid-cols-5 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-blue-100 text-sm">Total Classes</p>
                <p className="text-2xl font-bold">{classStats.total}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Active</p>
                <p className="text-2xl font-bold text-green-600">{classStats.active}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Total Members</p>
                <p className="text-2xl font-bold text-blue-600">{classStats.totalEnrolled}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Avg Rating</p>
                <p className="text-2xl font-bold text-purple-600">{classStats.avgRating}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Weekly Revenue</p>
                <p className="text-2xl font-bold text-green-600">${classStats.weeklyRevenue}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <Card className={styles.modernCard}>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
              <div>
                <Label>Search Classes</Label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Class name, instructor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="waitlist">Waitlist</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Level</Label>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="All Levels">All Levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`}>
                  <FaPlus className="mr-2" />
                  New Class
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Classes List */}
        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredClasses.map((classItem) => {
            const CategoryIcon = getCategoryIcon(classItem.category);
            const enrollmentPercentage = (classItem.enrolled / classItem.capacity) * 100;
            
            return (
              <motion.div key={classItem.id} variants={itemVariants}>
                <Card className={`${styles.modernCard} ${
                  classItem.status === 'waitlist' ? 'border-yellow-500 bg-yellow-50' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">{classItem.name}</h4>
                          <p className="text-blue-600 font-medium">with {classItem.instructor}</p>
                          <p className="text-sm text-gray-600">
                            {classItem.time} • {classItem.duration} • {classItem.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getLevelColor(classItem.level)}>
                          {classItem.level}
                        </Badge>
                        <Badge className={getStatusColor(classItem.status)}>
                          {classItem.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Enrollment Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Enrollment</span>
                        <span className="text-sm text-blue-600">
                          {classItem.enrolled}/{classItem.capacity} members
                          {classItem.waitlist > 0 && ` (${classItem.waitlist} waitlist)`}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            enrollmentPercentage >= 100 ? 'bg-yellow-500' : 
                            enrollmentPercentage >= 80 ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${Math.min(100, enrollmentPercentage)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Class Description */}
                    <p className="text-gray-600 text-sm mb-4">{classItem.description}</p>

                    {/* Class Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Price:</span>
                        <span className="ml-1 font-medium">${classItem.price}/session</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Rating:</span>
                        <span className="ml-1 font-medium text-purple-600">
                          {classItem.rating}/5 ({classItem.totalRatings})
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Weekly:</span>
                        <span className="ml-1 font-medium">{classItem.weeklySchedule.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-1 font-medium">{classItem.startDate} - {classItem.endDate}</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 mb-2">Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {classItem.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-green-200 text-green-600">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Equipment */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 mb-2">Equipment:</h5>
                      <div className="flex flex-wrap gap-1">
                        {classItem.equipment.slice(0, 4).map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-600">
                            {item}
                          </Badge>
                        ))}
                        {classItem.equipment.length > 4 && (
                          <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                            +{classItem.equipment.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Special Requirements */}
                    {classItem.specialRequirements.length > 0 && (
                      <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <h5 className="font-medium text-orange-800 mb-2 flex items-center gap-2">
                          <FaExclamationTriangle />
                          Requirements:
                        </h5>
                        <div className="space-y-1">
                          {classItem.specialRequirements.map((req, index) => (
                            <p key={index} className="text-sm text-orange-700">• {req}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                          {Array.from({ length: Math.floor(classItem.rating) }, (_, i) => (
                            <FaStar key={i} className="text-sm" />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            ({classItem.totalRatings} reviews)
                          </span>
                        </div>
                        
                        <div className="text-sm text-green-600 font-medium">
                          Revenue: ${classItem.enrolled * classItem.price * classItem.weeklySchedule.length}/week
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <FaUsers className="mr-2" />
                          Members
                        </Button>
                        
                        <Button size="sm" variant="outline">
                          <FaCalendarAlt className="mr-2" />
                          Schedule
                        </Button>
                        
                        <Button size="sm" variant="outline">
                          <FaEdit className="mr-2" />
                          Edit
                        </Button>
                        
                        {classItem.status === 'active' && (
                          <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                            <FaPlay className="mr-2" />
                            Start Class
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}