import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

interface CardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  description?: string;
  icon?: React.ReactNode;
}

export const HealthScoreCard: React.FC<CardProps> = ({ title, value, unit, change, description, icon }) => {
  const isPositive = change && change > 0;
  
  return (
    <div className="glass-card p-6 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-nigeria-green/10 rounded-lg text-nigeria-green">
          {icon}
        </div>
        {change !== undefined && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
          )}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline gap-1 mt-1">
          <h3 className="text-3xl font-bold text-slate-900 data-value">{value}</h3>
          {unit && <span className="text-sm font-medium text-slate-400">{unit}</span>}
        </div>
        {description && <p className="text-xs text-slate-400 mt-2">{description}</p>}
      </div>
    </div>
  );
};
