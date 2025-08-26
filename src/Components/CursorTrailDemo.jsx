import React, { useState, useEffect, useRef } from "react";
import { SparklesIcon } from "lucide-react";

const ImageCursorTrail = ({
  items,
  maxNumberOfImages = 5,
  distance = 25,
  imgClass = "",
  className = "",
  children
}) => {
  const [positions, setPositions] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    if (cursorPosition.x === 0 && cursorPosition.y === 0) return;

    setPositions((prev) => {
      const newPosition = {
        x: cursorPosition.x,
        y: cursorPosition.y,
        id: Date.now(),
        item: items[Math.floor(Math.random() * items.length)]
      };
      
      // Keep only the latest images up to maxNumberOfImages
      const updatedPositions = [newPosition, ...prev].slice(0, maxNumberOfImages);
      
      return updatedPositions;
    });
  }, [cursorPosition, items, maxNumberOfImages]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ cursor: 'none' }}
    >
      {children}
      
      {/* Custom cursor */}
      <div
        className="absolute w-3 h-3 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          boxShadow: '0 0 10px rgba(255,255,255,0.7)'
        }}
      />
      
      {/* Trail images */}
      {positions.map((pos, index) => (
        <div
          key={pos.id}
          className={`absolute transition-all duration-700 ease-out pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-40 ${
            index === 0 ? 'opacity-100' : 'opacity-70'
          }`}
          style={{
            left: pos.x,
            top: pos.y,
            transitionDelay: `${index * 50}ms`,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.05})`,
            filter: `blur(${index * 2}px)`
          }}
        >
          <img
            src={pos.item}
            alt="Cursor trail"
            className={`object-cover rounded-lg shadow-lg transition-all duration-500 ${imgClass}`}
            style={{
              transform: `rotate(${index % 2 === 0 ? index * 3 : -index * 3}deg)`
            }}
          />
        </div>
      ))}
    </div>
  );
};

const CursorTrailDemo = () => {
  const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
    "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
    "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Image Cursor Trail Effect
        </h1>
        
        <section className="mx-auto w-full rounded-[24px] border border-white/10 p-2 shadow-lg mb-12">
          <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg md:rounded-b-[20px] md:rounded-t-[40px] ">
            <ImageCursorTrail
              items={images}
              maxNumberOfImages={5}
              distance={25}
              imgClass="sm:w-40 w-28 sm:h-48 h-36"
              className="max-w-4xl rounded-3xl min-h-[400px] flex items-center justify-center"
            >
              <article className="relative z-50 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white flex items-center gap-2">
                  <SparklesIcon className="fill-pink-300 text-transparent stroke-1" />
                  <span>Component Preview</span>
                </div>
                <h1 className="max-w-2xl text-center text-4xl md:text-5xl font-semibold tracking-tight text-white">
                  Images That Follow the Cursor - Cool Right?
                </h1>
                <p className="mt-4 text-lg text-white/80 max-w-xl">
                  Move your cursor around to see the effect. Each image in the trail follows with a slight delay creating a beautiful flowing effect.
                </p>
              </article>
            </ImageCursorTrail>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/80">
              This component tracks your cursor movement and displays a trail of images that follow with a slight delay. 
              The images are randomly selected from the provided array.
            </p>
            <ul className="mt-4 text-white/80 list-disc pl-5 space-y-2">
              <li>Customizable number of images in the trail</li>
              <li>Adjustable distance between images</li>
              <li>Responsive design that works on all screen sizes</li>
              <li>Smooth animations and transitions</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Try It Out</h2>
            <p className="text-white/80">
              Move your cursor across the demo area above to see the effect in action. 
              The component is fully customizable and can be integrated into any React project.
            </p>
            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <code className="text-sm text-white/80">
                {`<ImageCursorTrail\n  items={imagesArray}\n  maxNumberOfImages={5}\n  distance={25}\n/>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursorTrailDemo;