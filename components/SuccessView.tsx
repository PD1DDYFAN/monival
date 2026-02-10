
import React, { useState } from 'react';

const SuccessView: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [imgSrc, setImgSrc] = useState("https://media1.tenor.com/m/N74WfQfL2m8AAAAC/rose-cat.gif");

  const handleImageError = () => {
    if (imgSrc.includes("tenor")) {
      setImgSrc("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZxcXp6Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4JmFjdD1n/MDJ9IbxxvDUQM/giphy.gif");
    }
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return (
      <div 
        onClick={handleUnlock}
        className="cursor-pointer bg-white/95 backdrop-blur-lg p-12 rounded-[50px] shadow-2xl border-8 border-pink-300 max-w-sm w-full text-center relative z-20 animate-[pulse_2s_infinite] flex flex-col items-center justify-center gap-8 group hover:border-pink-500 transition-all duration-500"
      >
        <div className="relative">
            <div className="text-9xl group-hover:scale-110 transition-transform duration-500 transform group-hover:-rotate-12">🎁</div>
            <div className="absolute inset-0 flex items-center justify-center text-6xl mt-4 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100">💝</div>
        </div>
        <div className="space-y-4">
          <h2 className="cursive text-4xl text-pink-600">A Surprise for Monika</h2>
          <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white font-black py-4 px-8 rounded-full shadow-[0_10px_20px_-5px_rgba(236,72,153,0.5)] transform group-hover:scale-105 transition-transform uppercase tracking-widest text-sm flex items-center gap-3 justify-center">
            <span>Unlock My Heart</span>
            <span className="text-xl">✨</span>
          </div>
          <p className="text-pink-300 text-[10px] font-bold uppercase tracking-widest animate-pulse">Tap to open gift</p>
        </div>
        <div className="absolute -top-4 -right-4 bg-pink-100 text-pink-600 text-xs font-black px-4 py-2 rounded-full shadow-md -rotate-12 border-2 border-pink-200">
          FROM MOHAMED ❤️
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-lg p-8 md:p-12 rounded-[50px] shadow-2xl border-8 border-pink-300 max-w-xl w-full text-center relative z-20 animate-[bounce_1s_ease-in-out]">
      
      <div className="mb-8 relative flex justify-center items-center min-h-[256px] bg-pink-50 rounded-[40px] overflow-hidden shadow-inner border-4 border-pink-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 to-white opacity-60"></div>
        <img 
          src={imgSrc} 
          alt="Happy Rose Cat" 
          className="relative mx-auto w-full h-full object-contain"
          onError={handleImageError}
        />
        <div className="absolute top-4 right-4 text-5xl animate-bounce drop-shadow-md">🎉</div>
        <div className="absolute bottom-4 left-4 text-5xl animate-bounce delay-150 drop-shadow-md">💖</div>
      </div>

      <h1 className="cursive text-6xl md:text-7xl text-pink-600 mb-6 drop-shadow-sm">
        Yay!!! Hehe!
      </h1>
      
      <div className="space-y-6">
        <div className="relative inline-block">
            <span className="absolute -inset-1 bg-pink-100 blur rounded-lg opacity-30"></span>
            <p className="relative text-2xl md:text-3xl text-pink-500 font-black leading-tight">
              Monika, you've made me the happiest man alive! 🌎❤️
            </p>
        </div>
        
        <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 p-6 rounded-3xl border-2 border-pink-100 shadow-sm relative overflow-hidden h-[300px] overflow-y-auto custom-scrollbar">
          <div className="absolute top-0 left-0 w-full h-1 bg-pink-200"></div>
          <p className="text-lg text-pink-400 font-semibold italic leading-relaxed text-left px-2">
            "Baby you’ve got me so fucking hooked I can’t even think straight anymore. Every time I look at you my brain shorts out and all I want is to crawl inside your skin and live there forever. Your laugh, your pretty face, the way your eyes light up when you show them it’s like a drug I’m mainlining straight to the veins. Loving you isn’t just the best thing that’s ever happened to me, it’s the only thing that’s ever mattered. Before you I was just breathing, now every heartbeat screams your name. I’m addicted, obsessed, completely fucking ruined for anyone else and I wouldn’t trade this beautiful madness for anything in the world. Happy Valentine’s my princess."
          </p>
          <p className="mt-4 text-pink-600 font-black not-italic text-2xl text-right">- Mohamed</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-4xl animate-[pulse_1.5s_infinite]`} style={{ animationDelay: `${i * 200}ms` }}>
            ❤️
          </span>
        ))}
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-12 text-pink-200 hover:text-pink-400 text-xs font-black underline transition-all uppercase tracking-[0.2em]"
      >
        Restart Our Story
      </button>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fff5f7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fbcfe8;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default SuccessView;
