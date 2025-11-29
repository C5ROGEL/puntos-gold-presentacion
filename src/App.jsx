import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";
import SlideCounter from "./components/SlideCounter";
import useKeyboardNavigation from "./hooks/useKeyboardNavigation";
import { slidesData } from "./data/slidesData";
import TechBackground from "./components/TechBackground";
import ProgressBar from "./components/ProgressBar"; // <--- 1. IMPORTAR AQUÍ
import "./styles/slides.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useKeyboardNavigation(prevSlide, nextSlide);

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    e.currentTarget.setAttribute("data-touch-start", touchStart);
  };

  const handleTouchEnd = (e) => {
    const touchStart = parseFloat(e.currentTarget.getAttribute("data-touch-start"));
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div
      className="presentation-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <TechBackground />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Slide slide={slidesData[currentSlide]} isActive={true} />
        </motion.div>
      </AnimatePresence>

      <SlideCounter current={currentSlide} total={totalSlides} />

      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      {/* <--- 2. AGREGAR EL COMPONENTE AQUÍ AL FINAL */}
      <ProgressBar current={currentSlide} total={totalSlides} />
      
    </div>
  );
}

export default App;