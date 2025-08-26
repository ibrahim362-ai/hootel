import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DonutData {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutData[];
  size?: number;
  title?: string;
  centerText?: string;
  className?: string;
}

export function DonutChart({ 
  data, 
  size = 200, 
  title, 
  centerText,
  className = '' 
}: DonutChartProps) {
  const [animatedData, setAnimatedData] = useState<DonutData[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = size / 2 - 20;
  const circumference = 2 * Math.PI * radius;
  
  let cumulativePercentage = 0;

  return (
    <div className={`bg-card rounded-2xl p-6 border border-border ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}
      
      <div className="flex items-center justify-center relative" style={{ height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {animatedData.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -(cumulativePercentage / 100) * circumference;
            
            cumulativePercentage += percentage;
            
            return (
              <motion.circle
                key={item.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth="16"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray, strokeDashoffset }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                data-testid={`segment-${item.label}`}
              />
            );
          })}
        </svg>
        
        {centerText && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground" data-testid="center-text">
              {centerText}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            data-testid={`legend-${item.label}`}
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-foreground font-medium">{item.label}</span>
            </div>
            <span className="text-muted-foreground font-bold">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
