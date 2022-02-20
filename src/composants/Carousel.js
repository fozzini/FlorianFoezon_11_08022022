import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel = ({ slideData }) => {
  const [current, setCurrent] = useState(0);
  const length = slideData.pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="Slider">
      <div className="SlideImage">
        <FaChevronLeft className="left-arrow" onClick={prevSlide} />
        <img src={slideData.pictures[current]} alt={current} />
        <FaChevronRight className="right-arrow" onClick={nextSlide} />
      </div>;
    </div>
  );
};

export default Carousel;
