import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTransitioningRef = useRef(false);

  const nextSlide = () => {
    if (isTransitioningRef.current) return;
    setCurrentSlide((prev) => {
      if (prev < slides.length - 1) {
        isTransitioningRef.current = true;
        setTimeout(() => { isTransitioningRef.current = false; }, 800);
        return prev + 1;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    if (isTransitioningRef.current) return;
    setCurrentSlide((prev) => {
      if (prev > 0) {
        isTransitioningRef.current = true;
        setTimeout(() => { isTransitioningRef.current = false; }, 800);
        return prev - 1;
      }
      return prev;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>

      {/* Global Navigation HUD overlay (optional if slide headers aren't enough) */}
      <div className="fixed bottom-4 right-4 z-[9999] bg-black/50 backdrop-blur-md border border-[#D32F2F]/20 px-3 py-1 flex items-center gap-4 text-xs font-mono select-none">
        <button
          onClick={prevSlide}
          className={`hover:text-[#D32F2F] transition-colors ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          &lt;_PREV
        </button>
        <span className="text-[#D32F2F]/60">
          {'['} {(currentSlide + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')} {']'}
        </span>
        <button
          onClick={nextSlide}
          className={`hover:text-[#D32F2F] transition-colors ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          NEXT_&gt;
        </button>
      </div>
    </div>
  );
}
