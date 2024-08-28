import styles from "./MeetTeachers.module.css";
import laritaImage from "../../static/IMG_5948.jpg";
// import betinaImage from "../../static/Screenshot 2023-06-01 202659.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

function MeetTheTeachers() {
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
      <div>
        <h1
          className={
            isVisible
              ? `${styles.title}  ${styles.titleAnimation}`
              : `${styles.title}`
          }
        >
          <span>·</span> {t("Meet The Teachers")} <span>·</span>
        </h1>

        <div className={styles.teacherContainer}>
          <div className={styles.teacherLarita}>
            <img
              src={laritaImage}
              alt="Larita"
              className={
                isVisible
                  ? `${styles.teacherImage}  ${styles.teacherImageAnimation}`
                  : `${styles.teacherImage}`
              }
            />
          </div>

          <div className={styles.teacherDescription}>
            <h2
              className={
                isVisible
                  ? `${styles.teacherTitle}  ${styles.teacherTitleAnimation}`
                  : `${styles.teacherTitle}`
              }
            >
              {t("Larita Vutova")}
            </h2>
            <p
              className={
                isVisible
                  ? `${styles.teacherDescriptionParagraph}  ${styles.teacherDescriptionParagraphAnimation}`
                  : `${styles.teacherDescriptionParagraph}`
              }
            >
              {t("Meet Larita...")}
            </p>
          </div>
        </div>

        {/* <div
          className={`${styles.teacherContainer} ${styles.teacherContainerBetina}`}
        >
          <div className={styles.teacherDescription}>
            <h2>{t("Betina Kremenova")}</h2>
            <p>{t("Say hello to Betina...")}</p>
          </div>
          <div className={styles.teacherBetina}>
            <img
              src={betinaImage}
              alt="Betina"
              className={styles.teacherImage}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MeetTheTeachers;
