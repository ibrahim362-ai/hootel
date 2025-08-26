import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaUtensils, FaClipboardList, FaClock, FaUsers, FaChartLine, FaTruck, FaBoxOpen, FaExclamationTriangle, FaCheckCircle, FaHourglass, FaMoneyBillWave, FaStar, FaPlay, FaPause } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRestaurantDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const dashboardStats = {
    today: {
      totalOrders: 78,
      assignedToMe: 12,
      completed: 8,
      pending: 4,
      avgServiceTime: 18,
      customerSatisfaction: 4.6,
      revenue: 1250,
      tips: 180
    }
  };

  const currentStats = dashboardStats[selectedPeriod as keyof typeof dashboardStats];

  const myOrders = [
    {
      id: 1,
      orderNumber: 'ORD-2025-001',
      table: 'Table 15',
      customerName: 'Johnson Family',
      items: [
        { name: 'Grilled Salmon', quantity: 2, price: 28.00, status: 'ready' },
        { name: 'Caesar Salad', quantity: 1, price: 12.00, status: 'ready' },
        { name: 'Red Wine', quantity: 1, price: 35.00, status: 'served' }
      ],
      totalAmount: 103.00,
      orderTime: '12:15 PM',
      status: 'ready-to-serve',
      priority: 'normal',
      specialRequests: ['No croutons in salad', 'Extra lemon'],
      estimatedTime: 5,
      waiter: 'John Doe'
    },
    {
      id: 2,
      orderNumber: 'ORD-2025-002',
      table: 'Table 8',
      customerName: 'Business Meeting',
      items: [
        { name: 'Beef Tenderloin', quantity: 3, price: 45.00, status: 'cooking' },
        { name: 'Lobster Bisque', quantity: 2, price: 18.00, status: 'ready' },
        { name: 'Champagne', quantity: 1, price: 85.00, status: 'served' }
      ],
      totalAmount: 238.00,
      orderTime: '12:30 PM',
      status: 'in-preparation',
      priority: 'high',
      specialRequests: ['Medium rare beef', 'Extra bread'],
      estimatedTime: 15,
      waiter: 'John Doe'
    },
    {
      id: 3,
      orderNumber: 'ORD-2025-003',
      table: 'Table 3',
      customerName: 'Date Night',
      items: [
        { name: 'Pasta Carbonara', quantity: 2, price: 22.00, status: 'served' },
        { name: 'Tiramisu', quantity: 2, price: 8.00, status: 'served' },
        { name: 'Italian Wine', quantity: 1, price: 28.00, status: 'served' }
      ],
      totalAmount: 80.00,
      orderTime: '11:45 AM',
      status: 'completed',
      priority: 'normal',
      specialRequests: [],
      completedTime: '12:35 PM',
      waiter: 'John Doe',
      tip: 15.00,
      rating: 5
    }
  ];

  const inventoryAlerts = [
    {
      item: 'Fresh Salmon',
      currentStock: 5,
      minimumStock: 10,
      unit: 'portions',
      severity: 'low',
      action: 'Order immediately'
    },
    {
      item: 'Wine Glasses',
      currentStock: 15,
      minimumStock: 20,
      unit: 'pieces',
      severity: 'medium',
      action: 'Restock today'
    },
    {
      item: 'Premium Olive Oil',
      currentStock: 2,
      minimumStock: 5,
      unit: 'bottles',
      severity: 'critical',
      action: 'Emergency order'
    }
  ];

  const upcomingShifts = [
    {
      date: 'Today',
      shift: 'Lunch Service (11 AM - 4 PM)',
      role: 'Server',
      section: 'Main Dining',
      tables: ['10-18'],
      status: 'active'
    },
    {
      date: 'Tomorrow',
      shift: 'Dinner Service (5 PM - 11 PM)',
      role: 'Server',
      section: 'VIP Section',
      tables: ['1-8'],
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'ready-to-serve': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-preparation': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getItemStatusColor = (status: string) => {
    switch (status) {
      case 'served': return 'bg-green-100 text-green-800';
      case 'ready': return 'bg-blue-100 text-blue-800';
      case 'cooking': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
      title="Restaurant Dashboard" 
      subtitle="Restaurant service overview for your current shift"
    >
      <div className="space-y-6">
        {/* Quick Stats */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">My Orders Today</p>
                    <p className="text-3xl font-bold">{currentStats.assignedToMe}</p>
                    <p className="text-blue-100 text-xs">
                      {currentStats.completed} completed • {currentStats.pending} pending
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaClipboardList className="text-2xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Service Time</p>
                    <p className="text-3xl font-bold text-green-600">{currentStats.avgServiceTime}min</p>
                    <p className="text-gray-500 text-xs">Average per order</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaClock className="text-2xl text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Revenue Today</p>
                    <p className="text-3xl font-bold text-blue-600">${currentStats.revenue}</p>
                    <p className="text-gray-500 text-xs">Tips: ${currentStats.tips}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaMoneyBillWave className="text-2xl text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className={styles.modernCard}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Customer Rating</p>
                    <p className="text-3xl font-bold text-purple-600">{currentStats.customerSatisfaction}</p>
                    <p className="text-gray-500 text-xs">Average satisfaction</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaStar className="text-2xl text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-blue-200">
            <TabsTrigger value="orders" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Orders
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Inventory Alerts
            </TabsTrigger>
            <TabsTrigger value="shifts" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Shifts
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Performance
            </TabsTrigger>
          </TabsList>

          {/* Current Orders */}
          <TabsContent value="orders" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Active Orders</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaUtensils className="mr-2" />
                Take New Order
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {myOrders.map((order) => (
                <motion.div key={order.id} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${order.status === 'ready-to-serve' ? 'border-blue-500 bg-blue-50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {order.orderNumber} - {order.table}
                          </h4>
                          <p className="text-blue-600 font-medium">{order.customerName}</p>
                          <p className="text-sm text-gray-600">
                            Ordered: {order.orderTime} | Total: ${order.totalAmount.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status.replace('-', ' ')}
                          </Badge>
                          {order.priority === 'high' && (
                            <Badge className="bg-red-100 text-red-800 border-red-200">
                              High Priority
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-700 mb-2">Items:</h5>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{item.quantity}x</span>
                                <span>{item.name}</span>
                                <Badge className={getItemStatusColor(item.status)}>
                                  {item.status}
                                </Badge>
                              </div>
                              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Special Requests */}
                      {order.specialRequests && order.specialRequests.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-700 mb-2">Special Requests:</h5>
                          <div className="flex flex-wrap gap-1">
                            {order.specialRequests.map((request, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {request}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        {order.status === 'completed' ? (
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-green-600 font-medium">
                              ✓ Completed at {'completedTime' in order ? order.completedTime : 'N/A'}
                            </span>
                            {'rating' in order && order.rating && (
                              <div className="flex items-center gap-1">
                                {Array.from({ length: order.rating }, (_, i) => (
                                  <FaStar key={i} className="text-yellow-500 text-sm" />
                                ))}
                              </div>
                            )}
                          </div>
                        ) : order.status === 'ready-to-serve' ? (
                          <span className="text-sm text-blue-600 font-medium">
                            🍽️ Ready to serve - ETA: {order.estimatedTime} min
                          </span>
                        ) : (
                          <span className="text-sm text-yellow-600 font-medium">
                            🔄 In preparation - ETA: {order.estimatedTime} min
                          </span>
                        )}

                        <div className="flex gap-2">
                          {order.status === 'ready-to-serve' && (
                            <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                              <FaPlay className="mr-2" />
                              Serve Order
                            </Button>
                          )}
                          {order.status === 'in-preparation' && (
                            <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                              <FaPause className="mr-2" />
                              Check Kitchen
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
              ))}
            </motion.div>
          </TabsContent>

          {/* Inventory Alerts */}
          <TabsContent value="inventory" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Inventory Alerts</h3>
              <Button className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                <FaBoxOpen className="mr-2" />
                Full Inventory
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {inventoryAlerts.map((alert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={styles.modernCard}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <FaExclamationTriangle className="text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">{alert.item}</h4>
                            <p className="text-sm text-gray-600">
                              Current: {alert.currentStock} {alert.unit} | Minimum: {alert.minimumStock} {alert.unit}
                            </p>
                            <p className="text-sm font-medium text-orange-600">{alert.action}</p>
                          </div>
                        </div>
                        
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* My Shifts */}
          <TabsContent value="shifts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
              <Button className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                <FaUsers className="mr-2" />
                Team Schedule
              </Button>
            </div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {upcomingShifts.map((shift, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${shift.status === 'active' ? 'border-green-500 bg-green-50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-800">{shift.date}</h4>
                          <p className="text-blue-600 font-medium">{shift.shift}</p>
                          <p className="text-sm text-gray-600">
                            {shift.role} - {shift.section} | Tables: {Array.isArray(shift.tables) ? shift.tables.join(', ') : shift.tables}
                          </p>
                        </div>
                        
                        <Badge className={shift.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                          {shift.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Today's Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Orders Completed</span>
                        <span className="text-sm text-blue-600">{currentStats.completed}/{currentStats.assignedToMe}</span>
                      </div>
                      <Progress value={(currentStats.completed / currentStats.assignedToMe) * 100} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Service Speed</span>
                        <span className="text-sm text-green-600">18 min avg</span>
                      </div>
                      <Progress value={85} className="bg-green-100" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Customer Satisfaction</span>
                        <span className="text-sm text-purple-600">{currentStats.customerSatisfaction}/5.0</span>
                      </div>
                      <Progress value={92} className="bg-purple-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <FaStar className="text-yellow-500" />
                      <div>
                        <p className="font-medium text-gray-800">Speed Demon</p>
                        <p className="text-sm text-gray-600">Served 5 orders under 15 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <FaCheckCircle className="text-green-500" />
                      <div>
                        <p className="font-medium text-gray-800">Customer Favorite</p>
                        <p className="text-sm text-gray-600">Received 3 five-star ratings today</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}