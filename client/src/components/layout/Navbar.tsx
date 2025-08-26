import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBed, FaUtensils, FaDumbbell, FaGift, FaUser, FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/user/rooms', label: 'Rooms', icon: FaBed },
    { path: '/user/restaurant', label: 'Restaurant', icon: FaUtensils },
    { path: '/user/gym', label: 'Gym', icon: FaDumbbell },
    { path: '/user/crm', label: 'Rewards', icon: FaGift },
    { path: '/user/profile', label: 'Profile', icon: FaUser }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className={styles.navContainer}>
          {/* Logo and Brand */}
          <motion.div
            className={styles.brand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" onClick={closeMenu}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <FaBed className={styles.logoIconSvg} />
                </div>
                <div className={styles.logoText}>
                  <span className={styles.logoTitle}>Grand Palace</span>
                  <span className={styles.logoSubtitle}>Hotel</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  className={styles.navItem}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link href={item.path} onClick={closeMenu}>
                    <motion.div
                      className={`${styles.navLink} ${location === item.path ? styles.active : ''}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      data-testid={`nav-link-${item.label.toLowerCase()}`}
                    >
                      <item.icon className={styles.navIcon} />
                      <span>{item.label}</span>
                      {location === item.path && (
                        <motion.div
                          className={styles.activeIndicator}
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <span className={styles.contactText}>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span className={styles.contactText}>Downtown District</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            data-testid="mobile-menu-button"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.mobileMenuOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileMenuLogo}>
                  <FaBed className={styles.mobileMenuLogoIcon} />
                  <span>Grand Palace Hotel</span>
                </div>
                <button
                  className={styles.mobileMenuClose}
                  onClick={closeMenu}
                  data-testid="mobile-menu-close"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className={styles.mobileMenuNav}>
                <ul className={styles.mobileNavList}>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      className={styles.mobileNavItem}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <Link href={item.path} onClick={closeMenu}>
                        <motion.div
                          className={`${styles.mobileNavLink} ${location === item.path ? styles.activeMobile : ''}`}
                          whileTap={{ scale: 0.95 }}
                          data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        >
                          <item.icon className={styles.mobileNavIcon} />
                          <span>{item.label}</span>
                          {location === item.path && (
                            <div className={styles.activeMobileIndicator} />
                          )}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className={styles.mobileMenuFooter}>
                <div className={styles.mobileContactInfo}>
                  <div className={styles.mobileContactItem}>
                    <FaPhone className={styles.mobileContactIcon} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className={styles.mobileContactItem}>
                    <FaMapMarkerAlt className={styles.mobileContactIcon} />
                    <span>123 Luxury Boulevard</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}