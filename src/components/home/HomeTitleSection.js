import { Link } from "react-router-dom";
import styles from "./HomeTitleSection.module.css";
import titleImage from "../../static/logo enlighten transp.png";
import stars from "../../static/bluestars.png";
import { useTranslation } from "react-i18next";

function HomeTitleSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={titleImage} alt="book" className={styles.titleImage} />
      </div>

      <p className={styles.description}>
        Курсове за деца и възрастни, в които английският език се изучава
        посредством развитието на ключови компетенции
      </p>

      <div className={styles.buttonContainer}>
        <div className={styles.iconContainer}>
          <img src={stars} alt="stars" className={styles.icon} />
        </div>

        <Link to="/courses" className={styles.enrollButton} type="button">
          ГРАФИК
        </Link>

        <div className={styles.iconContainer}>
          <img src={stars} alt="stars" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default HomeTitleSection;
