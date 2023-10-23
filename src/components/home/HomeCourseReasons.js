import { Link } from "react-router-dom";
import styles from "./HomeCourseReasons.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

function HomeCourseReasons() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} ref={elementRef}>
      <h2
        className={
          isVisible
            ? `${styles.title}  ${styles.titleAnimation}`
            : `${styles.title}`
        }
      >
        {t("find the best course")}
      </h2>

      <p
        className={
          isVisible
            ? `${styles.containerSubTitle}  ${styles.containerSubTitleAnimation}`
            : `${styles.containerSubTitle}`
        }
      >
        {t("we developed some courses")}
      </p>

      <div
        className={
          isVisible
            ? `${styles.reasons}  ${styles.reasonsAnimation}`
            : `${styles.reasons}`
        }
      >
        <div className={styles.column}>
          <p>
            {" "}
            <span>→</span>
            <Link to="/courses/concentrate" className={styles.linkItem}>
              concENtrate
            </Link>
          </p>

          <p>
            <span>→</span>
            <Link to="/courses/worldready" className={styles.linkItem}>
              WorldReady
            </Link>
          </p>

          <p>
            <span>→</span>
            <Link to="/courses/smartart" className={styles.linkItem}>
              SmartArt
            </Link>
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <span>→</span>
            <Link to="/courses/enlighten-kids" className={styles.linkItem}>
              ENlightEN Kids
            </Link>
          </p>
          <p>
            <span>→</span>
            <Link to="/courses/enlighten-private" className={styles.linkItem}>
              ENlightEN Private
            </Link>
          </p>
          <p>
            <span>→</span>
            <Link to="/courses/young-presenters" className={styles.linkItem}>
              Young PresENters
            </Link>
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <span>→</span>
            <Link to="/courses/enlighten-private" className={styles.linkItem}>
              Business
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCourseReasons;
