import React, { useState, useEffect, useRef, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

const Slide1 = React.lazy(() => import('./components/slides/Slide1'));
const Slide2 = React.lazy(() => import('./components/slides/Slide2'));
const Slide3 = React.lazy(() => import('./components/slides/Slide3'));
const Slide4 = React.lazy(() => import('./components/slides/Slide4'));
const Slide5 = React.lazy(() => import('./components/slides/Slide5'));
const Slide6 = React.lazy(() => import('./components/slides/Slide6'));
const Slide7 = React.lazy(() => import('./components/slides/Slide7'));
const Slide8 = React.lazy(() => import('./components/slides/Slide8'));
const Slide9 = React.lazy(() => import('./components/slides/Slide9'));
const Slide10 = React.lazy(() => import('./components/slides/Slide10'));

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

// Fallback skeleton for cinematic lazy loading
const SlideLoadingFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black font-mono text-[#D32F2F]">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <span className="material-symbols-outlined text-4xl animate-spin" style={{ animationDuration: '0.5s' }}>
        hourglass_empty
      </span>
      <p className="text-xs uppercase tracking-[0.3em]">Decypting Next Scene...</p>
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTransitioningRef = useRef(false);

  const nextSlide = () => {
    if (isTransitioningRef.current) return;
    setCurrentSlide((prev) => {
      if (prev < slides.length - 1) {
        isTransitioningRef.current = true;
        setTimeout(() => { isTransitioningRef.current = false; }, 300);
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
        setTimeout(() => { isTransitioningRef.current = false; }, 300);
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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  const goToSlide = (index) => {
    if (isTransitioningRef.current) return;
    if (index >= 0 && index < slides.length) {
      isTransitioningRef.current = true;
      setTimeout(() => { isTransitioningRef.current = false; }, 300);
      setCurrentSlide(index);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-y-auto overflow-x-hidden relative flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <Suspense fallback={<SlideLoadingFallback />}>
          <CurrentSlideComponent key={currentSlide} nextSlide={nextSlide} prevSlide={prevSlide} goToSlide={goToSlide} currentSlide={currentSlide} />
        </Suspense>
      </AnimatePresence>

      {/* Left Navigation HUD */}
      <div className="fixed bottom-4 left-4 z-[9999] bg-black/50 backdrop-blur-md border border-[#D32F2F]/20 px-3 py-2 flex items-center gap-4 text-xs font-mono select-none">
        <button
          onClick={prevSlide}
          className={`hover:text-[#D32F2F] transition-colors px-2 py-1 border border-white/10 hover:border-[#D32F2F]/50 ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
        </button>
        <span className="text-[#D32F2F]/60">
          {'['} {(currentSlide + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')} {']'}
        </span>
        <button
          onClick={nextSlide}
          className={`hover:text-[#D32F2F] transition-colors px-2 py-1 border border-white/10 hover:border-[#D32F2F]/50 ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      {/* Right Navigation HUD (Matching Style) */}
      <div className="fixed bottom-4 right-4 z-[9999] bg-black/50 backdrop-blur-md border border-[#D32F2F]/20 px-3 py-2 flex items-center gap-4 text-xs font-mono select-none">
        <button
          onClick={prevSlide}
          className={`hover:text-[#D32F2F] transition-colors px-2 py-1 border border-white/10 hover:border-[#D32F2F]/50 ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
        </button>
        <span className="text-[#D32F2F]/60">
          {'['} {(currentSlide + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')} {']'}
        </span>
        <button
          onClick={nextSlide}
          className={`hover:text-[#D32F2F] transition-colors px-2 py-1 border border-white/10 hover:border-[#D32F2F]/50 ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-white/60'}`}
        >
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
