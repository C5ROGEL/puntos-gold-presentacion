import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Navigation = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className="navigation">
      <button
        className="nav-button"
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Diapositiva anterior"
      >
        <FaChevronLeft />
        <span className="nav-text">Anterior</span>
      </button>
      
      <button
        className="nav-button"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Siguiente diapositiva"
      >
        <span className="nav-text">Siguiente</span>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Navigation;
