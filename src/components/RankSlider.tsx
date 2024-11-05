import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ranks = [
  {
    name: 'Iron',
    image: 'https://images.unsplash.com/photo-1614422264972-6d118cdd022e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    color: 'from-zinc-400 to-zinc-600'
  },
  {
    name: 'Gold',
    image: 'https://images.unsplash.com/photo-1614422264762-84f05c7e1f44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'Diamond',
    image: 'https://images.unsplash.com/photo-1614422264726-1e75b368b5d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    name: 'Radiant',
    image: 'https://images.unsplash.com/photo-1614422264151-5d8918c80938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    color: 'from-red-400 to-purple-600'
  }
];

export default function RankSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % ranks.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + ranks.length) % ranks.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full h-24 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      <div className="relative h-full overflow-hidden">
        {ranks.map((rank, index) => (
          <div
            key={rank.name}
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            onTransitionEnd={handleAnimationEnd}
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${rank.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${rank.color} opacity-20`} />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                    {rank.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">Click to boost to {rank.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}