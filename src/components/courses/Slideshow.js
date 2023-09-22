import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
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
      <button className={styles.prevButton} onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleLeft} className={styles.icon} />
      </button>

      <div className={styles.slide}>{slides[currentSlide]}</div>

      <button className={styles.nextButton} onClick={nextSlide}>
        <FontAwesomeIcon icon={faCircleRight} className={styles.icon} />
      </button>
    </div>
  );
};

export default Slideshow;
