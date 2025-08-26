import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalendarAlt, FaDollarSign, FaUser, FaDownload, FaEye, FaStar, FaUtensils, FaDumbbell, FaBed, FaClipboardList, FaHistory, FaReceipt, FaMapMarkerAlt } from 'react-icons/fa';
import { BarChart } from '@/components/charts/BarChart';

export default function UserReports() {
  const guestStats = {
    totalBookings: 12,
    totalSpent: 4850,
    avgRating: 4.8,
    loyaltyPoints: 2450,
    stayNights: 28,
    referralCount: 3
  };

  const bookingHistory = [
    { month: 'Jan', bookings: 1, spent: 285, nights: 2 },
    { month: 'Feb', bookings: 0, spent: 0, nights: 0 },
    { month: 'Mar', bookings: 2, spent: 640, nights: 4 },
    { month: 'Apr', bookings: 1, spent: 320, nights: 2 },
    { month: 'May', bookings: 1, spent: 480, nights: 3 },
    { month: 'Jun', bookings: 2, spent: 750, nights: 5 },
    { month: 'Jul', bookings: 1, spent: 290, nights: 2 },
    { month: 'Aug', bookings: 2, spent: 830, nights: 6 },
    { month: 'Sep', bookings: 1, spent: 405, nights: 3 },
    { month: 'Oct', bookings: 0, spent: 0, nights: 0 },
    { month: 'Nov', bookings: 1, spent: 315, nights: 2 },
    { month: 'Dec', bookings: 2, spent: 535, nights: 4 }
  ];

  const recentStays = [
    {
      id: 'BK-2025-001',
      checkIn: 'Jan 20, 2025',
      checkOut: 'Jan 22, 2025',
      roomType: 'Deluxe Suite',
      totalAmount: 485,
      rating: 5,
      status: 'Completed'
    },
    {
      id: 'BK-2024-156',
      checkIn: 'Dec 15, 2024',
      checkOut: 'Dec 17, 2024',
      roomType: 'Standard Room',
      totalAmount: 340,
      rating: 4,
      status: 'Completed'
    },
    {
      id: 'BK-2024-142',
      checkIn: 'Nov 8, 2024',
      checkOut: 'Nov 10, 2024',
      roomType: 'Premium Room',
      totalAmount: 415,
      rating: 5,
      status: 'Completed'
    },
    {
      id: 'BK-2024-138',
      checkIn: 'Oct 25, 2024',
      checkOut: 'Oct 28, 2024',
      roomType: 'Executive Suite',
      totalAmount: 825,
      rating: 4,
      status: 'Completed'
    }
  ];

  const serviceUsage = [
    { service: 'Room Service', orders: 15, spent: 245, lastUsed: 'Jan 21, 2025' },
    { service: 'Restaurant Dining', orders: 8, spent: 380, lastUsed: 'Jan 20, 2025' },
    { service: 'Spa Services', orders: 6, spent: 420, lastUsed: 'Dec 15, 2024' },
    { service: 'Gym Access', orders: 12, spent: 0, lastUsed: 'Jan 19, 2025' },
    { service: 'Laundry Service', orders: 4, spent: 85, lastUsed: 'Jan 18, 2025' },
    { service: 'Concierge Service', orders: 3, spent: 0, lastUsed: 'Dec 10, 2024' }
  ];

  const expenseBreakdown = [
    { category: 'Accommodation', amount: 3240, percentage: 67 },
    { category: 'Dining', amount: 625, percentage: 13 },
    { category: 'Spa & Wellness', amount: 420, percentage: 9 },
    { category: 'Room Service', amount: 245, percentage: 5 },
    { category: 'Additional Services', amount: 320, percentage: 6 }
  ];

  const loyaltyProgram = {
    tier: 'Gold Member',
    currentPoints: 2450,
    nextTierPoints: 3000,
    progress: 82,
    benefits: [
      'Room upgrade (subject to availability)',
      'Late checkout until 2 PM',
      'Complimentary WiFi',
      'Priority reservation service',
      '15% discount on spa services'
    ],
    earnedRewards: [
      { reward: 'Free Night Stay', points: 2000, available: 1 },
      { reward: 'Spa Credit ($100)', points: 800, available: 0 },
      { reward: 'Restaurant Credit ($50)', points: 500, available: 2 },
      { reward: 'Room Upgrade', points: 300, available: 3 }
    ]
  };

  const preferences = {
    roomPreferences: ['High floor', 'King bed', 'City view', 'Non-smoking'],
    dietaryRestrictions: ['Vegetarian options', 'No shellfish'],
    specialRequests: ['Extra pillows', 'Late checkout', 'Early check-in'],
    communication: ['Email notifications', 'SMS alerts for bookings']
  };

  const availableReports = [
    {
      name: 'Annual Stay Summary',
      description: 'Complete overview of your stays, spending, and rewards for the year',
      type: 'Summary',
      period: '2024',
      status: 'Available'
    },
    {
      name: 'Expense Report',
      description: 'Detailed breakdown of all charges and expenses by category',
      type: 'Financial',
      period: 'Last 12 Months',
      status: 'Available'
    },
    {
      name: 'Loyalty Points Statement',
      description: 'Complete history of points earned, redeemed, and current balance',
      type: 'Loyalty',
      period: 'All Time',
      status: 'Available'
    },
    {
      name: 'Service Usage Report',
      description: 'Analysis of hotel services used and frequency patterns',
      type: 'Usage',
      period: 'Last 6 Months',
      status: 'Available'
    }
  ];

  const upcomingBookings = [
    {
      id: 'BK-2025-008',
      checkIn: 'Feb 14, 2025',
      checkOut: 'Feb 16, 2025',
      roomType: 'Romantic Suite',
      guests: 2,
      status: 'Confirmed',
      specialRequests: 'Anniversary celebration, champagne service'
    },
    {
      id: 'BK-2025-012',
      checkIn: 'Mar 20, 2025',
      checkOut: 'Mar 23, 2025',
      roomType: 'Executive Suite',
      guests: 1,
      status: 'Confirmed',
      specialRequests: 'Business trip, early breakfast'
    }
  ];

  const statusColors = {
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Confirmed': 'bg-blue-100 text-blue-800 border-blue-200',
    'Cancelled': 'bg-red-100 text-red-800 border-red-200',
    'Available': 'bg-green-100 text-green-800 border-green-200'
  };

  const tierColors = {
    'Gold Member': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Silver Member': 'bg-gray-100 text-gray-800 border-gray-200',
    'Platinum Member': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  return (
    <Layout 
      title="My Stay Reports & History" 
      subtitle="Track your bookings, expenses, and loyalty rewards"
    >
      <div className="space-y-6">
        {/* Guest Overview Stats */}
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
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <p className="text-2xl font-bold text-blue-600">{guestStats.totalBookings}</p>
                  </div>
                  <FaCalendarAlt className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold text-green-600">${guestStats.totalSpent.toLocaleString()}</p>
                  </div>
                  <FaDollarSign className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold text-yellow-600">{guestStats.avgRating}⭐</p>
                  </div>
                  <FaStar className="text-yellow-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Loyalty Points</p>
                    <p className="text-2xl font-bold text-purple-600">{guestStats.loyaltyPoints.toLocaleString()}</p>
                  </div>
                  <FaUser className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Total Nights</p>
                    <p className="text-2xl font-bold text-indigo-600">{guestStats.stayNights}</p>
                  </div>
                  <FaBed className="text-indigo-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Referrals</p>
                    <p className="text-2xl font-bold text-orange-600">{guestStats.referralCount}</p>
                  </div>
                  <FaUser className="text-orange-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Booking Trends and Loyalty Status */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-2 text-primary" />
                Annual Booking Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={bookingHistory.map(item => ({ name: item.month, value: item.spent }))}
                title="Monthly Spending Pattern"
                color="#3b82f6"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaUser className="mr-2 text-primary" />
                Loyalty Program Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Badge className={tierColors[loyaltyProgram.tier as keyof typeof tierColors]}>
                    {loyaltyProgram.tier}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {loyaltyProgram.nextTierPoints - loyaltyProgram.currentPoints} points to next tier
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress to Platinum</span>
                    <span>{loyaltyProgram.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-purple-600 h-3 rounded-full"
                      style={{ width: `${loyaltyProgram.progress}%` }}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Current Benefits:</h4>
                  <div className="space-y-1">
                    {loyaltyProgram.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Available Rewards:</h4>
                  <div className="space-y-2">
                    {loyaltyProgram.earnedRewards.filter(r => r.available > 0).map((reward, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">{reward.reward}</span>
                        <Badge variant="secondary">{reward.available} available</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full gradient-primary text-white" data-testid="button-redeem-rewards">
                  Redeem Rewards
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Stays History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaHistory className="mr-2 text-primary" />
              Recent Stay History
            </CardTitle>
            <Button size="sm" variant="outline" data-testid="button-view-all-bookings">
              View All Bookings
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStays.map((stay, index) => (
                <motion.div
                  key={stay.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FaBed className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{stay.roomType}</h4>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{stay.checkIn} - {stay.checkOut}</span>
                        <span>•</span>
                        <span>Booking: {stay.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold">${stay.totalAmount}</div>
                      <div className="flex items-center text-sm">
                        {[...Array(stay.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                        <span className="ml-1 text-muted-foreground">({stay.rating}/5)</span>
                      </div>
                    </div>
                    <Badge className={statusColors[stay.status as keyof typeof statusColors]}>
                      {stay.status}
                    </Badge>
                    <Button size="sm" variant="outline" data-testid={`button-view-stay-${stay.id}`}>
                      <FaEye className="mr-1" />
                      Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Service Usage and Expense Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClipboardList className="mr-2 text-primary" />
                Service Usage Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceUsage.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        {service.service.includes('Room') && <FaBed className="text-blue-600 text-sm" />}
                        {service.service.includes('Restaurant') && <FaUtensils className="text-blue-600 text-sm" />}
                        {service.service.includes('Spa') && <FaStar className="text-blue-600 text-sm" />}
                        {service.service.includes('Gym') && <FaDumbbell className="text-blue-600 text-sm" />}
                        {service.service.includes('Laundry') && <FaClipboardList className="text-blue-600 text-sm" />}
                        {service.service.includes('Concierge') && <FaUser className="text-blue-600 text-sm" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{service.service}</h4>
                        <p className="text-xs text-muted-foreground">Last used: {service.lastUsed}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{service.orders} times</div>
                      <div className="text-xs text-muted-foreground">
                        {service.spent > 0 ? `$${service.spent}` : 'Complimentary'}
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
                <FaReceipt className="mr-2 text-primary" />
                Expense Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenseBreakdown.map((expense, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{expense.category}</span>
                      <span className="font-semibold">${expense.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${expense.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{expense.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <FaClipboardList className="mr-2 text-primary" />
              Available Personal Reports
            </CardTitle>
            <Button className="gradient-primary text-white" data-testid="button-request-report">
              Request Custom Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {availableReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{report.name}</h4>
                    <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                      {report.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span>Period: {report.period}</span> • <span>Type: {report.type}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" data-testid={`button-view-report-${index}`}>
                        <FaEye className="mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-download-report-${index}`}>
                        <FaDownload className="mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        {upcomingBookings.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                Upcoming Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{booking.roomType}</h4>
                      <Badge className={statusColors[booking.status as keyof typeof statusColors]}>
                        {booking.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center mb-1">
                          <FaCalendarAlt className="mr-2 text-primary" />
                          <span>{booking.checkIn} - {booking.checkOut}</span>
                        </div>
                        <div className="flex items-center">
                          <FaUser className="mr-2 text-primary" />
                          <span>{booking.guests} guest{booking.guests > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Booking ID: {booking.id}</div>
                        <div className="text-muted-foreground">Special: {booking.specialRequests}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-view-booking-${booking.id}`}>
                        <FaEye className="mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-modify-booking-${booking.id}`}>
                        Modify Booking
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Important Guest Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Guest Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Your Preferences</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Room:</strong> {preferences.roomPreferences.join(', ')}</div>
                  <div><strong>Dietary:</strong> {preferences.dietaryRestrictions.join(', ')}</div>
                  <div><strong>Special:</strong> {preferences.specialRequests.join(', ')}</div>
                  <div><strong>Communication:</strong> {preferences.communication.join(', ')}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Guest Services</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Concierge:</strong> +1 (555) 123-4567 Ext. 100</div>
                  <div><strong>Room Service:</strong> +1 (555) 123-4567 Ext. 200</div>
                  <div><strong>Guest Relations:</strong> +1 (555) 123-4567 Ext. 150</div>
                  <div><strong>Reservations:</strong> +1 (555) 123-ROOM</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Loyalty Benefits</h4>
                <div className="space-y-2 text-sm">
                  <div>• Current Tier: {loyaltyProgram.tier}</div>
                  <div>• Points Balance: {loyaltyProgram.currentPoints.toLocaleString()}</div>
                  <div>• Next Tier in: {loyaltyProgram.nextTierPoints - loyaltyProgram.currentPoints} points</div>
                  <div>• Member Since: 2022</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}