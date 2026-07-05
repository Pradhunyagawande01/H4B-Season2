import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

const images = [
  "/images/img1.png",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.png",
  "/images/img5.jpg",
  "/images/img6.png",
  "/images/img7.jpg",
  "/images/img8.png",
  "/images/img9.png",
  "/images/img10.png",
  "/images/img11.png",
  "/images/img12.png",
  "/images/img13.png",
  "/images/img14.png",
  "/images/img15.png",
  "/images/img16.png",
  "/images/img17.png",
  "/images/img18.png",
  "/images/img19.png",
  "/images/20.png",
  "/images/21.png",
  "/images/22.png",
  "/images/23.png",
];

const imageSizes = [
  "large", "medium", "small", "medium", "large", "small", "medium", "large",
  "small", "medium", "large", "small", "medium", "large", "small", "medium",
  "small", "large", "medium", "small", "medium", "large", "small",
];

const ArweaveGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Refs for ultra-smooth 120fps direct DOM animation (0 React re-renders)
  const itemRefs = useRef([]);
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);
  const animationFrameId = useRef(null);

  // Stacking Parallax Engine
  useEffect(() => {
    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    const updateParallax = () => {
      // Linear interpolation (lerp) for buttery smooth momentum
      currentScrollY.current += (targetScrollY.current - currentScrollY.current) * 0.08;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        /**
         * STACKING MATHEMATICS:
         * CHANGE #3: Reduced speed multiplier from 0.025 to 0.015
         * This makes the upward scroll effect slower
         */
        const progressiveSpeed = 0.05 + Math.pow(index, 1.15) * 0.015;
        const offsetY = -currentScrollY.current * progressiveSpeed;

        // Apply GPU-accelerated 3D transform
        el.style.transform = `translate3d(0, ${offsetY}px, 0)`;
      });

      animationFrameId.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId.current = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "unset";
  }, [selectedImage]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft" && selectedImage > 0) setSelectedImage(selectedImage - 1);
      if (e.key === "ArrowRight" && selectedImage < images.length - 1) setSelectedImage(selectedImage + 1);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  const getSizeClasses = (size) => {
    const base = "relative overflow-hidden rounded-2xl bg-gray-950 shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/80";
    switch (size) {
      case "small": return `${base} aspect-[4/3]`;
      case "medium": return `${base} aspect-[3/4] sm:row-span-2`;
      case "large": return `${base} aspect-[4/5] sm:row-span-2 sm:col-span-1`;
      default: return base;
    }
  };

  return (
    <div className=" text-black selection:bg-white selection:text-black min-h-fit">
      {/* Header */}
      <header className="relative z-10 mx-auto max-w-4xl px-6 pt-32  text-center md:pt-40 md:pb-32">
        <h1 className="text-[#3B4421] title mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl ">
          Our Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#3B4421] sm:text-lg subtitle">
          Moments from the @HACK4BRAHMA journey.
        </p>
      </header>

      {/* Masonry Grid Section */}
      {/* CHANGE #1: Increased gap-y from gap-6 to gap-y-12 (vertical gap between rows) */}
      {/* CHANGE #2: Added pb-16 instead of no padding to reduce bottom space */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 lg:gap-y-60">
          {images.map((src, index) => {
            const size = imageSizes[index];

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => setSelectedImage(index)}
                style={{
                  zIndex: index + 10,
                  willChange: "transform",
                }}
                className={`
                  ${getSizeClasses(size)}
                  group cursor-pointer border border-white/10
                  hover:!z-[900] hover:border-white/30
                `}
              >
                {/* Image Wrapper */}
                <div className="relative h-full w-full overflow-hidden ">
                  <img
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      {selectedImage !== null && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-3 text-white transition-transform hover:scale-110 hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
              className="absolute left-6 rounded-full border border-white/20 bg-white/10 p-4 text-white transition-transform hover:scale-110 hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
              className="absolute right-6 rounded-full border border-white/20 bg-white/10 p-4 text-white transition-transform hover:scale-110 hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div onClick={(e) => e.stopPropagation()} className="relative max-h-[85vh] max-w-[85vw] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <img
              src={images[selectedImage]}
              alt={`Expanded view ${selectedImage + 1}`}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center font-mono text-sm text-gray-300">
              {selectedImage + 1} of {images.length}
            </div>
          </div>
          
        </div>
        
      )}

      
    </div>
  );
};

export default ArweaveGallery;