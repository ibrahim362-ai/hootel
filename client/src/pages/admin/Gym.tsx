import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaDollarSign, FaChartLine, FaClock, FaPlus, FaEdit, FaTrash, FaEye, FaStar, FaHeartbeat, FaSwimmer, FaRunning, FaCalendarAlt } from 'react-icons/fa';

export default function AdminGym() {
  const fitnessStats = {
    totalMembers: 287,
    activeClasses: 15,
    todayRevenue: 3450,
    equipmentItems: 45,
    personalTrainers: 8,
    averageRating: 4.8
  };

  const membershipPlans = [
    {
      id: "basic",
      name: "Basic Membership",
      price: 49,
      duration: "Monthly",
      features: ["Gym Access", "Locker Room", "Basic Equipment"],
      members: 120,
      revenue: 5880,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "premium",
      name: "Premium Membership", 
      price: 79,
      duration: "Monthly",
      features: ["All Basic Features", "Group Classes", "Pool Access", "Sauna"],
      members: 145,
      revenue: 11455,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "elite",
      name: "Elite Membership",
      price: 129,
      duration: "Monthly", 
      features: ["All Premium Features", "Personal Training", "Nutrition Consultation", "Priority Booking"],
      members: 22,
      revenue: 2838,
      color: "bg-gold-50 border-yellow-200"
    }
  ];

  const classSchedule = [
    {
      id: "1",
      name: "Morning Yoga",
      instructor: "Sarah Wilson",
      time: "07:00 AM - 08:00 AM",
      participants: 15,
      capacity: 20,
      type: "yoga",
      room: "Studio A",
      status: "scheduled"
    },
    {
      id: "2", 
      name: "HIIT Training",
      instructor: "Mike Johnson",
      time: "06:00 PM - 06:45 PM",
      participants: 12,
      capacity: 15,
      type: "cardio",
      room: "Fitness Studio",
      status: "scheduled"
    },
    {
      id: "3",
      name: "Swimming Lessons",
      instructor: "Emma Davis",
      time: "10:00 AM - 11:00 AM", 
      participants: 6,
      capacity: 8,
      type: "swimming",
      room: "Pool Area",
      status: "active"
    }
  ];

  const equipmentStatus = [
    {
      name: "Treadmills",
      total: 8,
      working: 7,
      maintenance: 1,
      utilizationRate: 78
    },
    {
      name: "Weight Machines",
      total: 15,
      working: 14,
      maintenance: 1,
      utilizationRate: 85
    },
    {
      name: "Free Weights",
      total: 12,
      working: 12,
      maintenance: 0,
      utilizationRate: 92
    },
    {
      name: "Cardio Bikes",
      total: 10,
      working: 9,
      maintenance: 1,
      utilizationRate: 65
    }
  ];

  const statusColors = {
    "scheduled": "bg-blue-100 text-blue-800 border-blue-200",
    "active": "bg-green-100 text-green-800 border-green-200",
    "completed": "bg-gray-100 text-gray-800 border-gray-200",
    "cancelled": "bg-red-100 text-red-800 border-red-200"
  };

  const classTypeIcons = {
    yoga: FaHeartbeat,
    cardio: FaRunning,
    swimming: FaSwimmer,
    strength: FaDumbbell
  };

  return (
    <Layout 
      title="Fitness Center Management Dashboard" 
      subtitle="Manage memberships, classes, equipment, and track performance metrics"
    >
      <div className="space-y-6">
        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Members</p>
                    <p className="text-2xl font-bold text-blue-600">{fitnessStats.totalMembers}</p>
                  </div>
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Classes</p>
                    <p className="text-2xl font-bold text-green-600">{fitnessStats.activeClasses}</p>
                  </div>
                  <FaDumbbell className="text-green-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Today's Revenue</p>
                    <p className="text-2xl font-bold text-green-600">${fitnessStats.todayRevenue.toLocaleString()}</p>
                  </div>
                  <FaDollarSign className="text-green-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Equipment Items</p>
                    <p className="text-2xl font-bold text-purple-600">{fitnessStats.equipmentItems}</p>
                  </div>
                  <FaDumbbell className="text-purple-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Personal Trainers</p>
                    <p className="text-2xl font-bold text-orange-600">{fitnessStats.personalTrainers}</p>
                  </div>
                  <FaUsers className="text-orange-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold text-yellow-600">{fitnessStats.averageRating}⭐</p>
                  </div>
                  <FaStar className="text-yellow-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Membership Plans */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaDollarSign className="mr-2 text-primary" />
              Membership Plans & Revenue
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-add-membership-plan">
              <FaPlus className="mr-2" />
              Add Plan
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {membershipPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-lg border ${plan.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <Badge variant="secondary">{plan.members} members</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-primary">
                      ${plan.price}<span className="text-sm font-normal">/{plan.duration}</span>
                    </div>
                    <div className="space-y-1">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex justify-between text-sm">
                        <span>Monthly Revenue:</span>
                        <span className="font-semibold">${plan.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" data-testid={`button-edit-plan-${plan.id}`}>
                        <FaEdit className="mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-plan-${plan.id}`}>
                        <FaEye className="mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Schedule and Equipment Status */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                Today's Class Schedule
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-manage-schedule">
                <FaEdit className="mr-2" />
                Manage
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classSchedule.map((cls, index) => (
                  <motion.div
                    key={cls.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        {cls.type === 'yoga' && <FaHeartbeat className="text-white text-lg" />}
                        {cls.type === 'cardio' && <FaRunning className="text-white text-lg" />}
                        {cls.type === 'swimming' && <FaSwimmer className="text-white text-lg" />}
                        {cls.type === 'strength' && <FaDumbbell className="text-white text-lg" />}
                        {!['yoga', 'cardio', 'swimming', 'strength'].includes(cls.type) && <FaDumbbell className="text-white text-lg" />}
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{cls.name}</span>
                          <Badge className={statusColors[cls.status as keyof typeof statusColors]}>
                            {cls.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{cls.instructor} • {cls.room}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">{cls.time}</span>
                          <span className="text-xs text-muted-foreground">{cls.participants}/{cls.capacity} participants</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaDumbbell className="mr-2 text-primary" />
                Equipment Status
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-equipment-maintenance">
                <FaEdit className="mr-2" />
                Maintenance Log
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipmentStatus.map((equipment, index) => (
                  <motion.div
                    key={equipment.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{equipment.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{equipment.working}/{equipment.total}</Badge>
                        {equipment.maintenance > 0 && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {equipment.maintenance} maintenance
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Utilization Rate</span>
                      <span className="text-sm font-medium">{equipment.utilizationRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${equipment.utilizationRate}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaUsers className="mr-2" />
                Member Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-member">
                <FaPlus className="mr-2" />
                Add New Member
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-view-members">
                <FaEye className="mr-2" />
                View All Members
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-membership-renewals">
                <FaClock className="mr-2" />
                Renewal Reminders
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaCalendarAlt className="mr-2" />
                Class Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-class">
                <FaPlus className="mr-2" />
                Schedule New Class
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-manage-instructors">
                <FaUsers className="mr-2" />
                Manage Instructors
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-class-analytics">
                <FaChartLine className="mr-2" />
                Class Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaDumbbell className="mr-2" />
                Equipment Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-equipment">
                <FaPlus className="mr-2" />
                Add Equipment
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-maintenance-schedule">
                <FaClock className="mr-2" />
                Maintenance Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-equipment-reports">
                <FaChartLine className="mr-2" />
                Usage Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <FaChartLine className="mr-2" />
                Analytics & Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-revenue-reports">
                <FaDollarSign className="mr-2" />
                Revenue Reports
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-member-analytics">
                <FaUsers className="mr-2" />
                Member Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-performance-metrics">
                <FaStar className="mr-2" />
                Performance Metrics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Fitness Center Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Fitness Center Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Operating Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pool Hours:</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sauna Hours:</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Performance Indicators</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Member Retention Rate:</span>
                    <span>Target: &gt;85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment Uptime:</span>
                    <span>Target: &gt;95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class Attendance:</span>
                    <span>Target: &gt;75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Member Satisfaction:</span>
                    <span>Target: &gt;4.5⭐</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Fitness Manager:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>Head Trainer:</strong> +1 (555) 123-4567 Ext. 302</div>
                  <div><strong>Equipment Maintenance:</strong> +1 (555) 987-6543</div>
                  <div><strong>Medical Emergency:</strong> Dial 911</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}