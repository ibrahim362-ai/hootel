import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      data-testid="loading-spinner"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <FaSpinner className={`${sizeClasses[size]} text-primary`} />
      </motion.div>
    </motion.div>
  );
}
