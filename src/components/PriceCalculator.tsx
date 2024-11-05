import React, { useState } from 'react';
import { Euro, Clock, Tag, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface PriceCalculatorProps {
  currentRank: string;
  desiredRank: string;
}

const RANKS = [
  'Iron',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Diamond',
  'Ascendant',
  'Immortal',
  'Radiant'
] as const;

const RANK_VALUES: Record<string, number> = {
  Iron: 0,
  Bronze: 1,
  Silver: 2,
  Gold: 3,
  Platinum: 4,
  Diamond: 5,
  Ascendant: 6,
  Immortal: 7,
  Radiant: 8,
};

// Mock promo codes database
const PROMO_CODES: Record<string, number> = {
  'BOOST50': 0.5,  // 50% off
  'SUMMER': 0.5,   // 50% off
  'VIP': 0.5,      // 50% off
};

export default function PriceCalculator({ currentRank, desiredRank }: PriceCalculatorProps) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  const calculatePrice = () => {
    const rankDifference = RANK_VALUES[desiredRank] - RANK_VALUES[currentRank];
    const basePrice = 20;
    const rawPrice = Math.max(0, rankDifference * basePrice);
    return appliedDiscount ? rawPrice * (1 - appliedDiscount) : rawPrice;
  };

  const estimatedDays = () => {
    const rankDifference = Math.abs(
      RANKS.indexOf(desiredRank) - 
      RANKS.indexOf(currentRank)
    );
    return Math.max(1, Math.ceil(rankDifference * 0.5));
  };

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) {
      toast.error('Please enter a promo code');
      return;
    }

    setIsApplying(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const discount = PROMO_CODES[promoCode.toUpperCase()];
      
      if (discount) {
        setAppliedDiscount(discount);
        toast.success(`Promo code applied! ${discount * 100}% off`);
      } else {
        toast.error('Invalid promo code');
      }
    } catch (error) {
      toast.error('Failed to apply promo code');
    } finally {
      setIsApplying(false);
    }
  };

  const removePromoCode = () => {
    setAppliedDiscount(null);
    setPromoCode('');
    toast.success('Promo code removed');
  };

  return (
    <div className="bg-[#1F2933]/50 rounded-xl p-8 mt-12 w-full max-w-md mx-auto border-2 border-[#FF4655]/10 hover:border-[#FF4655]/30 transition-all duration-300">
      <div className="space-y-6">
        {/* Promo Code Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Tag size={16} />
              Promo Code
            </label>
            {appliedDiscount && (
              <span className="text-[#FF4655] text-sm font-medium">
                {appliedDiscount * 100}% OFF
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                placeholder="Enter code"
                className="w-full bg-[#1F2933] text-white rounded-lg px-4 py-3 border-2 border-[#FF4655]/10 focus:border-[#FF4655] transition-colors outline-none uppercase"
                disabled={!!appliedDiscount}
              />
              {appliedDiscount && (
                <button
                  onClick={removePromoCode}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF4655] transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {!appliedDiscount && (
              <button
                onClick={handleApplyPromo}
                disabled={isApplying}
                className="bg-[#FF4655]/10 hover:bg-[#FF4655]/20 text-[#FF4655] px-4 py-2 rounded transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isApplying ? 'Applying...' : 'Apply'}
              </button>
            )}
          </div>
        </div>

        <div className="border-t border-[#FF4655]/10 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Total Price:</h3>
            <div className="flex items-center">
              <Euro className="text-green-500" size={24} />
              <span className="text-3xl font-bold text-green-500">{calculatePrice().toFixed(2)}</span>
            </div>
          </div>
          
          {appliedDiscount && (
            <div className="flex items-center justify-end gap-2 mt-2">
              <span className="text-sm text-gray-400 line-through">
                €{(calculatePrice() / (1 - appliedDiscount)).toFixed(2)}
              </span>
              <span className="text-sm text-[#FF4655] font-medium">
                -{appliedDiscount * 100}%
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Estimated Time:</span>
          </div>
          <span className="font-medium">{estimatedDays()} days</span>
        </div>

        <div className="pt-4 border-t border-[#FF4655]/10">
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              ✓ 24/7 Professional Support
            </li>
            <li className="flex items-center gap-2">
              ✓ Radiant Ranked Boosters
            </li>
            <li className="flex items-center gap-2">
              ✓ VPN Protection Included
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}