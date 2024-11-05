import React, { useState } from 'react';
import { Users, Package, Settings, ChevronDown, Search, Bell, LogOut } from 'lucide-react';
import UserManagement from './UserManagement';
import OrderManagement from './OrderManagement';
import AdminSettings from './AdminSettings';

interface AdminDashboardProps {
  onExit: () => void;
}

export default function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('orders');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement searchQuery={searchQuery} />;
      case 'orders':
        return <OrderManagement searchQuery={searchQuery} />;
      case 'settings':
        return <AdminSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-white">
      {/* Top Navigation */}
      <nav className="bg-[#1F2933]/95 border-b border-[#FF4655]/20 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-[#FF4655]">Admin Dashboard</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#0F1923] text-white rounded-lg pl-10 pr-4 py-2 w-64 border border-[#FF4655]/20 focus:border-[#FF4655] transition-colors outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF4655] rounded-full"></span>
            </button>

            <button
              onClick={onExit}
              className="flex items-center space-x-2 text-gray-400 hover:text-[#FF4655] transition-colors"
            >
              <LogOut size={20} />
              <span>Exit</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#FF4655] text-white'
                  : 'bg-[#1F2933]/50 text-gray-400 hover:bg-[#1F2933] hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Package size={20} />
                <span>Orders</span>
              </div>
              <ChevronDown size={16} className={activeTab === 'orders' ? 'rotate-180' : ''} />
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                activeTab === 'users'
                  ? 'bg-[#FF4655] text-white'
                  : 'bg-[#1F2933]/50 text-gray-400 hover:bg-[#1F2933] hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users size={20} />
                <span>Users</span>
              </div>
              <ChevronDown size={16} className={activeTab === 'users' ? 'rotate-180' : ''} />
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                activeTab === 'settings'
                  ? 'bg-[#FF4655] text-white'
                  : 'bg-[#1F2933]/50 text-gray-400 hover:bg-[#1F2933] hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings size={20} />
                <span>Settings</span>
              </div>
              <ChevronDown size={16} className={activeTab === 'settings' ? 'rotate-180' : ''} />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#1F2933]/30 rounded-lg p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}