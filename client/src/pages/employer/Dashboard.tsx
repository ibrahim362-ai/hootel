import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaTasks, FaClock, FaUsers, FaCheckCircle, FaExclamationTriangle, FaBell, FaChartLine, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import DataTable from '@/components/tables/DataTable';

export default function EmployerDashboard() {
  const todayStats = {
    totalTasks: 12,
    completedTasks: 8,
    pendingTasks: 4,
    shiftsToday: 1,
    hoursWorked: 6.5,
    earnings: 156.50
  };

  const urgentTasks = [
    { id: 1, task: "Room 245 - Deep cleaning required", priority: "high", time: "9:00 AM", status: "pending" },
    { id: 2, task: "Restaurant - Setup dinner service", priority: "medium", time: "4:30 PM", status: "in-progress" },
    { id: 3, task: "Gym - Equipment maintenance check", priority: "low", time: "2:00 PM", status: "completed" },
    { id: 4, task: "Lobby - Guest assistance needed", priority: "high", time: "Now", status: "urgent" }
  ];

  const shifts = [
    { date: "Today", time: "8:00 AM - 4:00 PM", department: "Housekeeping", status: "active" },
    { date: "Tomorrow", time: "7:00 AM - 3:00 PM", department: "Housekeeping", status: "scheduled" },
    { date: "Wed", time: "2:00 PM - 10:00 PM", department: "Front Desk", status: "scheduled" }
  ];

  const taskColumns = [
    {
      key: "task",
      label: "Task",
      render: (value: string, row: any) => (
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-muted-foreground">{row.time}</p>
        </div>
      )
    },
    {
      key: "priority",
      label: "Priority",
      render: (value: string) => (
        <Badge 
          className={value === 'high' ? 'bg-red-100 text-red-800' : 
                     value === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                     'bg-green-100 text-green-800'}
        >
          {value}
        </Badge>
      )
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === 'completed' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <Layout 
      title="Staff Dashboard" 
      subtitle="Your tasks, shifts, and performance overview for today"
    >
      <div className="space-y-6">
        {/* Today's Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <FaTasks className="text-blue-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-700">{todayStats.totalTasks}</h3>
                <p className="text-sm text-blue-600">Total Tasks</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-green-700">{todayStats.completedTasks}</h3>
                <p className="text-sm text-green-600">Completed</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-4 text-center">
                <FaExclamationTriangle className="text-orange-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-orange-700">{todayStats.pendingTasks}</h3>
                <p className="text-sm text-orange-600">Pending</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 text-center">
                <FaClock className="text-purple-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-purple-700">{todayStats.hoursWorked}</h3>
                <p className="text-sm text-purple-600">Hours Today</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-indigo-50 border-indigo-200">
              <CardContent className="p-4 text-center">
                <FaCalendarAlt className="text-indigo-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-indigo-700">{todayStats.shiftsToday}</h3>
                <p className="text-sm text-indigo-600">Shifts Today</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-4 text-center">
                <FaDollarSign className="text-emerald-600 text-2xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-emerald-700">${todayStats.earnings}</h3>
                <p className="text-sm text-emerald-600">Today's Pay</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaBell className="mr-2 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" data-testid="button-clock-in">
                <FaClock className="text-xl text-primary" />
                <span>Clock In/Out</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" data-testid="button-view-tasks">
                <FaTasks className="text-xl text-primary" />
                <span>View All Tasks</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" data-testid="button-schedule">
                <FaCalendarAlt className="text-xl text-primary" />
                <span>My Schedule</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" data-testid="button-performance">
                <FaChartLine className="text-xl text-primary" />
                <span>Performance</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Priority Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              data={urgentTasks}
              columns={taskColumns}
              searchKey="task"
              className="border-0"
            />
          </CardContent>
        </Card>

        {/* Upcoming Shifts */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Shifts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {shifts.map((shift, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{shift.date} - {shift.time}</p>
                    <p className="text-sm text-muted-foreground">{shift.department}</p>
                  </div>
                  <Badge 
                    variant={shift.status === 'active' ? 'default' : 'secondary'}
                    className={shift.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {shift.status}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Important Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Safety briefing meeting at 2:00 PM in conference room A</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>New uniform policy effective next Monday</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Employee appreciation event this Friday at 6:00 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Time sheet submission deadline: Friday by 5:00 PM</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">Performance Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Task Completion Rate</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Guest Satisfaction</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Hours Goal</span>
                    <span>76%</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
