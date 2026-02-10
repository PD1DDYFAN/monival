
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [items, setItems] = useState<{ id: number; left: string; duration: string; size: string; content: string; isText: boolean }[]>([]);

  const phrases = [
    "I love you", "my girl", "my baby", "my princess", "Monika ❤️", 
    "cutie pie", "habibi", "my soulmate", "my everything", "my queen",
    "sweetheart", "angel", "my world", "forever"
  ];

  const symbols = ["❤️", "💖", "🌸", "💕", "🌹", "✨"];

  useEffect(() => {
    const interval = setInterval(() => {
      const isText = Math.random() > 0.6;
      const content = isText 
        ? phrases[Math.floor(Math.random() * phrases.length)]
        : symbols[Math.floor(Math.random() * symbols.length)];

      // Using a consistent duration range for "same speed" feeling
      const sharedDuration = `${10 + Math.random() * 5}s`;

      const newItem = {
        id: Date.now() + Math.random(),
        left: `${Math.random() * 100}%`,
        duration: sharedDuration,
        size: isText ? `${14 + Math.random() * 6}px` : `${16 + Math.random() * 20}px`,
        content: content,
        isText: isText
      };
      
      setItems((prev) => [...prev.slice(-30), newItem]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className={`heart absolute bottom-[-120px] whitespace-nowrap select-none flex items-center gap-1 ${
            item.isText 
              ? 'text-pink-400 font-bold italic cursive opacity-80' 
              : 'text-pink-300 opacity-60'
          }`}
          style={{
            left: item.left,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
