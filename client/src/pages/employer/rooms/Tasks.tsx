import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { FaBroom, FaWrench, FaClipboardList, FaSearch, FaFilter, FaClock, FaUser, FaCheckCircle, FaPlayCircle, FaPauseCircle, FaExclamationTriangle, FaCalendarAlt, FaMapMarkerAlt, FaComments, FaCamera, FaFileAlt } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRoomsTasks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [taskProgress, setTaskProgress] = useState<{[key: number]: number}>({});

  const allTasks = [
    {
      id: 1,
      type: 'cleaning',
      roomNumber: '301',
      floor: 3,
      roomType: 'Deluxe King',
      guestCheckout: '11:00 AM',
      nextCheckin: '3:00 PM',
      priority: 'high',
      estimatedTime: 45,
      status: 'in-progress',
      assignedAt: '11:00 AM',
      startedAt: '11:30 AM',
      deadline: '2:30 PM',
      progress: 65,
      specialRequests: ['Extra towels', 'Late checkout cleanup', 'VIP guest'],
      description: 'Deep cleaning after extended stay guest checkout',
      supervisor: 'Maria Santos',
      teamMembers: ['John Doe'],
      notes: 'Guest reported satisfaction with room service'
    },
    {
      id: 2,
      type: 'maintenance',
      roomNumber: '205',
      floor: 2,
      roomType: 'Standard Double',
      issue: 'AC not cooling properly',
      priority: 'urgent',
      estimatedTime: 60,
      status: 'pending',
      assignedAt: '10:15 AM',
      deadline: '12:00 PM',
      progress: 0,
      specialRequests: ['Guest complaint', 'Technical support needed'],
      description: 'Air conditioning unit malfunctioning, guest complaints of warm room',
      supervisor: 'James Wilson',
      teamMembers: ['Mike Johnson', 'Carlos Rodriguez'],
      notes: 'Guest moved to temporary room 207'
    },
    {
      id: 3,
      type: 'cleaning',
      roomNumber: '412',
      floor: 4,
      roomType: 'Suite',
      guestCheckout: '10:00 AM',
      nextCheckin: '4:00 PM',
      priority: 'normal',
      estimatedTime: 55,
      status: 'completed',
      assignedAt: '10:30 AM',
      startedAt: '10:45 AM',
      completedAt: '11:45 AM',
      deadline: '3:30 PM',
      progress: 100,
      specialRequests: ['Suite deep clean', 'Premium amenities restock'],
      description: 'Suite turnover cleaning with premium service preparation',
      supervisor: 'Maria Santos',
      teamMembers: ['Sarah Williams'],
      notes: 'Completed ahead of schedule, quality approved'
    },
    {
      id: 4,
      type: 'inspection',
      roomNumber: '156',
      floor: 1,
      roomType: 'Standard King',
      purpose: 'Quality check after maintenance',
      priority: 'normal',
      estimatedTime: 20,
      status: 'scheduled',
      assignedAt: '1:30 PM',
      scheduledAt: '2:00 PM',
      deadline: '2:30 PM',
      progress: 0,
      specialRequests: ['Manager approval required', 'Photo documentation'],
      description: 'Post-maintenance quality inspection and approval',
      supervisor: 'David Chen',
      teamMembers: ['Lisa Park'],
      notes: 'Maintenance completed, awaiting final inspection'
    },
    {
      id: 5,
      type: 'maintenance',
      roomNumber: '318',
      floor: 3,
      roomType: 'Deluxe Double',
      issue: 'Bathroom faucet leak',
      priority: 'normal',
      estimatedTime: 30,
      status: 'pending',
      assignedAt: '9:00 AM',
      deadline: '2:00 PM',
      progress: 0,
      specialRequests: ['Plumbing tools required'],
      description: 'Minor plumbing repair needed in guest bathroom',
      supervisor: 'James Wilson',
      teamMembers: ['Mike Johnson'],
      notes: 'Room currently vacant, can be completed anytime'
    },
    {
      id: 6,
      type: 'cleaning',
      roomNumber: '525',
      floor: 5,
      roomType: 'Presidential Suite',
      guestCheckout: '12:00 PM',
      nextCheckin: '6:00 PM',
      priority: 'high',
      estimatedTime: 90,
      status: 'scheduled',
      assignedAt: '11:45 AM',
      scheduledAt: '12:30 PM',
      deadline: '5:30 PM',
      progress: 0,
      specialRequests: ['Presidential service', 'Executive amenities', 'White glove service'],
      description: 'Presidential suite complete turnover with luxury service preparation',
      supervisor: 'Maria Santos',
      teamMembers: ['Sarah Williams', 'Emma Chen'],
      notes: 'VIP guest arrival, highest priority service required'
    }
  ];

  const filteredTasks = allTasks.filter(task => {
    const matchesSearch = task.roomNumber.includes(searchTerm) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    const matchesType = typeFilter === 'all' || task.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesType;
  });

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
      case 'scheduled': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'cleaning': return FaBroom;
      case 'maintenance': return FaWrench;
      case 'inspection': return FaClipboardList;
      default: return FaClipboardList;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return FaCheckCircle;
      case 'in-progress': return FaPlayCircle;
      case 'pending': return FaPauseCircle;
      case 'scheduled': return FaCalendarAlt;
      case 'overdue': return FaExclamationTriangle;
      default: return FaClock;
    }
  };

  const updateTaskProgress = (taskId: number, progress: number) => {
    setTaskProgress(prev => ({
      ...prev,
      [taskId]: progress
    }));
  };

  const startTask = (taskId: number) => {
    // Task start logic
    console.log('Starting task:', taskId);
  };

  const completeTask = (taskId: number) => {
    // Task completion logic
    console.log('Completing task:', taskId);
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
      title="Room Tasks" 
      subtitle="Manage your assigned cleaning, maintenance, and inspection tasks"
    >
      <div className="space-y-6">
        {/* Task Summary */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Tasks</p>
                  <p className="text-3xl font-bold">{filteredTasks.length}</p>
                </div>
                <FaClipboardList className="text-2xl text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {filteredTasks.filter(t => t.status === 'in-progress').length}
                  </p>
                </div>
                <FaPlayCircle className="text-2xl text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Completed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {filteredTasks.filter(t => t.status === 'completed').length}
                  </p>
                </div>
                <FaCheckCircle className="text-2xl text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Urgent</p>
                  <p className="text-3xl font-bold text-red-600">
                    {filteredTasks.filter(t => t.priority === 'urgent').length}
                  </p>
                </div>
                <FaExclamationTriangle className="text-2xl text-red-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <Card className={styles.modernCard}>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
              <div>
                <Label>Search Tasks</Label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Room number, type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Priority</Label>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Task Type</Label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full`}>
                  <FaFilter className="mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks List */}
        <motion.div
          className="grid gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredTasks.map((task) => {
            const TaskIcon = getTaskIcon(task.type);
            const StatusIcon = getStatusIcon(task.status);
            const currentProgress = taskProgress[task.id] || task.progress;

            return (
              <motion.div key={task.id} variants={itemVariants}>
                <Card className={`${styles.modernCard} ${task.status === 'in-progress' ? 'border-blue-500 bg-blue-50' : task.priority === 'urgent' ? 'border-red-500 bg-red-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <TaskIcon className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">
                            Room {task.roomNumber} - Floor {task.floor}
                          </h4>
                          <p className="text-blue-600 font-medium">{task.roomType}</p>
                          <p className="text-sm text-gray-600">{task.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Badge className={getStatusColor(task.status)}>
                          <StatusIcon className="mr-1" />
                          {task.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Progress Bar for In Progress Tasks */}
                    {task.status === 'in-progress' && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm text-blue-600">{currentProgress}%</span>
                        </div>
                        <Progress value={currentProgress} className="h-2" />
                      </div>
                    )}

                    {/* Task Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Estimated Time:</span>
                        <span className="ml-1 font-medium">{task.estimatedTime} min</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deadline:</span>
                        <span className="ml-1 font-medium">{task.deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Supervisor:</span>
                        <span className="ml-1 font-medium">{task.supervisor}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Team:</span>
                        <span className="ml-1 font-medium">{task.teamMembers.join(', ')}</span>
                      </div>
                    </div>

                    {/* Additional Info for Different Task Types */}
                    {'guestCheckout' in task && (
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Guest Checkout:</span>
                          <span className="ml-1 font-medium">{task.guestCheckout}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Next Checkin:</span>
                          <span className="ml-1 font-medium">{task.nextCheckin}</span>
                        </div>
                      </div>
                    )}

                    {'issue' in task && (
                      <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2">
                          <FaExclamationTriangle className="text-orange-600" />
                          <span className="font-medium text-orange-800">Issue: {task.issue}</span>
                        </div>
                      </div>
                    )}

                    {/* Special Requests */}
                    {task.specialRequests && task.specialRequests.length > 0 && (
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 block mb-2">Special Requests:</span>
                        <div className="flex flex-wrap gap-1">
                          {task.specialRequests.map((request, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {request}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {task.notes && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <FaComments className="text-gray-500 mt-1" />
                          <div>
                            <span className="text-sm font-medium text-gray-700">Notes:</span>
                            <p className="text-sm text-gray-600">{task.notes}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaClock />
                        {task.status === 'completed' ? (
                          <span>Completed at {'completedAt' in task ? task.completedAt : 'N/A'}</span>
                        ) : task.status === 'in-progress' ? (
                          <span>Started at {'startedAt' in task ? task.startedAt : 'N/A'}</span>
                        ) : task.status === 'scheduled' ? (
                          <span>Scheduled at {'scheduledAt' in task ? task.scheduledAt : 'N/A'}</span>
                        ) : (
                          <span>Assigned at {task.assignedAt}</span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {task.status === 'pending' && (
                          <Button 
                            size="sm" 
                            className={`${styles.modernButton} ${styles.buttonPrimary}`}
                            onClick={() => startTask(task.id)}
                          >
                            <FaPlayCircle className="mr-2" />
                            Start Task
                          </Button>
                        )}
                        
                        {task.status === 'in-progress' && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedTask(task.id)}
                            >
                              <FaCamera className="mr-2" />
                              Update Progress
                            </Button>
                            <Button 
                              size="sm" 
                              className={`${styles.modernButton} ${styles.buttonSecondary}`}
                              onClick={() => completeTask(task.id)}
                            >
                              <FaCheckCircle className="mr-2" />
                              Complete
                            </Button>
                          </>
                        )}
                        
                        <Button size="sm" variant="outline">
                          <FaFileAlt className="mr-2" />
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

        {filteredTasks.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaClipboardList className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}