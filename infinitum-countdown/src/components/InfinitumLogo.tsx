import React from 'react';

const InfinitumLogo: React.FC = () => {
  // You can add your logo import here:
  // import infinitumLogo from '../assets/infinitum-logo.png';
  // Then use: <img src={infinitumLogo} ... />
  
  return (
    <div className="flex items-center justify-center p-8 animate-fade-in">
      {/* Placeholder - Replace with your actual logo */}
      <div className="max-w-[800px] w-[90%] h-auto animate-pulse-glow">
        <div className="flex items-center justify-center gap-8">
          <div className="text-white text-6xl md:text-8xl font-bold font-montserrat tracking-wider animate-glow">
            INF
          </div>
          <div className="text-neon-pink text-8xl md:text-9xl font-bold animate-pulse-glow">
            ∞
          </div>
          <div className="text-white text-6xl md:text-8xl font-bold font-montserrat tracking-wider animate-glow">
            TUM
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinitumLogo;
