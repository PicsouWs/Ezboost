import React from 'react';
import { Camera, Save } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      
      <div className="relative w-32 h-32 mx-auto">
        <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-400">JD</span>
        </div>
        <button className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors">
          <Camera size={20} />
        </button>
      </div>

      <form className="space-y-6 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Display Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Discord Username</label>
            <input
              type="text"
              defaultValue="JohnDoe#1234"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Current Rank</label>
            <input
              type="text"
              defaultValue="Diamond II"
              disabled
              className="w-full bg-gray-700 rounded-lg px-4 py-2 opacity-75 cursor-not-allowed"
            />
          </div>
        </div>

        <button type="submit" className="flex items-center justify-center space-x-2 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
}