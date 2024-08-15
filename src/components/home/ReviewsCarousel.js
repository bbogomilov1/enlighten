import React, { useState } from "react";
import styles from "./ReviewsCarousel.module.css";

const testimonials = [
  {
    text: "The English course has significantly improved my child's confidence in speaking. The instructors are incredibly supportive and skilled.",
    parentName: "John Smith",
    childInfo: "Father of Emma, Age 12",
  },
  {
    text: "Thanks to the engaging lessons, my son is now eager to learn and participate in class. Highly recommend!",
    parentName: "Maria Lopez",
    childInfo: "Mother of Lucas, Age 10",
  },
];

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide((index + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <div className={styles.content}>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.parentInfo}>
                <p className={styles.parentName}>{testimonial.parentName}</p>
                <p className={styles.childInfo}>{testimonial.childInfo}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.navigation}>
          <span
            className={styles.prevSlide}
            onClick={() => showSlide(currentSlide - 1)}
          >
            &#10094;
          </span>
          <span
            className={styles.nextSlide}
            onClick={() => showSlide(currentSlide + 1)}
          >
            &#10095;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
