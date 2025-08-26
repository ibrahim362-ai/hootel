import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaTasks, FaClock, FaCheckCircle, FaExclamationTriangle, FaPlus, FaEdit, FaEye, FaClipboardList, FaUser, FaMapMarkerAlt, FaTools, FaFlag } from 'react-icons/fa';

export default function EmployerTasks() {
  const taskStats = {
    totalTasks: 18,
    completedToday: 6,
    inProgress: 4,
    pending: 5,
    overdue: 3
  };

  const myTasks = [
    {
      id: "TSK-2025-001",
      title: "Guest Room Deep Clean",
      description: "Deep cleaning of rooms 301-305 including carpet cleaning and window washing",
      priority: "high",
      status: "in-progress",
      assignedBy: "Sarah Johnson",
      dueDate: "Jan 26, 2025",
      dueTime: "2:00 PM",
      estimatedDuration: "3 hours",
      location: "3rd Floor - Rooms 301-305",
      tools: ["Vacuum Cleaner", "Carpet Cleaner", "Window Cleaning Kit"],
      progress: 60,
      startedAt: "10:00 AM"
    },
    {
      id: "TSK-2025-002",
      title: "Lobby Area Maintenance",
      description: "Check and replace air fresheners, polish furniture, organize magazines",
      priority: "medium",
      status: "pending",
      assignedBy: "Michael Chen",
      dueDate: "Jan 26, 2025",
      dueTime: "4:00 PM",
      estimatedDuration: "1 hour",
      location: "Main Lobby",
      tools: ["Cleaning Supplies", "Polish", "Microfiber Cloths"],
      progress: 0,
      startedAt: null
    },
    {
      id: "TSK-2025-003",
      title: "Laundry Room Inventory",
      description: "Count and organize linen inventory, report shortages",
      priority: "low",
      status: "completed",
      assignedBy: "Emma Davis",
      dueDate: "Jan 25, 2025",
      dueTime: "3:00 PM",
      estimatedDuration: "2 hours",
      location: "Laundry Room - Basement",
      tools: ["Inventory Sheet", "Scanner"],
      progress: 100,
      startedAt: "1:00 PM",
      completedAt: "3:15 PM"
    },
    {
      id: "TSK-2025-004",
      title: "Restaurant Setup for Event",
      description: "Arrange tables and chairs for corporate dinner event, set up AV equipment",
      priority: "high",
      status: "scheduled",
      assignedBy: "Robert Wilson",
      dueDate: "Jan 27, 2025",
      dueTime: "10:00 AM",
      estimatedDuration: "4 hours",
      location: "Main Restaurant",
      tools: ["Tables", "Chairs", "AV Equipment", "Linens"],
      progress: 0,
      startedAt: null
    },
    {
      id: "TSK-2025-005",
      title: "Fitness Equipment Check",
      description: "Inspect all gym equipment, clean and lubricate as needed",
      priority: "medium",
      status: "overdue",
      assignedBy: "Lisa Thompson",
      dueDate: "Jan 24, 2025",
      dueTime: "6:00 PM",
      estimatedDuration: "2.5 hours",
      location: "Fitness Center",
      tools: ["Maintenance Kit", "Lubricants", "Cleaning Supplies"],
      progress: 25,
      startedAt: "4:00 PM"
    }
  ];

  const todaySchedule = [
    {
      time: "8:00 AM",
      task: "Morning safety briefing",
      location: "Staff Room",
      duration: "15 min",
      type: "meeting"
    },
    {
      time: "8:30 AM",
      task: "Room inspection rounds",
      location: "Floors 2-4",
      duration: "1 hour",
      type: "inspection"
    },
    {
      time: "10:00 AM",
      task: "Guest Room Deep Clean",
      location: "3rd Floor",
      duration: "3 hours",
      type: "task"
    },
    {
      time: "1:00 PM",
      task: "Lunch break",
      location: "Staff Cafeteria",
      duration: "1 hour",
      type: "break"
    },
    {
      time: "2:00 PM",
      task: "Lobby Area Maintenance",
      location: "Main Lobby",
      duration: "1 hour",
      type: "task"
    },
    {
      time: "3:30 PM",
      task: "End of shift reporting",
      location: "Supervisor Office",
      duration: "30 min",
      type: "admin"
    }
  ];

  const taskCategories = [
    {
      category: "Housekeeping",
      count: 8,
      completed: 5,
      color: "bg-blue-50 border-blue-200"
    },
    {
      category: "Maintenance",
      count: 4,
      completed: 1,
      color: "bg-orange-50 border-orange-200"
    },
    {
      category: "Guest Services",
      count: 3,
      completed: 0,
      color: "bg-green-50 border-green-200"
    },
    {
      category: "Events",
      count: 2,
      completed: 0,
      color: "bg-purple-50 border-purple-200"
    },
    {
      category: "Administrative",
      count: 1,
      completed: 0,
      color: "bg-gray-50 border-gray-200"
    }
  ];

  const priorityColors = {
    "high": "bg-red-100 text-red-800 border-red-200",
    "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "low": "bg-green-100 text-green-800 border-green-200"
  };

  const statusColors = {
    "completed": "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
    "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "scheduled": "bg-purple-100 text-purple-800 border-purple-200",
    "overdue": "bg-red-100 text-red-800 border-red-200"
  };

  const typeColors = {
    "meeting": "bg-blue-50",
    "inspection": "bg-yellow-50",
    "task": "bg-green-50",
    "break": "bg-gray-50",
    "admin": "bg-purple-50"
  };

  return (
    <Layout 
      title="My Tasks Dashboard" 
      subtitle="Manage your assigned tasks, track progress, and update status"
    >
      <div className="space-y-6">
        {/* Task Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Tasks</p>
                    <p className="text-2xl font-bold text-blue-600">{taskStats.totalTasks}</p>
                  </div>
                  <FaTasks className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Completed Today</p>
                    <p className="text-2xl font-bold text-green-600">{taskStats.completedToday}</p>
                  </div>
                  <FaCheckCircle className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">In Progress</p>
                    <p className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</p>
                  </div>
                  <FaClock className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">{taskStats.pending}</p>
                  </div>
                  <FaClipboardList className="text-yellow-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Overdue</p>
                    <p className="text-2xl font-bold text-red-600">{taskStats.overdue}</p>
                  </div>
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Today's Schedule and Task Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClock className="mr-2 text-primary" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`flex items-center justify-between p-3 rounded-lg ${typeColors[item.type as keyof typeof typeColors]}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.duration}</div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.task}</p>
                        <p className="text-xs text-muted-foreground">📍 {item.location}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs capitalize">{item.type}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClipboardList className="mr-2 text-primary" />
                Task Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taskCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-4 rounded-lg border ${category.color}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{category.category}</h4>
                      <Badge variant="secondary">{category.count} tasks</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Completed: {category.completed}/{category.count}
                      </span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(category.completed / category.count) * 100}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Tasks List */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaTasks className="mr-2 text-primary" />
              My Assigned Tasks
            </CardTitle>
            <Button size="sm" className="gradient-primary text-white" data-testid="button-request-task">
              <FaPlus className="mr-2" />
              Request New Task
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-6 bg-gray-50 rounded-lg border"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm font-medium">{task.id}</span>
                      <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
                        {task.priority.toUpperCase()}
                      </Badge>
                      <Badge className={statusColors[task.status as keyof typeof statusColors]}>
                        {task.status.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    {task.status === 'in-progress' && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Progress:</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{task.progress}%</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{task.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <FaUser className="mr-2 text-primary" />
                        <span>Assigned by: {task.assignedBy}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaClock className="mr-2 text-primary" />
                        <span>Due: {task.dueDate} at {task.dueTime}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <FaFlag className="mr-2 text-primary" />
                        <span>Duration: {task.estimatedDuration}</span>
                      </div>
                      {task.startedAt && (
                        <div className="flex items-center text-sm">
                          <FaClock className="mr-2 text-primary" />
                          <span>Started: {task.startedAt}</span>
                        </div>
                      )}
                      {task.completedAt && (
                        <div className="flex items-center text-sm">
                          <FaCheckCircle className="mr-2 text-green-600" />
                          <span>Completed: {task.completedAt}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Required Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      {task.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <FaTools className="mr-1" />
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {task.status !== 'completed' && (
                      <>
                        <Button size="sm" variant="outline" data-testid={`button-start-task-${task.id}`}>
                          {task.status === 'in-progress' ? 'Update Progress' : 'Start Task'}
                        </Button>
                        {task.status === 'in-progress' && (
                          <Button size="sm" className="gradient-primary text-white" data-testid={`button-complete-task-${task.id}`}>
                            <FaCheckCircle className="mr-1" />
                            Mark Complete
                          </Button>
                        )}
                      </>
                    )}
                    <Button size="sm" variant="outline" data-testid={`button-view-task-${task.id}`}>
                      <FaEye className="mr-1" />
                      View Details
                    </Button>
                    {task.status !== 'completed' && (
                      <Button size="sm" variant="outline" data-testid={`button-edit-task-${task.id}`}>
                        <FaEdit className="mr-1" />
                        Add Notes
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Task Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Task Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Task Guidelines</h4>
                <div className="space-y-2 text-sm">
                  <div>• Start tasks on time as scheduled</div>
                  <div>• Update progress regularly in system</div>
                  <div>• Report any issues immediately</div>
                  <div>• Use proper safety equipment</div>
                  <div>• Clean and return all tools</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Supervisor:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>Maintenance:</strong> +1 (555) 911-HELP</div>
                  <div><strong>Security:</strong> +1 (555) 123-4567 Ext. 911</div>
                  <div><strong>Front Desk:</strong> +1 (555) 123-4567 Ext. 0</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Performance Standards</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>On-time completion:</span>
                    <span>&gt;95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality score:</span>
                    <span>&gt;4.0/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safety incidents:</span>
                    <span>0 tolerance</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Task updates:</span>
                    <span>Every 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}