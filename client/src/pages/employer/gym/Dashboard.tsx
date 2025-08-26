import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaDumbbell, FaUsers, FaClock, FaCalendarAlt, FaStar, FaChartLine, FaPlay, FaPause, FaCheckCircle, FaSwimmingPool, FaYinYang, FaHeartbeat, FaUserFriends, FaClipboardList } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerGymDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const dashboardStats = {
    today: {
      totalClasses: 8,
      assignedToMe: 3,
      completed: 1,
      upcoming: 2,
      totalMembers: 45,
      attendanceRate: 78,
      avgRating: 4.6,
      revenue: 560
    }
  };

  const currentStats = dashboardStats[selectedPeriod as keyof typeof dashboardStats];

  const myClasses = [
    {
      id: 1,
      name: 'Morning HIIT Blast',
      time: '7:00 AM - 8:00 AM',
      duration: '60 min',
      capacity: 20,
      enrolled: 16,
      attended: 14,
      location: 'Fitness Studio A',
      status: 'completed',
      level: 'Intermediate',
      equipment: ['Dumbbells', 'Resistance Bands', 'Yoga Mats'],
      rating: 4.8,
      feedback: 'Great energy and motivation!',
      revenue: 240
    },
    {
      id: 2,
      name: 'Power Yoga Flow',
      time: '12:00 PM - 1:00 PM',
      duration: '60 min',
      capacity: 25,
      enrolled: 22,
      attended: null,
      location: 'Yoga Studio',
      status: 'in-progress',
      level: 'All Levels',
      equipment: ['Yoga Mats', 'Blocks', 'Straps'],
      rating: null,
      feedback: null,
      revenue: 0
    },
    {
      id: 3,
      name: 'Evening Strength Training',
      time: '6:00 PM - 7:00 PM',
      duration: '60 min',
      capacity: 15,
      enrolled: 12,
      attended: null,
      location: 'Weight Room',
      status: 'upcoming',
      level: 'Advanced',
      equipment: ['Barbells', 'Dumbbells', 'Benches'],
      rating: null,
      feedback: null,
      revenue: 0
    }
  ];

  const membershipData = [
    {
      type: 'Premium',
      count: 18,
      percentage: 40,
      color: 'purple'
    },
    {
      type: 'Standard',
      count: 20,
      percentage: 44,
      color: 'blue'
    },
    {
      type: 'Basic',
      count: 7,
      percentage: 16,
      color: 'green'
    }
  ];

  const upcomingShifts = [
    {
      date: 'Today',
      shift: 'Afternoon (12 PM - 8 PM)',
      role: 'Fitness Instructor',
      classes: ['Power Yoga Flow', 'Evening Strength Training'],
      status: 'active'
    },
    {
      date: 'Tomorrow',
      shift: 'Morning (6 AM - 2 PM)',
      role: 'Personal Trainer',
      classes: ['Morning HIIT', 'Aqua Fitness', 'Spin Class'],
      status: 'scheduled'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Class Attendance',
      value: 78,
      target: 85,
      trend: 'up',
      unit: '%'
    },
    {
      metric: 'Member Satisfaction',
      value: 4.6,
      target: 4.5,
      trend: 'up',
      unit: '/5'
    },
    {
      metric: 'Classes This Week',
      value: 12,
      target: 15,
      trend: 'down',
      unit: 'classes'
    },
    {
      metric: 'Revenue Generated',
      value: 2340,
      target: 2500,
      trend: 'up',
      unit: '$'
    }
  ];

  const recentActivity = [
    {
      action: 'Completed Morning HIIT class',
      time: '8:00 AM',
      attendance: '14/16 members',
      rating: 4.8
    },
    {
      action: 'Started Power Yoga session',
      time: '12:00 PM',
      attendance: '22/22 enrolled',
      rating: null
    },
    {
      action: 'Equipment check completed',
      time: '11:30 AM',
      status: 'All equipment functional',
      rating: null
    },
    {
      action: 'New member consultation',
      time: '10:15 AM',
      member: 'Sarah Johnson',
      program: 'Weight Loss Program'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
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
      title="Gym Dashboard" 
      subtitle="Fitness and wellness management overview for your current shift"
    >
      <div className="space-y-6">
        {/* Quick Stats */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">My Classes Today</p>
                    <p className="text-3xl font-bold">{currentStats.assignedToMe}</p>
                    <p className="text-blue-100 text-xs">
                      {currentStats.completed} completed • {currentStats.upcoming} upcoming
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaDumbbell className="text-2xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Attendance Rate</p>
                    <p className="text-3xl font-bold text-green-600">{currentStats.attendanceRate}%</p>
                    <p className="text-gray-500 text-xs">Above target (75%)</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-2xl text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Class Rating</p>
                    <p className="text-3xl font-bold text-purple-600">{currentStats.avgRating}</p>
                    <p className="text-gray-500 text-xs">Member satisfaction</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaStar className="text-2xl text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Revenue Today</p>
                    <p className="text-3xl font-bold text-blue-600">${currentStats.revenue}</p>
                    <p className="text-gray-500 text-xs">From my classes</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-2xl text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-blue-200">
            <TabsTrigger value="classes" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Classes
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Members
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Schedule
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Performance
            </TabsTrigger>
          </TabsList>

          {/* My Classes */}
          <TabsContent value="classes" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Today's Classes</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaCalendarAlt className="mr-2" />
                View Full Schedule
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {myClasses.map((classItem) => (
                <motion.div key={classItem.id} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${
                    classItem.status === 'in-progress' ? 'border-blue-500 bg-blue-50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaDumbbell className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{classItem.name}</h4>
                            <p className="text-blue-600 font-medium">{classItem.time}</p>
                            <p className="text-sm text-gray-600">
                              {classItem.location} • {classItem.duration}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge className={getLevelColor(classItem.level)}>
                            {classItem.level}
                          </Badge>
                          <Badge className={getStatusColor(classItem.status)}>
                            {classItem.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Attendance Info */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <span className="text-gray-500 text-sm">Capacity:</span>
                          <span className="ml-1 font-medium">{classItem.capacity}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm">Enrolled:</span>
                          <span className="ml-1 font-medium">{classItem.enrolled}</span>
                        </div>
                        {classItem.attended !== null && (
                          <div>
                            <span className="text-gray-500 text-sm">Attended:</span>
                            <span className="ml-1 font-medium text-green-600">{classItem.attended}</span>
                          </div>
                        )}
                        {classItem.rating && (
                          <div>
                            <span className="text-gray-500 text-sm">Rating:</span>
                            <span className="ml-1 font-medium text-purple-600">{classItem.rating}/5</span>
                          </div>
                        )}
                      </div>

                      {/* Equipment */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-700 mb-2">Equipment Needed:</h5>
                        <div className="flex flex-wrap gap-1">
                          {classItem.equipment.map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-600">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Feedback */}
                      {classItem.feedback && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800 font-medium">Latest Feedback:</p>
                          <p className="text-sm text-green-700">"{classItem.feedback}"</p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          {classItem.status === 'completed' && (
                            <span className="text-sm text-green-600 font-medium">
                              ✓ Class completed successfully
                            </span>
                          )}
                          {classItem.status === 'in-progress' && (
                            <span className="text-sm text-blue-600 font-medium">
                              🔄 Class in session
                            </span>
                          )}
                          {classItem.status === 'upcoming' && (
                            <span className="text-sm text-purple-600 font-medium">
                              ⏳ Starting soon
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {classItem.status === 'upcoming' && (
                            <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                              <FaPlay className="mr-2" />
                              Start Class
                            </Button>
                          )}
                          {classItem.status === 'in-progress' && (
                            <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                              <FaCheckCircle className="mr-2" />
                              End Class
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Members */}
          <TabsContent value="members" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Membership Overview</h3>
              <Button className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                <FaUserFriends className="mr-2" />
                All Members
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Membership Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {membershipData.map((membership, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{membership.type} Members</span>
                          <span className="text-sm text-gray-600">{membership.count} ({membership.percentage}%)</span>
                        </div>
                        <Progress value={membership.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Recent Member Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.slice(0, 4).map((activity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaUsers className="text-blue-600 text-sm" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaCalendarAlt className="mr-2" />
                Full Schedule
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {upcomingShifts.map((shift, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${shift.status === 'active' ? 'border-green-500 bg-green-50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-800">{shift.date}</h4>
                          <p className="text-blue-600 font-medium">{shift.shift}</p>
                          <p className="text-sm text-gray-600">Role: {shift.role}</p>
                        </div>
                        
                        <Badge className={shift.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                          {shift.status}
                        </Badge>
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-700 mb-2">Assigned Classes:</h5>
                        <div className="flex flex-wrap gap-1">
                          {shift.classes.map((classItem, classIndex) => (
                            <Badge key={classIndex} variant="outline" className="text-xs">
                              {classItem}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{metric.metric}</span>
                          <span className="text-sm text-blue-600">
                            {metric.value}{metric.unit} / {metric.target}{metric.unit}
                          </span>
                        </div>
                        <Progress value={(metric.value / metric.target) * 100} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <FaStar className="text-yellow-500" />
                      <div>
                        <p className="font-medium text-gray-800">High Attendance</p>
                        <p className="text-sm text-gray-600">Achieved 90%+ attendance in HIIT class</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <FaCheckCircle className="text-green-500" />
                      <div>
                        <p className="font-medium text-gray-800">Member Favorite</p>
                        <p className="text-sm text-gray-600">Received 5-star rating from 15 members</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}