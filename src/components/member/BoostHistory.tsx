import React from 'react';
import { ArrowUp, Clock } from 'lucide-react';

const boostHistory = [
  {
    id: 1,
    date: '2024-03-15',
    fromRank: 'Gold III',
    toRank: 'Platinum II',
    status: 'Completed',
    duration: '2 days',
  },
  {
    id: 2,
    date: '2024-03-10',
    fromRank: 'Gold I',
    toRank: 'Gold III',
    status: 'Completed',
    duration: '1 day',
  },
  {
    id: 3,
    date: '2024-03-01',
    fromRank: 'Silver II',
    toRank: 'Gold I',
    status: 'Completed',
    duration: '3 days',
  },
];

export default function BoostHistory() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Boost History</h2>
      
      <div className="space-y-4">
        {boostHistory.map((boost) => (
          <div
            key={boost.id}
            className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <ArrowUp className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="font-semibold">
                    {boost.fromRank} → {boost.toRank}
                  </p>
                  <p className="text-sm text-gray-400">{boost.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold">{boost.status}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock size={14} className="mr-1" />
                  {boost.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-400 pt-4">
        <p>Showing last 3 boosts</p>
      </div>
    </div>
  );
}