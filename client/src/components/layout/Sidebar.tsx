import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHotel, 
  FaChartLine, 
  FaBed, 
  FaUtensils, 
  FaDumbbell, 
  FaUsers, 
  FaBuilding, 
  FaUserTie, 
  FaChartBar, 
  FaCog,
  FaTasks,
  FaClock,
  FaUser,
  FaHome,
  FaGift,
  FaChevronRight,
  FaChevronDown
} from 'react-icons/fa';
import { Link, useLocation } from 'wouter';
import { useRole } from '@/context/RoleContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import styles from '@/styles/Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = {
  admin: [
    { path: '/admin/dashboard', icon: FaChartLine, label: 'Dashboard' },
    { path: '/admin/rooms', icon: FaBed, label: 'Rooms Management' },
    { path: '/admin/restaurant', icon: FaUtensils, label: 'Restaurant' },
    { path: '/admin/gym', icon: FaDumbbell, label: 'Fitness Center' },
    { path: '/admin/crm', icon: FaUsers, label: 'Customer Relations' },
    { path: '/admin/property', icon: FaBuilding, label: 'Property' },
    { path: '/admin/staff', icon: FaUserTie, label: 'Staff Management' },
    { path: '/admin/reports', icon: FaChartBar, label: 'Reports & Analytics' },
    { path: '/admin/settings', icon: FaCog, label: 'Settings' },
  ],
  employer: [
    { path: '/employer/dashboard', icon: FaChartLine, label: 'Dashboard' },
    { path: '/admin/rooms', icon: FaBed, label: 'Room Tasks' },
    { path: '/admin/restaurant', icon: FaUtensils, label: 'Orders' },
    { path: '/admin/gym', icon: FaDumbbell, label: 'Gym Schedule' },
    { path: '/employer/tasks', icon: FaTasks, label: 'My Tasks' },
    { path: '/employer/shifts', icon: FaClock, label: 'Shifts' },
    { path: '/employer/profile', icon: FaUser, label: 'Profile' },
  ],
  user: [
    { path: '/user/home', icon: FaHome, label: 'Home' },
    { path: '/user/rooms', icon: FaBed, label: 'Book Rooms' },
    { path: '/user/restaurant', icon: FaUtensils, label: 'Restaurant Menu' },
    { path: '/user/gym', icon: FaDumbbell, label: 'Fitness Classes' },
    { path: '/user/crm', icon: FaGift, label: 'Rewards' },
    { path: '/user/profile', icon: FaUser, label: 'Profile' },
  ],
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { role } = useRole();
  const { user } = useAuth();
  const [location] = useLocation();
  
  const items = role ? navigationItems[role] : [];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(styles.sidebar, isOpen && styles.open)}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className={styles.sidebarContent}>
          {/* Logo Section */}
          <motion.div 
            className={styles.logoSection}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <FaHotel className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">HotelERP</h1>
                <p className="text-white/70 text-sm">Management System</p>
              </div>
            </div>
          </motion.div>

          {/* Role Indicator */}
          <motion.div 
            className={styles.roleIndicator}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="role-indicator bg-white/20 text-white p-3 rounded-lg border border-white/20">
              <div className="flex items-center justify-between">
                <span className="font-medium capitalize">
                  {role === 'admin' ? '👑 Admin Dashboard' : 
                   role === 'employer' ? '👔 Staff Portal' : 
                   '🛎️ Guest Interface'}
                </span>
                <FaChevronDown className="text-white/70 text-sm" />
              </div>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <nav className={styles.navigation}>
            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.3 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {items.map((item, index) => {
                const isActive = location === item.path;
                const Icon = item.icon;

                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link href={item.path}>
                      <motion.a
                        className={cn(
                          styles.navItem,
                          isActive ? styles.active : styles.inactive
                        )}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {!isActive && (
                          <FaChevronRight className="ml-auto text-sm opacity-60" />
                        )}
                      </motion.a>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </nav>

          {/* User Profile */}
          <motion.div 
            className={styles.userProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 p-3 rounded-lg glass">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaUser className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm" data-testid="text-user-name">
                  {user?.name || 'User'}
                </p>
                <p className="text-white/70 text-xs capitalize" data-testid="text-user-role">
                  {role === 'admin' ? 'System Administrator' :
                   role === 'employer' ? 'Staff Member' :
                   'Guest'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
