import React, { useState, useEffect } from "react";

const BackgroundCursorTrail = ({ images, maxImages = 8 }) => {
  const [positions, setPositions] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorPosition.x === 0 && cursorPosition.y === 0) return;

    setPositions((prev) => {
      const newPosition = {
        x: cursorPosition.x,
        y: cursorPosition.y,
        id: Date.now(),
        image: images[Math.floor(Math.random() * images.length)]
      };
      
      // Keep only the latest images up to maxImages
      const updatedPositions = [newPosition, ...prev].slice(0, maxImages);
      
      return updatedPositions;
    });
  }, [cursorPosition, images, maxImages]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {positions.map((pos, index) => (
        <div
          key={pos.id}
          className="absolute transition-all duration-1000 ease-out transform"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: 1 - (index / maxImages) * 0.8,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.05}) rotate(${index % 2 === 0 ? index * 3 : -index * 3}deg)`,
            transitionDelay: `${index * 50}ms`,
            filter: `blur(${index * 1}px) brightness(0.8)`,
            zIndex: 0
          }}
        >
          <img
            src={pos.image}
            alt=""
            className="w-32 h-40 object-cover rounded-lg shadow-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundCursorTrail;