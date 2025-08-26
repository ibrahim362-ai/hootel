import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './UserLayout.module.css';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}