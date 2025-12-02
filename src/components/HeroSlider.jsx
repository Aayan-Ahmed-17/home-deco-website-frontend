import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Transform Your Space',
    subtitle: 'Discover premium home decor that reflects your style',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    title: 'Modern Living',
    subtitle: 'Curated collections for contemporary homes',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    title: 'Timeless Elegance',
    subtitle: 'Furniture and decor that stands the test of time',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1920&q=80',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle every 5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[7000ms] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div className="container mx-auto px-8">
              <div className={`max-w-2xl transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 relative overflow-hidden group">
                  <span className="relative z-10">Shop Now</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm z-20 animate-fadeInUp">
          Paused
        </div>
      )}
    </div>
  );
};
