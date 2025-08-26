import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { RoleProvider } from "@/context/RoleContext";
import NotFound from "@/pages/not-found";
import Login from "@/pages/auth/Login";

// Admin Pages
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminRooms from "@/pages/admin/Rooms";
import AdminRestaurant from "@/pages/admin/Restaurant";
import AdminGym from "@/pages/admin/Gym";
import AdminCRM from "@/pages/admin/CRM";
import AdminProperty from "@/pages/admin/Property";
import AdminStaff from "@/pages/admin/Staff";
import AdminReports from "@/pages/admin/Reports";
import AdminSettings from "@/pages/admin/Settings";

// Employer Pages
import EmployerDashboard from "@/pages/employer/Dashboard";
import EmployerTasks from "@/pages/employer/Tasks";
import EmployerShifts from "@/pages/employer/Shifts";
import EmployerProfile from "@/pages/employer/Profile";

// User Pages
import UserHome from "@/pages/user/Home";
import UserRooms from "@/pages/user/Rooms";
import UserRestaurant from "@/pages/user/Restaurant";
import UserGym from "@/pages/user/Gym";
import UserCRM from "@/pages/user/CRM";
import UserProfile from "@/pages/user/Profile";

// Protected Route Component
function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redirect to appropriate dashboard based on user role
    const roleDashboards = {
      admin: '/admin/dashboard',
      employer: '/employer/dashboard',
      user: '/user/home'
    };
    return <Redirect to={roleDashboards[user.role as keyof typeof roleDashboards] || '/login'} />;
  }

  return <>{children}</>;
}

// Main Router Component
function Router() {
  const { user } = useAuth();

  return (
    <Switch>
      {/* Auth Routes */}
      <Route path="/login">
        {user ? (
          <Redirect to={
            user.role === 'admin' ? '/admin/dashboard' :
            user.role === 'employer' ? '/employer/dashboard' :
            '/user/home'
          } />
        ) : (
          <Login />
        )}
      </Route>

      {/* Root redirect */}
      <Route path="/">
        {user ? (
          <Redirect to={
            user.role === 'admin' ? '/admin/dashboard' :
            user.role === 'employer' ? '/employer/dashboard' :
            '/user/home'
          } />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/dashboard">
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/rooms">
        <ProtectedRoute requiredRole="admin">
          <AdminRooms />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/restaurant">
        <ProtectedRoute requiredRole="admin">
          <AdminRestaurant />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/gym">
        <ProtectedRoute requiredRole="admin">
          <AdminGym />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/crm">
        <ProtectedRoute requiredRole="admin">
          <AdminCRM />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/property">
        <ProtectedRoute requiredRole="admin">
          <AdminProperty />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/staff">
        <ProtectedRoute requiredRole="admin">
          <AdminStaff />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/reports">
        <ProtectedRoute requiredRole="admin">
          <AdminReports />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/settings">
        <ProtectedRoute requiredRole="admin">
          <AdminSettings />
        </ProtectedRoute>
      </Route>

      {/* Employer Routes */}
      <Route path="/employer/dashboard">
        <ProtectedRoute requiredRole="employer">
          <EmployerDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/employer/tasks">
        <ProtectedRoute requiredRole="employer">
          <EmployerTasks />
        </ProtectedRoute>
      </Route>
      <Route path="/employer/shifts">
        <ProtectedRoute requiredRole="employer">
          <EmployerShifts />
        </ProtectedRoute>
      </Route>
      <Route path="/employer/profile">
        <ProtectedRoute requiredRole="employer">
          <EmployerProfile />
        </ProtectedRoute>
      </Route>

      {/* User Routes */}
      <Route path="/user/home">
        <ProtectedRoute requiredRole="user">
          <UserHome />
        </ProtectedRoute>
      </Route>
      <Route path="/user/rooms">
        <ProtectedRoute requiredRole="user">
          <UserRooms />
        </ProtectedRoute>
      </Route>
      <Route path="/user/restaurant">
        <ProtectedRoute requiredRole="user">
          <UserRestaurant />
        </ProtectedRoute>
      </Route>
      <Route path="/user/gym">
        <ProtectedRoute requiredRole="user">
          <UserGym />
        </ProtectedRoute>
      </Route>
      <Route path="/user/crm">
        <ProtectedRoute requiredRole="user">
          <UserCRM />
        </ProtectedRoute>
      </Route>
      <Route path="/user/profile">
        <ProtectedRoute requiredRole="user">
          <UserProfile />
        </ProtectedRoute>
      </Route>

      {/* Shared routes accessible by multiple roles */}
      <Route path="/rooms">
        <ProtectedRoute>
          {user?.role === 'admin' ? <AdminRooms /> : <UserRooms />}
        </ProtectedRoute>
      </Route>
      <Route path="/restaurant">
        <ProtectedRoute>
          {user?.role === 'admin' ? <AdminRestaurant /> : <UserRestaurant />}
        </ProtectedRoute>
      </Route>
      <Route path="/gym">
        <ProtectedRoute>
          {user?.role === 'admin' ? <AdminGym /> : <UserGym />}
        </ProtectedRoute>
      </Route>

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoleProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </RoleProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
