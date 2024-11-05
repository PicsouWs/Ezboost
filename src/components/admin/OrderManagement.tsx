import React from 'react';
import { MoreVertical, ArrowUp, Clock } from 'lucide-react';

interface OrderManagementProps {
  searchQuery: string;
}

const mockOrders = [
  {
    id: '#ORD-001',
    user: 'John Doe',
    fromRank: 'Gold III',
    toRank: 'Platinum II',
    status: 'In Progress',
    price: '€45.00',
    date: '2024-03-15',
    booster: 'Alex K.',
  },
  {
    id: '#ORD-002',
    user: 'Jane Smith',
    fromRank: 'Silver I',
    toRank: 'Gold III',
    status: 'Completed',
    price: '€35.00',
    date: '2024-03-14',
    booster: 'Mike R.',
  },
  {
    id: '#ORD-003',
    user: 'Robert Johnson',
    fromRank: 'Bronze II',
    toRank: 'Silver IV',
    status: 'Pending',
    price: '€25.00',
    date: '2024-03-13',
    booster: 'Unassigned',
  },
];

export default function OrderManagement({ searchQuery }: OrderManagementProps) {
  const filteredOrders = mockOrders.filter(order => 
    Object.values(order).some(value => 
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500/20 text-green-500';
      case 'in progress':
        return 'bg-blue-500/20 text-blue-500';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Order Management</h2>
        <button className="bg-[#FF4655] hover:bg-[#FF4655]/90 text-white px-4 py-2 rounded transition-colors">
          New Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-[#FF4655]">{mockOrders.length}</p>
        </div>
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Active Orders</h3>
          <p className="text-3xl font-bold text-blue-500">
            {mockOrders.filter(o => o.status === 'In Progress').length}
          </p>
        </div>
        <div className="bg-[#1F2933]/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Completed Today</h3>
          <p className="text-3xl font-bold text-green-500">
            {mockOrders.filter(o => o.status === 'Completed' && o.date === '2024-03-15').length}
          </p>
        </div>
      </div>

      <div className="bg-[#1F2933]/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1F2933]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Boost</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Booster</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Date</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FF4655]/10">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#1F2933]/30 transition-colors">
                  <td className="px-6 py-4 text-sm">{order.id}</td>
                  <td className="px-6 py-4 text-sm">{order.user}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <span>{order.fromRank}</span>
                      <ArrowUp className="text-[#FF4655]" size={16} />
                      <span>{order.toRank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{order.price}</td>
                  <td className="px-6 py-4 text-sm">{order.booster}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{order.date}</td>
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