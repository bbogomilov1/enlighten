import styles from "./OurMission.module.css";
import kidsImage from "../../static/preschool.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

function OurMission() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} ref={elementRef}>
      <h1
        className={
          isVisible
            ? `${styles.title}  ${styles.titleAnimation}`
            : `${styles.title}`
        }
      >
        {t("Our Mission")}
      </h1>
      <div className={styles.description}>
        <div className={styles.paragraphsContainer}>
          <p
            className={
              isVisible
                ? `${styles.containerParagraph}  ${styles.containerParagraphAnimation}`
                : `${styles.containerParagraph}`
            }
          >
            {t("Our mission is to...")}
          </p>
          <p
            className={
              isVisible
                ? `${styles.containerParagraph}  ${styles.containerParagraphAnimation}`
                : `${styles.containerParagraph}`
            }
          >
            {t("Our experienced and passionate educators...")}
          </p>
        </div>
        <div>
          <img
            src={kidsImage}
            alt="kids"
            className={
              isVisible
                ? `${styles.kidsImage}  ${styles.kidsImageAnimation}`
                : `${styles.kidsImage}`
            }
          />
        </div>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobOne}
      >
        <path
          fill="#c28e00"
          d="M37.1,-14.8C44.3,10,43.7,34.6,26.7,50.1C9.7,65.6,-23.6,72,-46.6,56.9C-69.6,41.9,-82.3,5.5,-72.8,-22.4C-63.3,-50.4,-31.7,-69.9,-8.3,-67.2C15,-64.5,30,-39.6,37.1,-14.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default OurMission;
