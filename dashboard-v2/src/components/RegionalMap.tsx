import React from 'react';
import { MapPin } from 'lucide-react';

export const RegionalMap: React.FC = () => {
  // Simple SVG representation of Nigeria's regions for low-bandwidth
  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <MapPin size={18} className="text-nigeria-green" />
          Regional Economic Activity
        </h3>
        <select className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none">
          <option>All Regions</option>
          <option>North West</option>
          <option>North East</option>
          <option>North Central</option>
          <option>South West</option>
          <option>South East</option>
          <option>South South</option>
        </select>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <svg viewBox="0 0 500 400" className="w-full h-full max-h-[300px]">
          {/* Simplified Nigeria Map Outline */}
          <path 
            d="M50,100 L150,50 L350,50 L450,100 L450,300 L350,350 L150,350 L50,300 Z" 
            fill="#f8fafc" 
            stroke="#e2e8f0" 
            strokeWidth="2"
          />
          {/* Example Hotspots */}
          <circle cx="150" cy="250" r="15" fill="#008751" fillOpacity="0.6" className="animate-pulse">
            <title>Lagos: High Activity</title>
          </circle>
          <circle cx="250" cy="150" r="12" fill="#008751" fillOpacity="0.4">
            <title>Abuja: Medium Activity</title>
          </circle>
          <circle cx="350" cy="280" r="10" fill="#008751" fillOpacity="0.3">
            <title>Port Harcourt: Oil Sector</title>
          </circle>
          <circle cx="200" cy="100" r="8" fill="#f59e0b" fillOpacity="0.4">
            <title>Kano: Trade Hub</title>
          </circle>
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 text-[10px] font-bold text-slate-400 uppercase">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-nigeria-green"></div>
            <span>Growth</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span>Stable</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            <span>Alert</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-3 bg-slate-50 rounded-xl">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Top Performer</p>
          <p className="text-sm font-bold text-slate-700">Lagos State</p>
          <p className="text-xs text-emerald-600 font-medium">+4.2% Growth</p>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Emerging Hub</p>
          <p className="text-sm font-bold text-slate-700">Kano State</p>
          <p className="text-xs text-amber-600 font-medium">+1.8% Growth</p>
        </div>
      </div>
    </div>
  );
};
