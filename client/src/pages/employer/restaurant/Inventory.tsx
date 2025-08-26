import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { FaBoxOpen, FaSearch, FaFilter, FaExclamationTriangle, FaCheckCircle, FaTruck, FaPlus, FaEdit, FaMinus, FaBarcode, FaCalendarAlt, FaThermometerHalf, FaLeaf } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerRestaurantInventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const inventoryItems = [
    {
      id: 1,
      name: 'Fresh Salmon Fillets',
      category: 'Seafood',
      sku: 'SEA-SAL-001',
      currentStock: 5,
      minimumStock: 10,
      maximumStock: 25,
      unit: 'portions',
      unitPrice: 18.50,
      totalValue: 92.50,
      location: 'Walk-in Cooler',
      supplier: 'Pacific Seafood Co.',
      lastRestocked: '2025-01-25',
      expiryDate: '2025-01-29',
      status: 'low',
      temperature: '38°F',
      notes: 'High-quality Atlantic salmon',
      allergens: ['fish'],
      organic: false,
      lastUpdated: '2025-01-27 09:30 AM'
    },
    {
      id: 2,
      name: 'Premium Wine Glasses',
      category: 'Tableware',
      sku: 'TAB-WIN-002',
      currentStock: 15,
      minimumStock: 20,
      maximumStock: 50,
      unit: 'pieces',
      unitPrice: 8.00,
      totalValue: 120.00,
      location: 'Storage Room',
      supplier: 'Restaurant Supply Plus',
      lastRestocked: '2025-01-20',
      expiryDate: null,
      status: 'low',
      temperature: 'Room temp',
      notes: 'Crystal wine glasses for fine dining',
      allergens: [],
      organic: false,
      lastUpdated: '2025-01-27 08:15 AM'
    },
    {
      id: 3,
      name: 'Extra Virgin Olive Oil',
      category: 'Oils & Vinegars',
      sku: 'OIL-OLI-003',
      currentStock: 2,
      minimumStock: 5,
      maximumStock: 12,
      unit: 'bottles',
      unitPrice: 25.00,
      totalValue: 50.00,
      location: 'Pantry',
      supplier: 'Mediterranean Imports',
      lastRestocked: '2025-01-15',
      expiryDate: '2025-06-15',
      status: 'critical',
      temperature: 'Room temp',
      notes: 'Cold-pressed Italian olive oil',
      allergens: [],
      organic: true,
      lastUpdated: '2025-01-27 07:45 AM'
    },
    {
      id: 4,
      name: 'Organic Baby Spinach',
      category: 'Vegetables',
      sku: 'VEG-SPI-004',
      currentStock: 12,
      minimumStock: 8,
      maximumStock: 20,
      unit: 'bags',
      unitPrice: 4.50,
      totalValue: 54.00,
      location: 'Walk-in Cooler',
      supplier: 'Green Valley Farms',
      lastRestocked: '2025-01-26',
      expiryDate: '2025-01-30',
      status: 'good',
      temperature: '36°F',
      notes: 'Fresh organic spinach for salads',
      allergens: [],
      organic: true,
      lastUpdated: '2025-01-27 06:00 AM'
    },
    {
      id: 5,
      name: 'Aged Parmesan Cheese',
      category: 'Dairy',
      sku: 'DAI-PAR-005',
      currentStock: 3,
      minimumStock: 4,
      maximumStock: 8,
      unit: 'wheels',
      unitPrice: 45.00,
      totalValue: 135.00,
      location: 'Cheese Cooler',
      supplier: 'Italian Cheese Imports',
      lastRestocked: '2025-01-22',
      expiryDate: '2025-03-15',
      status: 'low',
      temperature: '42°F',
      notes: '24-month aged Parmigiano-Reggiano',
      allergens: ['dairy'],
      organic: false,
      lastUpdated: '2025-01-27 10:15 AM'
    },
    {
      id: 6,
      name: 'Beef Tenderloin',
      category: 'Meat',
      sku: 'MEA-TEN-006',
      currentStock: 8,
      minimumStock: 6,
      maximumStock: 15,
      unit: 'pounds',
      unitPrice: 35.00,
      totalValue: 280.00,
      location: 'Meat Cooler',
      supplier: 'Prime Meat Company',
      lastRestocked: '2025-01-26',
      expiryDate: '2025-01-31',
      status: 'good',
      temperature: '34°F',
      notes: 'USDA Prime grade beef tenderloin',
      allergens: [],
      organic: false,
      lastUpdated: '2025-01-27 11:00 AM'
    },
    {
      id: 7,
      name: 'Champagne Flutes',
      category: 'Tableware',
      sku: 'TAB-CHA-007',
      currentStock: 30,
      minimumStock: 25,
      maximumStock: 60,
      unit: 'pieces',
      unitPrice: 12.00,
      totalValue: 360.00,
      location: 'Bar Storage',
      supplier: 'Bar Equipment Pro',
      lastRestocked: '2025-01-18',
      expiryDate: null,
      status: 'good',
      temperature: 'Room temp',
      notes: 'Crystal champagne flutes for special occasions',
      allergens: [],
      organic: false,
      lastUpdated: '2025-01-27 09:00 AM'
    },
    {
      id: 8,
      name: 'Fresh Basil',
      category: 'Herbs',
      sku: 'HER-BAS-008',
      currentStock: 4,
      minimumStock: 6,
      maximumStock: 12,
      unit: 'bunches',
      unitPrice: 3.00,
      totalValue: 12.00,
      location: 'Herb Cooler',
      supplier: 'Urban Herb Garden',
      lastRestocked: '2025-01-26',
      expiryDate: '2025-01-29',
      status: 'low',
      temperature: '38°F',
      notes: 'Fresh Italian basil for garnish',
      allergens: [],
      organic: true,
      lastUpdated: '2025-01-27 08:30 AM'
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'usage',
      item: 'Fresh Salmon Fillets',
      quantity: 3,
      timestamp: '2025-01-27 12:30 PM',
      user: 'Kitchen Staff',
      reason: 'Order preparation',
      reference: 'ORD-2025-002'
    },
    {
      id: 2,
      type: 'restock',
      item: 'Organic Baby Spinach',
      quantity: 8,
      timestamp: '2025-01-26 10:15 AM',
      user: 'John Doe',
      reason: 'Scheduled delivery',
      reference: 'PO-2025-105'
    },
    {
      id: 3,
      type: 'waste',
      item: 'Fresh Basil',
      quantity: 2,
      timestamp: '2025-01-26 09:00 AM',
      user: 'Quality Control',
      reason: 'Expired product',
      reference: 'WR-2025-003'
    },
    {
      id: 4,
      type: 'usage',
      item: 'Premium Wine Glasses',
      quantity: 4,
      timestamp: '2025-01-25 07:45 PM',
      user: 'Sarah Williams',
      reason: 'Table service',
      reference: 'TBL-15'
    }
  ];

  const lowStockAlerts = inventoryItems.filter(item => 
    item.status === 'critical' || item.status === 'low'
  );

  const expiringItems = inventoryItems.filter(item => 
    item.expiryDate && new Date(item.expiryDate) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  );

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesLocation = locationFilter === 'all' || item.location === locationFilter;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'good': return 'bg-green-100 text-green-800 border-green-200';
      case 'overstock': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStockPercentage = (current: number, minimum: number, maximum: number) => {
    return Math.min(100, (current / maximum) * 100);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'restock': return FaTruck;
      case 'usage': return FaMinus;
      case 'waste': return FaExclamationTriangle;
      default: return FaBoxOpen;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'restock': return 'text-green-600';
      case 'usage': return 'text-blue-600';
      case 'waste': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const categories = Array.from(new Set(inventoryItems.map(item => item.category)));
  const locations = Array.from(new Set(inventoryItems.map(item => item.location)));

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
      title="Inventory Management" 
      subtitle="Monitor and manage restaurant inventory levels and stock"
    >
      <div className="space-y-6">
        {/* Inventory Summary */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary} text-white`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Items</p>
                  <p className="text-3xl font-bold">{inventoryItems.length}</p>
                </div>
                <FaBoxOpen className="text-2xl text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Low Stock Alerts</p>
                  <p className="text-3xl font-bold text-red-600">{lowStockAlerts.length}</p>
                </div>
                <FaExclamationTriangle className="text-2xl text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Expiring Soon</p>
                  <p className="text-3xl font-bold text-orange-600">{expiringItems.length}</p>
                </div>
                <FaCalendarAlt className="text-2xl text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.modernCard}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Value</p>
                  <p className="text-3xl font-bold text-green-600">
                    ${inventoryItems.reduce((sum, item) => sum + item.totalValue, 0).toFixed(0)}
                  </p>
                </div>
                <FaCheckCircle className="text-2xl text-green-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Alerts */}
        {(lowStockAlerts.length > 0 || expiringItems.length > 0) && (
          <motion.div
            className="grid lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {lowStockAlerts.length > 0 && (
              <Card className={`${styles.modernCard} border-red-200 bg-red-50`}>
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <FaExclamationTriangle />
                    Low Stock Alerts ({lowStockAlerts.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {lowStockAlerts.slice(0, 3).map(item => (
                    <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">{item.name}</span>
                      <Badge className={getStatusColor(item.status)}>
                        {item.currentStock} {item.unit}
                      </Badge>
                    </div>
                  ))}
                  {lowStockAlerts.length > 3 && (
                    <p className="text-sm text-red-600">+{lowStockAlerts.length - 3} more items</p>
                  )}
                </CardContent>
              </Card>
            )}

            {expiringItems.length > 0 && (
              <Card className={`${styles.modernCard} border-orange-200 bg-orange-50`}>
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <FaCalendarAlt />
                    Expiring Soon ({expiringItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {expiringItems.slice(0, 3).map(item => (
                    <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-orange-600">{item.expiryDate}</span>
                    </div>
                  ))}
                  {expiringItems.length > 3 && (
                    <p className="text-sm text-orange-600">+{expiringItems.length - 3} more items</p>
                  )}
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}

        {/* Filters */}
        <Card className={styles.modernCard}>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
              <div>
                <Label>Search Items</Label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Name, SKU, category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="low">Low Stock</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="overstock">Overstock</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Location</Label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`}>
                  <FaPlus className="mr-2" />
                  Add Item
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-blue-200">
            <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Inventory Items
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Recent Transactions
            </TabsTrigger>
          </TabsList>

          {/* Inventory Items */}
          <TabsContent value="inventory" className="space-y-4">
            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className={`${styles.modernCard} ${
                    item.status === 'critical' ? 'border-red-500 bg-red-50' : 
                    item.status === 'low' ? 'border-orange-500 bg-orange-50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaBoxOpen className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                              {item.name}
                              {item.organic && (
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  <FaLeaf className="mr-1" />
                                  Organic
                                </Badge>
                              )}
                            </h4>
                            <p className="text-blue-600 font-medium">{item.category}</p>
                            <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Stock Level Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Stock Level</span>
                          <span className="text-sm text-blue-600">
                            {item.currentStock} / {item.maximumStock} {item.unit}
                          </span>
                        </div>
                        <Progress 
                          value={getStockPercentage(item.currentStock, item.minimumStock, item.maximumStock)} 
                          className={`h-2 ${
                            item.status === 'critical' ? 'bg-red-100' : 
                            item.status === 'low' ? 'bg-orange-100' : 'bg-green-100'
                          }`}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Min: {item.minimumStock}</span>
                          <span>Max: {item.maximumStock}</span>
                        </div>
                      </div>

                      {/* Item Details Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Unit Price:</span>
                          <span className="ml-1 font-medium">${item.unitPrice.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Value:</span>
                          <span className="ml-1 font-medium text-green-600">${item.totalValue.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{item.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Supplier:</span>
                          <span className="ml-1 font-medium">{item.supplier}</span>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Last Restocked:</span>
                          <span className="ml-1 font-medium">{item.lastRestocked}</span>
                        </div>
                        {item.expiryDate && (
                          <div>
                            <span className="text-gray-500">Expires:</span>
                            <span className={`ml-1 font-medium ${
                              new Date(item.expiryDate) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) 
                                ? 'text-orange-600' : 'text-gray-800'
                            }`}>
                              {item.expiryDate}
                            </span>
                          </div>
                        )}
                        {item.temperature && (
                          <div>
                            <span className="text-gray-500 flex items-center gap-1">
                              <FaThermometerHalf />
                              Storage Temp:
                            </span>
                            <span className="ml-1 font-medium">{item.temperature}</span>
                          </div>
                        )}
                      </div>

                      {/* Allergens */}
                      {item.allergens.length > 0 && (
                        <div className="mb-4">
                          <span className="text-sm text-gray-500 block mb-2">Allergens:</span>
                          <div className="flex flex-wrap gap-1">
                            {item.allergens.map((allergen, index) => (
                              <Badge key={index} className="bg-red-100 text-red-800 border-red-200 text-xs">
                                {allergen}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notes */}
                      {item.notes && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{item.notes}</p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          Last updated: {item.lastUpdated}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <FaMinus className="mr-2" />
                            Use Stock
                          </Button>
                          <Button size="sm" variant="outline">
                            <FaPlus className="mr-2" />
                            Restock
                          </Button>
                          <Button size="sm" variant="outline">
                            <FaEdit className="mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <FaBarcode className="mr-2" />
                            Print Label
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Recent Transactions */}
          <TabsContent value="transactions" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
              <Button className={`${styles.modernButton} ${styles.buttonSecondary}`}>
                View All Transactions
              </Button>
            </div>

            <motion.div
              className="grid gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recentTransactions.map((transaction) => {
                const TransactionIcon = getTransactionIcon(transaction.type);
                return (
                  <motion.div key={transaction.id} variants={itemVariants}>
                    <Card className={styles.modernCard}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              transaction.type === 'restock' ? 'bg-green-100' :
                              transaction.type === 'usage' ? 'bg-blue-100' : 'bg-red-100'
                            }`}>
                              <TransactionIcon className={`text-sm ${getTransactionColor(transaction.type)}`} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {transaction.type === 'restock' ? 'Restocked' : 
                                 transaction.type === 'usage' ? 'Used' : 'Waste'} {transaction.quantity} units
                              </p>
                              <p className="text-sm text-blue-600">{transaction.item}</p>
                              <p className="text-xs text-gray-500">
                                {transaction.reason} • Ref: {transaction.reference}
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-700">{transaction.user}</p>
                            <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>

        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaBoxOpen className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}