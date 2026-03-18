import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  LineChart as ChartIcon, 
  Bell, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Search,
  Globe,
  Zap,
  TrendingUp,
  Activity,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HealthScoreCard } from './components/HealthScoreCard';
import { EconomicChart } from './components/EconomicChart';
import { PriceAlerts } from './components/PriceAlerts';
import { ChatOracle } from './components/ChatOracle';
import { RegionalMap } from './components/RegionalMap';
import { cn } from './lib/utils';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <HealthScoreCard 
                title="GDP Growth Rate" 
                value="2.98" 
                unit="%" 
                change={0.4} 
                description="Q4 2025 Performance"
                icon={<TrendingUp size={20} />}
              />
              <HealthScoreCard 
                title="Inflation (Y-o-Y)" 
                value="31.5" 
                unit="%" 
                change={-1.2} 
                description="Slight decrease from last month"
                icon={<Activity size={20} />}
              />
              <HealthScoreCard 
                title="Exchange Rate" 
                value="1,540" 
                unit="₦/$" 
                change={0.8} 
                description="Parallel Market Average"
                icon={<DollarSign size={20} />}
              />
              <HealthScoreCard 
                title="Business Confidence" 
                value="64" 
                unit="/100" 
                change={5.0} 
                description="Survey of 500 SMEs"
                icon={<Zap size={20} />}
              />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <EconomicChart />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RegionalMap />
                  <PriceAlerts />
                </div>
              </div>
              <div className="xl:col-span-1">
                <ChatOracle />
              </div>
            </div>
          </motion.div>
        );
      case 'Economic Indicators':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <EconomicChart />
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Detailed Economic Analysis</h3>
              <p className="text-slate-500 max-w-2xl mx-auto">
                This section provides deep-dive analytics into Nigeria's fiscal and monetary policies. 
                In a production environment, this would integrate with CBN and NBS APIs for live data streaming.
              </p>
            </div>
          </motion.div>
        );
      case 'Price Alerts':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <PriceAlerts />
          </motion.div>
        );
      case 'AI Oracle':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <ChatOracle />
          </motion.div>
        );
      case 'Regional Data':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <RegionalMap />
            <div className="glass-card p-6">
              <h3 className="font-bold text-slate-800 mb-4">Regional Breakdown</h3>
              <div className="space-y-4">
                {['North West', 'North East', 'North Central', 'South West', 'South East', 'South South'].map(region => (
                  <div key={region} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">{region}</span>
                    <span className="text-nigeria-green font-bold">Stable</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 lg:relative lg:translate-x-0",
        !isSidebarOpen && "-translate-x-full lg:hidden"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-nigeria-green rounded-lg flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">EconoScope</h1>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            <NavItem 
              icon={<LayoutDashboard size={20} />} 
              label="Dashboard" 
              active={activeTab === 'Dashboard'} 
              onClick={() => setActiveTab('Dashboard')}
            />
            <NavItem 
              icon={<ChartIcon size={20} />} 
              label="Economic Indicators" 
              active={activeTab === 'Economic Indicators'} 
              onClick={() => setActiveTab('Economic Indicators')}
            />
            <NavItem 
              icon={<Bell size={20} />} 
              label="Price Alerts" 
              active={activeTab === 'Price Alerts'} 
              onClick={() => setActiveTab('Price Alerts')}
            />
            <NavItem 
              icon={<MessageSquare size={20} />} 
              label="AI Oracle" 
              active={activeTab === 'AI Oracle'} 
              onClick={() => setActiveTab('AI Oracle')}
            />
            <NavItem 
              icon={<Globe size={20} />} 
              label="Regional Data" 
              active={activeTab === 'Regional Data'} 
              onClick={() => setActiveTab('Regional Data')}
            />
          </nav>

          <div className="p-4 border-t border-slate-100 space-y-1">
            <NavItem icon={<Settings size={20} />} label="Settings" />
            <NavItem icon={<LogOut size={20} />} label="Logout" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu size={20} />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search indicators, states, or news..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm w-80 focus:outline-none focus:ring-2 focus:ring-nigeria-green/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <p className="text-xs font-bold text-slate-400 uppercase">Current Date</p>
              <p className="text-sm font-semibold text-slate-700">{new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{activeTab}</h2>
              <p className="text-slate-500">
                {activeTab === 'Dashboard' ? 'Real-time economic intelligence for 2 billion people in invisible economies.' : `Detailed view for ${activeTab}.`}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">Export Report</button>
              <button className="px-4 py-2 bg-nigeria-green text-white rounded-xl text-sm font-semibold hover:bg-nigeria-green-dark transition-colors">Generate Insights</button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
        active 
          ? "bg-nigeria-green/10 text-nigeria-green" 
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
      )}
    >
      {icon}
      <span>{label}</span>
      {active && <motion.div layoutId="activeNav" className="ml-auto w-1.5 h-1.5 rounded-full bg-nigeria-green" />}
    </button>
  );
}
