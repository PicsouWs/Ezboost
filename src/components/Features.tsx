import React from 'react';
import { Shield, Zap, Users, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      Icon: Shield,
      title: 'Secure Boosting',
      description: '100% account safety guaranteed with VPN protection',
    },
    {
      Icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and efficient rank-up service',
    },
    {
      Icon: Users,
      title: 'Pro Boosters',
      description: 'Radiant ranked players with tournament experience',
    },
    {
      Icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
    },
  ];

  return (
    <div className="bg-[#1F2933]/30 backdrop-blur-sm py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}