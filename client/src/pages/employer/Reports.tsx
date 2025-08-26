import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaChartLine, FaClipboardList, FaClock, FaUser, FaDownload, FaPrint, FaEye, FaCalendarAlt, FaCheckCircle, FaTasks, FaDollarSign, FaAward } from 'react-icons/fa';
import { BarChart } from '@/components/charts/BarChart';

export default function EmployerReports() {
  const myPerformance = {
    tasksCompleted: 156,
    onTimeCompletion: 94,
    qualityScore: 4.7,
    hoursWorked: 168,
    overtimeHours: 12,
    monthlyRating: 4.6
  };

  const weeklyPerformance = [
    { day: 'Mon', tasksCompleted: 8, hoursWorked: 8, quality: 4.8 },
    { day: 'Tue', tasksCompleted: 7, hoursWorked: 8, quality: 4.6 },
    { day: 'Wed', tasksCompleted: 9, hoursWorked: 9, quality: 4.7 },
    { day: 'Thu', tasksCompleted: 6, hoursWorked: 8, quality: 4.5 },
    { day: 'Fri', tasksCompleted: 8, hoursWorked: 8, quality: 4.9 },
    { day: 'Sat', tasksCompleted: 10, hoursWorked: 10, quality: 4.8 },
    { day: 'Sun', tasksCompleted: 0, hoursWorked: 0, quality: 0 }
  ];

  const monthlyTasks = [
    { category: 'Housekeeping', completed: 45, assigned: 48, efficiency: 94 },
    { category: 'Maintenance', completed: 23, assigned: 25, efficiency: 92 },
    { category: 'Guest Services', completed: 18, assigned: 18, efficiency: 100 },
    { category: 'Administrative', completed: 12, assigned: 15, efficiency: 80 },
    { category: 'Training', completed: 8, assigned: 8, efficiency: 100 }
  ];

  const timeTrackingData = [
    { week: 'Week 1', regularHours: 40, overtimeHours: 2, totalPay: 774 },
    { week: 'Week 2', regularHours: 40, overtimeHours: 0, totalPay: 720 },
    { week: 'Week 3', regularHours: 40, overtimeHours: 4, totalPay: 828 },
    { week: 'Week 4', regularHours: 38, overtimeHours: 6, totalPay: 846 }
  ];

  const skillAssessments = [
    { skill: 'Customer Service', current: 4.8, target: 4.5, improvement: '+0.3' },
    { skill: 'Technical Skills', current: 4.6, target: 4.5, improvement: '+0.1' },
    { skill: 'Time Management', current: 4.4, target: 4.5, improvement: '-0.1' },
    { skill: 'Team Collaboration', current: 4.9, target: 4.5, improvement: '+0.4' },
    { skill: 'Problem Solving', current: 4.7, target: 4.5, improvement: '+0.2' }
  ];

  const availableReports = [
    {
      name: 'Personal Performance Summary',
      description: 'Comprehensive overview of your monthly performance metrics',
      type: 'Performance',
      frequency: 'Monthly',
      lastGenerated: 'Jan 25, 2025',
      access: 'Available'
    },
    {
      name: 'Time & Attendance Report',
      description: 'Detailed breakdown of hours worked, breaks, and attendance',
      type: 'Attendance',
      frequency: 'Weekly',
      lastGenerated: 'Jan 24, 2025',
      access: 'Available'
    },
    {
      name: 'Task Completion Analysis',
      description: 'Analysis of task completion rates and quality scores',
      type: 'Tasks',
      frequency: 'Bi-weekly',
      lastGenerated: 'Jan 22, 2025',
      access: 'Available'
    },
    {
      name: 'Skill Development Progress',
      description: 'Track your skill improvements and training achievements',
      type: 'Development',
      frequency: 'Quarterly',
      lastGenerated: 'Jan 15, 2025',
      access: 'Available'
    },
    {
      name: 'Payroll Summary',
      description: 'Detailed payroll information including overtime and deductions',
      type: 'Financial',
      frequency: 'Bi-weekly',
      lastGenerated: 'Jan 20, 2025',
      access: 'Limited'
    }
  ];

  const recentAchievements = [
    {
      achievement: 'Perfect Attendance',
      date: 'January 2025',
      description: '100% attendance rate for the month',
      badge: 'Gold'
    },
    {
      achievement: 'Customer Service Excellence',
      date: 'December 2024',
      description: 'Received 5.0/5.0 rating from guest feedback',
      badge: 'Platinum'
    },
    {
      achievement: 'Efficiency Champion',
      date: 'November 2024',
      description: 'Completed tasks 15% faster than average',
      badge: 'Silver'
    },
    {
      achievement: 'Safety First',
      date: 'October 2024',
      description: 'Zero safety incidents for 6 months',
      badge: 'Gold'
    }
  ];

  const goalTracking = [
    {
      goal: 'Complete 200 tasks this month',
      current: 156,
      target: 200,
      progress: 78,
      status: 'On Track'
    },
    {
      goal: 'Maintain 95% quality score',
      current: 94,
      target: 95,
      progress: 99,
      status: 'Close'
    },
    {
      goal: 'Reduce task completion time by 10%',
      current: 8,
      target: 10,
      progress: 80,
      status: 'Achieved'
    },
    {
      goal: 'Complete customer service training',
      current: 3,
      target: 4,
      progress: 75,
      status: 'In Progress'
    }
  ];

  const badgeColors = {
    'Gold': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Silver': 'bg-gray-100 text-gray-800 border-gray-200',
    'Platinum': 'bg-purple-100 text-purple-800 border-purple-200',
    'Bronze': 'bg-orange-100 text-orange-800 border-orange-200'
  };

  const statusColors = {
    'On Track': 'bg-green-100 text-green-800 border-green-200',
    'Close': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Achieved': 'bg-blue-100 text-blue-800 border-blue-200',
    'In Progress': 'bg-purple-100 text-purple-800 border-purple-200',
    'Behind': 'bg-red-100 text-red-800 border-red-200'
  };

  const accessColors = {
    'Available': 'bg-green-100 text-green-800 border-green-200',
    'Limited': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Restricted': 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <Layout 
      title="My Performance Reports" 
      subtitle="Track your performance, progress, and professional development"
    >
      <div className="space-y-6">
        {/* Performance Overview */}
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
                    <p className="text-sm text-muted-foreground">Tasks Completed</p>
                    <p className="text-2xl font-bold text-blue-600">{myPerformance.tasksCompleted}</p>
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
                    <p className="text-sm text-muted-foreground">On-Time Rate</p>
                    <p className="text-2xl font-bold text-green-600">{myPerformance.onTimeCompletion}%</p>
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
                    <p className="text-sm text-muted-foreground">Quality Score</p>
                    <p className="text-2xl font-bold text-yellow-600">{myPerformance.qualityScore}⭐</p>
                  </div>
                  <FaAward className="text-yellow-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Hours Worked</p>
                    <p className="text-2xl font-bold text-purple-600">{myPerformance.hoursWorked}</p>
                  </div>
                  <FaClock className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Overtime</p>
                    <p className="text-2xl font-bold text-orange-600">{myPerformance.overtimeHours}h</p>
                  </div>
                  <FaClock className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Monthly Rating</p>
                    <p className="text-2xl font-bold text-indigo-600">{myPerformance.monthlyRating}/5.0</p>
                  </div>
                  <FaAward className="text-indigo-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Weekly Performance and Task Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Weekly Performance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={weeklyPerformance.map(item => ({ name: item.day, value: item.tasksCompleted }))}
                title="Tasks Completed by Day"
                color="#3b82f6"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClipboardList className="mr-2 text-primary" />
                Monthly Task Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyTasks.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{category.category}</h4>
                      <Badge variant="secondary">{category.efficiency}% efficiency</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Completed: {category.completed}/{category.assigned}</span>
                      <span>Success Rate: {Math.round((category.completed / category.assigned) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(category.completed / category.assigned) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Assessment and Goal Tracking */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaAward className="mr-2 text-primary" />
                Skill Assessment Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillAssessments.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{skill.skill}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">Current: {skill.current}</span>
                        <span className={`text-sm font-medium ${
                          skill.current >= skill.target ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {skill.improvement}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Target: {skill.target}</span>
                      <span>Score: {skill.current}/5.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          skill.current >= skill.target ? 'bg-green-600' : 'bg-orange-600'
                        }`}
                        style={{ width: `${(skill.current / 5) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Goal Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goalTracking.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{goal.goal}</h4>
                      <Badge className={statusColors[goal.status as keyof typeof statusColors]}>
                        {goal.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progress: {goal.current}/{goal.target}</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          goal.progress >= 100 ? 'bg-green-600' : 
                          goal.progress >= 80 ? 'bg-blue-600' : 
                          goal.progress >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{ width: `${Math.min(goal.progress, 100)}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaClipboardList className="mr-2 text-primary" />
              Available Personal Reports
            </CardTitle>
            <Button size="sm" variant="outline" data-testid="button-request-custom-report">
              Request Custom Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold">{report.name}</h4>
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge className={accessColors[report.access as keyof typeof accessColors]}>
                        {report.access}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Frequency: {report.frequency}</span>
                      <span>Last Generated: {report.lastGenerated}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" data-testid={`button-view-report-${index}`}>
                      <FaEye className="mr-1" />
                      View
                    </Button>
                    {report.access === 'Available' && (
                      <>
                        <Button size="sm" variant="outline" data-testid={`button-download-report-${index}`}>
                          <FaDownload className="mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" data-testid={`button-print-report-${index}`}>
                          <FaPrint className="mr-1" />
                          Print
                        </Button>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements and Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaAward className="mr-2 text-primary" />
              Recent Achievements & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {recentAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{achievement.achievement}</h4>
                    <Badge className={badgeColors[achievement.badge as keyof typeof badgeColors]}>
                      {achievement.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <FaCalendarAlt className="mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Employee Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Employee Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Performance Standards</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Task Completion:</span>
                    <span>&gt;90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality Score:</span>
                    <span>&gt;4.0/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attendance:</span>
                    <span>&gt;95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Rating:</span>
                    <span>&gt;4.5/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training Hours:</span>
                    <span>20hrs/quarter</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Review Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Performance Review:</span>
                    <span>Quarterly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Goal Setting:</span>
                    <span>Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skill Assessment:</span>
                    <span>Bi-annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Career Planning:</span>
                    <span>Annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Feedback Sessions:</span>
                    <span>Weekly</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Direct Supervisor:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>HR Department:</strong> +1 (555) 123-4567 Ext. 201</div>
                  <div><strong>Training Coordinator:</strong> +1 (555) 123-4567 Ext. 205</div>
                  <div><strong>Employee Assistance:</strong> +1 (555) 987-HELP</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}