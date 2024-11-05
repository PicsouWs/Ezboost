import React from 'react';
import { User, History, Settings, LogOut, ArrowLeft, Shield } from 'lucide-react';
import BoostHistory from './member/BoostHistory';
import ProfileSettings from './member/ProfileSettings';
import AdminDashboard from './admin/AdminDashboard';

interface MemberAreaProps {
  onBack: () => void;
}

export default function MemberArea({ onBack }: MemberAreaProps) {
  const [activeTab, setActiveTab] = React.useState('profile');
  const [showAdminDashboard, setShowAdminDashboard] = React.useState(false);

  // Mock admin check - in a real app, this would come from your auth system
  const isAdmin = true;

  if (showAdminDashboard) {
    return <AdminDashboard onExit={() => setShowAdminDashboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0F1923] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2933]/95 backdrop-blur-sm border-b border-[#FF4655]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
            <span className="text-xl font-bold text-[#FF4655]">Member Area</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#1F2933]/50 rounded-lg p-4">
            <div className="flex items-center space-x-4 mb-8 p-4 bg-[#1F2933]/50 rounded-lg">
              <div className="w-12 h-12 bg-[#FF4655] rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-400">Premium Member</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'profile' ? 'bg-[#FF4655] text-white' : 'hover:bg-[#1F2933]'
                }`}
              >
                <User size={20} />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'history' ? 'bg-[#FF4655] text-white' : 'hover:bg-[#1F2933]'
                }`}
              >
                <History size={20} />
                <span>Boost History</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'settings' ? 'bg-[#FF4655] text-white' : 'hover:bg-[#1F2933]'
                }`}
              >
                <Settings size={20} />
                <span>Settings</span>
              </button>
              {isAdmin && (
                <button
                  onClick={() => setShowAdminDashboard(true)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#FF4655] hover:bg-[#1F2933] transition-colors"
                >
                  <Shield size={20} />
                  <span>Admin Dashboard</span>
                </button>
              )}
              <button 
                onClick={onBack}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#FF4655] hover:bg-[#1F2933] transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#1F2933]/50 rounded-lg p-6">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'history' && <BoostHistory />}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Email Notifications</label>
                    <div className="flex items-center space-x-4">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-[#FF4655]" />
                      <span>Receive boost updates via email</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Two-Factor Authentication</label>
                    <button className="bg-[#FF4655] text-white px-4 py-2 rounded hover:bg-[#FF4655]/90 transition-colors w-fit">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}