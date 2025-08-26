import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaBed, FaCalendarAlt, FaTasks, FaClock, FaCheckCircle, FaExclamationTriangle, FaUsers, FaChartLine, FaBroom, FaWrench, FaClipboardList, FaHourglass } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRoomsDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const dashboardStats = {
    today: {
      totalRooms: 150,
      assignedToMe: 18,
      completed: 12,
      pending: 6,
      overdue: 0,
      avgCompletionTime: 35,
      efficiency: 88,
      guestSatisfaction: 4.7
    }
  };

  const currentStats = dashboardStats[selectedPeriod as keyof typeof dashboardStats];

  const myTasks = [
    {
      id: 1,
      type: 'cleaning',
      roomNumber: '301',
      guestCheckout: '11:00 AM',
      nextCheckin: '3:00 PM',
      priority: 'high',
      estimatedTime: 45,
      status: 'in-progress',
      startedAt: '11:30 AM',
      specialRequests: ['Extra towels', 'Late checkout cleanup']
    },
    {
      id: 2,
      type: 'maintenance',
      roomNumber: '205',
      issue: 'AC not cooling properly',
      priority: 'urgent',
      estimatedTime: 60,
      status: 'pending',
      reportedAt: '10:15 AM',
      specialRequests: ['Guest complaint', 'Technical support needed']
    },
    {
      id: 3,
      type: 'cleaning',
      roomNumber: '412',
      guestCheckout: '10:00 AM',
      nextCheckin: '4:00 PM',
      priority: 'normal',
      estimatedTime: 35,
      status: 'completed',
      completedAt: '11:45 AM',
      specialRequests: []
    },
    {
      id: 4,
      type: 'inspection',
      roomNumber: '156',
      purpose: 'Quality check after maintenance',
      priority: 'normal',
      estimatedTime: 20,
      status: 'pending',
      scheduledAt: '2:00 PM',
      specialRequests: ['Manager approval required']
    }
  ];

  const upcomingShifts = [
    {
      date: 'Today',
      shift: 'Morning (7 AM - 3 PM)',
      department: 'Housekeeping',
      supervisor: 'Maria Santos',
      teamSize: 6,
      status: 'active'
    },
    {
      date: 'Tomorrow',
      shift: 'Morning (7 AM - 3 PM)',
      department: 'Housekeeping',
      supervisor: 'Maria Santos',
      teamSize: 5,
      status: 'scheduled'
    },
    {
      date: 'Wednesday',
      shift: 'Afternoon (3 PM - 11 PM)',
      department: 'Front Desk Support',
      supervisor: 'James Wilson',
      teamSize: 4,
      status: 'scheduled'
    }
  ];

  const recentActivity = [
    {
      action: 'Completed room cleaning',
      room: '412',
      time: '11:45 AM',
      duration: '38 minutes',
      rating: 5
    },
    {
      action: 'Started maintenance task',
      room: '205',
      time: '11:30 AM',
      issue: 'AC repair',
      status: 'in-progress'
    },
    {
      action: 'Received new task assignment',
      room: '301',
      time: '11:15 AM',
      type: 'Priority cleaning',
      deadline: '2:30 PM'
    },
    {
      action: 'Completed room inspection',
      room: '128',
      time: '10:30 AM',
      result: 'Approved',
      notes: 'Ready for guest'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'cleaning': return FaBroom;
      case 'maintenance': return FaWrench;
      case 'inspection': return FaClipboardList;
      default: return FaTasks;
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
      title="Rooms Dashboard" 
      subtitle="Housekeeping and room management overview for your current shift"
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
                    <p className="text-blue-100 text-sm font-medium">My Tasks Today</p>
                    <p className="text-3xl font-bold">{currentStats.assignedToMe}</p>
                    <p className="text-blue-100 text-xs">
                      {currentStats.completed} completed • {currentStats.pending} pending
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaTasks className="text-2xl" />
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
                    <p className="text-gray-600 text-sm font-medium">Completion Rate</p>
                    <p className="text-3xl font-bold text-green-600">{Math.round((currentStats.completed / currentStats.assignedToMe) * 100)}%</p>
                    <p className="text-gray-500 text-xs">
                      {currentStats.completed} of {currentStats.assignedToMe} tasks
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-2xl text-green-600" />
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
                    <p className="text-gray-600 text-sm font-medium">Avg. Completion Time</p>
                    <p className="text-3xl font-bold text-blue-600">{currentStats.avgCompletionTime}min</p>
                    <p className="text-gray-500 text-xs">
                      Efficiency: {currentStats.efficiency}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaClock className="text-2xl text-blue-600" />
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
                    <p className="text-gray-600 text-sm font-medium">Guest Satisfaction</p>
                    <p className="text-3xl font-bold text-purple-600">{currentStats.guestSatisfaction}</p>
                    <p className="text-gray-500 text-xs">
                      Based on room inspections
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-2xl text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-blue-200">
            <TabsTrigger value="tasks" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Tasks
            </TabsTrigger>
            <TabsTrigger value="shifts" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Upcoming Shifts
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Recent Activity
            </TabsTrigger>
          </TabsList>

          {/* Current Tasks */}
          <TabsContent value="tasks" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Current Tasks</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaClipboardList className="mr-2" />
                View All Tasks
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {myTasks.map((task) => {
                const TaskIcon = getTaskIcon(task.type);
                return (
                  <motion.div key={task.id} variants={itemVariants}>
                    <Card className={`${styles.modernCard} ${task.status === 'in-progress' ? 'border-blue-500 bg-blue-50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <TaskIcon className="text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Room {task.roomNumber} - {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {'issue' in task ? task.issue : `Est. ${task.estimatedTime} minutes`}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                          {'guestCheckout' in task && (
                            <div>
                              <span className="text-gray-500">Checkout:</span>
                              <span className="ml-1 font-medium">{task.guestCheckout}</span>
                            </div>
                          )}
                          {'nextCheckin' in task && (
                            <div>
                              <span className="text-gray-500">Next Checkin:</span>
                              <span className="ml-1 font-medium">{task.nextCheckin}</span>
                            </div>
                          )}
                          {'reportedAt' in task && (
                            <div>
                              <span className="text-gray-500">Reported:</span>
                              <span className="ml-1 font-medium">{task.reportedAt}</span>
                            </div>
                          )}
                          {'scheduledAt' in task && (
                            <div>
                              <span className="text-gray-500">Scheduled:</span>
                              <span className="ml-1 font-medium">{task.scheduledAt}</span>
                            </div>
                          )}
                        </div>

                        {task.specialRequests && task.specialRequests.length > 0 && (
                          <div className="mb-4">
                            <span className="text-sm text-gray-500 block mb-1">Special Requests:</span>
                            <div className="flex flex-wrap gap-1">
                              {task.specialRequests.map((request, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {request}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          {task.status === 'completed' ? (
                            <span className="text-sm text-green-600 font-medium">
                              ✓ Completed at {'completedAt' in task ? task.completedAt : 'N/A'}
                            </span>
                          ) : task.status === 'in-progress' ? (
                            <span className="text-sm text-blue-600 font-medium">
                              🔄 Started at {'startedAt' in task ? task.startedAt : 'N/A'}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-500">
                              ⏳ Estimated: {task.estimatedTime} minutes
                            </span>
                          )}

                          <div className="flex gap-2">
                            {task.status === 'pending' && (
                              <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                                Start Task
                              </Button>
                            )}
                            {task.status === 'in-progress' && (
                              <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                                Mark Complete
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
                );
              })}
            </motion.div>
          </TabsContent>

          {/* Upcoming Shifts */}
          <TabsContent value="shifts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
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
              {upcomingShifts.map((shift, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${shift.status === 'active' ? 'border-green-500 bg-green-50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaCalendarAlt className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{shift.date}</h4>
                            <p className="text-blue-600 font-medium">{shift.shift}</p>
                            <p className="text-sm text-gray-600">{shift.department}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <Badge className={shift.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                            {shift.status}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">
                            Supervisor: {shift.supervisor}
                          </p>
                          <p className="text-sm text-gray-600">
                            Team: {shift.teamSize} members
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Recent Activity */}
          <TabsContent value="activity" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Today's Activity</h3>
              <Button className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                <FaChartLine className="mr-2" />
                View Performance Report
              </Button>
            </div>

            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recentActivity.map((activity, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaCheckCircle className="text-blue-600 text-sm" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{activity.action}</p>
                            <p className="text-sm text-gray-600">
                              Room {activity.room} • {activity.time}
                              {'duration' in activity && ` • ${activity.duration}`}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          {'rating' in activity && (
                            <div className="flex items-center gap-1 text-yellow-500">
                              {Array.from({ length: activity.rating }, (_, i) => (
                                <span key={i}>⭐</span>
                              ))}
                            </div>
                          )}
                          {'status' in activity && (
                            <Badge className={getStatusColor(activity.status)}>
                              {activity.status}
                            </Badge>
                          )}
                          {'result' in activity && (
                            <Badge className="bg-green-100 text-green-800">
                              {activity.result}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}