import React, { useState } from 'react';
import RankSelector from './components/RankSelector';
import PriceCalculator from './components/PriceCalculator';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import MemberArea from './components/MemberArea';
import PaymentModal from './components/PaymentModal';
import AuthModal from './components/auth/AuthModal';
import { Menu, X } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentRank, setCurrentRank] = useState('Iron');
  const [currentTier, setCurrentTier] = useState('I');
  const [desiredRank, setDesiredRank] = useState('Bronze');
  const [desiredTier, setDesiredTier] = useState('I');
  const [showMemberArea, setShowMemberArea] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const calculatePrice = () => {
    const rankValues: Record<string, number> = {
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

    const rankDifference = rankValues[desiredRank] - rankValues[currentRank];
    const basePrice = 20;
    return Math.max(0, rankDifference * basePrice);
  };

  const handleMemberAreaClick = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      setShowMemberArea(true);
    }
  };

  if (showMemberArea) {
    return <MemberArea onBack={() => setShowMemberArea(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0F1923] text-white">
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2933]/95 backdrop-blur-sm border-b border-[#FF4655]/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#FF4655]">Easy Boost</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#FF4655] transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#FF4655] transition-colors">Pricing</a>
              <button
                onClick={handleMemberAreaClick}
                className="bg-[#FF4655] hover:bg-[#FF4655]/90 px-6 py-2 rounded transition-colors font-medium"
              >
                {isAuthenticated ? 'Dashboard' : 'Login'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden p-2 text-gray-400 hover:text-[#FF4655] transition-colors"
            >
              {showMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#1F2933] border-b border-[#FF4655]/20 ${showMenu ? 'block' : 'hidden'}`}>
          <div className="px-4 py-3 space-y-3">
            <a
              href="#features"
              className="block text-gray-300 hover:text-[#FF4655] transition-colors"
              onClick={() => setShowMenu(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-[#FF4655] transition-colors"
              onClick={() => setShowMenu(false)}
            >
              Pricing
            </a>
            <button
              onClick={() => {
                handleMemberAreaClick();
                setShowMenu(false);
              }}
              className="w-full bg-[#FF4655] hover:bg-[#FF4655]/90 px-4 py-2 rounded transition-colors text-left"
            >
              {isAuthenticated ? 'Dashboard' : 'Login'}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <HeroSection />
        <Features />

        {/* Rank Selection */}
        <div id="pricing" className="py-16 px-4 bg-gradient-to-b from-[#1F2933]/50 to-[#0F1923]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Select Your <span className="text-[#FF4655]">Ranks</span>
            </h2>
            <RankSelector
              currentRank={currentRank}
              currentTier={currentTier}
              desiredRank={desiredRank}
              desiredTier={desiredTier}
              onCurrentRankChange={setCurrentRank}
              onCurrentTierChange={setCurrentTier}
              onDesiredRankChange={setDesiredRank}
              onDesiredTierChange={setDesiredTier}
            />
            <PriceCalculator
              currentRank={currentRank}
              desiredRank={desiredRank}
            />
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-[#FF4655] hover:bg-[#FF4655]/90 text-white font-bold py-3 px-8 rounded transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,70,85,0.5)]"
              >
                Start Boosting Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#1F2933]/50 backdrop-blur-sm py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Easy Boost. Not affiliated with Riot Games.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              All game content and materials are trademarks and copyrights of their respective owners.
            </p>
          </div>
        </footer>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={calculatePrice()}
        currentRank={currentRank}
        desiredRank={desiredRank}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setIsAuthenticated(true);
          setShowMemberArea(true);
        }}
      />
    </div>
  );
}

export default App;