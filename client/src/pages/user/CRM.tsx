import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaGift, FaStar, FaCrown, FaCalendarAlt, FaDollarSign, FaHeart, FaUtensils, FaBed, FaDumbbell, FaSpa, FaPhone, FaEnvelope, FaHistory, FaAward } from 'react-icons/fa';

export default function UserCRM() {
  const userProfile = {
    name: "Sarah Johnson",
    memberSince: "March 2023",
    tier: "Gold Member",
    points: 3245,
    lifetimeSpent: 8940,
    visits: 24,
    nextTierPoints: 755
  };

  const availableRewards = [
    {
      id: 1,
      name: "Free Night Stay",
      points: 5000,
      value: 350,
      category: "Accommodation",
      icon: FaBed,
      description: "One complimentary night in a Deluxe Room",
      available: true
    },
    {
      id: 2,
      name: "Spa Treatment",
      points: 2500,
      value: 150,
      category: "Wellness",
      icon: FaSpa,
      description: "60-minute relaxation massage",
      available: true
    },
    {
      id: 3,
      name: "Restaurant Credit",
      points: 1000,
      value: 50,
      category: "Dining",
      icon: FaUtensils,
      description: "$50 credit for any hotel restaurant",
      available: true
    },
    {
      id: 4,
      name: "Fitness Class Pass",
      points: 500,
      value: 25,
      category: "Fitness",
      icon: FaDumbbell,
      description: "5 complimentary fitness classes",
      available: true
    },
    {
      id: 5,
      name: "VIP Airport Transfer",
      points: 3000,
      value: 120,
      category: "Transportation",
      icon: FaCrown,
      description: "Luxury vehicle airport pickup/drop-off",
      available: false
    },
    {
      id: 6,
      name: "Late Checkout",
      points: 300,
      value: 15,
      category: "Convenience",
      icon: FaCalendarAlt,
      description: "Checkout until 4:00 PM at no charge",
      available: true
    }
  ];

  const recentActivity = [
    {
      date: "Jan 18, 2025",
      activity: "Stayed 2 nights - Deluxe Suite",
      points: "+450 points",
      type: "earn"
    },
    {
      date: "Jan 15, 2025",
      activity: "Redeemed Spa Treatment",
      points: "-2,500 points",
      type: "redeem"
    },
    {
      date: "Jan 10, 2025",
      activity: "Restaurant dining - The Terrace",
      points: "+85 points",
      type: "earn"
    },
    {
      date: "Jan 5, 2025",
      activity: "Fitness center visits (3x)",
      points: "+30 points",
      type: "earn"
    },
    {
      date: "Dec 28, 2024",
      activity: "Holiday package booking",
      points: "+750 points",
      type: "earn"
    }
  ];

  const memberBenefits = [
    {
      title: "Priority Reservations",
      description: "Skip the waitlist with priority booking",
      icon: FaCalendarAlt,
      tier: "Silver+"
    },
    {
      title: "Complimentary WiFi",
      description: "High-speed internet in all areas",
      icon: FaPhone,
      tier: "All Members"
    },
    {
      title: "Late Checkout",
      description: "Checkout until 2:00 PM at no charge",
      icon: FaBed,
      tier: "Gold+"
    },
    {
      title: "Welcome Amenity",
      description: "Complimentary welcome drink or snack",
      icon: FaGift,
      tier: "All Members"
    },
    {
      title: "Birthday Bonus",
      description: "Special treats on your birthday month",
      icon: FaAward,
      tier: "Silver+"
    },
    {
      title: "Exclusive Events",
      description: "Access to member-only events",
      icon: FaCrown,
      tier: "Platinum"
    }
  ];

  const specialOffers = [
    {
      title: "Weekend Getaway Special",
      description: "30% off weekend stays + bonus points",
      validUntil: "Jan 31, 2025",
      code: "WEEKEND30",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Spa & Stay Package",
      description: "Book 2 nights, get spa credit included",
      validUntil: "Feb 14, 2025",
      code: "SPAWEEKEND",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Dining Rewards Bonus",
      description: "Earn double points on restaurant purchases",
      validUntil: "Feb 28, 2025",
      code: "DININGX2",
      color: "bg-green-50 border-green-200"
    }
  ];

  const tierProgress = {
    current: "Gold",
    next: "Platinum",
    currentPoints: userProfile.points,
    requiredPoints: 4000,
    progressPercentage: (userProfile.points / 4000) * 100
  };

  return (
    <Layout 
      title="Rewards & Loyalty Program" 
      subtitle="Track your points, redeem rewards, and enjoy exclusive member benefits"
    >
      <div className="space-y-6">
        {/* Member Profile Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <FaCrown className="text-yellow-500 mr-2 text-2xl" />
                    <Badge variant="secondary" className="text-lg px-4 py-2">{userProfile.tier}</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {userProfile.name}!</h2>
                  <p className="text-muted-foreground mb-4">Member since {userProfile.memberSince}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-bold text-primary">{userProfile.points.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Available Points</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-bold text-green-600">{userProfile.visits}</p>
                      <p className="text-sm text-muted-foreground">Total Visits</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Progress to {tierProgress.next}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>{tierProgress.currentPoints} points</span>
                      <span>{tierProgress.requiredPoints} points needed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                        style={{ width: `${tierProgress.progressPercentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {userProfile.nextTierPoints} more points to reach {tierProgress.next} status
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Available Rewards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaGift className="mr-2 text-primary" />
              Available Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRewards.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-lg border ${reward.available ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300 opacity-75'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <reward.icon className="text-2xl text-primary" />
                    <Badge variant="secondary">{reward.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reward.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Cost:</span>
                      <span className="font-semibold">{reward.points.toLocaleString()} points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Value:</span>
                      <span className="font-semibold">${reward.value}</span>
                    </div>
                    <Button 
                      className={`w-full ${reward.available ? 'gradient-primary text-white' : ''}`}
                      variant={reward.available ? "default" : "outline"}
                      disabled={!reward.available || userProfile.points < reward.points}
                      data-testid={`button-redeem-${reward.id}`}
                    >
                      {!reward.available ? "Coming Soon" : 
                       userProfile.points < reward.points ? "Insufficient Points" : "Redeem Now"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity and Special Offers */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaHistory className="mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.activity}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                    <span className={`text-sm font-medium ${activity.type === 'earn' ? 'text-green-600' : 'text-red-600'}`}>
                      {activity.points}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" data-testid="button-view-full-history">
                View Full History
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaStar className="mr-2 text-primary" />
                Special Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialOffers.map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-4 rounded-lg border ${offer.color}`}
                  >
                    <h4 className="font-semibold mb-2">{offer.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{offer.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">Code: </span>
                        <span className="text-sm font-mono font-semibold">{offer.code}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Valid until {offer.validUntil}</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3" data-testid={`button-use-offer-${index}`}>
                      Use This Offer
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Member Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaHeart className="mr-2 text-primary" />
              Your Member Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <Badge variant="secondary" className="text-xs">{benefit.tier}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Loyalty Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Loyalty Program Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Earning Points</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Room Stays:</span>
                    <span>10 points per $1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restaurant Dining:</span>
                    <span>5 points per $1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spa Services:</span>
                    <span>8 points per $1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fitness Classes:</span>
                    <span>25 points per class</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Membership Tiers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Silver (0-999 pts):</span>
                    <span>5% bonus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gold (1000-3999 pts):</span>
                    <span>10% bonus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platinum (4000+ pts):</span>
                    <span>15% bonus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Points Expire:</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support & Contact</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Loyalty Hotline:</strong> +1 (555) 123-4567 Ext. 5</div>
                  <div><strong>Email:</strong> loyalty@grandpalace.com</div>
                  <div><strong>Live Chat:</strong> Available 24/7</div>
                  <div><strong>Mobile App:</strong> Download for easy tracking</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}