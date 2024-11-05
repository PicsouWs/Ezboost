import React from 'react';
import { MoreVertical, Shield, User } from 'lucide-react';

interface UserManagementProps {
  searchQuery: string;
}

const mockUsers = [
  {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    role: 'User',
    status: 'Active',
    orders: 5,
    joinDate: '2024-02-15',
    lastLogin: '2024-03-15',
  },
  {
    id: 2,
    username: 'alexbooster',
    email: 'alex@example.com',
    role: 'Booster',
    status: 'Active',
    orders: 12,
    joinDate: '2024-01-20',
    lastLogin: '2024-03-15',
  },
  {
    id: 3,
    username: 'adminuser',
    email: 'admin@example.com',
    role: 'Admin',
    status: 'Active',
    orders: 0,
    joinDate: '2024-01-01',
    lastLogin: '2024-03-15',
  },
];

export default function UserManagement({ searchQuery }: UserManagementProps) {
  const filteredUsers = mockUsers.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getRoleBadge = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-[#FF4655]/20 text-[#FF4655]';
      case 'booster':
        return 'bg-purple-500/20 text-purple-500';
      default:
        return 'bg-blue-500/20 text-blue-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Management</h2>
        <button className="bg-[#FF4655] hover:bg-[#FF4655]/90 text-white px-4 py-2 rounded transition-colors">
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <User className="text-[#FF4655]" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">{mockUsers.length}</p>
        </div>
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Active Boosters</h3>
            <Shield className="text-purple-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">
            {mockUsers.filter(u => u.role === 'Booster').length}
          </p>
        </div>
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">New Today</h3>
            <User className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>

      <div className="bg-[#1F2933]/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1F2933]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Orders</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Join Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Last Login</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FF4655]/10">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#1F2933]/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#FF4655]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#FF4655] font-medium">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{user.username}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.orders}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{user.joinDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}