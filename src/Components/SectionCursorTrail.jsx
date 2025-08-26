import React, { useState, useEffect, useRef } from "react";

const SectionCursorTrail = ({ 
  images, 
  maxImages = 5, 
  children, 
  className = "",
  imgClass = "w-32 h-40"
}) => {
  const [positions, setPositions] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Clear the trail when leaving the section
      setPositions([]);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    if (!isHovering || (cursorPosition.x === 0 && cursorPosition.y === 0)) return;

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
  }, [cursorPosition, images, maxImages, isHovering]);

  return (
    <section 
      ref={sectionRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ cursor: 'none' }}
    >
      {children}
      
      {/* Custom cursor for this section only */}
      {isHovering && (
        <div
          className="absolute w-3 h-3 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            opacity: 0.8,
            transform: `translate(-50%, -50%)  rotate(${Math.random() * 360}deg)`
          }}
        />
      )}
      
      {/* Trail images - only show when hovering */}
      {isHovering && positions.map((pos, index) => (
        <div
          key={pos.id}
          className="absolute transition-all duration-700  pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: 1 - (index / maxImages) * 0.8,
            // transform: `translate(-50%, -50%) scale(${1 - index * 0.05}) rotate(${index % 2 === 0 ? index * 3 : -index * 3}deg)`,
            // transitionDelay: `${index * 50}ms`,
            // filter: `blur(${index * 1}px) brightness(0.9)`
          }}
        >
          <img
            src={pos.image}
            alt=""
            className={`object-cover rounded-lg shadow-xl ${imgClass}`}
          />
        </div>
      ))}
    </section>
  );
};

export default SectionCursorTrail;