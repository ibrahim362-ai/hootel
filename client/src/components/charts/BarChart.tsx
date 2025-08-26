import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BarData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarData[];
  height?: number;
  title?: string;
  className?: string;
}

export function BarChart({ data, height = 256, title, className = '' }: BarChartProps) {
  const [animatedData, setAnimatedData] = useState<BarData[]>([]);
  
  useEffect(() => {
    // Animate bars on mount
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`bg-card rounded-2xl p-6 border border-border ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      )}
      
      <div className={`flex items-end space-x-2 p-4`} style={{ height: height }}>
        {data.map((item, index) => {
          const barHeight = animatedData[index] 
            ? (animatedData[index].value / maxValue) * (height - 80)
            : 0;
          
          return (
            <div key={item.label} className="flex-1 flex flex-col items-center">
              <motion.div
                className={`w-full rounded-t-lg ${item.color || 'bg-gradient-to-t from-primary to-blue-400'}`}
                initial={{ height: 0 }}
                animate={{ height: barHeight }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                data-testid={`bar-${item.label}`}
              />
              <span className="text-sm text-muted-foreground mt-2" data-testid={`label-${item.label}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
