import React from 'react';
import SlideContent from './SlideContent';

const Slide = ({ slide, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="slide">
      <SlideContent slide={slide} />
    </div>
  );
};

export default Slide;
