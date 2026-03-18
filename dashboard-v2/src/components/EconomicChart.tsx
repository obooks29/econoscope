import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', gdp: 2.1, inflation: 28.2 },
  { name: 'Feb', gdp: 2.3, inflation: 29.5 },
  { name: 'Mar', gdp: 2.5, inflation: 31.2 },
  { name: 'Apr', gdp: 2.4, inflation: 33.1 },
  { name: 'May', gdp: 2.7, inflation: 32.8 },
  { name: 'Jun', gdp: 2.9, inflation: 31.5 },
];

export const EconomicChart: React.FC = () => {
  return (
    <div className="glass-card p-6 h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800">GDP Growth vs Inflation Trends</h3>
        <div className="flex gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-nigeria-green"></div>
            <span>GDP Growth (%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <span>Inflation (%)</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008751" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#008751" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}}
          />
          <Tooltip 
            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
          />
          <Area 
            type="monotone" 
            dataKey="gdp" 
            stroke="#008751" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorGdp)" 
          />
          <Line 
            type="monotone" 
            dataKey="inflation" 
            stroke="#f43f5e" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
