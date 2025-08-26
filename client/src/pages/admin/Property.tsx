import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaBuilding, FaWrench, FaCalendarAlt, FaDollarSign, FaUsers, FaExclamationTriangle, FaCheckCircle, FaClock, FaPlus, FaEdit, FaEye, FaHome, FaTools, FaCog, FaPhoneAlt, FaFileContract, FaClipboardList, FaChartLine } from 'react-icons/fa';
import DataTable from '@/components/tables/DataTable';

export default function AdminProperty() {
  const propertyStats = {
    totalAssets: 1247,
    pendingMaintenance: 23,
    completedThisMonth: 156,
    totalValue: 15670000,
    maintenanceCost: 34560,
    energyEfficiency: 82
  };

  const facilities = [
    {
      id: 1,
      name: "Main Building",
      type: "Accommodation",
      rooms: 120,
      floors: 8,
      status: "Operational",
      lastInspection: "Jan 15, 2025",
      nextMaintenance: "Feb 10, 2025",
      condition: "Excellent",
      value: 8500000
    },
    {
      id: 2,
      name: "Restaurant & Kitchen",
      type: "Dining",
      capacity: 200,
      floors: 2,
      status: "Operational",
      lastInspection: "Jan 20, 2025",
      nextMaintenance: "Jan 30, 2025",
      condition: "Good",
      value: 2100000
    },
    {
      id: 3,
      name: "Fitness Center",
      type: "Recreation",
      capacity: 80,
      floors: 1,
      status: "Operational",
      lastInspection: "Jan 18, 2025",
      nextMaintenance: "Feb 5, 2025",
      condition: "Very Good",
      value: 850000
    },
    {
      id: 4,
      name: "Spa & Wellness",
      type: "Wellness",
      capacity: 40,
      floors: 1,
      status: "Maintenance",
      lastInspection: "Jan 12, 2025",
      nextMaintenance: "In Progress",
      condition: "Under Repair",
      value: 1200000
    },
    {
      id: 5,
      name: "Conference Center",
      type: "Business",
      capacity: 300,
      floors: 2,
      status: "Operational",
      lastInspection: "Jan 16, 2025",
      nextMaintenance: "Feb 20, 2025",
      condition: "Good",
      value: 1800000
    },
    {
      id: 6,
      name: "Parking Garage",
      type: "Infrastructure",
      capacity: 150,
      floors: 3,
      status: "Operational",
      lastInspection: "Jan 14, 2025",
      nextMaintenance: "Mar 1, 2025",
      condition: "Fair",
      value: 720000
    }
  ];

  const maintenanceRequests = [
    {
      id: "MR-2025-001",
      facility: "Main Building - Room 305",
      issue: "HVAC system malfunction",
      priority: "high",
      status: "in-progress",
      assignedTo: "John Smith",
      dateReported: "Jan 24, 2025",
      estimatedCompletion: "Jan 26, 2025",
      cost: 850
    },
    {
      id: "MR-2025-002",
      facility: "Restaurant Kitchen",
      issue: "Refrigeration unit repair",
      priority: "urgent",
      status: "pending",
      assignedTo: "Maintenance Team A",
      dateReported: "Jan 25, 2025",
      estimatedCompletion: "Jan 25, 2025",
      cost: 1200
    },
    {
      id: "MR-2025-003",
      facility: "Fitness Center",
      issue: "Equipment calibration",
      priority: "medium",
      status: "completed",
      assignedTo: "Mike Johnson",
      dateReported: "Jan 22, 2025",
      estimatedCompletion: "Jan 24, 2025",
      cost: 350
    },
    {
      id: "MR-2025-004",
      facility: "Conference Center",
      issue: "AV system upgrade",
      priority: "low",
      status: "scheduled",
      assignedTo: "Tech Support Team",
      dateReported: "Jan 20, 2025",
      estimatedCompletion: "Jan 30, 2025",
      cost: 2500
    }
  ];

  const vendors = [
    {
      name: "Elite HVAC Solutions",
      category: "HVAC & Climate",
      contact: "+1 (555) 234-5678",
      rating: 4.8,
      activeContracts: 3,
      lastService: "Jan 18, 2025",
      totalSpent: 45600
    },
    {
      name: "ProClean Commercial",
      category: "Cleaning Services",
      contact: "+1 (555) 345-6789",
      rating: 4.6,
      activeContracts: 2,
      lastService: "Jan 25, 2025",
      totalSpent: 23400
    },
    {
      name: "SecureGuard Systems",
      category: "Security & Safety",
      contact: "+1 (555) 456-7890",
      rating: 4.9,
      activeContracts: 1,
      lastService: "Jan 20, 2025",
      totalSpent: 18900
    },
    {
      name: "GreenSpace Landscaping",
      category: "Landscaping",
      contact: "+1 (555) 567-8901",
      rating: 4.4,
      activeContracts: 1,
      lastService: "Jan 16, 2025",
      totalSpent: 12300
    }
  ];

  const statusColors = {
    "Operational": "bg-green-100 text-green-800 border-green-200",
    "Maintenance": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Inspection": "bg-blue-100 text-blue-800 border-blue-200",
    "Closed": "bg-red-100 text-red-800 border-red-200"
  };

  const priorityColors = {
    "urgent": "bg-red-100 text-red-800 border-red-200",
    "high": "bg-orange-100 text-orange-800 border-orange-200",
    "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "low": "bg-green-100 text-green-800 border-green-200"
  };

  const conditionColors = {
    "Excellent": "bg-green-100 text-green-800 border-green-200",
    "Very Good": "bg-blue-100 text-blue-800 border-blue-200",
    "Good": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Fair": "bg-orange-100 text-orange-800 border-orange-200",
    "Under Repair": "bg-red-100 text-red-800 border-red-200"
  };

  const facilitiesColumns = [
    {
      key: "name",
      label: "Facility",
      render: (value: string, row: any) => (
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-muted-foreground">{row.type}</p>
        </div>
      )
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
      key: "condition",
      label: "Condition",
      render: (value: string) => (
        <Badge className={conditionColors[value as keyof typeof conditionColors]}>
          {value}
        </Badge>
      )
    },
    {
      key: "value",
      label: "Asset Value",
      render: (value: number) => `$${value.toLocaleString()}`
    },
    {
      key: "nextMaintenance",
      label: "Next Maintenance",
      render: (value: string) => value
    }
  ];

  const maintenanceColumns = [
    {
      key: "id",
      label: "Request ID",
      render: (value: string) => <span className="font-mono text-sm">{value}</span>
    },
    {
      key: "facility",
      label: "Facility/Location",
      render: (value: string) => value
    },
    {
      key: "priority",
      label: "Priority",
      render: (value: string) => (
        <Badge className={priorityColors[value as keyof typeof priorityColors]}>
          {value.toUpperCase()}
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
    },
    {
      key: "cost",
      label: "Est. Cost",
      render: (value: number) => `$${value.toLocaleString()}`
    }
  ];

  return (
    <Layout 
      title="Property Management Dashboard" 
      subtitle="Manage facilities, maintenance, vendors, and asset performance"
    >
      <div className="space-y-6">
        {/* Key Property Metrics */}
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
                    <p className="text-sm text-muted-foreground">Total Assets</p>
                    <p className="text-2xl font-bold text-blue-600">{propertyStats.totalAssets}</p>
                  </div>
                  <FaBuilding className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Pending Maintenance</p>
                    <p className="text-2xl font-bold text-orange-600">{propertyStats.pendingMaintenance}</p>
                  </div>
                  <FaWrench className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Completed This Month</p>
                    <p className="text-2xl font-bold text-green-600">{propertyStats.completedThisMonth}</p>
                  </div>
                  <FaCheckCircle className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-2xl font-bold text-green-600">${(propertyStats.totalValue / 1000000).toFixed(1)}M</p>
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
                    <p className="text-sm text-muted-foreground">Maintenance Cost</p>
                    <p className="text-2xl font-bold text-red-600">${propertyStats.maintenanceCost.toLocaleString()}</p>
                  </div>
                  <FaCog className="text-red-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Energy Efficiency</p>
                    <p className="text-2xl font-bold text-green-600">{propertyStats.energyEfficiency}%</p>
                  </div>
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Facilities Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaBuilding className="mr-2 text-primary" />
              Facilities Overview
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-add-facility">
              <FaPlus className="mr-2" />
              Add Facility
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable
              title=""
              data={facilities}
              columns={facilitiesColumns}
              searchable={true}
              exportable={true}
            />
          </CardContent>
        </Card>

        {/* Maintenance Requests and Vendor Management */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaWrench className="mr-2 text-primary" />
                Recent Maintenance Requests
              </CardTitle>
              <Button size="sm" className="gradient-primary text-white" data-testid="button-create-maintenance">
                <FaPlus className="mr-2" />
                New Request
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm font-medium">{request.id}</span>
                      <div className="flex space-x-2">
                        <Badge className={priorityColors[request.priority as keyof typeof priorityColors]}>
                          {request.priority.toUpperCase()}
                        </Badge>
                        <Badge variant={request.status === 'completed' ? 'default' : 'secondary'}>
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="font-medium text-sm mb-1">{request.facility}</p>
                    <p className="text-sm text-muted-foreground mb-2">{request.issue}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Assigned: {request.assignedTo}</span>
                      <span>Est. Cost: ${request.cost}</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-view-request-${request.id}`}>
                        <FaEye className="mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-edit-request-${request.id}`}>
                        <FaEdit className="mr-1" />
                        Edit
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaUsers className="mr-2 text-primary" />
                Vendor Management
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-manage-vendors">
                <FaEdit className="mr-2" />
                Manage Vendors
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{vendor.name}</h4>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-yellow-500 mr-1" />
                        <span className="text-sm">{vendor.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{vendor.category}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                      <div>Contracts: {vendor.activeContracts}</div>
                      <div>Total Spent: ${vendor.totalSpent.toLocaleString()}</div>
                      <div>Last Service: {vendor.lastService}</div>
                      <div>{vendor.contact}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" data-testid={`button-contact-vendor-${index}`}>
                        <FaPhoneAlt className="mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-vendor-history-${index}`}>
                        <FaClipboardList className="mr-1" />
                        History
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Property Management Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaBuilding className="mr-2" />
                Facility Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-facility-inspection">
                <FaClipboardList className="mr-2" />
                Schedule Inspection
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-facility-reports">
                <FaFileContract className="mr-2" />
                Facility Reports
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-space-planning">
                <FaHome className="mr-2" />
                Space Planning
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <FaWrench className="mr-2" />
                Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-preventive-maintenance">
                <FaCalendarAlt className="mr-2" />
                Preventive Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-work-orders">
                <FaTools className="mr-2" />
                Work Orders
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-maintenance-history">
                <FaClipboardList className="mr-2" />
                Maintenance History
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaDollarSign className="mr-2" />
                Financial Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-budget-planning">
                <FaDollarSign className="mr-2" />
                Budget Planning
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-cost-tracking">
                <FaChartLine className="mr-2" />
                Cost Tracking
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-asset-valuation">
                <FaFileContract className="mr-2" />
                Asset Valuation
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaUsers className="mr-2" />
                Vendor & Contracts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-contract-management">
                <FaFileContract className="mr-2" />
                Contract Management
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-vendor-performance">
                <FaChartLine className="mr-2" />
                Vendor Performance
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-procurement">
                <FaCog className="mr-2" />
                Procurement
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Property Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Property Management Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Property Manager:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>Maintenance Emergency:</strong> +1 (555) 911-HELP</div>
                  <div><strong>Security:</strong> +1 (555) 123-4567 Ext. 911</div>
                  <div><strong>Fire Department:</strong> 911</div>
                  <div><strong>Utilities Emergency:</strong> +1 (555) 888-9999</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Maintenance Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>HVAC Inspection:</span>
                    <span>Quarterly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fire Safety Check:</span>
                    <span>Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elevator Service:</span>
                    <span>Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deep Cleaning:</span>
                    <span>Bi-weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Landscaping:</span>
                    <span>Weekly</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Compliance & Certifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Fire Certificate:</span>
                    <span>Valid until Dec 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health License:</span>
                    <span>Valid until Mar 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Building Permit:</span>
                    <span>Valid until Jan 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance:</span>
                    <span>Valid until Jun 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Environmental:</span>
                    <span>Valid until Sep 2025</span>
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