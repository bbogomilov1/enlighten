import { Link } from "react-router-dom";
import styles from "./HomeTitleSection.module.css";
import titleImage from "../../static/logo enlighten transp.png";
import kidsImage from "../../static/elementary-school-resources.jpg";
import { useTranslation } from "react-i18next";
import stars from "../../static/bluestars.png";

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
        {/* <Link to="/about-us" className={styles.enrollButton} type="button">
          Разбери повече за нас
        </Link> */}
        <div className={styles.iconContainer}>
          <img src={stars} alt="stars" className={styles.icon} />
        </div>
        <Link to="/courses" className={styles.enrollButton} type="button">
          {t("Our Courses")}
        </Link>
        <div className={styles.iconContainer}>
          <img src={stars} alt="stars" className={styles.icon} />
        </div>
      </div>

      {/* <img src={kidsImage} alt="book" className={styles.titleImage} /> */}
    </div>
  );
}

export default HomeTitleSection;
