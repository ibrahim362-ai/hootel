import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  Dumbbell,
  Calendar,
  Clock,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye,
} from "lucide-react";
import { FaDumbbell, FaRunning, FaSwimmer, FaHeartbeat, FaUsers } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DataTable from "@/components/tables/DataTable";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import type { GymMembership } from "@shared/schema";

const classTypeIcons = {
  cardio: FaRunning,
  strength: FaDumbbell,
  swimming: FaSwimmer,
  yoga: FaHeartbeat,
  group: FaUsers,
};

const statusColors = {
  scheduled: "bg-blue-100 text-blue-800 border-blue-200",
  active: "bg-green-100 text-green-800 border-green-200",
  completed: "bg-gray-100 text-gray-800 border-gray-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

export default function EmployerGym() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [filterDate, setFilterDate] = useState("today");
  const { user } = useAuth();

  const { data: memberships, isLoading } = useQuery<GymMembership[]>({
    queryKey: ["/api/gym/memberships"],
  });

  // Mock trainer schedule data
  const trainerSchedule = [
    {
      id: "1",
      className: "Morning Yoga",
      type: "yoga",
      time: "07:00 AM - 08:00 AM",
      date: "2025-01-22",
      capacity: 20,
      enrolled: 15,
      status: "scheduled",
      room: "Studio A",
      description: "Gentle morning yoga flow for all levels",
      equipment: ["Yoga mats", "Blocks", "Straps"],
    },
    {
      id: "2",
      className: "HIIT Training",
      type: "cardio",
      time: "06:00 PM - 06:45 PM",
      date: "2025-01-22",
      capacity: 15,
      enrolled: 12,
      status: "scheduled",
      room: "Fitness Studio",
      description: "High-intensity interval training session",
      equipment: ["Dumbbells", "Resistance bands", "Mats"],
    },
    {
      id: "3",
      className: "Swimming Lessons",
      type: "swimming",
      time: "10:00 AM - 11:00 AM",
      date: "2025-01-22",
      capacity: 8,
      enrolled: 6,
      status: "active",
      room: "Pool Area",
      description: "Adult swimming technique improvement",
      equipment: ["Kickboards", "Pool noodles"],
    },
  ];

  const personalTraining = [
    {
      id: "1",
      clientName: "Sarah Johnson",
      sessionType: "Strength Training",
      time: "09:00 AM - 10:00 AM",
      date: "2025-01-22",
      status: "scheduled",
      goals: "Build muscle mass, improve form",
      sessionNumber: 8,
      totalSessions: 12,
      notes: "Focus on upper body today",
    },
    {
      id: "2",
      clientName: "Michael Chen",
      sessionType: "Cardio & Weight Loss",
      time: "11:00 AM - 12:00 PM",
      date: "2025-01-22",
      status: "completed",
      goals: "Lose weight, improve cardio",
      sessionNumber: 15,
      totalSessions: 20,
      notes: "Great progress on endurance",
    },
    {
      id: "3",
      clientName: "Emma Davis",
      sessionType: "Recovery & Mobility",
      time: "02:00 PM - 03:00 PM",
      date: "2025-01-22",
      status: "scheduled",
      goals: "Post-injury recovery",
      sessionNumber: 4,
      totalSessions: 10,
      notes: "Gentle exercises only",
    },
  ];

  const equipmentStatus = [
    {
      id: "1",
      name: "Treadmill #1",
      type: "Cardio",
      status: "available",
      lastMaintenance: "2025-01-15",
      nextMaintenance: "2025-02-15",
    },
    {
      id: "2",
      name: "Bench Press",
      type: "Strength",
      status: "in_use",
      lastMaintenance: "2025-01-10",
      nextMaintenance: "2025-02-10",
    },
    {
      id: "3",
      name: "Rowing Machine",
      type: "Cardio",
      status: "maintenance",
      lastMaintenance: "2025-01-20",
      nextMaintenance: "2025-01-25",
    },
  ];

  const scheduleColumns = [
    {
      key: "class",
      label: "Class",
      render: (_, session: any) => {
        const TypeIcon = classTypeIcons[session.type as keyof typeof classTypeIcons] || FaDumbbell;
        return (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <TypeIcon className="text-white text-lg" />
            </div>
            <div>
              <p className="font-semibold">{session.className}</p>
              <p className="text-sm text-muted-foreground">{session.room}</p>
            </div>
          </div>
        );
      },
    },
    {
      key: "time",
      label: "Time",
      render: (_, session: any) => (
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{session.time}</span>
        </div>
      ),
    },
    {
      key: "capacity",
      label: "Participants",
      render: (_, session: any) => (
        <div>
          <p className="text-sm font-medium">{session.enrolled}/{session.capacity}</p>
          <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${(session.enrolled / session.capacity) * 100}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_, session: any) => (
        <Badge className={statusColors[session.status as keyof typeof statusColors]}>
          {session.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, session: any) => (
        <div className="flex space-x-2">
          {session.status === "scheduled" && (
            <Button size="sm" className="gradient-primary text-white" data-testid={`button-start-class-${session.id}`}>
              Start Class
            </Button>
          )}
          {session.status === "active" && (
            <Button size="sm" variant="outline" data-testid={`button-end-class-${session.id}`}>
              End Class
            </Button>
          )}
          <Button size="sm" variant="ghost" data-testid={`button-view-class-${session.id}`}>
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const personalTrainingColumns = [
    {
      key: "client",
      label: "Client",
      render: (_, session: any) => (
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/10 text-primary">
              {session.clientName.split(" ").map((n: string) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{session.clientName}</p>
            <p className="text-sm text-muted-foreground">{session.sessionType}</p>
          </div>
        </div>
      ),
    },
    {
      key: "time",
      label: "Time",
      render: (_, session: any) => (
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{session.time}</span>
        </div>
      ),
    },
    {
      key: "progress",
      label: "Progress",
      render: (_, session: any) => (
        <div>
          <p className="text-sm font-medium">
            Session {session.sessionNumber}/{session.totalSessions}
          </p>
          <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${(session.sessionNumber / session.totalSessions) * 100}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "goals",
      label: "Goals",
      render: (_, session: any) => (
        <p className="text-sm max-w-xs truncate">{session.goals}</p>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_, session: any) => (
        <Badge className={statusColors[session.status as keyof typeof statusColors]}>
          {session.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, session: any) => (
        <div className="flex space-x-2">
          {session.status === "scheduled" && (
            <Button size="sm" className="gradient-primary text-white" data-testid={`button-start-session-${session.id}`}>
              Start
            </Button>
          )}
          <Button size="sm" variant="ghost" data-testid={`button-view-session-${session.id}`}>
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const scheduleStats = {
    totalClasses: trainerSchedule.length,
    activeClasses: trainerSchedule.filter(c => c.status === "active").length,
    totalParticipants: trainerSchedule.reduce((sum, c) => sum + c.enrolled, 0),
    personalSessions: personalTraining.length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-foreground">{scheduleStats.totalClasses}</h3>
            <p className="text-sm text-muted-foreground">Classes Today</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Dumbbell className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-green-600">{scheduleStats.activeClasses}</h3>
            <p className="text-sm text-muted-foreground">Active Now</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">{scheduleStats.totalParticipants}</h3>
            <p className="text-sm text-muted-foreground">Participants</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-yellow-600">{scheduleStats.personalSessions}</h3>
            <p className="text-sm text-muted-foreground">Personal Sessions</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
          <TabsTrigger value="personal">Personal Training</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-6">
          {/* Schedule Controls */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex gap-4">
                  <Select value={filterDate} onValueChange={setFilterDate}>
                    <SelectTrigger className="w-48" data-testid="select-date-filter">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" data-testid="button-view-calendar">
                    <Calendar className="h-4 w-4 mr-2" />
                    Calendar View
                  </Button>
                  <Button className="gradient-primary text-white" data-testid="button-emergency-cancel">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Emergency Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class Schedule Table */}
          <DataTable
            title="Today's Classes"
            data={trainerSchedule}
            columns={scheduleColumns}
            searchable={false}
            exportable={false}
          />

          {/* Upcoming Classes */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainerSchedule
                  .filter(session => session.status === "scheduled")
                  .map((session) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                          {React.createElement(classTypeIcons[session.type as keyof typeof classTypeIcons] || FaDumbbell, {
                            className: "text-white text-lg"
                          })}
                        </div>
                        <div>
                          <h4 className="font-semibold">{session.className}</h4>
                          <p className="text-sm text-muted-foreground">
                            {session.time} • {session.room}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {session.enrolled}/{session.capacity} participants
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-100 text-blue-800">
                          {session.time.split(" - ")[0]}
                        </Badge>
                        <Button size="sm" variant="outline" data-testid={`button-prepare-class-${session.id}`}>
                          Prepare
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal" className="space-y-6">
          {/* Personal Training Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Personal Training Sessions</h3>
                  <p className="text-sm text-muted-foreground">Manage your one-on-one client sessions</p>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{personalTraining.length}</p>
                  <p className="text-sm text-muted-foreground">Sessions Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Training Table */}
          <DataTable
            title="Personal Training Sessions"
            data={personalTraining}
            columns={personalTrainingColumns}
            searchable={false}
            exportable={false}
          />
        </TabsContent>

        <TabsContent value="equipment" className="space-y-6">
          {/* Equipment Status Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Equipment Status</h3>
                  <p className="text-sm text-muted-foreground">Monitor gym equipment availability</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-green-600">
                      {equipmentStatus.filter(e => e.status === "available").length}
                    </p>
                    <p className="text-xs text-muted-foreground">Available</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-600">
                      {equipmentStatus.filter(e => e.status === "in_use").length}
                    </p>
                    <p className="text-xs text-muted-foreground">In Use</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-red-600">
                      {equipmentStatus.filter(e => e.status === "maintenance").length}
                    </p>
                    <p className="text-xs text-muted-foreground">Maintenance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipment List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentStatus.map((equipment) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group"
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{equipment.name}</h4>
                        <p className="text-sm text-muted-foreground">{equipment.type}</p>
                      </div>
                      <Badge className={
                        equipment.status === "available" ? "bg-green-100 text-green-800" :
                        equipment.status === "in_use" ? "bg-blue-100 text-blue-800" :
                        "bg-red-100 text-red-800"
                      }>
                        {equipment.status.replace("_", " ")}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Last maintained: {new Date(equipment.lastMaintenance).toLocaleDateString()}</p>
                      <p>Next maintenance: {new Date(equipment.nextMaintenance).toLocaleDateString()}</p>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button size="sm" variant="outline" data-testid={`button-equipment-${equipment.id}`}>
                        {equipment.status === "maintenance" ? "Report Fixed" : "Report Issue"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
