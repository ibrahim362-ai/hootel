import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaCalendarAlt, FaClock, FaUsers, FaDumbbell, FaSwimmingPool, FaYinYang, FaHeartbeat, FaPlay, FaPause, FaEdit, FaPlus, FaUserCheck, FaExchangeAlt } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerGymTrainerSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [viewMode, setViewMode] = useState('week');

  const trainerSchedule = [
    {
      id: 1,
      date: '2025-01-27',
      dayName: 'Monday',
      shifts: [
        {
          time: '6:00 AM - 8:00 AM',
          type: 'Personal Training',
          client: 'John Smith',
          focus: 'Weight Loss Program',
          location: 'Personal Training Room 1',
          status: 'confirmed',
          rate: 75,
          notes: 'Focus on cardio and strength training'
        },
        {
          time: '9:00 AM - 10:00 AM',
          type: 'Group Class',
          class: 'Morning HIIT',
          participants: 16,
          capacity: 20,
          location: 'Fitness Studio A',
          status: 'confirmed',
          rate: 45,
          notes: 'High-energy class for morning motivation'
        },
        {
          time: '12:00 PM - 1:00 PM',
          type: 'Personal Training',
          client: 'Sarah Johnson',
          focus: 'Strength Building',
          location: 'Weight Room',
          status: 'confirmed',
          rate: 75,
          notes: 'Advanced strength training program'
        }
      ]
    },
    {
      id: 2,
      date: '2025-01-28',
      dayName: 'Tuesday',
      shifts: [
        {
          time: '7:00 AM - 8:00 AM',
          type: 'Group Class',
          class: 'Power Yoga',
          participants: 22,
          capacity: 25,
          location: 'Yoga Studio',
          status: 'confirmed',
          rate: 50,
          notes: 'Focus on flexibility and strength'
        },
        {
          time: '10:00 AM - 11:00 AM',
          type: 'Personal Training',
          client: 'Mike Davis',
          focus: 'Rehabilitation',
          location: 'Rehabilitation Area',
          status: 'pending',
          rate: 80,
          notes: 'Post-injury recovery program'
        },
        {
          time: '6:00 PM - 7:00 PM',
          type: 'Group Class',
          class: 'Evening Strength',
          participants: 12,
          capacity: 15,
          location: 'Weight Room',
          status: 'confirmed',
          rate: 45,
          notes: 'Advanced strength training class'
        }
      ]
    },
    {
      id: 3,
      date: '2025-01-29',
      dayName: 'Wednesday',
      shifts: [
        {
          time: '8:00 AM - 9:00 AM',
          type: 'Personal Training',
          client: 'Emma Wilson',
          focus: 'Marathon Training',
          location: 'Cardio Area',
          status: 'confirmed',
          rate: 75,
          notes: 'Endurance and speed work'
        },
        {
          time: '11:00 AM - 12:00 PM',
          type: 'Group Class',
          class: 'Aqua Fitness',
          participants: 14,
          capacity: 20,
          location: 'Swimming Pool',
          status: 'confirmed',
          rate: 40,
          notes: 'Low-impact water exercise'
        },
        {
          time: '2:00 PM - 3:00 PM',
          type: 'Personal Training',
          client: 'David Chen',
          focus: 'Muscle Building',
          location: 'Personal Training Room 2',
          status: 'requested',
          rate: 75,
          notes: 'Hypertrophy-focused program'
        }
      ]
    }
  ];

  const personalTrainingClients = [
    {
      name: 'John Smith',
      program: 'Weight Loss Program',
      startDate: '2025-01-15',
      sessionsCompleted: 8,
      totalSessions: 20,
      nextSession: '2025-01-27 6:00 AM',
      progress: 40,
      goals: ['Lose 20 lbs', 'Improve cardiovascular health'],
      notes: 'Great progress, motivated client'
    },
    {
      name: 'Sarah Johnson',
      program: 'Strength Building',
      startDate: '2025-01-10',
      sessionsCompleted: 12,
      totalSessions: 24,
      nextSession: '2025-01-27 12:00 PM',
      progress: 50,
      goals: ['Increase bench press to 120 lbs', 'Build core strength'],
      notes: 'Excellent form, ready for advanced exercises'
    },
    {
      name: 'Mike Davis',
      program: 'Rehabilitation',
      startDate: '2025-01-20',
      sessionsCompleted: 4,
      totalSessions: 16,
      nextSession: '2025-01-28 10:00 AM',
      progress: 25,
      goals: ['Recover from knee injury', 'Restore full mobility'],
      notes: 'Careful progression needed, injury-sensitive'
    }
  ];

  const availabilitySlots = [
    {
      day: 'Monday',
      slots: [
        { time: '6:00 AM - 8:00 AM', status: 'booked', type: 'Personal Training' },
        { time: '8:00 AM - 9:00 AM', status: 'available', type: 'Open' },
        { time: '9:00 AM - 10:00 AM', status: 'booked', type: 'Group Class' },
        { time: '10:00 AM - 12:00 PM', status: 'available', type: 'Open' },
        { time: '12:00 PM - 1:00 PM', status: 'booked', type: 'Personal Training' }
      ]
    },
    {
      day: 'Tuesday',
      slots: [
        { time: '7:00 AM - 8:00 AM', status: 'booked', type: 'Group Class' },
        { time: '8:00 AM - 10:00 AM', status: 'available', type: 'Open' },
        { time: '10:00 AM - 11:00 AM', status: 'pending', type: 'Personal Training' },
        { time: '11:00 AM - 6:00 PM', status: 'available', type: 'Open' },
        { time: '6:00 PM - 7:00 PM', status: 'booked', type: 'Group Class' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'requested': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'booked': return 'bg-red-100 text-red-800';
      case 'available': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case 'Personal Training': return FaUserCheck;
      case 'Group Class': return FaUsers;
      default: return FaDumbbell;
    }
  };

  const getTodaysSchedule = () => {
    const today = new Date().toISOString().split('T')[0];
    return trainerSchedule.find(day => day.date === today);
  };

  const getWeeklyEarnings = () => {
    return trainerSchedule.reduce((total, day) => {
      return total + day.shifts.reduce((dayTotal, shift) => dayTotal + shift.rate, 0);
    }, 0);
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
      title="Trainer Schedule" 
      subtitle="Manage your personal training sessions and group classes"
    >
      <div className="space-y-6">
        {/* Schedule Overview */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">This Week</p>
                  <p className="text-3xl font-bold">
                    {trainerSchedule.reduce((total, day) => total + day.shifts.length, 0)}
                  </p>
                  <p className="text-blue-100 text-xs">Total sessions</p>
                </div>
                <FaCalendarAlt className="text-2xl text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Personal Training</p>
                  <p className="text-3xl font-bold text-green-600">
                    {trainerSchedule.reduce((total, day) => 
                      total + day.shifts.filter(s => s.type === 'Personal Training').length, 0
                    )}
                  </p>
                  <p className="text-gray-500 text-xs">Sessions this week</p>
                </div>
                <FaUserCheck className="text-2xl text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Group Classes</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {trainerSchedule.reduce((total, day) => 
                      total + day.shifts.filter(s => s.type === 'Group Class').length, 0
                    )}
                  </p>
                  <p className="text-gray-500 text-xs">Classes this week</p>
                </div>
                <FaUsers className="text-2xl text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Weekly Earnings</p>
                  <p className="text-3xl font-bold text-purple-600">${getWeeklyEarnings()}</p>
                  <p className="text-gray-500 text-xs">Projected income</p>
                </div>
                <FaDumbbell className="text-2xl text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Schedule Tabs */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-blue-200">
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Weekly Schedule
            </TabsTrigger>
            <TabsTrigger value="clients" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Clients
            </TabsTrigger>
            <TabsTrigger value="availability" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Availability
            </TabsTrigger>
            <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Calendar View
            </TabsTrigger>
          </TabsList>

          {/* Weekly Schedule */}
          <TabsContent value="schedule" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">This Week's Schedule</h3>
              <div className="flex gap-2">
                <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="previous">Previous Week</SelectItem>
                    <SelectItem value="current">Current Week</SelectItem>
                    <SelectItem value="next">Next Week</SelectItem>
                  </SelectContent>
                </Select>
                <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                  <FaPlus className="mr-2" />
                  Add Session
                </Button>
              </div>
            </div>

            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {trainerSchedule.map((day) => (
                <motion.div key={day.id} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{day.dayName}, {day.date}</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          {day.shifts.length} sessions
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {day.shifts.map((shift, index) => {
                        const SessionIcon = getSessionTypeIcon(shift.type);
                        return (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <SessionIcon className="text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">
                                  {shift.type === 'Personal Training' ? shift.client : shift.class}
                                </h4>
                                <p className="text-sm text-blue-600">{shift.time}</p>
                                <p className="text-sm text-gray-600">
                                  {shift.location}
                                  {shift.type === 'Personal Training' && shift.focus && ` • ${shift.focus}`}
                                  {shift.type === 'Group Class' && shift.participants && ` • ${shift.participants}/${shift.capacity} participants`}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <Badge className={getStatusColor(shift.status)}>
                                  {shift.status}
                                </Badge>
                                <p className="text-sm font-medium text-green-600 mt-1">
                                  ${shift.rate}
                                </p>
                              </div>
                              
                              <div className="flex gap-1">
                                <Button size="sm" variant="outline">
                                  <FaEdit className="text-xs" />
                                </Button>
                                {shift.status === 'requested' && (
                                  <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                                    Accept
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      {day.shifts.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <FaClock className="text-3xl mx-auto mb-2" />
                          <p>No sessions scheduled for this day</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* My Clients */}
          <TabsContent value="clients" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Personal Training Clients</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaPlus className="mr-2" />
                New Client
              </Button>
            </div>

            <motion.div
              className="grid lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {personalTrainingClients.map((client, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">{client.name}</h4>
                          <p className="text-blue-600 font-medium">{client.program}</p>
                          <p className="text-sm text-gray-600">Started: {client.startDate}</p>
                        </div>
                        
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-blue-600">
                            {client.sessionsCompleted}/{client.totalSessions} sessions
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${client.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Goals */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-700 mb-2">Goals:</h5>
                        <div className="space-y-1">
                          {client.goals.map((goal, goalIndex) => (
                            <div key={goalIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span>{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Notes:</span> {client.notes}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Next session: {client.nextSession}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <FaEdit className="mr-2" />
                            Edit Plan
                          </Button>
                          <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                            View Progress
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Availability */}
          <TabsContent value="availability" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Weekly Availability</h3>
              <Button className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                <FaEdit className="mr-2" />
                Update Availability
              </Button>
            </div>

            <motion.div
              className="grid lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {availabilitySlots.map((day, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardHeader>
                      <CardTitle>{day.day}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {day.slots.map((slot, slotIndex) => (
                        <div key={slotIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{slot.time}</p>
                            <p className="text-sm text-gray-600">{slot.type}</p>
                          </div>
                          
                          <Badge className={getAvailabilityColor(slot.status)}>
                            {slot.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar" className="space-y-4">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle>
                      Schedule for {selectedDate?.toLocaleDateString()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample schedule for selected date */}
                      <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                        <h4 className="font-semibold text-blue-800">9:00 AM - Morning HIIT</h4>
                        <p className="text-blue-600">Group Class • 16/20 participants</p>
                        <p className="text-sm text-gray-600">Fitness Studio A</p>
                      </div>
                      
                      <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                        <h4 className="font-semibold text-green-800">12:00 PM - Personal Training</h4>
                        <p className="text-green-600">Sarah Johnson • Strength Building</p>
                        <p className="text-sm text-gray-600">Weight Room</p>
                      </div>
                      
                      <div className="text-center py-8 text-gray-500">
                        <FaCalendarAlt className="text-4xl mx-auto mb-4" />
                        <p>Select a date to view schedule details</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}