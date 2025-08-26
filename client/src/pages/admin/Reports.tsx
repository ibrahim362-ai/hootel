import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalendarAlt, FaDollarSign, FaUsers, FaDownload, FaFilter, FaPrint, FaShare, FaChartBar, FaChartPie, FaTable, FaFileExcel, FaFilePdf, FaClock, FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa';
import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import DataTable from '@/components/tables/DataTable';

export default function AdminReports() {
  const reportStats = {
    totalRevenue: 1245670,
    monthlyGrowth: 12.5,
    occupancyRate: 87,
    avgDailyRate: 285,
    customerSatisfaction: 4.6,
    totalBookings: 1856
  };

  const revenueData = [
    { month: 'Jan', revenue: 95000, bookings: 142, occupancy: 85 },
    { month: 'Feb', revenue: 108000, bookings: 156, occupancy: 89 },
    { month: 'Mar', revenue: 125000, bookings: 178, occupancy: 92 },
    { month: 'Apr', revenue: 118000, bookings: 165, occupancy: 88 },
    { month: 'May', revenue: 132000, bookings: 189, occupancy: 94 },
    { month: 'Jun', revenue: 145000, bookings: 198, occupancy: 96 },
    { month: 'Jul', revenue: 158000, bookings: 212, occupancy: 98 },
    { month: 'Aug', revenue: 162000, bookings: 218, occupancy: 97 },
    { month: 'Sep', revenue: 149000, bookings: 195, occupancy: 93 },
    { month: 'Oct', revenue: 155000, bookings: 203, occupancy: 95 },
    { month: 'Nov', revenue: 168000, bookings: 225, occupancy: 99 },
    { month: 'Dec', revenue: 172000, bookings: 235, occupancy: 100 }
  ];

  const departmentPerformance = [
    { department: 'Housekeeping', revenue: 285000, efficiency: 94, cost: 125000, profit: 160000 },
    { department: 'Restaurant', revenue: 456000, efficiency: 89, cost: 298000, profit: 158000 },
    { department: 'Front Desk', revenue: 189000, efficiency: 96, cost: 89000, profit: 100000 },
    { department: 'Spa & Wellness', revenue: 234000, efficiency: 87, cost: 145000, profit: 89000 },
    { department: 'Conference', revenue: 167000, efficiency: 91, cost: 78000, profit: 89000 },
    { department: 'Security', revenue: 45000, efficiency: 98, cost: 56000, profit: -11000 }
  ];

  const guestAnalytics = [
    { segment: 'Business', guests: 2340, revenue: 687000, avgStay: 2.1, satisfaction: 4.7 },
    { segment: 'Leisure', guests: 1890, revenue: 524000, avgStay: 3.8, satisfaction: 4.5 },
    { segment: 'Groups', guests: 567, revenue: 234000, avgStay: 2.5, satisfaction: 4.4 },
    { segment: 'VIP', guests: 123, revenue: 187000, avgStay: 4.2, satisfaction: 4.9 }
  ];

  const operationalMetrics = [
    {
      metric: 'Average Check-in Time',
      current: '3.2 minutes',
      target: '3.0 minutes',
      trend: 'down',
      change: '+0.2'
    },
    {
      metric: 'Room Turnover Time',
      current: '28 minutes',
      target: '30 minutes',
      trend: 'up',
      change: '-2'
    },
    {
      metric: 'Guest Complaint Rate',
      current: '2.1%',
      target: '2.5%',
      trend: 'up',
      change: '-0.4%'
    },
    {
      metric: 'Staff Productivity',
      current: '94%',
      target: '90%',
      trend: 'up',
      change: '+4%'
    }
  ];

  const recentReports = [
    {
      name: 'Monthly Financial Report',
      type: 'Financial',
      date: 'Jan 25, 2025',
      size: '2.4 MB',
      format: 'PDF',
      status: 'Ready'
    },
    {
      name: 'Guest Satisfaction Survey',
      type: 'Customer',
      date: 'Jan 24, 2025',
      size: '1.8 MB',
      format: 'Excel',
      status: 'Ready'
    },
    {
      name: 'Operational Efficiency Report',
      type: 'Operations',
      date: 'Jan 23, 2025',
      size: '3.1 MB',
      format: 'PDF',
      status: 'Ready'
    },
    {
      name: 'Staff Performance Analysis',
      type: 'HR',
      date: 'Jan 22, 2025',
      size: '2.7 MB',
      format: 'Excel',
      status: 'Ready'
    }
  ];

  const reportCategories = [
    {
      category: 'Financial Reports',
      description: 'Revenue, profit, expenses, and financial analysis',
      count: 12,
      color: 'bg-green-50 border-green-200',
      reports: ['Revenue Analysis', 'P&L Statement', 'Budget vs Actual', 'Cash Flow']
    },
    {
      category: 'Operational Reports',
      description: 'Occupancy, efficiency, and operational metrics',
      count: 8,
      color: 'bg-blue-50 border-blue-200',
      reports: ['Occupancy Report', 'Room Status', 'Maintenance Log', 'Service Quality']
    },
    {
      category: 'Guest Analytics',
      description: 'Customer satisfaction, behavior, and demographics',
      count: 6,
      color: 'bg-purple-50 border-purple-200',
      reports: ['Guest Satisfaction', 'Booking Patterns', 'Guest Demographics', 'Loyalty Analysis']
    },
    {
      category: 'Staff Reports',
      description: 'Employee performance, scheduling, and HR metrics',
      count: 9,
      color: 'bg-orange-50 border-orange-200',
      reports: ['Performance Reviews', 'Attendance Report', 'Payroll Summary', 'Training Records']
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <FaArrowUp className="text-green-600" />;
      case 'down':
        return <FaArrowDown className="text-red-600" />;
      default:
        return <FaEquals className="text-gray-600" />;
    }
  };

  const departmentColumns = [
    {
      key: 'department',
      label: 'Department',
      render: (value: string) => value
    },
    {
      key: 'revenue',
      label: 'Revenue',
      render: (value: number) => `$${value.toLocaleString()}`
    },
    {
      key: 'efficiency',
      label: 'Efficiency',
      render: (value: number) => `${value}%`
    },
    {
      key: 'cost',
      label: 'Operating Cost',
      render: (value: number) => `$${value.toLocaleString()}`
    },
    {
      key: 'profit',
      label: 'Profit',
      render: (value: number) => (
        <span className={value >= 0 ? 'text-green-600' : 'text-red-600'}>
          ${value.toLocaleString()}
        </span>
      )
    }
  ];

  const guestColumns = [
    {
      key: 'segment',
      label: 'Guest Segment',
      render: (value: string) => value
    },
    {
      key: 'guests',
      label: 'Total Guests',
      render: (value: number) => value.toLocaleString()
    },
    {
      key: 'revenue',
      label: 'Revenue',
      render: (value: number) => `$${value.toLocaleString()}`
    },
    {
      key: 'avgStay',
      label: 'Avg Stay',
      render: (value: number) => `${value} days`
    },
    {
      key: 'satisfaction',
      label: 'Satisfaction',
      render: (value: number) => `${value}/5.0`
    }
  ];

  return (
    <Layout 
      title="Reports & Analytics Dashboard" 
      subtitle="Comprehensive business intelligence and performance analysis"
    >
      <div className="space-y-6">
        {/* Key Performance Indicators */}
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
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-600">${(reportStats.totalRevenue / 1000000).toFixed(1)}M</p>
                  </div>
                  <FaDollarSign className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Monthly Growth</p>
                    <p className="text-2xl font-bold text-blue-600">{reportStats.monthlyGrowth}%</p>
                  </div>
                  <FaArrowUp className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-purple-600">{reportStats.occupancyRate}%</p>
                  </div>
                  <FaChartPie className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Avg Daily Rate</p>
                    <p className="text-2xl font-bold text-orange-600">${reportStats.avgDailyRate}</p>
                  </div>
                  <FaDollarSign className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                    <p className="text-2xl font-bold text-yellow-600">{reportStats.customerSatisfaction}⭐</p>
                  </div>
                  <FaUsers className="text-yellow-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <p className="text-2xl font-bold text-indigo-600">{reportStats.totalBookings.toLocaleString()}</p>
                  </div>
                  <FaCalendarAlt className="text-indigo-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Revenue Analytics and Operational Metrics */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={revenueData.map(item => ({ name: item.month, value: item.revenue }))}
                title="Monthly Revenue Trend"
                color="#3b82f6"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartBar className="mr-2 text-primary" />
                Operational Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {operationalMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{metric.metric}</h4>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(metric.trend)}
                        <span className={`text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 
                          metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current: <span className="font-medium">{metric.current}</span></span>
                      <span>Target: <span className="font-medium">{metric.target}</span></span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Performance Analysis */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaTable className="mr-2 text-primary" />
              Department Performance Analysis
            </CardTitle>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" data-testid="button-export-department-report">
                <FaFileExcel className="mr-2" />
                Export Excel
              </Button>
              <Button size="sm" variant="outline" data-testid="button-print-department-report">
                <FaPrint className="mr-2" />
                Print
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              title=""
              data={departmentPerformance}
              columns={departmentColumns}
              searchable={true}
              exportable={true}
            />
          </CardContent>
        </Card>

        {/* Guest Analytics and Report Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaUsers className="mr-2 text-primary" />
                Guest Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                title=""
                data={guestAnalytics}
                columns={guestColumns}
                searchable={false}
                exportable={false}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartPie className="mr-2 text-primary" />
                Report Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-4 rounded-lg border ${category.color}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{category.category}</h4>
                      <Badge variant="secondary">{category.count} reports</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {category.reports.map((report, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{report}</Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3" data-testid={`button-view-category-${category.category.toLowerCase().replace(' ', '-')}`}>
                      View Reports
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaFileExcel className="mr-2 text-primary" />
              Recent Generated Reports
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-generate-custom-report">
              <FaChartLine className="mr-2" />
              Generate Custom Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      {report.format === 'PDF' ? <FaFilePdf className="text-red-600" /> : <FaFileExcel className="text-green-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold">{report.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {report.status}
                    </Badge>
                    <Button size="sm" variant="outline" data-testid={`button-download-report-${index}`}>
                      <FaDownload className="mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" data-testid={`button-share-report-${index}`}>
                      <FaShare className="mr-1" />
                      Share
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Report Generation Tools */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaDollarSign className="mr-2" />
                Financial Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-revenue-report">
                <FaChartLine className="mr-2" />
                Revenue Analysis
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-profit-loss">
                <FaTable className="mr-2" />
                P&L Statement
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-budget-analysis">
                <FaChartBar className="mr-2" />
                Budget Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaChartBar className="mr-2" />
                Operational Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-occupancy-report">
                <FaChartPie className="mr-2" />
                Occupancy Report
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-efficiency-report">
                <FaArrowUp className="mr-2" />
                Efficiency Analysis
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-service-quality">
                <FaUsers className="mr-2" />
                Service Quality
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaUsers className="mr-2" />
                Guest Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-guest-satisfaction">
                <FaChartLine className="mr-2" />
                Satisfaction Survey
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-booking-patterns">
                <FaCalendarAlt className="mr-2" />
                Booking Patterns
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-guest-demographics">
                <FaChartPie className="mr-2" />
                Demographics
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <FaClock className="mr-2" />
                Custom Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-custom-dashboard">
                <FaChartLine className="mr-2" />
                Custom Dashboard
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-scheduled-reports">
                <FaCalendarAlt className="mr-2" />
                Scheduled Reports
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-data-export">
                <FaDownload className="mr-2" />
                Data Export
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Reporting Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Reporting Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Data Sources & Accuracy</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Financial Data:</strong> Real-time from accounting system</div>
                  <div><strong>Operational Data:</strong> Updated every 15 minutes</div>
                  <div><strong>Guest Data:</strong> Real-time from booking system</div>
                  <div><strong>Staff Data:</strong> Updated hourly from HR system</div>
                  <div><strong>Data Retention:</strong> 7 years for compliance</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Report Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Daily Reports:</span>
                    <span>6:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Reports:</span>
                    <span>Monday 8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Reports:</span>
                    <span>1st of month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quarterly Reports:</span>
                    <span>15th of quarter end</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Reports:</span>
                    <span>January 31st</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Access & Compliance</h4>
                <div className="space-y-2 text-sm">
                  <div>• All reports are logged and audited</div>
                  <div>• Financial reports require CFO approval</div>
                  <div>• Guest data follows GDPR compliance</div>
                  <div>• Reports auto-archive after 90 days</div>
                  <div>• Emergency access: +1 (555) 123-REPT</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}