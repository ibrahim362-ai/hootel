import { createContext, useContext } from 'react';
import { useAuth } from './AuthContext';

export type UserRole = 'admin' | 'employer' | 'user';

interface RoleContextType {
  role: UserRole | null;
  isAdmin: boolean;
  isEmployer: boolean;
  isUser: boolean;
  hasAccess: (requiredRole: UserRole) => boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  
  const role = user?.role as UserRole | null;
  const isAdmin = role === 'admin';
  const isEmployer = role === 'employer';
  const isUser = role === 'user';

  const hasAccess = (requiredRole: UserRole): boolean => {
    if (!role) return false;
    
    const roleHierarchy: Record<UserRole, number> = {
      'user': 1,
      'employer': 2,
      'admin': 3,
    };

    return roleHierarchy[role] >= roleHierarchy[requiredRole];
  };

  return (
    <RoleContext.Provider value={{ 
      role, 
      isAdmin, 
      isEmployer, 
      isUser, 
      hasAccess 
    }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
