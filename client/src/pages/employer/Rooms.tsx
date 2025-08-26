import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  Bed,
  CheckCircle,
  Clock,
  AlertTriangle,
  MapPin,
  Users,
  ClipboardCheck,
  Wrench,
  Star,
} from "lucide-react";
import { FaBed, FaBroom, FaTools, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "@/components/tables/DataTable";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";

const taskTypeIcons = {
  cleaning: FaBroom,
  maintenance: FaTools,
  inspection: FaCheckCircle,
  setup: FaBed,
};

const taskStatusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  in_progress: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  overdue: "bg-red-100 text-red-800 border-red-200",
};

const priorityColors = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200",
};

export default function EmployerRooms() {
  const [activeTab, setActiveTab] = useState("assigned");
  const [filterStatus, setFilterStatus] = useState("all");
  const { user } = useAuth();

  const { data: rooms, isLoading: roomsLoading } = useQuery({
    queryKey: ["/api/rooms"],
  });

  const { data: tasks, isLoading: tasksLoading } = useQuery({
    queryKey: ["/api/tasks/assignee", user?.id],
  });

  // Mock room tasks data for staff
  const roomTasks = [
    {
      id: "1",
      roomNumber: "204",
      task: "Deep Cleaning",
      type: "cleaning",
      priority: "high",
      status: "in_progress",
      assignedAt: "2025-01-22 08:00:00",
      dueTime: "2025-01-22 11:00:00",
      estimatedTime: 60,
      guestCheckOut: "2025-01-22 11:00:00",
      nextCheckIn: "2025-01-22 15:00:00",
      notes: "Guest reported broken AC, needs maintenance check",
    },
    {
      id: "2",
      roomNumber: "156",
      task: "Standard Cleaning",
      type: "cleaning",
      priority: "medium",
      status: "pending",
      assignedAt: "2025-01-22 09:00:00",
      dueTime: "2025-01-22 12:00:00",
      estimatedTime: 45,
      guestCheckOut: "2025-01-22 10:30:00",
      nextCheckIn: "2025-01-22 16:00:00",
      notes: "Standard turnover cleaning",
    },
    {
      id: "3",
      roomNumber: "301",
      task: "Maintenance Check",
      type: "maintenance",
      priority: "low",
      status: "completed",
      assignedAt: "2025-01-22 07:00:00",
      dueTime: "2025-01-22 09:00:00",
      completedAt: "2025-01-22 08:45:00",
      estimatedTime: 30,
      actualTime: 28,
      notes: "Monthly maintenance inspection completed",
    },
    {
      id: "4",
      roomNumber: "245",
      task: "Room Setup",
      type: "setup",
      priority: "medium",
      status: "pending",
      assignedAt: "2025-01-22 10:00:00",
      dueTime: "2025-01-22 14:00:00",
      estimatedTime: 30,
      nextCheckIn: "2025-01-22 15:00:00",
      notes: "VIP guest arrival, special amenities setup required",
    },
  ];

  const roomInspections = [
    {
      id: "1",
      roomNumber: "204",
      type: "Quality Check",
      inspector: "You",
      date: "2025-01-22",
      score: 95,
      status: "passed",
      issues: [],
    },
    {
      id: "2",
      roomNumber: "156",
      type: "Cleanliness Audit",
      inspector: "Supervisor",
      date: "2025-01-21",
      score: 88,
      status: "needs_improvement",
      issues: ["Bathroom mirror spots", "Dust on TV stand"],
    },
  ];

  const filteredTasks = roomTasks.filter(task => 
    filterStatus === "all" || task.status === filterStatus
  );

  const taskColumns = [
    {
      key: "room",
      label: "Room",
      render: (_: unknown, task: any) => {
        const TypeIcon = taskTypeIcons[task.type as keyof typeof taskTypeIcons] || FaBed;
        return (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <TypeIcon className="text-white text-lg" />
            </div>
            <div>
              <p className="font-semibold">Room {task.roomNumber}</p>
              <p className="text-sm text-muted-foreground">{task.task}</p>
            </div>
          </div>
        );
      },
    },
    {
      key: "priority",
      label: "Priority",
      render: (_: unknown, task: any) => (
        <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
          {task.priority}
        </Badge>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_: unknown, task: any) => (
        <Badge className={taskStatusColors[task.status as keyof typeof taskStatusColors]}>
          {task.status.replace("_", " ")}
        </Badge>
      ),
    },
    {
      key: "timing",
      label: "Timing",
      render: (_: unknown, task: any) => (
        <div className="text-sm">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span>Due: {new Date(task.dueTime).toLocaleTimeString()}</span>
          </div>
          <div className="text-muted-foreground">
            Est: {task.estimatedTime}min
            {task.actualTime && ` | Actual: ${task.actualTime}min`}
          </div>
        </div>
      ),
    },
    {
      key: "guest",
      label: "Guest Schedule",
      render: (_: unknown, task: any) => (
        <div className="text-sm">
          {task.guestCheckOut && (
            <div>Check-out: {new Date(task.guestCheckOut).toLocaleTimeString()}</div>
          )}
          {task.nextCheckIn && (
            <div>Check-in: {new Date(task.nextCheckIn).toLocaleTimeString()}</div>
          )}
        </div>
      ),
    },
    {
      key: "notes",
      label: "Notes",
      render: (_: unknown, task: any) => (
        <p className="text-sm max-w-xs truncate">{task.notes}</p>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_: unknown, task: any) => (
        <div className="flex space-x-2">
          {task.status === "pending" && (
            <Button size="sm" variant="outline" data-testid={`button-start-task-${task.id}`}>
              Start
            </Button>
          )}
          {task.status === "in_progress" && (
            <Button size="sm" className="gradient-primary text-white" data-testid={`button-complete-task-${task.id}`}>
              Complete
            </Button>
          )}
          {task.status === "completed" && (
            <Button size="sm" variant="ghost" data-testid={`button-view-task-${task.id}`}>
              View
            </Button>
          )}
        </div>
      ),
    },
  ];

  const inspectionColumns = [
    {
      key: "room",
      label: "Room",
      render: (_, inspection: any) => (
        <div>
          <p className="font-semibold">Room {inspection.roomNumber}</p>
          <p className="text-sm text-muted-foreground">{inspection.type}</p>
        </div>
      ),
    },
    {
      key: "date",
      label: "Date",
      render: (_, inspection: any) => (
        <span className="text-sm">{new Date(inspection.date).toLocaleDateString()}</span>
      ),
    },
    {
      key: "inspector",
      label: "Inspector",
      render: (_, inspection: any) => (
        <span className="text-sm">{inspection.inspector}</span>
      ),
    },
    {
      key: "score",
      label: "Score",
      render: (_, inspection: any) => (
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{inspection.score}%</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(inspection.score / 20) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (_, inspection: any) => {
        const statusColor = inspection.status === "passed" ? "bg-green-100 text-green-800" :
                           inspection.status === "needs_improvement" ? "bg-yellow-100 text-yellow-800" :
                           "bg-red-100 text-red-800";
        return (
          <Badge className={statusColor}>
            {inspection.status.replace("_", " ")}
          </Badge>
        );
      },
    },
    {
      key: "issues",
      label: "Issues",
      render: (_, inspection: any) => (
        <div>
          {inspection.issues.length === 0 ? (
            <span className="text-sm text-green-600">No issues</span>
          ) : (
            <div className="text-sm">
              <span className="font-medium">{inspection.issues.length} issues</span>
              <div className="text-muted-foreground">
                {inspection.issues.slice(0, 2).join(", ")}
                {inspection.issues.length > 2 && "..."}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, inspection: any) => (
        <Button size="sm" variant="ghost" data-testid={`button-view-inspection-${inspection.id}`}>
          View Details
        </Button>
      ),
    },
  ];

  if (roomsLoading || tasksLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const taskStats = {
    total: roomTasks.length,
    pending: roomTasks.filter(t => t.status === "pending").length,
    inProgress: roomTasks.filter(t => t.status === "in_progress").length,
    completed: roomTasks.filter(t => t.status === "completed").length,
    overdue: roomTasks.filter(t => t.status === "overdue").length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <ClipboardCheck className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-foreground">{taskStats.total}</h3>
            <p className="text-sm text-muted-foreground">Total Tasks</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</h3>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-green-600">{taskStats.completed}</h3>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-red-600">{taskStats.overdue}</h3>
            <p className="text-sm text-muted-foreground">Overdue</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assigned">My Room Tasks</TabsTrigger>
          <TabsTrigger value="inspections">Quality Inspections</TabsTrigger>
        </TabsList>

        <TabsContent value="assigned" className="space-y-6">
          {/* Task Controls */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex gap-4">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48" data-testid="select-task-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tasks</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" data-testid="button-refresh-tasks">
                    <Clock className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button className="gradient-primary text-white" data-testid="button-report-issue">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Room Tasks Table */}
          <DataTable
            title="Assigned Room Tasks"
            data={filteredTasks}
            columns={taskColumns}
            searchable={false}
            exportable={false}
          />
        </TabsContent>

        <TabsContent value="inspections" className="space-y-6">
          {/* Inspection Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Quality Inspections</h3>
                  <p className="text-sm text-muted-foreground">Room quality checks and audits</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">91.5%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Average Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inspections Table */}
          <DataTable
            title="Recent Inspections"
            data={roomInspections}
            columns={inspectionColumns}
            searchable={true}
            exportable={false}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
