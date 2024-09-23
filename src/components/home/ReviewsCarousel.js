import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./ReviewsCarousel.module.css";

const ReviewsCarousel = ({ text, parentName, date }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className={styles.sliderContainer}>
      <Container className={styles.content}>
        <Row className={styles.parentName}>{parentName}</Row>
        <Row className={styles.date}>{date}</Row>
        <Row className={styles.text}>
          "{showFullText ? text : text.slice(0, 200) + "..."}"
          <br />
          <button className={styles.readMoreButton} onClick={toggleTextDisplay}>
            {showFullText ? "Покажи по-малко" : "Прочети повече"}
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewsCarousel;
