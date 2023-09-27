import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Slideshow.module.css";

const Slideshow = ({ slides }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prevButton} onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleLeft} className={styles.icon} />
      </button>

      <button className={styles.nextButton} onClick={nextSlide}>
        <FontAwesomeIcon icon={faCircleRight} className={styles.icon} />
      </button>

      <div>
        {screenWidth < 768 ? (
          slides.map((slide, index) => {
            return <div key={index}>{slide}</div>;
          })
        ) : (
          <div
            className={`${styles.slidesContainer} `}
            style={{
              width: `${screenWidth * slides.length}px`,
              transform: `translateX(${-(currentSlide * screenWidth)}px)`,
            }}
          >
            <div className={styles.active}>
              {slides.map((slide, index) => {
                return (
                  <div key={index} style={{ width: "100%" }}>
                    {slide}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
