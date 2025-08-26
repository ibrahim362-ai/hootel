import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { FaUser, FaBell, FaShieldAlt, FaKey, FaSave, FaEdit, FaCamera, FaHeart, FaStar, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, FaHistory, FaEye, FaDownload, FaCrown, FaGift, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function UserProfile() {
  const guestProfile = {
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 987-6543",
    dateOfBirth: "1988-07-15",
    nationality: "American",
    passportNumber: "US123456789",
    loyaltyNumber: "LX-GOLD-8847",
    memberSince: "June 2020",
    address: {
      street: "456 Ocean Drive",
      city: "Miami",
      state: "FL",
      zipCode: "33139",
      country: "United States"
    },
    emergencyContact: {
      name: "Michael Rodriguez",
      relationship: "Spouse",
      phone: "+1 (555) 123-4567"
    }
  };

  const loyaltyInfo = {
    tier: "Gold Member",
    points: 12750,
    nextTierPoints: 25000,
    progress: 51,
    benefits: [
      "Room upgrades (subject to availability)",
      "Late checkout until 2 PM",
      "Complimentary WiFi and breakfast",
      "Priority reservation service",
      "15% discount on spa services",
      "Dedicated concierge support"
    ],
    earnedThisYear: 4250,
    spentThisYear: 8400,
    staysThisYear: 6
  };

  const preferences = {
    roomPreferences: {
      bedType: "King",
      floorLevel: "High floor",
      viewPreference: "Ocean view",
      smokingPreference: "Non-smoking",
      roomType: "Suite preferred"
    },
    diningPreferences: {
      dietaryRestrictions: ["Vegetarian", "No shellfish"],
      preferredCuisine: ["Italian", "Mediterranean"],
      allergies: ["Peanuts"],
      specialRequests: ["Quiet table", "Window seating"]
    },
    servicePreferences: {
      housekeeping: "Daily",
      turndownService: true,
      newspaperDelivery: "Wall Street Journal",
      wakeUpCalls: false,
      roomService: "Available 24/7"
    },
    communicationPreferences: {
      language: "English",
      contactMethod: "Email",
      newsletter: true,
      promotionalOffers: true,
      eventInvitations: true
    }
  };

  const notificationSettings = {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    bookingConfirmations: true,
    checkInReminders: true,
    specialOffers: true,
    loyaltyUpdates: true,
    eventInvitations: false,
    restaurantOffers: true,
    weatherUpdates: false
  };

  const securitySettings = {
    twoFactorAuth: true,
    loginAlerts: true,
    passwordExpiry: 180,
    sessionTimeout: 60,
    deviceTracking: false,
    dataSharing: false
  };

  const bookingHistory = [
    {
      bookingId: "BK-2025-001",
      checkIn: "Jan 20, 2025",
      checkOut: "Jan 22, 2025",
      roomType: "Ocean Suite",
      status: "Completed",
      total: 485,
      rating: 5,
      review: "Excellent service and beautiful ocean view!"
    },
    {
      bookingId: "BK-2024-156",
      checkIn: "Dec 15, 2024",
      checkOut: "Dec 17, 2024",
      roomType: "Deluxe Room",
      status: "Completed",
      total: 340,
      rating: 4,
      review: "Great location, friendly staff."
    },
    {
      bookingId: "BK-2024-142",
      checkIn: "Nov 8, 2024",
      checkOut: "Nov 10, 2024",
      roomType: "Premium Suite",
      status: "Completed",
      total: 615,
      rating: 5,
      review: "Perfect weekend getaway!"
    }
  ];

  const savedPaymentMethods = [
    {
      id: 1,
      type: "Visa",
      lastFour: "4567",
      expiry: "12/27",
      isDefault: true,
      name: "Emily Rodriguez"
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "8901",
      expiry: "08/26",
      isDefault: false,
      name: "Emily Rodriguez"
    }
  ];

  const upcomingBookings = [
    {
      bookingId: "BK-2025-008",
      checkIn: "Feb 14, 2025",
      checkOut: "Feb 16, 2025",
      roomType: "Romantic Suite",
      status: "Confirmed",
      total: 650,
      specialRequests: "Anniversary celebration, champagne service, late checkout"
    }
  ];

  const statusColors = {
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Confirmed': 'bg-blue-100 text-blue-800 border-blue-200',
    'Cancelled': 'bg-red-100 text-red-800 border-red-200'
  };

  const tierColors = {
    'Gold Member': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Silver Member': 'bg-gray-100 text-gray-800 border-gray-200',
    'Platinum Member': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  return (
    <Layout 
      title="Guest Profile & Settings" 
      subtitle="Manage your personal information, preferences, and booking settings"
    >
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {guestProfile.firstName.charAt(0)}{guestProfile.lastName.charAt(0)}
                </div>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  data-testid="button-change-photo"
                >
                  <FaCamera className="text-xs" />
                </Button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{guestProfile.firstName} {guestProfile.lastName}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={tierColors[loyaltyInfo.tier as keyof typeof tierColors]}>
                    <FaCrown className="mr-1" />
                    {loyaltyInfo.tier}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Member since {guestProfile.memberSince}</span>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <FaEnvelope className="mr-1" />
                    {guestProfile.email}
                  </span>
                  <span className="flex items-center">
                    <FaPhone className="mr-1" />
                    {guestProfile.phone}
                  </span>
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {guestProfile.address.city}, {guestProfile.address.state}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{loyaltyInfo.points.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Loyalty Points</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {(loyaltyInfo.nextTierPoints - loyaltyInfo.points).toLocaleString()} to Platinum
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="loyalty">Loyalty Program</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">Booking History</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaUser className="mr-2 text-primary" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        defaultValue={guestProfile.firstName}
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        defaultValue={guestProfile.lastName}
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={guestProfile.email}
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue={guestProfile.phone}
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date-of-birth">Date of Birth</Label>
                      <Input
                        id="date-of-birth"
                        type="date"
                        defaultValue={guestProfile.dateOfBirth}
                        data-testid="input-date-of-birth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input
                        id="nationality"
                        defaultValue={guestProfile.nationality}
                        data-testid="input-nationality"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="passport">Passport Number</Label>
                    <Input
                      id="passport"
                      defaultValue={guestProfile.passportNumber}
                      data-testid="input-passport"
                    />
                  </div>

                  <Button className="w-full gradient-primary text-white" data-testid="button-save-personal-info">
                    <FaSave className="mr-2" />
                    Save Personal Information
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    Address & Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="street">Street Address</Label>
                    <Input
                      id="street"
                      defaultValue={guestProfile.address.street}
                      data-testid="input-street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        defaultValue={guestProfile.address.city}
                        data-testid="input-city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        defaultValue={guestProfile.address.state}
                        data-testid="input-state"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        defaultValue={guestProfile.address.zipCode}
                        data-testid="input-zip"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue={guestProfile.address.country}>
                        <SelectTrigger data-testid="select-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Emergency Contact</h4>
                    <div>
                      <Label htmlFor="emergency-name">Contact Name</Label>
                      <Input
                        id="emergency-name"
                        defaultValue={guestProfile.emergencyContact.name}
                        data-testid="input-emergency-name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <Label htmlFor="emergency-relationship">Relationship</Label>
                        <Input
                          id="emergency-relationship"
                          defaultValue={guestProfile.emergencyContact.relationship}
                          data-testid="input-emergency-relationship"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergency-phone">Phone Number</Label>
                        <Input
                          id="emergency-phone"
                          defaultValue={guestProfile.emergencyContact.phone}
                          data-testid="input-emergency-phone"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" data-testid="button-save-contact-info">
                    <FaSave className="mr-2" />
                    Save Contact Information
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaHeart className="mr-2 text-primary" />
                    Room Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="bed-type">Bed Type</Label>
                    <Select defaultValue={preferences.roomPreferences.bedType}>
                      <SelectTrigger data-testid="select-bed-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="King">King Bed</SelectItem>
                        <SelectItem value="Queen">Queen Bed</SelectItem>
                        <SelectItem value="Twin">Twin Beds</SelectItem>
                        <SelectItem value="Sofa">Sofa Bed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="floor-level">Floor Level</Label>
                    <Select defaultValue={preferences.roomPreferences.floorLevel}>
                      <SelectTrigger data-testid="select-floor-level">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High floor">High Floor</SelectItem>
                        <SelectItem value="Mid floor">Mid Floor</SelectItem>
                        <SelectItem value="Low floor">Low Floor</SelectItem>
                        <SelectItem value="No preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="view-preference">View Preference</Label>
                    <Select defaultValue={preferences.roomPreferences.viewPreference}>
                      <SelectTrigger data-testid="select-view-preference">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ocean view">Ocean View</SelectItem>
                        <SelectItem value="City view">City View</SelectItem>
                        <SelectItem value="Garden view">Garden View</SelectItem>
                        <SelectItem value="No preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="room-type">Preferred Room Type</Label>
                    <Select defaultValue={preferences.roomPreferences.roomType}>
                      <SelectTrigger data-testid="select-room-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Standard room">Standard Room</SelectItem>
                        <SelectItem value="Deluxe room">Deluxe Room</SelectItem>
                        <SelectItem value="Suite preferred">Suite Preferred</SelectItem>
                        <SelectItem value="Penthouse">Penthouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smoking">Smoking Preference</Label>
                      <p className="text-sm text-muted-foreground">Non-smoking rooms preferred</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Non-smoking
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaHeart className="mr-2 text-primary" />
                    Dining & Service Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Dietary Restrictions</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {preferences.diningPreferences.dietaryRestrictions.map((restriction, index) => (
                        <Badge key={index} variant="secondary">
                          {restriction}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="mt-2" data-testid="button-edit-dietary">
                      <FaEdit className="mr-1" />
                      Edit Dietary Restrictions
                    </Button>
                  </div>

                  <div>
                    <Label>Preferred Cuisine</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {preferences.diningPreferences.preferredCuisine.map((cuisine, index) => (
                        <Badge key={index} variant="outline">
                          {cuisine}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="housekeeping">Housekeeping Frequency</Label>
                    <Select defaultValue={preferences.servicePreferences.housekeeping}>
                      <SelectTrigger data-testid="select-housekeeping">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Daily">Daily</SelectItem>
                        <SelectItem value="Every other day">Every Other Day</SelectItem>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="As needed">As Needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="turndown">Turndown Service</Label>
                        <p className="text-sm text-muted-foreground">Evening turndown service</p>
                      </div>
                      <Switch
                        id="turndown"
                        checked={preferences.servicePreferences.turndownService}
                        data-testid="switch-turndown"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="wakeup">Wake-up Calls</Label>
                        <p className="text-sm text-muted-foreground">Automated wake-up service</p>
                      </div>
                      <Switch
                        id="wakeup"
                        checked={preferences.servicePreferences.wakeUpCalls}
                        data-testid="switch-wakeup"
                      />
                    </div>
                  </div>

                  <Button className="w-full gradient-primary text-white" data-testid="button-save-preferences">
                    <FaSave className="mr-2" />
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Loyalty Program */}
          <TabsContent value="loyalty" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaCrown className="mr-2 text-primary" />
                    Loyalty Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <Badge className={tierColors[loyaltyInfo.tier as keyof typeof tierColors]} className="text-lg px-4 py-2">
                      <FaCrown className="mr-2" />
                      {loyaltyInfo.tier}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress to Platinum</span>
                        <span>{loyaltyInfo.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-purple-600 h-3 rounded-full"
                          style={{ width: `${loyaltyInfo.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {loyaltyInfo.nextTierPoints - loyaltyInfo.points} points to Platinum
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{loyaltyInfo.points.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Total Points</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{loyaltyInfo.earnedThisYear.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Earned This Year</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">${loyaltyInfo.spentThisYear.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Spent This Year</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-600">{loyaltyInfo.staysThisYear}</div>
                        <div className="text-sm text-muted-foreground">Stays This Year</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaGift className="mr-2 text-primary" />
                    Member Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {loyaltyInfo.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                    <h4 className="font-semibold mb-2">Platinum Benefits</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• Guaranteed room upgrades</div>
                      <div>• Complimentary spa credits</div>
                      <div>• Priority reservations at all restaurants</div>
                      <div>• Personal concierge service</div>
                      <div>• Late checkout until 4 PM</div>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="outline" data-testid="button-redeem-points">
                    <FaGift className="mr-2" />
                    Redeem Points
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaBell className="mr-2 text-primary" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Communication Methods</h4>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notif">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="email-notif"
                        checked={notificationSettings.emailNotifications}
                        data-testid="switch-email-notifications"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notif">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                      </div>
                      <Switch
                        id="sms-notif"
                        checked={notificationSettings.smsNotifications}
                        data-testid="switch-sms-notifications"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notif">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Browser and mobile app notifications</p>
                      </div>
                      <Switch
                        id="push-notif"
                        checked={notificationSettings.pushNotifications}
                        data-testid="switch-push-notifications"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Notification Types</h4>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="booking-confirmations">Booking Confirmations</Label>
                        <p className="text-sm text-muted-foreground">Reservation confirmations and updates</p>
                      </div>
                      <Switch
                        id="booking-confirmations"
                        checked={notificationSettings.bookingConfirmations}
                        data-testid="switch-booking-confirmations"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="checkin-reminders">Check-in Reminders</Label>
                        <p className="text-sm text-muted-foreground">Reminders before your arrival</p>
                      </div>
                      <Switch
                        id="checkin-reminders"
                        checked={notificationSettings.checkInReminders}
                        data-testid="switch-checkin-reminders"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="special-offers">Special Offers</Label>
                        <p className="text-sm text-muted-foreground">Exclusive deals and promotions</p>
                      </div>
                      <Switch
                        id="special-offers"
                        checked={notificationSettings.specialOffers}
                        data-testid="switch-special-offers"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="loyalty-updates">Loyalty Updates</Label>
                        <p className="text-sm text-muted-foreground">Points balance and tier updates</p>
                      </div>
                      <Switch
                        id="loyalty-updates"
                        checked={notificationSettings.loyaltyUpdates}
                        data-testid="switch-loyalty-updates"
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full gradient-primary text-white" data-testid="button-save-notifications">
                  <FaSave className="mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaShieldAlt className="mr-2 text-primary" />
                    Account Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor-guest">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                    <Switch
                      id="two-factor-guest"
                      checked={securitySettings.twoFactorAuth}
                      data-testid="switch-two-factor-guest"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="login-alerts-guest">Login Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                    </div>
                    <Switch
                      id="login-alerts-guest"
                      checked={securitySettings.loginAlerts}
                      data-testid="switch-login-alerts-guest"
                    />
                  </div>

                  <div>
                    <Label htmlFor="session-timeout-guest">Session Timeout (minutes)</Label>
                    <Input
                      id="session-timeout-guest"
                      type="number"
                      defaultValue={securitySettings.sessionTimeout.toString()}
                      data-testid="input-session-timeout-guest"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-sharing">Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">Share data with partners for offers</p>
                    </div>
                    <Switch
                      id="data-sharing"
                      checked={securitySettings.dataSharing}
                      data-testid="switch-data-sharing"
                    />
                  </div>

                  <Button className="w-full" variant="outline" data-testid="button-change-password-guest">
                    <FaKey className="mr-2" />
                    Change Password
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaCreditCard className="mr-2 text-primary" />
                    Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {savedPaymentMethods.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            <FaCreditCard className="text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{payment.type} •••• {payment.lastFour}</div>
                            <div className="text-sm text-muted-foreground">Expires {payment.expiry}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {payment.isDefault && (
                            <Badge variant="secondary">Default</Badge>
                          )}
                          <Button size="sm" variant="outline" data-testid={`button-edit-payment-${payment.id}`}>
                            <FaEdit className="mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline" data-testid="button-add-payment-method">
                    <FaCreditCard className="mr-2" />
                    Add New Payment Method
                  </Button>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Security Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Password Strength:</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Strong</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Login:</span>
                        <span className="font-medium">2 hours ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Sessions:</span>
                        <span className="font-medium">1 device</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Booking History */}
          <TabsContent value="history" className="space-y-6">
            <div className="grid gap-6">
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
                          key={booking.bookingId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{booking.roomType}</h4>
                            <Badge className={statusColors[booking.status as keyof typeof statusColors]}>
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                              <div><strong>Booking ID:</strong> {booking.bookingId}</div>
                              <div><strong>Check-in:</strong> {booking.checkIn}</div>
                              <div><strong>Check-out:</strong> {booking.checkOut}</div>
                            </div>
                            <div>
                              <div><strong>Total:</strong> ${booking.total}</div>
                              <div><strong>Special Requests:</strong></div>
                              <div className="text-muted-foreground">{booking.specialRequests}</div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" data-testid={`button-view-booking-${booking.bookingId}`}>
                              <FaEye className="mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline" data-testid={`button-modify-booking-${booking.bookingId}`}>
                              <FaEdit className="mr-1" />
                              Modify
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Past Bookings */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FaHistory className="mr-2 text-primary" />
                    Booking History
                  </CardTitle>
                  <Button size="sm" variant="outline" data-testid="button-download-history">
                    <FaDownload className="mr-2" />
                    Download History
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookingHistory.map((booking, index) => (
                      <motion.div
                        key={booking.bookingId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold">{booking.roomType}</h4>
                            <Badge className={statusColors[booking.status as keyof typeof statusColors]}>
                              {booking.status}
                            </Badge>
                            <div className="flex items-center text-yellow-500">
                              {[...Array(booking.rating)].map((_, i) => (
                                <FaStar key={i} className="text-xs" />
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                            <div>
                              <div>Booking: {booking.bookingId}</div>
                              <div>{booking.checkIn} - {booking.checkOut}</div>
                            </div>
                            <div>
                              <div>Total: ${booking.total}</div>
                              <div>Rating: {booking.rating}/5</div>
                            </div>
                          </div>
                          {booking.review && (
                            <p className="text-sm italic mt-2">"{booking.review}"</p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-view-details-${booking.bookingId}`}>
                            <FaEye className="mr-1" />
                            Details
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-rebook-${booking.bookingId}`}>
                            <FaCalendarAlt className="mr-1" />
                            Rebook
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Important Guest Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Guest Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Loyalty Program Benefits</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Current Tier:</strong> {loyaltyInfo.tier}</div>
                  <div><strong>Points Balance:</strong> {loyaltyInfo.points.toLocaleString()}</div>
                  <div><strong>Next Tier Requirement:</strong> {loyaltyInfo.nextTierPoints.toLocaleString()} points</div>
                  <div><strong>Member Since:</strong> {guestProfile.memberSince}</div>
                  <div><strong>Annual Benefits:</strong> Complimentary upgrades, priority service</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Guest Services</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Concierge:</strong> +1 (555) 123-4567 Ext. 100</div>
                  <div><strong>Room Service:</strong> +1 (555) 123-4567 Ext. 200</div>
                  <div><strong>Guest Relations:</strong> +1 (555) 123-4567 Ext. 150</div>
                  <div><strong>Reservations:</strong> +1 (555) 123-ROOM</div>
                  <div><strong>Loyalty Support:</strong> +1 (555) 123-GOLD</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Privacy & Security</h4>
                <div className="space-y-2 text-sm">
                  <div>• All personal data is encrypted and secure</div>
                  <div>• Payment information is PCI DSS compliant</div>
                  <div>• Guest preferences are stored confidentially</div>
                  <div>• Data sharing settings can be managed anytime</div>
                  <div>• Two-factor authentication recommended</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}