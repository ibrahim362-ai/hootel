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
import { FaUser, FaBell, FaShieldAlt, FaKey, FaSave, FaEdit, FaCamera, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaAward, FaClock, FaChartLine, FaHistory, FaEye, FaDownload, FaCog, FaUsers, FaTasks } from 'react-icons/fa';
import styles from '@/styles/modern.module.css';

export default function EmployerSettings() {
  const employeeProfile = {
    employeeId: "EMP-2024-156",
    firstName: "John",
    lastName: "Anderson",
    email: "john.anderson@hotel.com",
    phone: "+1 (555) 123-4567",
    department: "Housekeeping",
    position: "Senior Housekeeper",
    manager: "Sarah Johnson",
    hireDate: "March 15, 2022",
    employmentType: "Full-time",
    workLocation: "Main Building",
    emergencyContact: {
      name: "Jane Anderson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543"
    },
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    }
  };

  const workPreferences = {
    preferredShifts: ["Morning", "Afternoon"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    maxHoursPerWeek: 40,
    overtimeAvailable: true,
    workFromHome: false,
    flexibleSchedule: true,
    skills: ["Room Cleaning", "Inventory Management", "Customer Service", "Training"],
    certifications: ["CPR Certified", "Safety Training", "Hotel Operations"]
  };

  const notificationSettings = {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    shiftReminders: true,
    taskUpdates: true,
    scheduleChanges: true,
    payrollNotifications: true,
    generalAnnouncements: false
  };

  const securitySettings = {
    twoFactorAuth: false,
    loginAlerts: true,
    passwordExpiry: 90,
    sessionTimeout: 30,
    deviceTracking: true
  };

  const performanceStats = {
    tasksCompleted: 1247,
    averageRating: 4.7,
    onTimeRate: 96,
    trainingHours: 45,
    attendanceRate: 98,
    customerRating: 4.8
  };

  const recentActivity = [
    {
      date: "2025-01-26",
      action: "Completed room cleaning tasks",
      details: "Rooms 301-305 cleaned and inspected",
      time: "14:30"
    },
    {
      date: "2025-01-25",
      action: "Attended safety training session",
      details: "Fire safety and emergency procedures",
      time: "10:00"
    },
    {
      date: "2025-01-24",
      action: "Updated task completion report",
      details: "Weekly housekeeping summary submitted",
      time: "16:45"
    },
    {
      date: "2025-01-23",
      action: "Received customer commendation",
      details: "Guest praised room cleanliness",
      time: "12:15"
    }
  ];

  const achievements = [
    {
      title: "Employee of the Month",
      date: "December 2024",
      description: "Outstanding performance and guest satisfaction",
      badge: "Gold"
    },
    {
      title: "Perfect Attendance",
      date: "Q4 2024",
      description: "100% attendance rate for the quarter",
      badge: "Silver"
    },
    {
      title: "Safety Champion",
      date: "November 2024",
      description: "Zero safety incidents for 6 months",
      badge: "Bronze"
    },
    {
      title: "Training Mentor",
      date: "October 2024",
      description: "Successfully trained 3 new team members",
      badge: "Gold"
    }
  ];

  const upcomingSchedule = [
    {
      date: "2025-01-27",
      shift: "Morning Shift",
      time: "8:00 AM - 4:00 PM",
      location: "Main Building - Floors 3-5",
      tasks: 8
    },
    {
      date: "2025-01-28",
      shift: "Morning Shift", 
      time: "8:00 AM - 4:00 PM",
      location: "Main Building - Floors 6-8",
      tasks: 6
    },
    {
      date: "2025-01-29",
      shift: "Afternoon Shift",
      time: "2:00 PM - 10:00 PM",
      location: "Conference Center",
      tasks: 4
    }
  ];

  const badgeColors = {
    'Gold': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Silver': 'bg-gray-100 text-gray-800 border-gray-200',
    'Bronze': 'bg-orange-100 text-orange-800 border-orange-200'
  };

  return (
    <Layout 
      title="Employee Settings & Profile" 
      subtitle="Manage your personal information, work preferences, and account settings"
    >
      <div className="space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className={`${styles.modernCard} ${styles.gradientPrimary}`}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-white to-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                    {employeeProfile.firstName.charAt(0)}{employeeProfile.lastName.charAt(0)}
                  </div>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-white text-blue-600 hover:bg-blue-50"
                    data-testid="button-change-photo"
                  >
                    <FaCamera className="text-xs" />
                  </Button>
                </div>
                <div className="flex-1 text-white">
                  <h2 className="text-2xl font-bold">{employeeProfile.firstName} {employeeProfile.lastName}</h2>
                  <p className="text-lg text-blue-100">{employeeProfile.position}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-blue-100">
                    <span className="flex items-center">
                      <FaBriefcase className="mr-1" />
                      {employeeProfile.department}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      Since {employeeProfile.hireDate}
                    </span>
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {employeeProfile.workLocation}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center text-white">
                  <div className={`${styles.glassCard} p-4`}>
                    <div className="text-2xl font-bold text-yellow-300">{performanceStats.averageRating}</div>
                    <div className="text-sm text-blue-100">Avg Rating</div>
                  </div>
                  <div className={`${styles.glassCard} p-4`}>
                    <div className="text-2xl font-bold text-green-300">{performanceStats.onTimeRate}%</div>
                    <div className="text-sm text-blue-100">On Time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-blue-200">
            <TabsTrigger value="personal" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Personal Info</TabsTrigger>
            <TabsTrigger value="work" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Work Preferences</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Notifications</TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Security</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Performance</TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Schedule</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <FaUser className="mr-2" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          defaultValue={employeeProfile.firstName}
                          className={styles.modernInput}
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          defaultValue={employeeProfile.lastName}
                          className={styles.modernInput}
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={employeeProfile.email}
                        className={styles.modernInput}
                        data-testid="input-email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue={employeeProfile.phone}
                        className={styles.modernInput}
                        data-testid="input-phone"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Employee ID</Label>
                        <Input
                          value={employeeProfile.employeeId}
                          disabled
                          className="bg-gray-100"
                          data-testid="input-employee-id"
                        />
                      </div>
                      <div>
                        <Label>Hire Date</Label>
                        <Input
                          value={employeeProfile.hireDate}
                          disabled
                          className="bg-gray-100"
                          data-testid="input-hire-date"
                        />
                      </div>
                    </div>

                    <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`} data-testid="button-save-personal-info">
                      <FaSave className="mr-2" />
                      Save Personal Information
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <FaMapMarkerAlt className="mr-2" />
                      Address & Emergency Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="street">Street Address</Label>
                      <Input
                        id="street"
                        defaultValue={employeeProfile.address.street}
                        className={styles.modernInput}
                        data-testid="input-street"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          defaultValue={employeeProfile.address.city}
                          className={styles.modernInput}
                          data-testid="input-city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          defaultValue={employeeProfile.address.state}
                          className={styles.modernInput}
                          data-testid="input-state"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          defaultValue={employeeProfile.address.zipCode}
                          className={styles.modernInput}
                          data-testid="input-zip"
                        />
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3 text-blue-600">Emergency Contact</h4>
                      <div>
                        <Label htmlFor="emergency-name">Contact Name</Label>
                        <Input
                          id="emergency-name"
                          defaultValue={employeeProfile.emergencyContact.name}
                          className={styles.modernInput}
                          data-testid="input-emergency-name"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <Label htmlFor="emergency-relationship">Relationship</Label>
                          <Input
                            id="emergency-relationship"
                            defaultValue={employeeProfile.emergencyContact.relationship}
                            className={styles.modernInput}
                            data-testid="input-emergency-relationship"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergency-phone">Phone Number</Label>
                          <Input
                            id="emergency-phone"
                            defaultValue={employeeProfile.emergencyContact.phone}
                            className={styles.modernInput}
                            data-testid="input-emergency-phone"
                          />
                        </div>
                      </div>
                    </div>

                    <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full`} data-testid="button-save-contact-info">
                      <FaSave className="mr-2" />
                      Save Contact Information
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Work Preferences */}
          <TabsContent value="work" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <FaClock className="mr-2" />
                      Schedule Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Preferred Shifts</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Morning", "Afternoon", "Evening", "Night"].map((shift) => (
                          <Badge
                            key={shift}
                            variant={workPreferences.preferredShifts.includes(shift) ? "default" : "outline"}
                            className={`cursor-pointer ${workPreferences.preferredShifts.includes(shift) ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
                          >
                            {shift}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Available Days</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <Badge
                            key={day}
                            variant={workPreferences.availableDays.includes(day) ? "default" : "outline"}
                            className={`cursor-pointer ${workPreferences.availableDays.includes(day) ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
                          >
                            {day.slice(0, 3)}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="max-hours">Max Hours Per Week</Label>
                      <Input
                        id="max-hours"
                        type="number"
                        defaultValue={workPreferences.maxHoursPerWeek.toString()}
                        className={styles.modernInput}
                        data-testid="input-max-hours"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <Label htmlFor="overtime">Overtime Available</Label>
                          <p className="text-sm text-muted-foreground">Available for overtime work</p>
                        </div>
                        <Switch
                          id="overtime"
                          checked={workPreferences.overtimeAvailable}
                          data-testid="switch-overtime"
                        />
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <Label htmlFor="flexible">Flexible Schedule</Label>
                          <p className="text-sm text-muted-foreground">Open to schedule changes</p>
                        </div>
                        <Switch
                          id="flexible"
                          checked={workPreferences.flexibleSchedule}
                          data-testid="switch-flexible"
                        />
                      </div>
                    </div>

                    <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`} data-testid="button-save-schedule-preferences">
                      <FaSave className="mr-2" />
                      Save Schedule Preferences
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className={styles.modernCard}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <FaAward className="mr-2" />
                      Skills & Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {workPreferences.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="mt-2" data-testid="button-add-skill">
                        <FaEdit className="mr-1" />
                        Edit Skills
                      </Button>
                    </div>

                    <div>
                      <Label>Certifications</Label>
                      <div className="space-y-2 mt-2">
                        {workPreferences.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                            <span className="text-sm font-medium">{cert}</span>
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                              Active
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="mt-2" data-testid="button-add-certification">
                        <FaEdit className="mr-1" />
                        Manage Certifications
                      </Button>
                    </div>

                    <div>
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Brief description of your experience and expertise..."
                        className="mt-2 border-blue-200 focus:border-blue-500"
                        data-testid="textarea-bio"
                      />
                    </div>

                    <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full`} data-testid="button-save-professional-info">
                      <FaSave className="mr-2" />
                      Save Professional Information
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className={styles.modernCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <FaBell className="mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600">Communication Methods</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
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

                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
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

                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
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
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600">Notification Types</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div>
                          <Label htmlFor="shift-reminders">Shift Reminders</Label>
                          <p className="text-sm text-muted-foreground">Upcoming shift notifications</p>
                        </div>
                        <Switch
                          id="shift-reminders"
                          checked={notificationSettings.shiftReminders}
                          data-testid="switch-shift-reminders"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div>
                          <Label htmlFor="task-updates">Task Updates</Label>
                          <p className="text-sm text-muted-foreground">New task assignments and updates</p>
                        </div>
                        <Switch
                          id="task-updates"
                          checked={notificationSettings.taskUpdates}
                          data-testid="switch-task-updates"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <Label htmlFor="schedule-changes">Schedule Changes</Label>
                          <p className="text-sm text-muted-foreground">Changes to your work schedule</p>
                        </div>
                        <Switch
                          id="schedule-changes"
                          checked={notificationSettings.scheduleChanges}
                          data-testid="switch-schedule-changes"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div>
                          <Label htmlFor="payroll-notif">Payroll Notifications</Label>
                          <p className="text-sm text-muted-foreground">Pay stubs and payroll updates</p>
                        </div>
                        <Switch
                          id="payroll-notif"
                          checked={notificationSettings.payrollNotifications}
                          data-testid="switch-payroll-notifications"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button className={`${styles.modernButton} ${styles.buttonPrimary} w-full`} data-testid="button-save-notifications">
                  <FaSave className="mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <FaShieldAlt className="mr-2" />
                    Account Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <Label htmlFor="two-factor-emp">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                    <Switch
                      id="two-factor-emp"
                      checked={securitySettings.twoFactorAuth}
                      data-testid="switch-two-factor-employee"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <Label htmlFor="login-alerts-emp">Login Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                    </div>
                    <Switch
                      id="login-alerts-emp"
                      checked={securitySettings.loginAlerts}
                      data-testid="switch-login-alerts"
                    />
                  </div>

                  <div>
                    <Label htmlFor="session-timeout-emp">Session Timeout (minutes)</Label>
                    <Input
                      id="session-timeout-emp"
                      type="number"
                      defaultValue={securitySettings.sessionTimeout.toString()}
                      className={styles.modernInput}
                      data-testid="input-session-timeout-employee"
                    />
                  </div>

                  <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full`} data-testid="button-change-password">
                    <FaKey className="mr-2" />
                    Change Password
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <FaKey className="mr-2" />
                    Password & Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Password Strength:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Strong</Badge>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Last Changed:</span>
                      <span className="text-sm">45 days ago</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Password Expires:</span>
                      <span className="text-sm">45 days</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Active Sessions:</span>
                      <span className="text-sm">2 devices</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-blue-600">Recent Login Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-blue-50 rounded">
                        <span>Desktop - Chrome</span>
                        <span className="text-muted-foreground">2 hours ago</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Mobile - Safari</span>
                        <span className="text-muted-foreground">Yesterday</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Desktop - Firefox</span>
                        <span className="text-muted-foreground">3 days ago</span>
                      </div>
                    </div>
                  </div>

                  <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full`} data-testid="button-view-security-log">
                    <FaEye className="mr-2" />
                    View Full Security Log
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <FaChartLine className="mr-2" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">{performanceStats.tasksCompleted}</div>
                      <div className="text-sm text-muted-foreground">Tasks Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">{performanceStats.averageRating}</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">{performanceStats.onTimeRate}%</div>
                      <div className="text-sm text-muted-foreground">On-Time Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600">{performanceStats.attendanceRate}%</div>
                      <div className="text-sm text-muted-foreground">Attendance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.modernCard}>
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <FaAward className="mr-2" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-blue-200"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          <span className="text-xs text-blue-600">{achievement.date}</span>
                        </div>
                        <Badge className={badgeColors[achievement.badge as keyof typeof badgeColors]}>
                          {achievement.badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full mt-3`} data-testid="button-view-all-achievements">
                    <FaEye className="mr-2" />
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className={styles.modernCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <FaHistory className="mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent rounded-r-lg"
                    >
                      <div>
                        <h4 className="font-medium text-blue-800">{activity.action}</h4>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{activity.date}</div>
                        <div className="font-medium text-blue-600">{activity.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className={`${styles.modernButton} ${styles.buttonSecondary} w-full mt-4`} data-testid="button-download-activity-report">
                  <FaDownload className="mr-2" />
                  Download Activity Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className={styles.modernCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <FaCalendarAlt className="mr-2" />
                  Upcoming Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSchedule.map((shift, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`p-4 ${styles.gradientPrimary} rounded-lg border text-white`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{shift.shift}</h4>
                        <Badge variant="outline" className="bg-white/20 text-white border-white/30">{shift.tasks} tasks</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex items-center mb-1">
                            <FaCalendarAlt className="mr-2 text-blue-200" />
                            <span>{shift.date}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-2 text-blue-200" />
                            <span>{shift.time}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-blue-200" />
                            <span>{shift.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex space-x-2 mt-6">
                  <Button className={`${styles.modernButton} ${styles.buttonPrimary} flex-1`} data-testid="button-view-full-schedule">
                    <FaCalendarAlt className="mr-2" />
                    View Full Schedule
                  </Button>
                  <Button className={`${styles.modernButton} ${styles.buttonSecondary} flex-1`} data-testid="button-request-time-off">
                    <FaCalendarAlt className="mr-2" />
                    Request Time Off
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Important Employee Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className={styles.modernCard}>
            <CardHeader>
              <CardTitle className="text-blue-600">Important Employee Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-3 text-blue-800">Employment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Department:</strong> {employeeProfile.department}</div>
                    <div><strong>Position:</strong> {employeeProfile.position}</div>
                    <div><strong>Manager:</strong> {employeeProfile.manager}</div>
                    <div><strong>Employment Type:</strong> {employeeProfile.employmentType}</div>
                    <div><strong>Work Location:</strong> {employeeProfile.workLocation}</div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-3 text-green-800">Important Contacts</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>HR Department:</strong> +1 (555) 123-4567 Ext. 201</div>
                    <div><strong>Payroll:</strong> +1 (555) 123-4567 Ext. 250</div>
                    <div><strong>IT Support:</strong> +1 (555) 123-TECH</div>
                    <div><strong>Employee Assistance:</strong> +1 (555) 987-HELP</div>
                    <div><strong>Direct Manager:</strong> {employeeProfile.manager}</div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-3 text-purple-800">Benefits & Resources</h4>
                  <div className="space-y-2 text-sm">
                    <div>• Health insurance enrollment available</div>
                    <div>• 401(k) retirement plan with company match</div>
                    <div>• Paid time off and sick leave</div>
                    <div>• Employee training and development programs</div>
                    <div>• Employee assistance program (EAP) available</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}