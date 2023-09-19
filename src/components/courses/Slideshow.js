import React, { useState } from "react";
import styles from "./Slideshow.module.css";

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <button onClick={prevSlide}>Previous</button>
      <div className={styles.slide}>{slides[currentSlide]}</div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
