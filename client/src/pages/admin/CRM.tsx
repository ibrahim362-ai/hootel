import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaUsers, FaEnvelope, FaChartLine, FaDollarSign, FaStar, FaPlus, FaEdit, FaEye, FaPhone, FaCalendarAlt, FaGift, FaCrown, FaHeart, FaBullhorn } from 'react-icons/fa';

export default function AdminCRM() {
  const crmStats = {
    totalCustomers: 1247,
    activeMembers: 892,
    newThisMonth: 87,
    totalRevenue: 145670,
    avgLifetimeValue: 2340,
    satisfactionScore: 4.7
  };

  const customerSegments = [
    {
      name: "VIP Elite",
      count: 45,
      revenue: 67800,
      icon: FaCrown,
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      description: "Top 3% spending customers"
    },
    {
      name: "Frequent Guests",
      count: 234,
      revenue: 45200,
      icon: FaHeart,
      color: "bg-purple-50 border-purple-200 text-purple-800",
      description: "5+ stays per year"
    },
    {
      name: "Business Travelers",
      count: 156,
      revenue: 23400,
      icon: FaUsers,
      color: "bg-blue-50 border-blue-200 text-blue-800",
      description: "Corporate accounts"
    },
    {
      name: "Event Planners",
      count: 89,
      revenue: 18900,
      icon: FaCalendarAlt,
      color: "bg-green-50 border-green-200 text-green-800",
      description: "Wedding & event bookings"
    }
  ];

  const recentInteractions = [
    {
      customer: "Sarah Johnson",
      type: "Complaint",
      issue: "Room cleanliness issue",
      status: "resolved",
      date: "2 hours ago",
      priority: "high",
      satisfaction: 4.5
    },
    {
      customer: "Michael Chen",
      type: "Inquiry",
      issue: "Event booking request",
      status: "in-progress",
      date: "4 hours ago",
      priority: "medium",
      satisfaction: null
    },
    {
      customer: "Emma Davis",
      type: "Feedback",
      issue: "Positive dining experience",
      status: "acknowledged",
      date: "1 day ago",
      priority: "low",
      satisfaction: 5.0
    },
    {
      customer: "Robert Wilson",
      type: "Request",
      issue: "Special dietary requirements",
      status: "pending",
      date: "6 hours ago",
      priority: "medium",
      satisfaction: null
    }
  ];

  const campaignPerformance = [
    {
      name: "Summer Getaway Package",
      type: "Promotion",
      sent: 2340,
      opened: 1876,
      clicked: 423,
      converted: 67,
      revenue: 23400,
      roi: 340
    },
    {
      name: "VIP Member Benefits",
      type: "Loyalty",
      sent: 567,
      opened: 489,
      clicked: 234,
      converted: 45,
      revenue: 18900,
      roi: 420
    },
    {
      name: "Weekend Spa Special",
      type: "Wellness",
      sent: 1890,
      opened: 1234,
      clicked: 345,
      converted: 89,
      revenue: 15600,
      roi: 280
    }
  ];

  const loyaltyProgram = {
    totalMembers: 892,
    pointsIssued: 234567,
    pointsRedeemed: 123456,
    averagePoints: 262,
    topRewards: [
      { name: "Free Night Stay", cost: 5000, redeemed: 45 },
      { name: "Spa Treatment", cost: 2500, redeemed: 78 },
      { name: "Restaurant Credit", cost: 1000, redeemed: 156 },
      { name: "Late Checkout", cost: 500, redeemed: 234 }
    ]
  };

  const statusColors = {
    "resolved": "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
    "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "acknowledged": "bg-purple-100 text-purple-800 border-purple-200"
  };

  const priorityColors = {
    "high": "bg-red-100 text-red-800 border-red-200",
    "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "low": "bg-green-100 text-green-800 border-green-200"
  };

  return (
    <Layout 
      title="Customer Relationship Management" 
      subtitle="Manage customer interactions, campaigns, and loyalty programs"
    >
      <div className="space-y-6">
        {/* Key CRM Metrics */}
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
                    <p className="text-sm text-muted-foreground">Total Customers</p>
                    <p className="text-2xl font-bold text-blue-600">{crmStats.totalCustomers.toLocaleString()}</p>
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
                    <p className="text-sm text-muted-foreground">Active Members</p>
                    <p className="text-2xl font-bold text-green-600">{crmStats.activeMembers}</p>
                  </div>
                  <FaHeart className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">New This Month</p>
                    <p className="text-2xl font-bold text-purple-600">{crmStats.newThisMonth}</p>
                  </div>
                  <FaPlus className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-600">${crmStats.totalRevenue.toLocaleString()}</p>
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
                    <p className="text-sm text-muted-foreground">Avg Lifetime Value</p>
                    <p className="text-2xl font-bold text-orange-600">${crmStats.avgLifetimeValue}</p>
                  </div>
                  <FaChartLine className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Satisfaction Score</p>
                    <p className="text-2xl font-bold text-yellow-600">{crmStats.satisfactionScore}⭐</p>
                  </div>
                  <FaStar className="text-yellow-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Customer Segments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaUsers className="mr-2 text-primary" />
              Customer Segments
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-create-segment">
              <FaPlus className="mr-2" />
              Create Segment
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customerSegments.map((segment, index) => (
                <motion.div
                  key={segment.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-lg border ${segment.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <segment.icon className="text-2xl" />
                    <Badge variant="secondary">{segment.count} customers</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{segment.name}</h3>
                  <p className="text-sm mb-3">{segment.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Revenue:</span>
                      <span className="font-semibold">${segment.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Value:</span>
                      <span className="font-semibold">${Math.round(segment.revenue / segment.count)}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-3">
                    <Button size="sm" variant="outline" data-testid={`button-view-segment-${segment.name.replace(' ', '-').toLowerCase()}`}>
                      <FaEye className="mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" data-testid={`button-campaign-segment-${segment.name.replace(' ', '-').toLowerCase()}`}>
                      <FaEnvelope className="mr-1" />
                      Campaign
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Customer Interactions and Campaign Performance */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaPhone className="mr-2 text-primary" />
                Recent Customer Interactions
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-view-all-interactions">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInteractions.map((interaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{interaction.customer}</span>
                        <div className="flex items-center space-x-2">
                          <Badge className={statusColors[interaction.status as keyof typeof statusColors]}>
                            {interaction.status}
                          </Badge>
                          <Badge className={priorityColors[interaction.priority as keyof typeof priorityColors]}>
                            {interaction.priority}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{interaction.type}: {interaction.issue}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{interaction.date}</span>
                        {interaction.satisfaction && (
                          <div className="flex items-center">
                            <FaStar className="text-yellow-500 text-xs mr-1" />
                            <span className="text-xs">{interaction.satisfaction}</span>
                          </div>
                        )}
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
                <FaBullhorn className="mr-2 text-primary" />
                Campaign Performance
              </CardTitle>
              <Button size="sm" className="gradient-primary text-white" data-testid="button-create-campaign">
                <FaPlus className="mr-2" />
                New Campaign
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{campaign.name}</span>
                      <Badge variant="secondary">{campaign.type}</Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground mb-2">
                      <div>Sent: {campaign.sent}</div>
                      <div>Opened: {campaign.opened}</div>
                      <div>Clicked: {campaign.clicked}</div>
                      <div>Converted: {campaign.converted}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Revenue: ${campaign.revenue.toLocaleString()}</span>
                      <span className="text-sm text-green-600">ROI: {campaign.roi}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loyalty Program Management */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaGift className="mr-2 text-primary" />
              Loyalty Program Management
            </CardTitle>
            <Button variant="outline" data-testid="button-loyalty-settings">
              <FaEdit className="mr-2" />
              Program Settings
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Program Overview</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Members:</span>
                    <span className="font-medium">{loyaltyProgram.totalMembers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Points Issued:</span>
                    <span className="font-medium">{loyaltyProgram.pointsIssued.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Points Redeemed:</span>
                    <span className="font-medium">{loyaltyProgram.pointsRedeemed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg per Member:</span>
                    <span className="font-medium">{loyaltyProgram.averagePoints} points</span>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <h4 className="font-semibold mb-4">Top Rewards</h4>
                <div className="space-y-3">
                  {loyaltyProgram.topRewards.map((reward, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium">{reward.name}</span>
                        <p className="text-sm text-muted-foreground">{reward.cost} points</p>
                      </div>
                      <Badge variant="secondary">{reward.redeemed} redeemed</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CRM Management Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <FaUsers className="mr-2" />
                Customer Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-customer">
                <FaPlus className="mr-2" />
                Add New Customer
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-import-customers">
                <FaEdit className="mr-2" />
                Import Customer Data
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-customer-database">
                <FaEye className="mr-2" />
                Customer Database
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FaEnvelope className="mr-2" />
                Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-email-campaigns">
                <FaEnvelope className="mr-2" />
                Email Campaigns
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-sms-campaigns">
                <FaPhone className="mr-2" />
                SMS Campaigns
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-communication-log">
                <FaEye className="mr-2" />
                Communication Log
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <FaChartLine className="mr-2" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-customer-analytics">
                <FaChartLine className="mr-2" />
                Customer Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-revenue-analysis">
                <FaDollarSign className="mr-2" />
                Revenue Analysis
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-behavior-insights">
                <FaEye className="mr-2" />
                Behavior Insights
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <FaGift className="mr-2" />
                Loyalty & Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline" data-testid="button-reward-catalog">
                <FaGift className="mr-2" />
                Reward Catalog
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-point-adjustments">
                <FaEdit className="mr-2" />
                Point Adjustments
              </Button>
              <Button className="w-full justify-start" variant="outline" data-testid="button-loyalty-reports">
                <FaChartLine className="mr-2" />
                Loyalty Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important CRM Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important CRM Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Customer Service Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Phone Support:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Live Chat:</span>
                    <span>6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Response:</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social Media:</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Performance Targets</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Customer Satisfaction:</span>
                    <span>Target: &gt;4.5⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span>Target: &lt;15 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution Rate:</span>
                    <span>Target: &gt;95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loyalty Enrollment:</span>
                    <span>Target: &gt;70%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Escalation</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>CRM Manager:</strong> +1 (555) 123-4567 Ext. 401</div>
                  <div><strong>Guest Relations:</strong> +1 (555) 123-4567 Ext. 402</div>
                  <div><strong>Marketing Director:</strong> +1 (555) 123-4567 Ext. 403</div>
                  <div><strong>IT Support:</strong> +1 (555) 987-6543</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}