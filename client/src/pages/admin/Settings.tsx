import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { FaCog, FaUsers, FaShieldAlt, FaBell, FaDatabase, FaGlobe, FaKey, FaServer, FaEnvelope, FaSave, FaEdit, FaEye, FaTrash, FaPlus, FaUpload, FaDownload, FaSync, FaLock, FaWifi, FaCreditCard, FaChartLine, FaBuilding, FaCalendarAlt, FaFileAlt, FaExclamationTriangle } from 'react-icons/fa';
import DataTable from '@/components/tables/DataTable';

export default function AdminSettings() {
  const systemStats = {
    totalUsers: 247,
    activeUsers: 192,
    systemUptime: "99.8%",
    lastBackup: "2 hours ago",
    storageUsed: 67,
    apiCalls: 15420
  };

  const systemSettings = {
    hotelName: "Grand Luxury Hotel",
    timezone: "America/New_York",
    currency: "USD",
    language: "English",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12-hour",
    fiscalYearStart: "January",
    maxBookingDays: 365
  };

  const securitySettings = {
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordPolicy: "Strong",
    loginAttempts: 5,
    ipWhitelist: true,
    auditLogging: true,
    encryptionLevel: "AES-256",
    sslRequired: true
  };

  const notificationSettings = {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    bookingAlerts: true,
    systemAlerts: true,
    maintenanceAlerts: true,
    dailyReports: true,
    weeklyReports: true
  };

  const userRoles = [
    {
      id: 1,
      role: "Super Admin",
      users: 2,
      permissions: ["All Access", "User Management", "System Config", "Reports"],
      description: "Full system access and management",
      status: "active"
    },
    {
      id: 2,
      role: "Admin",
      users: 8,
      permissions: ["Dashboard", "Bookings", "Users", "Reports"],
      description: "Administrative access to hotel operations",
      status: "active"
    },
    {
      id: 3,
      role: "Manager",
      users: 15,
      permissions: ["Dashboard", "Bookings", "Staff", "Limited Reports"],
      description: "Department management and oversight",
      status: "active"
    },
    {
      id: 4,
      role: "Receptionist",
      users: 25,
      permissions: ["Bookings", "Guest Check-in/out", "Room Status"],
      description: "Front desk operations",
      status: "active"
    },
    {
      id: 5,
      role: "Housekeeping",
      users: 45,
      permissions: ["Room Status", "Task Management", "Inventory"],
      description: "Room maintenance and cleaning",
      status: "active"
    },
    {
      id: 6,
      role: "Guest",
      users: 152,
      permissions: ["Profile", "Bookings", "Services", "Bills"],
      description: "Guest access to hotel services",
      status: "active"
    }
  ];

  const integrations = [
    {
      name: "Payment Gateway",
      service: "Stripe",
      status: "connected",
      lastSync: "5 min ago",
      description: "Credit card processing and payments"
    },
    {
      name: "Email Service",
      service: "SendGrid",
      status: "connected",
      lastSync: "2 hours ago",
      description: "Automated email notifications"
    },
    {
      name: "SMS Service",
      service: "Twilio",
      status: "disconnected",
      lastSync: "Never",
      description: "SMS notifications and alerts"
    },
    {
      name: "Analytics",
      service: "Google Analytics",
      status: "connected",
      lastSync: "1 hour ago",
      description: "Website and booking analytics"
    },
    {
      name: "Property Management",
      service: "Opera PMS",
      status: "pending",
      lastSync: "24 hours ago",
      description: "External property management system"
    },
    {
      name: "Accounting",
      service: "QuickBooks",
      status: "connected",
      lastSync: "6 hours ago",
      description: "Financial data synchronization"
    }
  ];

  const systemLogs = [
    {
      timestamp: "2025-01-26 14:30:15",
      level: "INFO",
      component: "Authentication",
      message: "User admin@hotel.com logged in successfully",
      ip: "192.168.1.100"
    },
    {
      timestamp: "2025-01-26 14:25:08",
      level: "WARNING",
      component: "Payment Gateway",
      message: "Payment processing delayed - high volume",
      ip: "External"
    },
    {
      timestamp: "2025-01-26 14:20:45",
      level: "ERROR",
      component: "SMS Service",
      message: "Failed to send notification - service unavailable",
      ip: "Internal"
    },
    {
      timestamp: "2025-01-26 14:15:22",
      level: "INFO",
      component: "Database",
      message: "Automated backup completed successfully",
      ip: "Internal"
    },
    {
      timestamp: "2025-01-26 14:10:11",
      level: "INFO",
      component: "User Management",
      message: "New user registered: guest123@email.com",
      ip: "192.168.1.205"
    }
  ];

  const backupSettings = {
    autoBackup: true,
    frequency: "Daily",
    retention: 30,
    location: "AWS S3",
    encryption: true,
    lastBackup: "2025-01-26 12:00:00",
    backupSize: "2.4 GB",
    status: "Success"
  };

  const maintenanceSchedule = [
    {
      task: "Database Optimization",
      scheduled: "2025-01-27 02:00 AM",
      duration: "30 minutes",
      impact: "Minimal",
      status: "scheduled"
    },
    {
      task: "Security Updates",
      scheduled: "2025-01-28 01:00 AM",
      duration: "45 minutes",
      impact: "Low",
      status: "scheduled"
    },
    {
      task: "System Backup Cleanup",
      scheduled: "2025-01-30 03:00 AM",
      duration: "15 minutes",
      impact: "None",
      status: "scheduled"
    }
  ];

  const statusColors = {
    'connected': 'bg-green-100 text-green-800 border-green-200',
    'disconnected': 'bg-red-100 text-red-800 border-red-200',
    'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'active': 'bg-blue-100 text-blue-800 border-blue-200',
    'scheduled': 'bg-purple-100 text-purple-800 border-purple-200',
    'Success': 'bg-green-100 text-green-800 border-green-200'
  };

  const logLevelColors = {
    'INFO': 'bg-blue-100 text-blue-800 border-blue-200',
    'WARNING': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'ERROR': 'bg-red-100 text-red-800 border-red-200'
  };

  const roleColumns = [
    {
      key: 'role',
      label: 'Role Name',
      render: (value: string) => <span className="font-semibold">{value}</span>
    },
    {
      key: 'users',
      label: 'Users',
      render: (value: number) => value.toString()
    },
    {
      key: 'permissions',
      label: 'Key Permissions',
      render: (value: string[]) => (
        <div className="flex flex-wrap gap-1">
          {value.slice(0, 2).map((perm, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">{perm}</Badge>
          ))}
          {value.length > 2 && <Badge variant="outline" className="text-xs">+{value.length - 2}</Badge>}
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge className={statusColors[value as keyof typeof statusColors]}>
          {value}
        </Badge>
      )
    }
  ];

  const logColumns = [
    {
      key: 'timestamp',
      label: 'Time',
      render: (value: string) => <span className="text-xs font-mono">{value.split(' ')[1]}</span>
    },
    {
      key: 'level',
      label: 'Level',
      render: (value: string) => (
        <Badge className={logLevelColors[value as keyof typeof logLevelColors]}>
          {value}
        </Badge>
      )
    },
    {
      key: 'component',
      label: 'Component',
      render: (value: string) => <span className="font-medium">{value}</span>
    },
    {
      key: 'message',
      label: 'Message',
      render: (value: string) => <span className="text-sm">{value}</span>
    }
  ];

  return (
    <Layout 
      title="System Settings & Configuration" 
      subtitle="Manage hotel system settings, security, and integrations"
    >
      <div className="space-y-6">
        {/* System Overview Stats */}
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
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold text-blue-600">{systemStats.totalUsers}</p>
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
                    <p className="text-sm text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-green-600">{systemStats.activeUsers}</p>
                  </div>
                  <FaUsers className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">System Uptime</p>
                    <p className="text-2xl font-bold text-purple-600">{systemStats.systemUptime}</p>
                  </div>
                  <FaServer className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Last Backup</p>
                    <p className="text-2xl font-bold text-orange-600 text-sm">{systemStats.lastBackup}</p>
                  </div>
                  <FaDatabase className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Storage Used</p>
                    <p className="text-2xl font-bold text-indigo-600">{systemStats.storageUsed}%</p>
                  </div>
                  <FaDatabase className="text-indigo-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">API Calls</p>
                    <p className="text-2xl font-bold text-yellow-600">{systemStats.apiCalls.toLocaleString()}</p>
                  </div>
                  <FaGlobe className="text-yellow-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="users">User Roles</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaCog className="mr-2 text-primary" />
                    Basic System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hotel-name">Hotel Name</Label>
                      <Input
                        id="hotel-name"
                        value={systemSettings.hotelName}
                        data-testid="input-hotel-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue={systemSettings.timezone}>
                        <SelectTrigger data-testid="select-timezone">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time</SelectItem>
                          <SelectItem value="America/Chicago">Central Time</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue={systemSettings.currency}>
                        <SelectTrigger data-testid="select-currency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD - US Dollar</SelectItem>
                          <SelectItem value="EUR">EUR - Euro</SelectItem>
                          <SelectItem value="GBP">GBP - British Pound</SelectItem>
                          <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Default Language</Label>
                      <Select defaultValue={systemSettings.language}>
                        <SelectTrigger data-testid="select-language">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                          <SelectItem value="French">French</SelectItem>
                          <SelectItem value="German">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue={systemSettings.dateFormat}>
                        <SelectTrigger data-testid="select-date-format">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="max-booking">Max Booking Days</Label>
                      <Input
                        id="max-booking"
                        type="number"
                        value={systemSettings.maxBookingDays}
                        data-testid="input-max-booking-days"
                      />
                    </div>
                  </div>

                  <Button className="w-full gradient-primary text-white" data-testid="button-save-general-settings">
                    <FaSave className="mr-2" />
                    Save General Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaBell className="mr-2 text-primary" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive email alerts and updates</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={notificationSettings.emailNotifications}
                        data-testid="switch-email-notifications"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                      </div>
                      <Switch
                        id="sms-notifications"
                        checked={notificationSettings.smsNotifications}
                        data-testid="switch-sms-notifications"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="booking-alerts">Booking Alerts</Label>
                        <p className="text-sm text-muted-foreground">New booking notifications</p>
                      </div>
                      <Switch
                        id="booking-alerts"
                        checked={notificationSettings.bookingAlerts}
                        data-testid="switch-booking-alerts"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="system-alerts">System Alerts</Label>
                        <p className="text-sm text-muted-foreground">Critical system notifications</p>
                      </div>
                      <Switch
                        id="system-alerts"
                        checked={notificationSettings.systemAlerts}
                        data-testid="switch-system-alerts"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="daily-reports">Daily Reports</Label>
                        <p className="text-sm text-muted-foreground">Automated daily summary reports</p>
                      </div>
                      <Switch
                        id="daily-reports"
                        checked={notificationSettings.dailyReports}
                        data-testid="switch-daily-reports"
                      />
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" data-testid="button-save-notification-settings">
                    <FaSave className="mr-2" />
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaShieldAlt className="mr-2 text-primary" />
                    Security Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                    </div>
                    <Switch
                      id="two-factor"
                      checked={securitySettings.twoFactorAuth}
                      data-testid="switch-two-factor"
                    />
                  </div>

                  <div>
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input
                      id="session-timeout"
                      type="number"
                      value={securitySettings.sessionTimeout}
                      data-testid="input-session-timeout"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password-policy">Password Policy</Label>
                    <Select defaultValue={securitySettings.passwordPolicy}>
                      <SelectTrigger data-testid="select-password-policy">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Basic">Basic - 8 characters</SelectItem>
                        <SelectItem value="Strong">Strong - 12 chars, mixed case, numbers</SelectItem>
                        <SelectItem value="Complex">Complex - 16 chars, symbols required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="login-attempts">Max Login Attempts</Label>
                    <Input
                      id="login-attempts"
                      type="number"
                      value={securitySettings.loginAttempts}
                      data-testid="input-login-attempts"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="audit-logging">Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">Log all user actions</p>
                    </div>
                    <Switch
                      id="audit-logging"
                      checked={securitySettings.auditLogging}
                      data-testid="switch-audit-logging"
                    />
                  </div>

                  <Button className="w-full gradient-primary text-white" data-testid="button-save-security-settings">
                    <FaLock className="mr-2" />
                    Save Security Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaDatabase className="mr-2 text-primary" />
                    Backup & Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Auto Backup</Label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Switch checked={backupSettings.autoBackup} data-testid="switch-auto-backup" />
                        <span className="text-sm">Enabled</span>
                      </div>
                    </div>
                    <div>
                      <Label>Frequency</Label>
                      <Select defaultValue={backupSettings.frequency}>
                        <SelectTrigger data-testid="select-backup-frequency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Hourly">Hourly</SelectItem>
                          <SelectItem value="Daily">Daily</SelectItem>
                          <SelectItem value="Weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Last Backup:</span>
                      <Badge className={statusColors[backupSettings.status as keyof typeof statusColors]}>
                        {backupSettings.lastBackup}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Backup Size:</span>
                      <span className="text-sm font-medium">{backupSettings.backupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Storage Location:</span>
                      <span className="text-sm font-medium">{backupSettings.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Retention Period:</span>
                      <span className="text-sm font-medium">{backupSettings.retention} days</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" variant="outline" data-testid="button-manual-backup">
                      <FaDatabase className="mr-2" />
                      Start Manual Backup
                    </Button>
                    <Button className="w-full" variant="outline" data-testid="button-restore-backup">
                      <FaUpload className="mr-2" />
                      Restore from Backup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* User Roles */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <FaUsers className="mr-2 text-primary" />
                  User Roles & Permissions
                </CardTitle>
                <Button className="gradient-primary text-white" data-testid="button-add-role">
                  <FaPlus className="mr-2" />
                  Add New Role
                </Button>
              </CardHeader>
              <CardContent>
                <DataTable
                  title=""
                  data={userRoles}
                  columns={roleColumns}
                  searchable={true}
                  exportable={true}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaGlobe className="mr-2 text-primary" />
                  External Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 bg-gray-50 rounded-lg border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{integration.name}</h4>
                        <Badge className={statusColors[integration.status as keyof typeof statusColors]}>
                          {integration.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>Service: {integration.service}</span>
                        <span>Last sync: {integration.lastSync}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" data-testid={`button-configure-${integration.name.toLowerCase()}`}>
                          <FaCog className="mr-1" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline" data-testid={`button-sync-${integration.name.toLowerCase()}`}>
                          <FaSync className="mr-1" />
                          Sync
                        </Button>
                        {integration.status === 'connected' && (
                          <Button size="sm" variant="outline" data-testid={`button-test-${integration.name.toLowerCase()}`}>
                            <FaEye className="mr-1" />
                            Test
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Maintenance */}
          <TabsContent value="maintenance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaServer className="mr-2 text-primary" />
                  Scheduled Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold">{task.task}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Scheduled: {task.scheduled}</span>
                          <span>Duration: {task.duration}</span>
                          <span>Impact: {task.impact}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={statusColors[task.status as keyof typeof statusColors]}>
                          {task.status}
                        </Badge>
                        <Button size="sm" variant="outline" data-testid={`button-edit-maintenance-${index}`}>
                          <FaEdit className="mr-1" />
                          Edit
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className="w-full mt-4 gradient-primary text-white" data-testid="button-schedule-maintenance">
                  <FaCalendarAlt className="mr-2" />
                  Schedule New Maintenance
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Logs */}
          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <FaFileAlt className="mr-2 text-primary" />
                  System Activity Logs
                </CardTitle>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" data-testid="button-export-logs">
                    <FaDownload className="mr-2" />
                    Export Logs
                  </Button>
                  <Button size="sm" variant="outline" data-testid="button-clear-logs">
                    <FaTrash className="mr-2" />
                    Clear Logs
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <DataTable
                  title=""
                  data={systemLogs}
                  columns={logColumns}
                  searchable={true}
                  exportable={true}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Important System Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">System Requirements</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Database:</strong> PostgreSQL 13+</div>
                  <div><strong>Storage:</strong> Minimum 50GB available</div>
                  <div><strong>Memory:</strong> 8GB RAM recommended</div>
                  <div><strong>Backup:</strong> Daily automated backups</div>
                  <div><strong>SSL:</strong> Required for production</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support & Maintenance</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Technical Support:</strong> +1 (555) 123-TECH</div>
                  <div><strong>Emergency Support:</strong> +1 (555) 911-HELP</div>
                  <div><strong>Maintenance Window:</strong> 1-4 AM EST</div>
                  <div><strong>Update Schedule:</strong> Monthly security patches</div>
                  <div><strong>SLA:</strong> 99.9% uptime guarantee</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Security & Compliance</h4>
                <div className="space-y-2 text-sm">
                  <div>• PCI DSS compliant payment processing</div>
                  <div>• GDPR compliant data handling</div>
                  <div>• SOC 2 Type II certified infrastructure</div>
                  <div>• Regular security audits and penetration testing</div>
                  <div>• All data encrypted in transit and at rest</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}