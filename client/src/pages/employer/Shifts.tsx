import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaDollarSign, FaMapMarkerAlt, FaUser, FaCheckCircle, FaExclamationTriangle, FaPlus, FaEdit, FaEye, FaClipboardCheck, FaPhone, FaInfoCircle } from 'react-icons/fa';

export default function EmployerShifts() {
  const shiftStats = {
    totalHoursWeek: 40,
    hoursWorkedWeek: 32,
    scheduledToday: 8,
    overtimeHours: 2,
    shiftsThisMonth: 22
  };

  const currentShift = {
    date: "January 25, 2025",
    startTime: "8:00 AM",
    endTime: "4:00 PM",
    duration: "8 hours",
    department: "Housekeeping",
    location: "Main Building - Floors 3-5",
    supervisor: "Sarah Johnson",
    status: "in-progress",
    hoursWorked: 5.5,
    breaksTaken: 1,
    tasksCompleted: 4,
    clockInTime: "7:58 AM"
  };

  const weeklySchedule = [
    {
      date: "Mon, Jan 20",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      hours: 8,
      status: "completed",
      overtime: false,
      notes: "Regular shift"
    },
    {
      date: "Tue, Jan 21",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      hours: 8,
      status: "completed",
      overtime: false,
      notes: "Training session included"
    },
    {
      date: "Wed, Jan 22",
      startTime: "8:00 AM",
      endTime: "6:00 PM",
      department: "Housekeeping",
      hours: 10,
      status: "completed",
      overtime: true,
      notes: "Event preparation"
    },
    {
      date: "Thu, Jan 23",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      hours: 8,
      status: "completed",
      overtime: false,
      notes: "Regular shift"
    },
    {
      date: "Fri, Jan 24",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      hours: 8,
      status: "completed",
      overtime: false,
      notes: "End of week review"
    },
    {
      date: "Sat, Jan 25",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      hours: 8,
      status: "in-progress",
      overtime: false,
      notes: "Current shift"
    },
    {
      date: "Sun, Jan 26",
      startTime: "OFF",
      endTime: "OFF",
      department: "-",
      hours: 0,
      status: "scheduled",
      overtime: false,
      notes: "Day off"
    }
  ];

  const upcomingShifts = [
    {
      date: "Mon, Jan 27",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      location: "Main Building - Floors 2-4",
      supervisor: "Sarah Johnson",
      tasks: ["Room cleaning", "Inventory check"],
      specialNotes: "New employee training"
    },
    {
      date: "Tue, Jan 28",
      startTime: "8:00 AM",
      endTime: "4:00 PM",
      department: "Housekeeping",
      location: "Main Building - Floors 3-5",
      supervisor: "Sarah Johnson",
      tasks: ["Deep cleaning", "Maintenance support"],
      specialNotes: "VIP guest arrival"
    },
    {
      date: "Wed, Jan 29",
      startTime: "8:00 AM",
      endTime: "6:00 PM",
      department: "Events",
      location: "Conference Center",
      supervisor: "Robert Wilson",
      tasks: ["Event setup", "Coordination"],
      specialNotes: "Corporate event - overtime approved"
    }
  ];

  const timeOffRequests = [
    {
      id: "TO-2025-001",
      type: "Vacation",
      dates: "Feb 10-12, 2025",
      days: 3,
      status: "pending",
      submittedDate: "Jan 20, 2025",
      reason: "Family vacation"
    },
    {
      id: "TO-2025-002",
      type: "Sick Leave",
      dates: "Jan 15, 2025",
      days: 1,
      status: "approved",
      submittedDate: "Jan 15, 2025",
      reason: "Medical appointment"
    }
  ];

  const payrollSummary = {
    weeklyHours: 42,
    regularHours: 40,
    overtimeHours: 2,
    hourlyRate: 18,
    regularPay: 720,
    overtimePay: 54,
    totalPay: 774,
    deductions: 124,
    netPay: 650
  };

  const statusColors = {
    "completed": "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
    "scheduled": "bg-purple-100 text-purple-800 border-purple-200",
    "cancelled": "bg-red-100 text-red-800 border-red-200"
  };

  const requestStatusColors = {
    "approved": "bg-green-100 text-green-800 border-green-200",
    "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "denied": "bg-red-100 text-red-800 border-red-200"
  };

  return (
    <Layout 
      title="My Shifts & Schedule" 
      subtitle="View your work schedule, track time, and manage shift details"
    >
      <div className="space-y-6">
        {/* Shift Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Hours This Week</p>
                    <p className="text-2xl font-bold text-blue-600">{shiftStats.hoursWorkedWeek}/{shiftStats.totalHoursWeek}</p>
                  </div>
                  <FaClock className="text-blue-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Today's Hours</p>
                    <p className="text-2xl font-bold text-green-600">{shiftStats.scheduledToday}</p>
                  </div>
                  <FaCalendarAlt className="text-green-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Overtime Hours</p>
                    <p className="text-2xl font-bold text-orange-600">{shiftStats.overtimeHours}</p>
                  </div>
                  <FaExclamationTriangle className="text-orange-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Shifts This Month</p>
                    <p className="text-2xl font-bold text-purple-600">{shiftStats.shiftsThisMonth}</p>
                  </div>
                  <FaClipboardCheck className="text-purple-600 text-xl" />
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
                    <p className="text-sm text-muted-foreground">Weekly Pay</p>
                    <p className="text-2xl font-bold text-green-600">${payrollSummary.netPay}</p>
                  </div>
                  <FaDollarSign className="text-green-600 text-xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Current Shift and Payroll Summary */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClock className="mr-2 text-primary" />
                Current Shift Status
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
                  <h3 className="text-lg font-semibold">{currentShift.date}</h3>
                  <Badge className={statusColors[currentShift.status as keyof typeof statusColors]}>
                    {currentShift.status.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <FaClock className="mr-2 text-primary" />
                      <span>{currentShift.startTime} - {currentShift.endTime}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{currentShift.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <FaUser className="mr-2 text-primary" />
                      <span>{currentShift.supervisor}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Clock In: </span>
                      <span className="font-medium">{currentShift.clockInTime}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Hours Worked: </span>
                      <span className="font-medium">{currentShift.hoursWorked}h</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Tasks Done: </span>
                      <span className="font-medium">{currentShift.tasksCompleted}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="w-full gradient-primary text-white" data-testid="button-clock-out">
                    <FaClock className="mr-2" />
                    Clock Out
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1" data-testid="button-take-break">
                      Take Break
                    </Button>
                    <Button variant="outline" className="flex-1" data-testid="button-view-timesheet">
                      View Timesheet
                    </Button>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaDollarSign className="mr-2 text-primary" />
                Weekly Payroll Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Regular Hours:</span>
                      <span className="font-medium">{payrollSummary.regularHours}h</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Overtime Hours:</span>
                      <span className="font-medium">{payrollSummary.overtimeHours}h</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Hourly Rate:</span>
                      <span className="font-medium">${payrollSummary.hourlyRate}/hr</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Regular Pay:</span>
                      <span className="font-medium">${payrollSummary.regularPay}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Overtime Pay:</span>
                      <span className="font-medium">${payrollSummary.overtimePay}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Deductions:</span>
                      <span className="font-medium">-${payrollSummary.deductions}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Net Pay:</span>
                    <span className="text-2xl font-bold text-green-600">${payrollSummary.netPay}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" data-testid="button-view-paystub">
                  <FaEye className="mr-2" />
                  View Full Pay Stub
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" />
              This Week's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklySchedule.map((shift, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-center min-w-[100px]">
                      <div className="font-medium text-sm">{shift.date}</div>
                      <div className="text-xs text-muted-foreground">{shift.department}</div>
                    </div>
                    <div className="text-center min-w-[120px]">
                      <div className="font-medium text-sm">{shift.startTime} - {shift.endTime}</div>
                      <div className="text-xs text-muted-foreground">{shift.hours} hours</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{shift.notes}</div>
                      {shift.overtime && (
                        <Badge variant="outline" className="text-xs mt-1">Overtime</Badge>
                      )}
                    </div>
                  </div>
                  <Badge className={statusColors[shift.status as keyof typeof statusColors]}>
                    {shift.status}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Shifts and Time Off Requests */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                Upcoming Shifts
              </CardTitle>
              <Button size="sm" variant="outline" data-testid="button-view-full-schedule">
                View Full Schedule
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingShifts.map((shift, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{shift.date}</h4>
                      <span className="text-sm text-muted-foreground">{shift.startTime} - {shift.endTime}</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        <span>{shift.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-primary" />
                        <span>Supervisor: {shift.supervisor}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-muted-foreground">Tasks: </span>
                        <span>{shift.tasks.join(", ")}</span>
                      </div>
                      {shift.specialNotes && (
                        <div className="mt-2">
                          <Badge variant="outline" className="text-xs">
                            <FaInfoCircle className="mr-1" />
                            {shift.specialNotes}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <FaClipboardCheck className="mr-2 text-primary" />
                Time Off Requests
              </CardTitle>
              <Button size="sm" className="gradient-primary text-white" data-testid="button-request-time-off">
                <FaPlus className="mr-2" />
                New Request
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeOffRequests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-mono text-sm">{request.id}</span>
                        <h4 className="font-semibold">{request.type}</h4>
                      </div>
                      <Badge className={requestStatusColors[request.status as keyof typeof requestStatusColors]}>
                        {request.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-muted-foreground">Dates: </span>
                        <span className="font-medium">{request.dates}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">{request.days} day(s)</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Reason: </span>
                        <span>{request.reason}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Submitted: </span>
                        <span>{request.submittedDate}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-view-request-${request.id}`}>
                        <FaEye className="mr-1" />
                        View
                      </Button>
                      {request.status === 'pending' && (
                        <Button size="sm" variant="outline" data-testid={`button-edit-request-${request.id}`}>
                          <FaEdit className="mr-1" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Shift Information */}
        <Card>
          <CardHeader>
            <CardTitle>Important Shift Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Clock In/Out Policies</h4>
                <div className="space-y-2 text-sm">
                  <div>• Clock in within 5 minutes of shift start</div>
                  <div>• Take scheduled breaks as assigned</div>
                  <div>• Clock out only after supervisor approval</div>
                  <div>• Report any time discrepancies immediately</div>
                  <div>• Use time clock stations only</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Overtime & Pay</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Regular Rate:</span>
                    <span>${payrollSummary.hourlyRate}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overtime Rate:</span>
                    <span>${(payrollSummary.hourlyRate * 1.5).toFixed(2)}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overtime Threshold:</span>
                    <span>40 hours/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pay Frequency:</span>
                    <span>Bi-weekly</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Supervisor:</strong> +1 (555) 123-4567 Ext. 301</div>
                  <div><strong>HR Department:</strong> +1 (555) 123-4567 Ext. 201</div>
                  <div><strong>Payroll:</strong> +1 (555) 123-4567 Ext. 202</div>
                  <div><strong>Security:</strong> +1 (555) 123-4567 Ext. 911</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}