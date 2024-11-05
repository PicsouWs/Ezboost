import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const ranks = [
  { 
    name: 'Iron', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/3/smallicon.png',
    color: '#555555'
  },
  { 
    name: 'Bronze', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/6/smallicon.png',
    color: '#A17551'
  },
  { 
    name: 'Silver', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/9/smallicon.png',
    color: '#B1B1B1'
  },
  { 
    name: 'Gold', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/12/smallicon.png',
    color: '#EAB348'
  },
  { 
    name: 'Platinum', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/15/smallicon.png',
    color: '#4EC0A1'
  },
  { 
    name: 'Diamond', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/18/smallicon.png',
    color: '#B489C4'
  },
  { 
    name: 'Ascendant', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/21/smallicon.png',
    color: '#6DD592'
  },
  { 
    name: 'Immortal', 
    tiers: ['I', 'II', 'III'],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/smallicon.png',
    color: '#BB3B6E'
  },
  { 
    name: 'Radiant', 
    tiers: [''],
    icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/25/smallicon.png',
    color: '#FFFAB7'
  },
];

interface RankSelectorProps {
  currentRank: string;
  currentTier: string;
  desiredRank: string;
  desiredTier: string;
  onCurrentRankChange: (rank: string) => void;
  onCurrentTierChange: (tier: string) => void;
  onDesiredRankChange: (rank: string) => void;
  onDesiredTierChange: (tier: string) => void;
}

export default function RankSelector({
  currentRank,
  currentTier,
  desiredRank,
  desiredTier,
  onCurrentRankChange,
  onCurrentTierChange,
  onDesiredRankChange,
  onDesiredTierChange,
}: RankSelectorProps) {
  const RankSelect = ({ value, onChange, label }: { value: string; onChange: (rank: string) => void; label: string }) => {
    const selectedRank = ranks.find(r => r.name === value);
    
    return (
      <div className="relative group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-3 pl-14 pr-10 appearance-none cursor-pointer border-2 border-[#FF4655]/10 hover:border-[#FF4655]/30 focus:border-[#FF4655] transition-all duration-300 outline-none shadow-lg hover:shadow-xl"
          style={{
            textShadow: `0 0 10px ${selectedRank?.color}40`
          }}
        >
          {ranks.map((rank) => (
            <option key={rank.name} value={rank.name}>
              {rank.name}
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#1F2933] border-2 border-[#FF4655]/20 group-hover:border-[#FF4655]/40 transition-all duration-300 flex items-center justify-center">
          <img 
            src={selectedRank?.icon} 
            alt={`${value} rank`}
            className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF4655]/40 group-hover:text-[#FF4655]/60 transition-colors duration-300 pointer-events-none" size={20} />
        <span className="absolute -top-6 left-0 text-sm text-gray-400 font-medium">{label}</span>
      </div>
    );
  };

  const TierSelect = ({ value, onChange, rank }: { value: string; onChange: (tier: string) => void; rank: string }) => (
    <div className="relative group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-3 appearance-none cursor-pointer border-2 border-[#FF4655]/10 hover:border-[#FF4655]/30 focus:border-[#FF4655] transition-all duration-300 outline-none shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={rank === 'Radiant'}
      >
        {ranks.find((r) => r.name === rank)?.tiers.map((tier) => (
          <option key={tier} value={tier}>
            {tier}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF4655]/40 group-hover:text-[#FF4655]/60 transition-colors duration-300 pointer-events-none" size={20} />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-5xl mx-auto">
      <div className="flex-1 w-full space-y-8">
        <h3 className="text-xl font-bold text-[#FF4655] flex items-center">
          Current Rank
          <span className="ml-2 text-sm font-normal text-gray-400">Where are you now?</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <RankSelect value={currentRank} onChange={onCurrentRankChange} label="Rank" />
          <TierSelect value={currentTier} onChange={onCurrentTierChange} rank={currentRank} />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <ArrowRight className="text-[#FF4655]/60" size={32} />
      </div>

      <div className="flex-1 w-full space-y-8">
        <h3 className="text-xl font-bold text-[#FF4655] flex items-center">
          Desired Rank
          <span className="ml-2 text-sm font-normal text-gray-400">Where do you want to be?</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <RankSelect value={desiredRank} onChange={onDesiredRankChange} label="Rank" />
          <TierSelect value={desiredTier} onChange={onDesiredTierChange} rank={desiredRank} />
        </div>
      </div>
    </div>
  );
}