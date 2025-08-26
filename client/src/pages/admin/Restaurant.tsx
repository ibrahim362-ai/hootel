import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaUtensils, FaChartLine, FaDollarSign, FaUsers, FaClock, FaPlus, FaEdit, FaTrash, FaEye, FaStar } from 'react-icons/fa';

export default function Restaurant() {
  const restaurantStats = {
    todayRevenue: 8450,
    ordersToday: 124,
    averageOrderValue: 68,
    occupancyRate: 85,
    menuItems: 47,
    activePromos: 3
  };

  const recentOrders = [
    {
      id: "ORD-001",
      table: "Table 12",
      items: "Wagyu Tenderloin, Wine Pairing",
      amount: 120,
      status: "Preparing",
      time: "2:45 PM",
      server: "Maria Garcia"
    },
    {
      id: "ORD-002",
      table: "Room 305",
      items: "Chef's Tasting Menu x2",
      amount: 190,
      status: "Ready",
      time: "2:30 PM",
      server: "Room Service"
    },
    {
      id: "ORD-003",
      table: "Table 8",
      items: "Sea Bass, Dessert Platter",
      amount: 75,
      status: "Delivered",
      time: "2:15 PM",
      server: "David Chen"
    }
  ];

  const topMenuItems = [
    {
      name: "Wagyu Beef Tenderloin",
      orders: 15,
      revenue: 975,
      rating: 5.0,
      profit: 425
    },
    {
      name: "Chef's Tasting Menu",
      orders: 8,
      revenue: 760,
      rating: 4.9,
      profit: 380
    },
    {
      name: "Mediterranean Sea Bass",
      orders: 12,
      revenue: 504,
      rating: 4.7,
      profit: 285
    }
  ];

  const statusColors = {
    "Preparing": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Ready": "bg-green-100 text-green-800 border-green-200",
    "Delivered": "bg-blue-100 text-blue-800 border-blue-200"
  };

  return (
    <Layout 
      title="Restaurant Management Dashboard" 
      subtitle="Monitor operations, manage menu items, and track performance metrics"
    >
      <div className="space-y-6">
        {/* Key Metrics Dashboard */}
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
                    <p className="text-sm text-muted-foreground">Today's Revenue</p>
                    <p className="text-2xl font-bold text-green-600">${restaurantStats.todayRevenue.toLocaleString()}</p>
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
                    <p className="text-sm text-muted-foreground">Orders Today</p>
                    <p className="text-2xl font-bold text-blue-600">{restaurantStats.ordersToday}</p>
                  </div>
                  <FaUtensils className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Avg Order Value</p>
                    <p className="text-2xl font-bold text-purple-600">${restaurantStats.averageOrderValue}</p>
                  </div>
                  <FaChartLine className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-orange-600">{restaurantStats.occupancyRate}%</p>
                  </div>
                  <FaUsers className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Menu Items</p>
                    <p className="text-2xl font-bold text-indigo-600">{restaurantStats.menuItems}</p>
                  </div>
                  <FaUtensils className="text-indigo-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Active Promos</p>
                    <p className="text-2xl font-bold text-red-600">{restaurantStats.activePromos}</p>
                  </div>
                  <FaStar className="text-red-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Orders and Top Items */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaClock className="mr-2 text-primary" />
                Recent Orders
              </CardTitle>
              <Button size="sm" className="gradient-primary text-white" data-testid="button-view-all-orders">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{order.id}</span>
                        <Badge className={statusColors[order.status as keyof typeof statusColors]}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.table} • {order.items}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium">${order.amount}</span>
                        <span className="text-xs text-muted-foreground">{order.time} • {order.server}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Top Selling Items Today
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-menu-analytics">
                <FaEye className="mr-2" />
                Analytics
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topMenuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{item.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < Math.floor(item.rating) ? "text-yellow-500 text-xs" : "text-gray-300 text-xs"} 
                            />
                          ))}
                          <span className="ml-1 text-xs">({item.rating})</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span>{item.orders} orders</span>
                        <span>${item.revenue} revenue</span>
                        <span>${item.profit} profit</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Management and Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaUtensils className="mr-2" />
                Menu Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-menu-item">
                <FaPlus className="mr-2" />
                Add New Menu Item
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-edit-menu">
                <FaEdit className="mr-2" />
                Edit Existing Items
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-manage-categories">
                <FaUtensils className="mr-2" />
                Manage Categories
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-seasonal-menu">
                <FaStar className="mr-2" />
                Seasonal Specials
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaDollarSign className="mr-2" />
                Inventory & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-inventory-check">
                <FaEye className="mr-2" />
                Check Inventory Levels
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-update-prices">
                <FaEdit className="mr-2" />
                Update Pricing
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-supplier-orders">
                <FaPlus className="mr-2" />
                Place Supplier Orders
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-waste-tracking">
                <FaTrash className="mr-2" />
                Track Food Waste
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaUsers className="mr-2" />
                Staff Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-staff-schedule">
                <FaClock className="mr-2" />
                View Staff Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-performance-reports">
                <FaChartLine className="mr-2" />
                Performance Reports
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-training-modules">
                <FaStar className="mr-2" />
                Training Modules
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-shift-notes">
                <FaEdit className="mr-2" />
                Shift Notes & Handoffs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Restaurant Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Operating Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Breakfast:</span>
                    <span>6:30 AM - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch:</span>
                    <span>12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner:</span>
                    <span>6:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Service:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Metrics Targets</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Food Cost %:</span>
                    <span>Target: &lt;32%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Cost %:</span>
                    <span>Target: &lt;28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Rating:</span>
                    <span>Target: &gt;4.5⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order Accuracy:</span>
                    <span>Target: &gt;98%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Head Chef:</strong> +1 (555) 123-4567 Ext. 201</div>
                  <div><strong>Restaurant Manager:</strong> +1 (555) 123-4567 Ext. 202</div>
                  <div><strong>Supplier Emergency:</strong> +1 (555) 987-6543</div>
                  <div><strong>Maintenance:</strong> +1 (555) 123-4567 Ext. 100</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
