import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt, FaPhone, FaBell, FaExchangeAlt, FaPlus, FaEdit, FaCheckCircle, FaTimesCircle, FaHourglass, FaClipboardCheck } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRoomsShifts() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [selectedView, setSelectedView] = useState('week');

  const myShifts = [
    {
      id: 1,
      date: '2025-01-27',
      dayName: 'Monday',
      shift: 'Morning Shift',
      time: '7:00 AM - 3:00 PM',
      duration: '8 hours',
      department: 'Housekeeping',
      location: 'Main Building - Floors 3-5',
      supervisor: 'Maria Santos',
      teamSize: 6,
      status: 'confirmed',
      isToday: true,
      tasks: [
        'Room cleaning assignments',
        'Guest checkout processing',
        'Inventory restocking'
      ],
      breaks: [
        { time: '9:30 AM - 9:45 AM', type: 'Break' },
        { time: '12:00 PM - 1:00 PM', type: 'Lunch' }
      ]
    },
    {
      id: 2,
      date: '2025-01-28',
      dayName: 'Tuesday',
      shift: 'Morning Shift',
      time: '7:00 AM - 3:00 PM',
      duration: '8 hours',
      department: 'Housekeeping',
      location: 'Main Building - Floors 6-8',
      supervisor: 'Maria Santos',
      teamSize: 5,
      status: 'confirmed',
      isToday: false,
      tasks: [
        'Suite deep cleaning',
        'Maintenance coordination',
        'Quality inspections'
      ],
      breaks: [
        { time: '9:30 AM - 9:45 AM', type: 'Break' },
        { time: '12:00 PM - 1:00 PM', type: 'Lunch' }
      ]
    },
    {
      id: 3,
      date: '2025-01-29',
      dayName: 'Wednesday',
      shift: 'Afternoon Shift',
      time: '2:00 PM - 10:00 PM',
      duration: '8 hours',
      department: 'Front Desk Support',
      location: 'Reception & Guest Services',
      supervisor: 'James Wilson',
      teamSize: 4,
      status: 'confirmed',
      isToday: false,
      tasks: [
        'Guest check-in assistance',
        'Concierge support',
        'Evening room preparation'
      ],
      breaks: [
        { time: '4:30 PM - 4:45 PM', type: 'Break' },
        { time: '6:00 PM - 7:00 PM', type: 'Dinner' }
      ]
    },
    {
      id: 4,
      date: '2025-01-30',
      dayName: 'Thursday',
      shift: 'Morning Shift',
      time: '7:00 AM - 3:00 PM',
      duration: '8 hours',
      department: 'Housekeeping',
      location: 'Main Building - Floors 1-2',
      supervisor: 'Maria Santos',
      teamSize: 6,
      status: 'pending',
      isToday: false,
      tasks: [
        'Conference room setup',
        'Event space preparation',
        'VIP suite preparation'
      ],
      breaks: [
        { time: '9:30 AM - 9:45 AM', type: 'Break' },
        { time: '12:00 PM - 1:00 PM', type: 'Lunch' }
      ]
    },
    {
      id: 5,
      date: '2025-01-31',
      dayName: 'Friday',
      shift: 'Morning Shift',
      time: '7:00 AM - 3:00 PM',
      duration: '8 hours',
      department: 'Housekeeping',
      location: 'Executive Floor - Suites',
      supervisor: 'Maria Santos',
      teamSize: 4,
      status: 'confirmed',
      isToday: false,
      tasks: [
        'Executive suite service',
        'VIP guest preparations',
        'Weekend setup'
      ],
      breaks: [
        { time: '9:30 AM - 9:45 AM', type: 'Break' },
        { time: '12:00 PM - 1:00 PM', type: 'Lunch' }
      ]
    }
  ];

  const shiftRequests = [
    {
      id: 1,
      type: 'swap',
      date: '2025-02-03',
      shift: 'Morning Shift',
      requestedWith: 'Sarah Williams',
      reason: 'Personal appointment',
      status: 'pending',
      submittedAt: '2025-01-25 10:30 AM'
    },
    {
      id: 2,
      type: 'time-off',
      dateRange: '2025-02-10 - 2025-02-12',
      reason: 'Family vacation',
      status: 'approved',
      submittedAt: '2025-01-20 2:15 PM',
      approvedBy: 'Maria Santos'
    },
    {
      id: 3,
      type: 'overtime',
      date: '2025-01-28',
      additionalHours: '2 hours',
      reason: 'Special event support',
      status: 'approved',
      submittedAt: '2025-01-26 4:45 PM',
      approvedBy: 'James Wilson'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Williams',
      position: 'Senior Housekeeper',
      shift: 'Morning (7 AM - 3 PM)',
      availability: 'Available for swaps',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Mike Johnson',
      position: 'Maintenance Staff',
      shift: 'Morning (7 AM - 3 PM)',
      availability: 'Limited availability',
      phone: '+1 (555) 123-4568'
    },
    {
      name: 'Emma Chen',
      position: 'Housekeeper',
      shift: 'Afternoon (2 PM - 10 PM)',
      availability: 'Available for swaps',
      phone: '+1 (555) 123-4569'
    },
    {
      name: 'Carlos Rodriguez',
      position: 'Room Service Coordinator',
      shift: 'Evening (4 PM - 12 AM)',
      availability: 'Available for swaps',
      phone: '+1 (555) 123-4570'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      case 'approved': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return FaCheckCircle;
      case 'pending': return FaHourglass;
      case 'cancelled': return FaTimesCircle;
      case 'approved': return FaClipboardCheck;
      default: return FaClock;
    }
  };

  const getTodaysShift = () => {
    return myShifts.find(shift => shift.isToday);
  };

  const getUpcomingShifts = () => {
    return myShifts.filter(shift => !shift.isToday).slice(0, 4);
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
      title="My Schedule" 
      subtitle="View and manage your work shifts, time-off requests, and team coordination"
    >
      <div className="space-y-6">
        {/* Today's Shift Highlight */}
        {getTodaysShift() && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaClock className="text-blue-200" />
                      <h3 className="text-xl font-bold">Today's Shift</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1">{getTodaysShift()?.shift}</p>
                    <p className="text-blue-100 mb-2">{getTodaysShift()?.time}</p>
                    <div className="flex items-center gap-4 text-sm text-blue-100">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {getTodaysShift()?.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers />
                        Team of {getTodaysShift()?.teamSize}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">
                      {getTodaysShift()?.department}
                    </Badge>
                    <p className="text-sm text-blue-100">
                      Supervisor: {getTodaysShift()?.supervisor}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Schedule Overview */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">This Week</p>
                  <p className="text-3xl font-bold text-blue-600">40</p>
                  <p className="text-gray-500 text-xs">Total Hours</p>
                </div>
                <FaClock className="text-2xl text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Confirmed Shifts</p>
                  <p className="text-3xl font-bold text-green-600">4</p>
                  <p className="text-gray-500 text-xs">Out of 5 scheduled</p>
                </div>
                <FaCheckCircle className="text-2xl text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Requests</p>
                  <p className="text-3xl font-bold text-orange-600">1</p>
                  <p className="text-gray-500 text-xs">Shift swap request</p>
                </div>
                <FaHourglass className="text-2xl text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Team Size</p>
                  <p className="text-3xl font-bold text-purple-600">6</p>
                  <p className="text-gray-500 text-xs">Average per shift</p>
                </div>
                <FaUsers className="text-2xl text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Schedule Tabs */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-blue-200">
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Schedule
            </TabsTrigger>
            <TabsTrigger value="requests" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Requests
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Team Schedule
            </TabsTrigger>
            <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Calendar View
            </TabsTrigger>
          </TabsList>

          {/* My Schedule */}
          <TabsContent value="schedule" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Upcoming Shifts</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <FaBell className="mr-2" />
                  Set Reminders
                </Button>
                <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                  <FaPlus className="mr-2" />
                  Request Time Off
                </Button>
              </div>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {myShifts.map((shift) => {
                const StatusIcon = getStatusIcon(shift.status);
                return (
                  <motion.div key={shift.id} variants={itemVariants}>
                    <Card className={`${styles.modernCard} ${shift.isToday ? 'border-blue-500 bg-blue-50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FaCalendarAlt className="text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800">
                                {shift.dayName}, {shift.date}
                              </h4>
                              <p className="text-blue-600 font-medium">{shift.shift}</p>
                              <p className="text-sm text-gray-600">{shift.time} ({shift.duration})</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {shift.isToday && (
                              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                Today
                              </Badge>
                            )}
                            <Badge className={getStatusColor(shift.status)}>
                              <StatusIcon className="mr-1 text-xs" />
                              {shift.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-gray-500">Department:</span>
                            <span className="ml-1 font-medium">{shift.department}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Location:</span>
                            <span className="ml-1 font-medium">{shift.location}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Supervisor:</span>
                            <span className="ml-1 font-medium">{shift.supervisor}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Team Size:</span>
                            <span className="ml-1 font-medium">{shift.teamSize} members</span>
                          </div>
                        </div>

                        {/* Tasks for the shift */}
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-700 mb-2">Shift Tasks:</h5>
                          <div className="flex flex-wrap gap-1">
                            {shift.tasks.map((task, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-600">
                                {task}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Break times */}
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-700 mb-2">Break Schedule:</h5>
                          <div className="flex flex-wrap gap-2">
                            {shift.breaks.map((breakTime, index) => (
                              <div key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {breakTime.time} - {breakTime.type}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaPhone />
                            <span>Contact supervisor for changes</span>
                          </div>

                          <div className="flex gap-2">
                            {shift.status === 'pending' && (
                              <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                                <FaCheckCircle className="mr-2" />
                                Confirm
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <FaExchangeAlt className="mr-2" />
                              Request Swap
                            </Button>
                            <Button size="sm" variant="outline">
                              <FaEdit className="mr-2" />
                              Details
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

          {/* Requests */}
          <TabsContent value="requests" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">My Requests</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <FaExchangeAlt className="mr-2" />
                  Request Shift Swap
                </Button>
                <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                  <FaPlus className="mr-2" />
                  New Request
                </Button>
              </div>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {shiftRequests.map((request) => {
                const StatusIcon = getStatusIcon(request.status);
                return (
                  <motion.div key={request.id} variants={itemVariants}>
                    <Card className={styles.modernCard}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-800 capitalize">
                              {request.type.replace('-', ' ')} Request
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {request.type === 'swap' ? (
                                <>Date: {request.date} • With: {request.requestedWith}</>
                              ) : request.type === 'time-off' ? (
                                <>Dates: {request.dateRange}</>
                              ) : (
                                <>Date: {request.date} • Additional: {request.additionalHours}</>
                              )}
                            </p>
                            <p className="text-sm text-gray-600">
                              Reason: {request.reason}
                            </p>
                          </div>
                          
                          <Badge className={getStatusColor(request.status)}>
                            <StatusIcon className="mr-1 text-xs" />
                            {request.status}
                          </Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            Submitted: {request.submittedAt}
                            {request.status === 'approved' && 'approvedBy' in request && (
                              <span className="block">Approved by: {request.approvedBy}</span>
                            )}
                          </div>

                          <div className="flex gap-2">
                            {request.status === 'pending' && (
                              <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                                <FaTimesCircle className="mr-2" />
                                Cancel
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

          {/* Team Schedule */}
          <TabsContent value="team" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
              <Select defaultValue="current">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Week</SelectItem>
                  <SelectItem value="next">Next Week</SelectItem>
                  <SelectItem value="previous">Previous Week</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <motion.div
              className="grid lg:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{member.name}</h4>
                            <p className="text-sm text-blue-600">{member.position}</p>
                          </div>
                        </div>
                        
                        <Badge className={member.availability === 'Available for swaps' ? 
                          'bg-green-100 text-green-800 border-green-200' : 
                          'bg-orange-100 text-orange-800 border-orange-200'
                        }>
                          {member.availability}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <FaClock className="text-gray-500" />
                          <span>{member.shift}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-gray-500" />
                          <span>{member.phone}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <FaExchangeAlt className="mr-2" />
                          Request Swap
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <FaPhone className="mr-2" />
                          Contact
                        </Button>
                      </div>
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
                    <CardTitle>Selected Date: {selectedDate?.toLocaleDateString()}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myShifts
                        .filter(shift => shift.date === selectedDate?.toISOString().split('T')[0])
                        .map(shift => (
                          <div key={shift.id} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                            <h4 className="font-semibold text-blue-800">{shift.shift}</h4>
                            <p className="text-blue-600">{shift.time}</p>
                            <p className="text-sm text-gray-600">{shift.department} - {shift.location}</p>
                          </div>
                        ))}
                      
                      {myShifts.filter(shift => shift.date === selectedDate?.toISOString().split('T')[0]).length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <FaCalendarAlt className="text-4xl mx-auto mb-4" />
                          <p>No shifts scheduled for this date</p>
                        </div>
                      )}
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