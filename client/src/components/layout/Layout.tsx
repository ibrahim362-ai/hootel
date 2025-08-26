import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Layout({ children, title, subtitle }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.layout}>
      <Sidebar 
        isOpen={sidebarOpen || !isMobile} 
        onClose={closeSidebar} 
      />
      
      <main className={styles.mainContent}>
        <Header 
          onMobileMenuToggle={toggleSidebar}
          title={title}
          subtitle={subtitle}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className={styles.contentArea}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
