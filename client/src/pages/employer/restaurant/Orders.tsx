import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaUtensils, FaSearch, FaFilter, FaClock, FaUser, FaCheckCircle, FaPlay, FaPause, FaEdit, FaPlus, FaPrint, FaMoneyBillWave, FaStar, FaComments, FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRestaurantOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tableFilter, setTableFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const allOrders = [
    {
      id: 1,
      orderNumber: 'ORD-2025-001',
      table: 'Table 15',
      tableSection: 'Main Dining',
      customerName: 'Johnson Family',
      customerCount: 4,
      waiter: 'John Doe',
      orderTime: '12:15 PM',
      status: 'ready-to-serve',
      priority: 'normal',
      totalAmount: 103.00,
      paymentStatus: 'pending',
      estimatedTime: 5,
      actualTime: 22,
      items: [
        { 
          id: 1, 
          name: 'Grilled Salmon', 
          quantity: 2, 
          price: 28.00, 
          status: 'ready',
          category: 'main',
          notes: 'Medium-well',
          allergens: ['fish']
        },
        { 
          id: 2, 
          name: 'Caesar Salad', 
          quantity: 1, 
          price: 12.00, 
          status: 'ready',
          category: 'appetizer',
          notes: 'No croutons',
          allergens: ['dairy', 'eggs']
        },
        { 
          id: 3, 
          name: 'Red Wine', 
          quantity: 1, 
          price: 35.00, 
          status: 'served',
          category: 'beverage',
          notes: '',
          allergens: []
        }
      ],
      specialRequests: ['No croutons in salad', 'Extra lemon'],
      customerNotes: 'Anniversary dinner',
      allergies: ['shellfish'],
      discounts: [],
      tips: 0
    },
    {
      id: 2,
      orderNumber: 'ORD-2025-002',
      table: 'Table 8',
      tableSection: 'VIP Section',
      customerName: 'Business Meeting',
      customerCount: 6,
      waiter: 'John Doe',
      orderTime: '12:30 PM',
      status: 'in-preparation',
      priority: 'high',
      totalAmount: 238.00,
      paymentStatus: 'pending',
      estimatedTime: 15,
      actualTime: null,
      items: [
        { 
          id: 1, 
          name: 'Beef Tenderloin', 
          quantity: 3, 
          price: 45.00, 
          status: 'cooking',
          category: 'main',
          notes: 'Medium rare',
          allergens: []
        },
        { 
          id: 2, 
          name: 'Lobster Bisque', 
          quantity: 2, 
          price: 18.00, 
          status: 'ready',
          category: 'appetizer',
          notes: '',
          allergens: ['shellfish', 'dairy']
        },
        { 
          id: 3, 
          name: 'Champagne', 
          quantity: 1, 
          price: 85.00, 
          status: 'served',
          category: 'beverage',
          notes: 'Dom Pérignon',
          allergens: []
        }
      ],
      specialRequests: ['Medium rare beef', 'Extra bread'],
      customerNotes: 'Corporate client dinner',
      allergies: [],
      discounts: [{ type: 'Corporate', amount: 10, percentage: true }],
      tips: 0
    },
    {
      id: 3,
      orderNumber: 'ORD-2025-003',
      table: 'Table 3',
      tableSection: 'Patio',
      customerName: 'Date Night',
      customerCount: 2,
      waiter: 'John Doe',
      orderTime: '11:45 AM',
      status: 'completed',
      priority: 'normal',
      totalAmount: 80.00,
      paymentStatus: 'paid',
      estimatedTime: 25,
      actualTime: 23,
      items: [
        { 
          id: 1, 
          name: 'Pasta Carbonara', 
          quantity: 2, 
          price: 22.00, 
          status: 'served',
          category: 'main',
          notes: 'Extra parmesan',
          allergens: ['dairy', 'eggs', 'gluten']
        },
        { 
          id: 2, 
          name: 'Tiramisu', 
          quantity: 2, 
          price: 8.00, 
          status: 'served',
          category: 'dessert',
          notes: '',
          allergens: ['dairy', 'eggs', 'alcohol']
        },
        { 
          id: 3, 
          name: 'Italian Wine', 
          quantity: 1, 
          price: 28.00, 
          status: 'served',
          category: 'beverage',
          notes: 'Chianti Classico',
          allergens: []
        }
      ],
      specialRequests: [],
      customerNotes: 'Celebrating promotion',
      allergies: [],
      discounts: [],
      tips: 15.00,
      rating: 5,
      feedback: 'Excellent service and food quality!',
      completedTime: '12:35 PM'
    },
    {
      id: 4,
      orderNumber: 'ORD-2025-004',
      table: 'Table 22',
      tableSection: 'Main Dining',
      customerName: 'Smith Family',
      customerCount: 5,
      waiter: 'Sarah Williams',
      orderTime: '1:00 PM',
      status: 'pending',
      priority: 'urgent',
      totalAmount: 156.00,
      paymentStatus: 'pending',
      estimatedTime: 30,
      actualTime: null,
      items: [
        { 
          id: 1, 
          name: 'Kids Pizza', 
          quantity: 2, 
          price: 12.00, 
          status: 'pending',
          category: 'main',
          notes: 'Plain cheese',
          allergens: ['dairy', 'gluten']
        },
        { 
          id: 2, 
          name: 'Chicken Parmesan', 
          quantity: 2, 
          price: 26.00, 
          status: 'pending',
          category: 'main',
          notes: '',
          allergens: ['dairy', 'gluten']
        },
        { 
          id: 3, 
          name: 'Garden Salad', 
          quantity: 1, 
          price: 10.00, 
          status: 'pending',
          category: 'appetizer',
          notes: 'Dressing on side',
          allergens: []
        }
      ],
      specialRequests: ['High chair needed', 'Kids meal first'],
      customerNotes: 'Family with young children',
      allergies: ['nuts'],
      discounts: [],
      tips: 0
    }
  ];

  const filteredOrders = allOrders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.table.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesTable = tableFilter === 'all' || order.tableSection === tableFilter;
    
    return matchesSearch && matchesStatus && matchesTable;
  });

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const orderStats = {
    total: filteredOrders.length,
    pending: filteredOrders.filter(o => o.status === 'pending').length,
    inPreparation: filteredOrders.filter(o => o.status === 'in-preparation').length,
    readyToServe: filteredOrders.filter(o => o.status === 'ready-to-serve').length,
    completed: filteredOrders.filter(o => o.status === 'completed').length
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
      title="Order Management" 
      subtitle="Manage and track all restaurant orders assigned to you"
    >
      <div className="space-y-6">
        {/* Order Summary */}
        <motion.div
          className="grid lg:grid-cols-5 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-blue-100 text-sm">Total Orders</p>
                <p className="text-2xl font-bold">{orderStats.total}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{orderStats.pending}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">In Kitchen</p>
                <p className="text-2xl font-bold text-yellow-600">{orderStats.inPreparation}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Ready</p>
                <p className="text-2xl font-bold text-blue-600">{orderStats.readyToServe}</p>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-600">{orderStats.completed}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <Card className={styles.modernCard}>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
              <div>
                <Label>Search Orders</Label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Order #, customer, table..."
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
                    <SelectItem value="in-preparation">In Preparation</SelectItem>
                    <SelectItem value="ready-to-serve">Ready to Serve</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Section</Label>
                <Select value={tableFilter} onValueChange={setTableFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sections" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    <SelectItem value="Main Dining">Main Dining</SelectItem>
                    <SelectItem value="VIP Section">VIP Section</SelectItem>
                    <SelectItem value="Patio">Patio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`}>
                  <FaPlus className="mr-2" />
                  New Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <motion.div
          className="grid gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredOrders.map((order) => (
            <motion.div key={order.id} variants={itemVariants}>
              <Card className={`${styles.modernCard} ${
                order.status === 'ready-to-serve' ? 'border-blue-500 bg-blue-50' : 
                order.priority === 'urgent' ? 'border-red-500 bg-red-50' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaUtensils className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {order.orderNumber} - {order.table}
                        </h4>
                        <p className="text-blue-600 font-medium">{order.customerName}</p>
                        <p className="text-sm text-gray-600">
                          {order.customerCount} guests • {order.tableSection} • {order.orderTime}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(order.priority)}>
                        {order.priority}
                      </Badge>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-700 mb-2">Items ({order.items.length}):</h5>
                    <div className="grid gap-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                              {item.quantity}
                            </span>
                            <div>
                              <span className="font-medium">{item.name}</span>
                              {item.notes && (
                                <p className="text-xs text-gray-500">Note: {item.notes}</p>
                              )}
                              {item.allergens.length > 0 && (
                                <div className="flex gap-1 mt-1">
                                  {item.allergens.map((allergen, index) => (
                                    <Badge key={index} variant="outline" className="text-xs text-orange-600 border-orange-200">
                                      {allergen}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getItemStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                            <p className="text-sm font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Special Requests */}
                    {order.specialRequests.length > 0 && (
                      <div>
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

                    {/* Allergies */}
                    {order.allergies.length > 0 && (
                      <div>
                        <h5 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                          <FaExclamationTriangle className="text-red-600" />
                          Allergies:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {order.allergies.map((allergy, index) => (
                            <Badge key={index} className="bg-red-100 text-red-800 border-red-200">
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Customer Notes */}
                  {order.customerNotes && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <FaComments className="text-blue-600 mt-1" />
                        <div>
                          <span className="text-sm font-medium text-blue-800">Customer Notes:</span>
                          <p className="text-sm text-blue-700">{order.customerNotes}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Order Footer */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Total:</span>
                        <span className="ml-1 font-bold text-lg text-green-600">
                          ${order.totalAmount.toFixed(2)}
                        </span>
                      </div>
                      
                      {order.status === 'completed' && order.rating && (
                        <div className="flex items-center gap-1">
                          {Array.from({ length: order.rating }, (_, i) => (
                            <FaStar key={i} className="text-yellow-500 text-sm" />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({order.rating}/5)</span>
                        </div>
                      )}

                      {order.tips > 0 && (
                        <div className="text-sm">
                          <span className="text-gray-500">Tip:</span>
                          <span className="ml-1 font-medium text-green-600">${order.tips.toFixed(2)}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {order.status === 'pending' && (
                        <Button size="sm" className={`${styles.modernButton} ${styles.buttonPrimary}`}>
                          <FaPlay className="mr-2" />
                          Send to Kitchen
                        </Button>
                      )}
                      
                      {order.status === 'ready-to-serve' && (
                        <Button size="sm" className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                          <FaCheckCircle className="mr-2" />
                          Mark Served
                        </Button>
                      )}
                      
                      {order.status === 'in-preparation' && (
                        <Button size="sm" variant="outline">
                          <FaClock className="mr-2" />
                          Check Status
                        </Button>
                      )}

                      <Button size="sm" variant="outline">
                        <FaPrint className="mr-2" />
                        Print
                      </Button>
                      
                      <Button size="sm" variant="outline">
                        <FaEdit className="mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredOrders.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaUtensils className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}