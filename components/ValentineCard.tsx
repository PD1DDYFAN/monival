
import React, { useState, useEffect } from 'react';

interface ValentineCardProps {
  onYes: () => void;
  onNo: () => void;
  noCount: number;
}

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes, onNo, noCount }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isDodgeMode, setIsDodgeMode] = useState(false);
  const [imgSrc, setImgSrc] = useState("https://media1.tenor.com/m/66N4746fM9AAAAAC/dog-holding-flower.gif");

  const phrases = [
    "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", 
    "Surely not?", "You might regret this!", "Give it another thought!", 
    "Are you absolutely sure?", "This could be a mistake!", "Have a heart!", 
    "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?", 
    "Is that your final answer?", "You're breaking my heart ;("
  ];

  useEffect(() => {
    if (noCount > 0) setIsDodgeMode(true);
  }, [noCount]);

  const handleNoHover = () => {
    if (isDodgeMode) {
      const x = (Math.random() - 0.5) * 300;
      const y = (Math.random() - 0.5) * 300;
      setNoPosition({ x, y });
    }
  };

  const handleImageError = () => {
    // If the Tenor media1 link fails, try a high-quality Giphy fallback
    if (imgSrc.includes("tenor")) {
      setImgSrc("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDE2NncwaGVkeDY3NDNsM2lqd25rbWFoMTAzYXBpYjE1NGg2dXE3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t8xgPfC5oNIRMrNooe/giphy.gif");
    }
  };

  const yesButtonSize = Math.min(1 + noCount * 0.25, 4);

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-[40px] shadow-2xl border-8 border-pink-200 max-w-md w-full text-center transform transition-all duration-500 hover:scale-[1.02] relative z-10">
      <div className="mb-6 relative flex justify-center items-center min-h-[256px] bg-pink-50 rounded-3xl overflow-hidden shadow-inner border-2 border-pink-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-100/30"></div>
        <img 
          src={imgSrc} 
          alt="Cute Dog" 
          className="relative mx-auto w-full h-full object-contain"
          onError={handleImageError}
        />
      </div>
      
      <div className="space-y-1 mb-6">
        <h1 className="cursive text-5xl text-pink-600 drop-shadow-sm">
          Monika...
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-pink-200"></div>
          <p className="text-xl text-pink-400 font-medium italic">
            from Mohamed
          </p>
          <div className="h-px w-8 bg-pink-200"></div>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-pink-500 font-bold mb-8 leading-relaxed">
        Will you be my Valentine? 🌹
      </p>

      <div className="flex flex-col items-center justify-center gap-6 min-h-[160px]">
        <button
          onClick={onYes}
          style={{ transform: `scale(${yesButtonSize})` }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-extrabold py-4 px-12 rounded-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.6)] transition-all duration-300 active:scale-95 z-20 whitespace-nowrap animate-pulse"
        >
          YES! ❤️
        </button>

        <button
          onMouseEnter={handleNoHover}
          onClick={() => { onNo(); handleNoHover(); }}
          style={{ 
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          className="bg-gray-50 hover:bg-white text-gray-400 font-semibold py-2 px-6 rounded-full shadow-sm transition-all border border-gray-100 text-sm"
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>

      {noCount > 0 && (
        <p className="mt-6 text-pink-300 text-xs italic animate-bounce font-medium uppercase tracking-widest">
          Mohamed is waiting... ✨
        </p>
      )}
    </div>
  );
};

export default ValentineCard;
