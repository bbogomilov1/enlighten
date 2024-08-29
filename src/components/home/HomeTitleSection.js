import { Link } from "react-router-dom";
import styles from "./HomeTitleSection.module.css";
import backgroundVideo from "../../static/Running.mp4";
import stars from "../../static/whitestars.png";
import { useTranslation } from "react-i18next";

function HomeTitleSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <video autoPlay loop muted playsInline preload="auto" id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Курсове за деца и възрастни, в които английският език се изучава
          посредством развитието на ключови компетенции
        </p>

        <div className={styles.buttonContainer}>
          <div className={styles.iconContainer}>
            <img src={stars} alt="stars" className={styles.icon} />
          </div>

          <Link to="/schedule" className={styles.enrollButton} type="button">
            ГРАФИК
          </Link>

          <div className={styles.iconContainer}>
            <img src={stars} alt="stars" className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTitleSection;
