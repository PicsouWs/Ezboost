import React from 'react';
import { Save, Euro, Percent, Clock } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">System Settings</h2>
        <button className="flex items-center space-x-2 bg-[#FF4655] hover:bg-[#FF4655]/90 text-white px-4 py-2 rounded transition-colors">
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pricing Settings */}
        <div className="bg-[#1F2933]/50 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Euro size={20} className="text-[#FF4655]" />
            Pricing Settings
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Base Price per Rank (€)
              </label>
              <input
                type="number"
                defaultValue={20}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Rush Order Multiplier
              </label>
              <input
                type="number"
                defaultValue={1.5}
                step={0.1}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>
          </div>
        </div>

        {/* Discount Settings */}
        <div className="bg-[#1F2933]/50 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Percent size={20} className="text-[#FF4655]" />
            Discount Settings
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                First Order Discount (%)
              </label>
              <input
                type="number"
                defaultValue={10}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Bulk Order Discount (%)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>
          </div>
        </div>

        {/* Time Settings */}
        <div className="bg-[#1F2933]/50 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Clock size={20} className="text-[#FF4655]" />
            Time Settings
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Order Expiry (days)
              </label>
              <input
                type="number"
                defaultValue={30}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Auto-cancel Unpaid Orders (hours)
              </label>
              <input
                type="number"
                defaultValue={24}
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-2 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-[#1F2933]/50 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-semibold">System Status</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">
                Maintenance Mode
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4655]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">
                Allow New Registrations
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4655]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">
                Email Notifications
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4655]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}