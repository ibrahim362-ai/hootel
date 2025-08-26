import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaUsers, FaUserPlus, FaCalendarAlt, FaDollarSign, FaStar, FaPlus, FaEdit, FaEye, FaPhone, FaClock, FaCheckCircle, FaExclamationTriangle, FaChartLine, FaAward, FaClipboardList, FaUserCog } from 'react-icons/fa';
import DataTable from '@/components/tables/DataTable';

export default function AdminStaff() {
  const staffStats = {
    totalStaff: 89,
    activeStaff: 76,
    onShiftToday: 32,
    totalPayroll: 45670,
    avgPerformance: 4.3,
    openPositions: 8
  };

  const departments = [
    {
      name: "Housekeeping",
      staff: 24,
      manager: "Sarah Johnson",
      performance: 4.5,
      budget: 18500,
      efficiency: 92,
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Front Desk",
      staff: 12,
      manager: "Michael Chen",
      performance: 4.7,
      budget: 15600,
      efficiency: 96,
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Restaurant",
      staff: 18,
      manager: "Emma Davis",
      performance: 4.2,
      budget: 19800,
      efficiency: 89,
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Maintenance",
      staff: 8,
      manager: "Robert Wilson",
      performance: 4.6,
      budget: 12400,
      efficiency: 94,
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "Security",
      staff: 6,
      manager: "Lisa Thompson",
      performance: 4.8,
      budget: 14200,
      efficiency: 98,
      color: "bg-red-50 border-red-200"
    },
    {
      name: "Management",
      staff: 5,
      manager: "David Lee",
      performance: 4.4,
      budget: 28900,
      efficiency: 91,
      color: "bg-gray-50 border-gray-200"
    }
  ];

  const staffMembers = [
    {
      id: "EMP001",
      name: "Alice Rodriguez",
      department: "Housekeeping",
      position: "Senior Housekeeper",
      status: "On Shift",
      performance: 4.7,
      shift: "6:00 AM - 2:00 PM",
      hourlyRate: 18,
      experience: "3 years",
      lastReview: "Dec 2024"
    },
    {
      id: "EMP002",
      name: "James Mitchell",
      department: "Front Desk",
      position: "Guest Relations Specialist",
      status: "On Break",
      performance: 4.5,
      shift: "8:00 AM - 4:00 PM",
      hourlyRate: 22,
      experience: "2 years",
      lastReview: "Jan 2025"
    },
    {
      id: "EMP003",
      name: "Maria Santos",
      department: "Restaurant",
      position: "Head Server",
      status: "Off Duty",
      performance: 4.3,
      shift: "5:00 PM - 1:00 AM",
      hourlyRate: 16,
      experience: "4 years",
      lastReview: "Nov 2024"
    },
    {
      id: "EMP004",
      name: "Kevin Park",
      department: "Maintenance",
      position: "Maintenance Technician",
      status: "On Shift",
      performance: 4.8,
      shift: "7:00 AM - 3:00 PM",
      hourlyRate: 24,
      experience: "5 years",
      lastReview: "Dec 2024"
    },
    {
      id: "EMP005",
      name: "Sophie Brown",
      department: "Security",
      position: "Security Officer",
      status: "Night Shift",
      performance: 4.9,
      shift: "11:00 PM - 7:00 AM",
      hourlyRate: 20,
      experience: "6 years",
      lastReview: "Jan 2025"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Guest Satisfaction",
      current: 4.6,
      target: 4.5,
      trend: "up",
      department: "Front Desk"
    },
    {
      metric: "Room Turnover Time",
      current: 28,
      target: 30,
      trend: "up",
      department: "Housekeeping",
      unit: "minutes"
    },
    {
      metric: "Order Accuracy",
      current: 96,
      target: 95,
      trend: "steady",
      department: "Restaurant",
      unit: "%"
    },
    {
      metric: "Response Time",
      current: 12,
      target: 15,
      trend: "up",
      department: "Maintenance",
      unit: "minutes"
    }
  ];

  const upcomingShifts = [
    {
      date: "Today",
      department: "Housekeeping",
      staffCount: 12,
      coverage: 100,
      supervisor: "Sarah Johnson"
    },
    {
      date: "Today",
      department: "Front Desk",
      staffCount: 4,
      coverage: 100,
      supervisor: "Michael Chen"
    },
    {
      date: "Tomorrow",
      department: "Restaurant",
      staffCount: 8,
      coverage: 89,
      supervisor: "Emma Davis"
    },
    {
      date: "Tomorrow",
      department: "Security",
      staffCount: 2,
      coverage: 100,
      supervisor: "Lisa Thompson"
    }
  ];

  const statusColors = {
    "On Shift": "bg-green-100 text-green-800 border-green-200",
    "On Break": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Off Duty": "bg-gray-100 text-gray-800 border-gray-200",
    "Night Shift": "bg-blue-100 text-blue-800 border-blue-200"
  };

  const staffColumns = [
    {
      key: "name",
      label: "Employee",
      render: (value: string, row: any) => (
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-muted-foreground">{row.id} • {row.position}</p>
        </div>
      )
    },
    {
      key: "department",
      label: "Department",
      render: (value: string) => value
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge className={statusColors[value as keyof typeof statusColors]}>
          {value}
        </Badge>
      )
    },
    {
      key: "performance",
      label: "Performance",
      render: (value: number) => (
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span>{value}</span>
        </div>
      )
    },
    {
      key: "hourlyRate",
      label: "Hourly Rate",
      render: (value: number) => `$${value}/hr`
    },
    {
      key: "shift",
      label: "Current Shift",
      render: (value: string) => value
    }
  ];

  return (
    <Layout 
      title="Staff Management Dashboard" 
      subtitle="Manage employees, departments, performance, and payroll"
    >
      <div className="space-y-6">
        {/* Key Staff Metrics */}
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
                    <p className="text-sm text-muted-foreground">Total Staff</p>
                    <p className="text-2xl font-bold text-blue-600">{staffStats.totalStaff}</p>
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
                    <p className="text-sm text-muted-foreground">Active Staff</p>
                    <p className="text-2xl font-bold text-green-600">{staffStats.activeStaff}</p>
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
                    <p className="text-sm text-muted-foreground">On Shift Today</p>
                    <p className="text-2xl font-bold text-purple-600">{staffStats.onShiftToday}</p>
                  </div>
                  <FaClock className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Monthly Payroll</p>
                    <p className="text-2xl font-bold text-green-600">${staffStats.totalPayroll.toLocaleString()}</p>
                  </div>
                  <FaDollarSign className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Avg Performance</p>
                    <p className="text-2xl font-bold text-yellow-600">{staffStats.avgPerformance}⭐</p>
                  </div>
                  <FaStar className="text-yellow-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Open Positions</p>
                    <p className="text-2xl font-bold text-orange-600">{staffStats.openPositions}</p>
                  </div>
                  <FaUserPlus className="text-orange-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Departments Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaUsers className="mr-2 text-primary" />
              Department Overview
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-add-department">
              <FaPlus className="mr-2" />
              Add Department
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-lg border ${dept.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{dept.name}</h3>
                    <Badge variant="secondary">{dept.staff} staff</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Manager:</span>
                      <span className="font-medium">{dept.manager}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Performance:</span>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1 text-xs" />
                        <span className="font-medium">{dept.performance}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Budget:</span>
                      <span className="font-medium">${dept.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Efficiency:</span>
                      <span className="font-medium">{dept.efficiency}%</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" variant="outline" data-testid={`button-view-dept-${dept.name.toLowerCase()}`}>
                      <FaEye className="mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" data-testid={`button-manage-dept-${dept.name.toLowerCase()}`}>
                      <FaEdit className="mr-1" />
                      Manage
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staff Directory */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaUserCog className="mr-2 text-primary" />
              Staff Directory
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-add-employee">
              <FaUserPlus className="mr-2" />
              Add Employee
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable
              title=""
              data={staffMembers}
              columns={staffColumns}
              searchable={true}
              exportable={true}
            />
          </CardContent>
        </Card>

        {/* Performance Metrics and Shift Coverage */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Department Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{metric.metric}</h4>
                      <Badge variant="secondary">{metric.department}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Current: </span>
                          <span className="font-semibold">{metric.current}{metric.unit || ""}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Target: </span>
                          <span className="font-semibold">{metric.target}{metric.unit || ""}</span>
                        </div>
                      </div>
                      <div className={`flex items-center ${
                        metric.trend === 'up' ? 'text-green-600' : 
                        metric.trend === 'down' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        <FaChartLine className="mr-1" />
                        <span className="text-sm capitalize">{metric.trend}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                Shift Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingShifts.map((shift, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{shift.department}</h4>
                        <p className="text-sm text-muted-foreground">{shift.date}</p>
                      </div>
                      <Badge 
                        className={shift.coverage >= 100 ? 
                          'bg-green-100 text-green-800 border-green-200' : 
                          shift.coverage >= 80 ? 
                          'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                          'bg-red-100 text-red-800 border-red-200'
                        }
                      >
                        {shift.coverage}% Coverage
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Staff Scheduled: {shift.staffCount}</span>
                      <span>Supervisor: {shift.supervisor}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Management Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaUsers className="mr-2" />
                Employee Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-hire-employee">
                <FaUserPlus className="mr-2" />
                Hire New Employee
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-employee-records">
                <FaClipboardList className="mr-2" />
                Employee Records
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-performance-reviews">
                <FaAward className="mr-2" />
                Performance Reviews
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaCalendarAlt className="mr-2" />
                Scheduling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-create-schedule">
                <FaCalendarAlt className="mr-2" />
                Create Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-shift-management">
                <FaClock className="mr-2" />
                Shift Management
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-time-tracking">
                <FaClipboardList className="mr-2" />
                Time Tracking
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaDollarSign className="mr-2" />
                Payroll & Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-payroll-processing">
                <FaDollarSign className="mr-2" />
                Process Payroll
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-benefits-management">
                <FaAward className="mr-2" />
                Benefits Management
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-salary-reviews">
                <FaChartLine className="mr-2" />
                Salary Reviews
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <FaAward className="mr-2" />
                Training & Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-training-programs">
                <FaAward className="mr-2" />
                Training Programs
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-skill-assessment">
                <FaClipboardList className="mr-2" />
                Skill Assessment
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-career-development">
                <FaChartLine className="mr-2" />
                Career Development
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Staff Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Staff Management Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">HR Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>HR Manager:</strong> +1 (555) 123-4567 Ext. 201</div>
                  <div><strong>Payroll:</strong> +1 (555) 123-4567 Ext. 202</div>
                  <div><strong>Benefits:</strong> +1 (555) 123-4567 Ext. 203</div>
                  <div><strong>Training:</strong> +1 (555) 123-4567 Ext. 204</div>
                  <div><strong>HR Emergency:</strong> +1 (555) 987-6543</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Important Policies</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Minimum Wage:</span>
                    <span>$15.00/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overtime Rate:</span>
                    <span>1.5x after 40hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Break Policy:</span>
                    <span>15min every 4hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sick Leave:</span>
                    <span>5 days per year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vacation Days:</span>
                    <span>10-20 days/year</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Performance Standards</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Review Frequency:</span>
                    <span>Quarterly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Min Performance:</span>
                    <span>3.0/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Promotion Threshold:</span>
                    <span>4.5/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training Hours:</span>
                    <span>20hrs/quarter</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attendance Target:</span>
                    <span>&gt;95%</span>
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