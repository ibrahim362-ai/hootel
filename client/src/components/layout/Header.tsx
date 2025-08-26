import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaSearch, FaBell, FaUser, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from '@/styles/Layout.module.css';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  title?: string;
  subtitle?: string;
}

export function Header({ onMobileMenuToggle, title = "Dashboard Overview", subtitle = "Welcome back! Here's what's happening at your hotel today." }: HeaderProps) {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onMobileMenuToggle}
            data-testid="button-mobile-menu"
          >
            <FaBars className="text-gray-600" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 w-64"
              data-testid="input-search"
            />
          </div>
          
          {/* Notifications */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              data-testid="button-notifications"
            >
              <FaBell className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
          </motion.div>
          
          {/* User Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => setShowUserMenu(!showUserMenu)}
              data-testid="button-user-menu"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </span>
              </div>
              <FaChevronDown className="text-gray-400 text-sm" />
            </Button>
            
            {showUserMenu && (
              <motion.div 
                className={styles.userMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="p-3 border-b border-border">
                  <p className="font-medium text-sm" data-testid="text-username">{user?.name}</p>
                  <p className="text-muted-foreground text-xs capitalize" data-testid="text-role">{user?.role}</p>
                </div>
                <div className="p-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start"
                    data-testid="button-profile"
                  >
                    <FaUser className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={logout}
                    data-testid="button-logout"
                  >
                    Logout
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
