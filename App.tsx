
import React, { useState, useEffect, useCallback } from 'react';
import FloatingHearts from './components/FloatingHearts';
import ValentineCard from './components/ValentineCard';
import SuccessView from './components/SuccessView';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonCount, setNoButtonCount] = useState(0);

  const handleYes = () => {
    setIsAccepted(true);
  };

  const handleNoClick = () => {
    setNoButtonCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-pink-100 flex items-center justify-center p-4">
      <FloatingHearts />
      
      {!isAccepted ? (
        <ValentineCard 
          onYes={handleYes} 
          onNo={handleNoClick} 
          noCount={noButtonCount} 
        />
      ) : (
        <SuccessView />
      )}

      {/* Footer Branding */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-pink-400 text-sm font-semibold">
        Made with Love by Mohamed for Monika ❤️
      </div>
    </div>
  );
};

export default App;
