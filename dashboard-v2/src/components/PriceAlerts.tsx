import React from 'react';
import { Bell, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../lib/utils';

const alerts = [
  { id: '1', commodity: 'Premium Motor Spirit (PMS)', price: 617, change: 12.5, trend: 'up' },
  { id: '2', commodity: 'Rice (50kg Bag)', price: 75000, change: 5.2, trend: 'up' },
  { id: '3', commodity: 'Cement (Dangote)', price: 8500, change: -2.1, trend: 'down' },
  { id: '4', commodity: 'USD/NGN (Parallel)', price: 1540, change: 0.8, trend: 'up' },
];

export const PriceAlerts: React.FC = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Bell size={18} className="text-nigeria-green" />
          Market Price Watch
        </h3>
        <button className="text-xs font-semibold text-nigeria-green hover:underline">View All</button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-slate-700">{alert.commodity}</p>
              <p className="text-xs text-slate-400">Last updated 2h ago</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 data-value">₦{alert.price.toLocaleString()}</p>
              <div className={cn(
                "flex items-center justify-end gap-1 text-[10px] font-bold uppercase",
                alert.trend === 'up' ? "text-rose-500" : "text-emerald-500"
              )}>
                {alert.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {Math.abs(alert.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
