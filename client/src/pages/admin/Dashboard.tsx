import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { 
  FaBed, 
  FaDollarSign, 
  FaUsers, 
  FaStar, 
  FaArrowUp, 
  FaArrowDown,
  FaKey,
  FaEdit,
  FaPlus,
  FaCalendar,
  FaBroom,
  FaChartLine
} from 'react-icons/fa';
import { Layout } from '@/components/layout/Layout';
import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import DataTable from '@/components/tables/DataTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import styles from '@/styles/Dashboard.module.css';

interface DashboardMetrics {
  occupancyRate: number;
  todayRevenue: number;
  activeGuests: number;
  avgRating: number;
  roomStatus: {
    available: number;
    occupied: number;
    cleaning: number;
    maintenance: number;
  };
}

const revenueData = [
  { label: 'Mon', value: 2400 },
  { label: 'Tue', value: 1800 },
  { label: 'Wed', value: 3200 },
  { label: 'Thu', value: 2800 },
  { label: 'Fri', value: 3800 },
  { label: 'Sat', value: 4200 },
  { label: 'Sun', value: 4600 },
];

const roomStatusData = [
  { label: 'Available', value: 23, color: '#10b981' },
  { label: 'Occupied', value: 41, color: '#3b82f6' },
  { label: 'Cleaning', value: 8, color: '#f59e0b' },
  { label: 'Maintenance', value: 3, color: '#ef4444' },
];

const checkInsColumns = [
  {
    key: 'guestName',
    label: 'Guest',
    render: (value: string, row: any) => (
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-primary font-medium text-sm">
            {value.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{row.email}</p>
        </div>
      </div>
    )
  },
  {
    key: 'roomNumber',
    label: 'Room',
    className: 'hidden sm:table-cell',
    render: (value: string) => (
      <span className="font-medium text-foreground">{value}</span>
    )
  },
  {
    key: 'nights',
    label: 'Duration',
    className: 'hidden md:table-cell',
    render: (value: number) => (
      <span className="text-muted-foreground">{value} nights</span>
    )
  },
  {
    key: 'status',
    label: 'Status',
    render: (value: string) => (
      <Badge 
        variant={value === 'confirmed' ? 'default' : 'secondary'}
        className={value === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
      >
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex space-x-2">
        <Button size="sm" variant="ghost">
          <FaKey className="h-4 w-4 text-primary" />
        </Button>
        <Button size="sm" variant="ghost">
          <FaEdit className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    )
  },
];

const todayCheckIns = [
  {
    guestName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    roomNumber: 'Room 247',
    nights: 3,
    status: 'confirmed'
  },
  {
    guestName: 'Michael Chen',
    email: 'm.chen@company.com',
    roomNumber: 'Room 156',
    nights: 2,
    status: 'pending'
  },
];

export default function Dashboard() {
  const { data: metrics, isLoading } = useQuery<DashboardMetrics>({
    queryKey: ['/api/dashboard/metrics'],
  });

  if (isLoading) {
    return (
      <Layout title="Dashboard Overview">
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title="Dashboard Overview" 
      subtitle="Welcome back! Here's what's happening at your hotel today."
    >
      <div className={styles.dashboard}>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover-lift gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <FaBed className="text-primary text-xl" />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <FaArrowUp className="mr-1 h-3 w-3" />
                    12%
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1" data-testid="metric-occupancy">
                  {metrics?.occupancyRate || 87}%
                </h3>
                <p className="text-muted-foreground text-sm">Room Occupancy</p>
                <div className="mt-4 w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${metrics?.occupancyRate || 87}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover-lift gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-green-100">
                    <FaDollarSign className="text-green-600 text-xl" />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <FaArrowUp className="mr-1 h-3 w-3" />
                    8%
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1" data-testid="metric-revenue">
                  ${metrics?.todayRevenue.toLocaleString() || '24,580'}
                </h3>
                <p className="text-muted-foreground text-sm">Today's Revenue</p>
                <div className="mt-4 flex space-x-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`flex-1 bg-green-${200 + i*100} rounded-full h-2`} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="hover-lift gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <FaUsers className="text-blue-600 text-xl" />
                  </div>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                    <FaArrowDown className="mr-1 h-3 w-3" />
                    3%
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1" data-testid="metric-guests">
                  {metrics?.activeGuests || 142}
                </h3>
                <p className="text-muted-foreground text-sm">Active Guests</p>
                <div className="mt-4 grid grid-cols-3 gap-1">
                  {[400, 300, 200].map((shade, i) => (
                    <div key={i} className={`bg-blue-${shade} rounded h-1`} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="hover-lift gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-100">
                    <FaStar className="text-purple-600 text-xl" />
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <FaArrowUp className="mr-1 h-3 w-3" />
                    0.2
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1" data-testid="metric-rating">
                  {metrics?.avgRating || 4.8}
                </h3>
                <p className="text-muted-foreground text-sm">Average Rating</p>
                <div className="mt-4 flex space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} className={i <= 4 ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <BarChart 
              data={revenueData} 
              title="Revenue Analytics"
              height={300}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <DonutChart
              data={roomStatusData}
              title="Room Status"
              centerText="75"
              size={200}
            />
          </motion.div>
        </div>

        {/* Quick Actions & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FaPlus, label: 'New Booking', color: 'text-primary' },
                    { icon: FaCalendar, label: 'Check-ins', color: 'text-blue-600' },
                    { icon: FaBroom, label: 'Housekeeping', color: 'text-green-600' },
                    { icon: FaChartLine, label: 'Reports', color: 'text-purple-600' },
                  ].map((action, index) => (
                    <motion.div key={action.label} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-center space-y-2 hover:border-primary hover:bg-primary/5"
                        data-testid={`action-${action.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <action.icon className={`text-xl ${action.color}`} />
                        <span className="text-sm font-medium">{action.label}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Room 204 needs maintenance', desc: 'Air conditioning issue reported', color: 'yellow' },
                  { type: 'info', icon: 'fas fa-info-circle', title: 'New staff member added', desc: 'Maria Rodriguez - Housekeeping', color: 'blue' },
                  { type: 'success', icon: 'fas fa-check-circle', title: 'Payment processed', desc: '$2,400 from corporate booking', color: 'green' },
                ].map((alert, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start space-x-3 p-3 rounded-lg bg-${alert.color}-50 border border-${alert.color}-200`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alert.title}</p>
                      <p className="text-xs text-muted-foreground">{alert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <DataTable
            title="Today's Check-ins"
            columns={checkInsColumns}
            data={todayCheckIns}
            searchable
            exportable
            filterable
          />
        </motion.div>
      </div>
    </Layout>
  );
}
