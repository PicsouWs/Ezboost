import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#1F2933]/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-[#FF4655]/20 hover:border-[#FF4655] group">
      <div className="text-center">
        <Icon className="mx-auto text-[#FF4655] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#FF4655] transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}