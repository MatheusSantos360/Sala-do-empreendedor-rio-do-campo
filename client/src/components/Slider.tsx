"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  /** Tempo em ms entre transições automáticas. Opcional, padrão 5000ms */
  autoplayInterval?: number;
  /** Altura do slider em pixels. Opcional, padrão 384px (h-96) */
  height?: string;
  /** Largura máxima do slider. Opcional, padrão 4xl */
  maxWidth?: string;
}

const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "Experiência Natural",
    description: "Design intuitivo que proporciona uma experiência fluida",
    image: "/entrepreneur-writing.jpg",
  },
  {
    id: 2,
    title: "Tecnologia Avançada",
    description: "Usando as mais recentes inovações em design de interface",
    image: "/entrepreneur-writing.jpg",
  },
  {
    id: 3,
    title: "Performance Excepcional",
    description: "Otimizado para uma experiência suave e responsiva",
    image: "/entrepreneur-writing.jpg",
  },
];

export const Slider: React.FC<SliderProps> = ({ autoplayInterval = 5000, height = "h-96", maxWidth = "max-w-4xl" }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [slides] = useState<Slide[]>(defaultSlides);

  const goToSlide = useCallback(
    (index: number): void => {
      if (!isAnimating && index !== currentSlide) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [isAnimating, currentSlide]
  );

  const nextSlide = useCallback((): void => {
    if (!isAnimating) {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }
  }, [currentSlide, isAnimating, slides.length, goToSlide]);

  const prevSlide = (): void => {
    if (!isAnimating) {
      const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      goToSlide(prev);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoplayInterval]);

  const getSlideTransitionClasses = (index: number): string => {
    if (index === currentSlide) return "translate-x-0 opacity-100";
    if (index < currentSlide) return "-translate-x-full opacity-0";
    return "translate-x-full opacity-0";
  };

  return (
    <div className={`relative w-full ${maxWidth} mx-auto ${height} overflow-hidden rounded-xl shadow-2xl`}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
              ${getSlideTransitionClasses(index)}`}
            role="group"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={currentSlide !== index}
          >
            <Image src={slide.image} alt={slide.title} width={800} height={400} className="w-full h-full object-cover" loading="lazy" />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-white text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-white/90 text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 
                   backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200
                   shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        disabled={isAnimating}
        aria-label="Previous slide"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30
                   backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200
                   shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        disabled={isAnimating}
        aria-label="Next slide"
      >
        {">"}
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                       ${index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"}`}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
