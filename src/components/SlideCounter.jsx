import React from 'react';

const SlideCounter = ({ current, total }) => {
  return (
    <div className="slide-counter">
      <span className="current">{current + 1}</span>
      <span className="separator">/</span>
      <span className="total">{total}</span>
    </div>
  );
};

export default SlideCounter;
