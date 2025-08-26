import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBed, FaUtensils, FaDumbbell, FaGift, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { href: '/', label: 'Home', icon: FaBed },
    { href: '/user/rooms', label: 'Rooms & Suites', icon: FaBed },
    { href: '/user/restaurant', label: 'Dining', icon: FaUtensils },
    { href: '/user/gym', label: 'Fitness & Spa', icon: FaDumbbell }
  ];

  const services = [
    'Concierge Service',
    'Room Service',
    'Valet Parking',
    'Business Center',
    'Airport Shuttle',
    'Wedding Events',
    'Conference Rooms',
    'Pool & Spa'
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: '#1877f2' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1da1f2' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#e4405f' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: '#ff0000' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className={styles.scrollTopButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-testid="scroll-to-top"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <motion.div
          className={styles.footerContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <div className={styles.footerBrand}>
              <div className={styles.brandLogo}>
                <div className={styles.logoIcon}>
                  <FaBed className={styles.logoIconSvg} />
                </div>
                <div className={styles.brandText}>
                  <h3 className={styles.brandTitle}>Grand Palace Hotel</h3>
                  <p className={styles.brandSubtitle}>Luxury Redefined</p>
                </div>
              </div>
              <p className={styles.brandDescription}>
                Experience unparalleled luxury and comfort at Grand Palace Hotel. 
                Our commitment to excellence ensures every moment of your stay is extraordinary.
              </p>
              
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={styles.socialLink}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <social.icon />
                    <span className={styles.socialLabel}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  className={styles.linkItem}
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link href={link.href}>
                    <span className={styles.footerLink} data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      <link.icon className={styles.linkIcon} />
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className={styles.linkItem}
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className={styles.serviceItem} data-testid={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05 }}
                data-testid="contact-address"
              >
                <FaMapMarkerAlt className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Address</span>
                  <span className={styles.contactValue}>123 Luxury Boulevard<br />Downtown District<br />New York, NY 10001</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05 }}
                data-testid="contact-phone"
              >
                <FaPhone className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+1 (555) 123-4567</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                whileHover={{ scale: 1.05 }}
                data-testid="contact-email"
              >
                <FaEnvelope className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>info@grandpalace.com<br />reservations@grandpalace.com</span>
                </div>
              </motion.div>
            </div>

            <div className={styles.businessHours}>
              <h5 className={styles.hoursTitle}>Business Hours</h5>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursItem}>
                  <span>Front Desk:</span>
                  <span>24/7</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Restaurant:</span>
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Gym & Spa:</span>
                  <span>5:00 AM - 12:00 AM</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Concierge:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className={styles.newsletter}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>
                Subscribe to our newsletter for exclusive offers, events, and luxury travel tips.
              </p>
            </div>
            <div className={styles.newsletterForm}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  data-testid="newsletter-email-input"
                />
                <motion.button
                  className={styles.subscribeButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="newsletter-subscribe-button"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© 2025 Grand Palace Hotel. All rights reserved.</p>
              <p className={styles.tagline}>
                Made with <FaHeart className={styles.heartIcon} /> for exceptional hospitality
              </p>
            </div>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink} data-testid="privacy-policy-link">Privacy Policy</a>
              <a href="#" className={styles.legalLink} data-testid="terms-service-link">Terms of Service</a>
              <a href="#" className={styles.legalLink} data-testid="cookies-policy-link">Cookie Policy</a>
              <a href="#" className={styles.legalLink} data-testid="accessibility-link">Accessibility</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}