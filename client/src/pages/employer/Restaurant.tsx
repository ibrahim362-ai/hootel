import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  UtensilsCrossed,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  MapPin,
  DollarSign,
  Eye,
  RefreshCw,
  Bell,
} from "lucide-react";
import { FaUtensils, FaCoffee, FaWineGlass, FaCake } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DataTable from "@/components/tables/DataTable";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import type { Order, MenuItem } from "@shared/schema";

const orderStatusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  preparing: "bg-blue-100 text-blue-800 border-blue-200",
  ready: "bg-green-100 text-green-800 border-green-200",
  delivered: "bg-gray-100 text-gray-800 border-gray-200",
};

const priorityColors = {
  normal: "bg-blue-100 text-blue-800 border-blue-200",
  urgent: "bg-red-100 text-red-800 border-red-200",
  vip: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function EmployerRestaurant() {
  const [activeTab, setActiveTab] = useState("orders");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: orders, isLoading: ordersLoading } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
  });

  const { data: menuItems, isLoading: menuLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const updateOrderMutation = useMutation({
    mutationFn: async ({ orderId, status }: { orderId: string; status: string }) => {
      // This would normally make an API call to update order status
      await new Promise(resolve => setTimeout(resolve, 500));
      return { orderId, status };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      toast({
        title: "Order updated",
        description: `Order status changed to ${data.status}`,
      });
    },
  });

  // Mock staff-specific data
  const staffOrders = [
    {
      id: "1",
      orderNumber: "ORD-001",
      table: "Table 12",
      customer: "Sarah Johnson",
      items: [
        { name: "Caesar Salad", quantity: 2, price: 12.99 },
        { name: "Grilled Salmon", quantity: 1, price: 28.99 },
      ],
      total: 54.97,
      status: "preparing",
      priority: "normal",
      orderTime: "2025-01-22 12:30:00",
      estimatedTime: 15,
      specialRequests: "No croutons on salad",
    },
    {
      id: "2",
      orderNumber: "ORD-002",
      table: "Room Service - 204",
      customer: "Michael Chen",
      items: [
        { name: "Club Sandwich", quantity: 1, price: 16.99 },
        { name: "Coffee", quantity: 2, price: 3.99 },
      ],
      total: 24.97,
      status: "ready",
      priority: "urgent",
      orderTime: "2025-01-22 12:45:00",
      estimatedTime: 0,
      specialRequests: "Extra mayo, deliver to room",
    },
    {
      id: "3",
      orderNumber: "ORD-003",
      table: "Table 8",
      customer: "Emma Davis",
      items: [
        { name: "Pasta Primavera", quantity: 1, price: 22.99 },
        { name: "House Wine", quantity: 1, price: 8.99 },
      ],
      total: 31.98,
      status: "pending",
      priority: "vip",
      orderTime: "2025-01-22 13:00:00",
      estimatedTime: 20,
      specialRequests: "VIP guest - priority service",
    },
  ];

  const filteredOrders = staffOrders.filter(order => {
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.table.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const orderColumns = [
    {
      key: "order",
      label: "Order",
      render: (_, order: any) => (
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <UtensilsCrossed className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold">{order.orderNumber}</p>
            <p className="text-sm text-muted-foreground">{order.table}</p>
          </div>
        </div>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      render: (_, order: any) => (
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {order.customer.split(" ").map((n: string) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{order.customer}</span>
        </div>
      ),
    },
    {
      key: "items",
      label: "Items",
      render: (_, order: any) => (
        <div className="text-sm">
          <p className="font-medium">{order.items.length} item(s)</p>
          <p className="text-muted-foreground truncate max-w-xs">
            {order.items.map((item: any) => `${item.quantity}x ${item.name}`).join(", ")}
          </p>
        </div>
      ),
    },
    {
      key: "total",
      label: "Total",
      render: (_, order: any) => (
        <div className="flex items-center space-x-1">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">${order.total}</span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_, order: any) => (
        <Badge className={orderStatusColors[order.status as keyof typeof orderStatusColors]}>
          {order.status}
        </Badge>
      ),
    },
    {
      key: "priority",
      label: "Priority",
      render: (_, order: any) => (
        <Badge className={priorityColors[order.priority as keyof typeof priorityColors]}>
          {order.priority}
        </Badge>
      ),
    },
    {
      key: "time",
      label: "Time",
      render: (_, order: any) => (
        <div className="text-sm">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span>{new Date(order.orderTime).toLocaleTimeString()}</span>
          </div>
          {order.estimatedTime > 0 && (
            <p className="text-muted-foreground">Est: {order.estimatedTime}min</p>
          )}
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, order: any) => (
        <div className="flex space-x-2">
          {order.status === "pending" && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => updateOrderMutation.mutate({ orderId: order.id, status: "preparing" })}
              data-testid={`button-start-order-${order.id}`}
            >
              Start
            </Button>
          )}
          {order.status === "preparing" && (
            <Button 
              size="sm" 
              className="gradient-primary text-white"
              onClick={() => updateOrderMutation.mutate({ orderId: order.id, status: "ready" })}
              data-testid={`button-ready-order-${order.id}`}
            >
              Ready
            </Button>
          )}
          {order.status === "ready" && (
            <Button 
              size="sm" 
              className="bg-green-600 text-white hover:bg-green-700"
              onClick={() => updateOrderMutation.mutate({ orderId: order.id, status: "delivered" })}
              data-testid={`button-deliver-order-${order.id}`}
            >
              Delivered
            </Button>
          )}
          <Button size="sm" variant="ghost" data-testid={`button-view-order-${order.id}`}>
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  if (ordersLoading || menuLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const orderStats = {
    total: staffOrders.length,
    pending: staffOrders.filter(o => o.status === "pending").length,
    preparing: staffOrders.filter(o => o.status === "preparing").length,
    ready: staffOrders.filter(o => o.status === "ready").length,
    delivered: staffOrders.filter(o => o.status === "delivered").length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <UtensilsCrossed className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-foreground">{orderStats.total}</h3>
            <p className="text-sm text-muted-foreground">Total Orders</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-yellow-600">{orderStats.pending}</h3>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <RefreshCw className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">{orderStats.preparing}</h3>
            <p className="text-sm text-muted-foreground">Preparing</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-green-600">{orderStats.ready}</h3>
            <p className="text-sm text-muted-foreground">Ready</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orders">Active Orders</TabsTrigger>
          <TabsTrigger value="menu">Menu Items</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          {/* Order Controls */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Input
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      data-testid="input-search-orders"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48" data-testid="select-order-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="preparing">Preparing</SelectItem>
                      <SelectItem value="ready">Ready</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" data-testid="button-refresh-orders">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button className="gradient-primary text-white" data-testid="button-call-kitchen">
                    <Bell className="h-4 w-4 mr-2" />
                    Call Kitchen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <DataTable
            title="Restaurant Orders"
            data={filteredOrders}
            columns={orderColumns}
            searchable={false}
            exportable={false}
          />

          {/* Special Requests & Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Special Requests & Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffOrders
                  .filter(order => order.specialRequests && ["pending", "preparing"].includes(order.status))
                  .map((order) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start space-x-4 p-4 border rounded-lg"
                    >
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        order.priority === "urgent" ? "bg-red-500" :
                        order.priority === "vip" ? "bg-purple-500" : "bg-blue-500"
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{order.orderNumber} - {order.table}</h4>
                          <Badge className={priorityColors[order.priority as keyof typeof priorityColors]}>
                            {order.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.specialRequests}</p>
                      </div>
                    </motion.div>
                  ))}
                
                {staffOrders.filter(order => order.specialRequests && ["pending", "preparing"].includes(order.status)).length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No special requests at the moment</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="menu" className="space-y-6">
          {/* Menu Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Menu Information</h3>
                  <p className="text-sm text-muted-foreground">Current menu items and availability</p>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{menuItems?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Available Items</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems?.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">{item.category}</p>
                      </div>
                      <Badge className={item.isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {item.isAvailable ? "Available" : "Out of Stock"}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold text-lg">{item.price}</span>
                      </div>
                      
                      <Button size="sm" variant="outline" data-testid={`button-view-item-${item.id}`}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {menuItems?.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <UtensilsCrossed className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Menu Items</h3>
                <p className="text-muted-foreground">Menu items will appear here when available.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
