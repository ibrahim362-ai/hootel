import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaBuilding, FaWrench, FaClipboardList, FaExclamationTriangle, FaCheckCircle, FaClock, FaPlus, FaEdit, FaEye, FaPhoneAlt, FaTools, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

export default function EmployerProperty() {
  const assignedAreas = [
    {
      area: "Main Building Floors 3-5",
      rooms: 36,
      status: "Active",
      lastInspection: "Jan 20, 2025",
      issues: 2,
      priority: "Medium"
    },
    {
      area: "Restaurant & Kitchen",
      rooms: 8,
      status: "Active", 
      lastInspection: "Jan 22, 2025",
      issues: 0,
      priority: "Low"
    },
    {
      area: "Conference Center",
      rooms: 6,
      status: "Maintenance",
      lastInspection: "Jan 18, 2025",
      issues: 1,
      priority: "High"
    }
  ];

  const myTasks = [
    {
      id: "PT-2025-001",
      title: "HVAC Filter Replacement",
      location: "Main Building - Floor 4",
      priority: "high",
      status: "in-progress",
      dueDate: "Jan 26, 2025",
      estimatedTime: "2 hours",
      equipment: ["HVAC Filters", "Tools", "Ladder"]
    },
    {
      id: "PT-2025-002", 
      title: "Light Bulb Replacement",
      location: "Conference Room A",
      priority: "medium",
      status: "pending",
      dueDate: "Jan 28, 2025",
      estimatedTime: "30 minutes",
      equipment: ["LED Bulbs", "Ladder"]
    },
    {
      id: "PT-2025-003",
      title: "Deep Clean Maintenance",
      location: "Restaurant Kitchen",
      priority: "high",
      status: "scheduled",
      dueDate: "Jan 27, 2025",
      estimatedTime: "4 hours",
      equipment: ["Cleaning Supplies", "Deep Clean Kit"]
    },
    {
      id: "PT-2025-004",
      title: "Safety Inspection",
      location: "Main Building - All Floors",
      priority: "medium",
      status: "completed",
      dueDate: "Jan 24, 2025",
      estimatedTime: "3 hours",
      equipment: ["Safety Checklist", "Inspection Tools"]
    }
  ];

  const equipmentInventory = [
    {
      name: "HVAC Filters",
      available: 24,
      inUse: 8,
      location: "Storage Room A",
      lastRestocked: "Jan 15, 2025"
    },
    {
      name: "LED Light Bulbs",
      available: 156,
      inUse: 12,
      location: "Storage Room B",
      lastRestocked: "Jan 10, 2025"
    },
    {
      name: "Cleaning Supplies",
      available: 45,
      inUse: 15,
      location: "Utility Closet",
      lastRestocked: "Jan 22, 2025"
    },
    {
      name: "Safety Equipment",
      available: 18,
      inUse: 2,
      location: "Safety Office",
      lastRestocked: "Jan 8, 2025"
    }
  ];

  const todaySchedule = [
    {
      time: "8:00 AM",
      task: "Morning safety check",
      location: "All assigned areas",
      duration: "30 min"
    },
    {
      time: "9:00 AM",
      task: "HVAC filter replacement",
      location: "Floor 4 - Rooms 401-405",
      duration: "2 hours"
    },
    {
      time: "1:00 PM",
      task: "Lunch break",
      location: "Staff area",
      duration: "1 hour"
    },
    {
      time: "2:00 PM",
      task: "Conference room setup",
      location: "Conference Center",
      duration: "1 hour"
    },
    {
      time: "4:00 PM",
      task: "End of shift report",
      location: "Supervisor office",
      duration: "30 min"
    }
  ];

  const emergencyProcedures = [
    {
      type: "Fire Emergency",
      procedure: "Evacuate immediately, assist guests, call 911",
      contact: "911 / Property Manager Ext. 301"
    },
    {
      type: "Water Leak",
      procedure: "Shut off water supply, contain damage, report immediately",
      contact: "Maintenance Emergency: +1 (555) 911-HELP"
    },
    {
      type: "Power Outage",
      procedure: "Check backup systems, assist guests, contact utilities",
      contact: "Utilities Emergency: +1 (555) 888-9999"
    },
    {
      type: "Guest Emergency",
      procedure: "Assess situation, provide aid, call emergency services",
      contact: "911 / Front Desk Ext. 0"
    }
  ];

  const statusColors = {
    "Active": "bg-green-100 text-green-800 border-green-200",
    "Maintenance": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Inspection": "bg-blue-100 text-blue-800 border-blue-200"
  };

  const priorityColors = {
    "High": "bg-red-100 text-red-800 border-red-200",
    "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Low": "bg-green-100 text-green-800 border-green-200"
  };

  const taskStatusColors = {
    "completed": "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
    "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "scheduled": "bg-purple-100 text-purple-800 border-purple-200"
  };

  const taskPriorityColors = {
    "high": "bg-red-100 text-red-800 border-red-200",
    "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "low": "bg-green-100 text-green-800 border-green-200"
  };

  return (
    <Layout 
      title="Property Maintenance Dashboard" 
      subtitle="Manage your assigned areas, tasks, and equipment"
    >
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Assigned Areas</p>
                    <p className="text-2xl font-bold text-blue-600">{assignedAreas.length}</p>
                  </div>
                  <FaBuilding className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Active Tasks</p>
                    <p className="text-2xl font-bold text-orange-600">{myTasks.filter(t => t.status !== 'completed').length}</p>
                  </div>
                  <FaWrench className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Completed Today</p>
                    <p className="text-2xl font-bold text-green-600">{myTasks.filter(t => t.status === 'completed').length}</p>
                  </div>
                  <FaCheckCircle className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">High Priority</p>
                    <p className="text-2xl font-bold text-red-600">{myTasks.filter(t => t.priority === 'high' && t.status !== 'completed').length}</p>
                  </div>
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Today's Schedule and Assigned Areas */}
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
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.duration}</div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.task}</p>
                        <p className="text-xs text-muted-foreground">{item.location}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">{item.duration}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                Assigned Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignedAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{area.area}</h4>
                      <div className="flex space-x-2">
                        <Badge className={statusColors[area.status as keyof typeof statusColors]}>
                          {area.status}
                        </Badge>
                        <Badge className={priorityColors[area.priority as keyof typeof priorityColors]}>
                          {area.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div>Rooms: {area.rooms}</div>
                      <div>Issues: {area.issues}</div>
                      <div>Last Check: {area.lastInspection}</div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-inspect-area-${index}`}>
                        <FaEye className="mr-1" />
                        Inspect
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-report-issue-${index}`}>
                        <FaClipboardList className="mr-1" />
                        Report
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaWrench className="mr-2 text-primary" />
              My Property Tasks
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
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-medium">{task.id}</span>
                    <div className="flex space-x-2">
                      <Badge className={taskPriorityColors[task.priority as keyof typeof taskPriorityColors]}>
                        {task.priority.toUpperCase()}
                      </Badge>
                      <Badge className={taskStatusColors[task.status as keyof typeof taskStatusColors]}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1">{task.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">📍 {task.location}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <div>Due: {task.dueDate}</div>
                    <div>Est. Time: {task.estimatedTime}</div>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Required Equipment:</p>
                    <div className="flex flex-wrap gap-1">
                      {task.equipment.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {task.status !== 'completed' && (
                      <Button size="sm" variant="outline" data-testid={`button-update-task-${task.id}`}>
                        <FaEdit className="mr-1" />
                        Update Status
                      </Button>
                    )}
                    <Button size="sm" variant="outline" data-testid={`button-view-task-${task.id}`}>
                      <FaEye className="mr-1" />
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Equipment Inventory and Emergency Procedures */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaTools className="mr-2 text-primary" />
                Equipment Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipmentInventory.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{item.name}</h4>
                      <Badge variant="secondary">{item.location}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Available: </span>
                        <span className="font-medium">{item.available}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">In Use: </span>
                        <span className="font-medium">{item.inUse}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Restocked: </span>
                        <span className="font-medium text-xs">{item.lastRestocked}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2" data-testid={`button-request-equipment-${index}`}>
                      Request Equipment
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaShieldAlt className="mr-2 text-primary" />
                Emergency Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyProcedures.map((emergency, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <h4 className="font-semibold text-red-800 mb-1">{emergency.type}</h4>
                    <p className="text-sm text-red-700 mb-2">{emergency.procedure}</p>
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-red-600 mr-2" />
                      <span className="font-mono text-sm text-red-600">{emergency.contact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Property Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Property Information for Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Shift Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Shift Start:</span>
                    <span>8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shift End:</span>
                    <span>4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Break Time:</span>
                    <span>1:00 PM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safety Check:</span>
                    <span>Every 2 hours</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Supervisor:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>Maintenance Emergency:</strong> +1 (555) 911-HELP</div>
                  <div><strong>Security:</strong> +1 (555) 123-4567 Ext. 911</div>
                  <div><strong>Front Desk:</strong> +1 (555) 123-4567 Ext. 0</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Safety Protocols</h4>
                <div className="space-y-2 text-sm">
                  <div>• Always wear safety equipment</div>
                  <div>• Report incidents immediately</div>
                  <div>• Use proper lifting techniques</div>
                  <div>• Keep work areas clean</div>
                  <div>• Follow chemical safety guidelines</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}