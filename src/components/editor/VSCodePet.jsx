import React, { useState, useEffect } from 'react';
import './vscodepet.css';

const VSCodePet = () => {
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [direction, setDirection] = useState(1);
  const [isWalking, setIsWalking] = useState(true);

  useEffect(() => {
    const movePet = () => {
      if (isWalking) {
        setPosition(prev => {
          const petWidth = 60;
          const maxX = window.innerWidth - petWidth - 20;
          let newX = prev.x + direction * 1.5;
          
          if (newX > maxX || newX < 20) {
            setDirection(-direction);
            return { ...prev, x: Math.max(20, Math.min(maxX, newX)) };
          }
          return { ...prev, x: newX };
        });
      }
    };

    const interval = setInterval(movePet, 30);
    return () => clearInterval(interval);
  }, [direction, isWalking]);

  return (
    <div 
      className={`vscode-pet ${direction === -1 ? 'flipped' : ''} ${isWalking ? 'walking' : 'paused'}`}
      style={{ left: `${position.x}px`, bottom: '22px' }}
      onClick={() => setIsWalking(!isWalking)}
      title={isWalking ? "Click to pause" : "Click to resume"}
    >
      <div className="pet-sprite dog">
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel ear-left"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel ear-right"></div>
          <div className="pixel"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel head"></div>
          <div className="pixel eye-left"></div>
          <div className="pixel head"></div>
          <div className="pixel nose"></div>
          <div className="pixel head"></div>
          <div className="pixel eye-right"></div>
          <div className="pixel"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel tongue"></div>
          <div className="pixel head"></div>
          <div className="pixel head"></div>
          <div className="pixel"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel leg-front-left"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel body"></div>
          <div className="pixel leg-front-right"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel leg-back-left"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel leg-back-right"></div>
        </div>
        <div className="pixel-row tail-row">
          <div className="pixel"></div>
          <div className="pixel tail-1"></div>
          <div className="pixel tail-2"></div>
          <div className="pixel tail-3"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
        </div>
      </div>
    </div>
  );
};

export default VSCodePet;
