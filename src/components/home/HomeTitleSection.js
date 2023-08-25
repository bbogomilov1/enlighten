import { Link } from "react-router-dom";
import styles from "./HomeTitleSection.module.css";
import bookImage from "../../static/book logo.png";
import { useTranslation } from "react-i18next";

function HomeTitleSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.containerWidth}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobFirst}
        >
          <path
            fill="#f9e888"
            d="M25.9,-36.5C31.2,-36.8,31.7,-25.8,36,-16.4C40.2,-7.1,48.3,0.5,52,10.8C55.7,21.1,55,34.1,47.1,37.7C39.1,41.2,23.9,35.4,12.2,36.5C0.5,37.6,-7.6,45.7,-15.4,46.2C-23.2,46.8,-30.6,39.9,-31.9,31.5C-33.1,23.1,-28.2,13.2,-24.7,6.4C-21.3,-0.4,-19.4,-4.2,-24.1,-18.1C-28.8,-32,-40.1,-56,-37.2,-56.8C-34.3,-57.6,-17.1,-35.2,-3.4,-29.8C10.3,-24.5,20.5,-36.2,25.9,-36.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className={styles.titleContainer}>
          <h1>
            EN<span>light</span>EN
          </h1>
          <img src={bookImage} alt="book" className={styles.bookImage} />
        </div>
        <p>{t("unlock-the-power")}</p>
        <p>{t("join-us")}</p>
        <div>
          <Link to="/schedule" className={styles.enrollButton} type="button">
            {t("enroll-now")}
          </Link>
        </div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobSecond}
        >
          <path
            fill="#f9e888"
            d="M32,-58.1C40.8,-50.4,46.8,-40.4,56.5,-30.3C66.2,-20.3,79.7,-10.1,83.6,2.2C87.5,14.6,81.8,29.3,72.2,39.7C62.7,50.1,49.4,56.3,36.7,61.5C24,66.7,12,71,-1.4,73.5C-14.9,76,-29.8,76.7,-39.6,69.8C-49.3,62.9,-53.9,48.3,-57.5,35.4C-61.2,22.5,-63.8,11.3,-67.6,-2.2C-71.4,-15.6,-76.3,-31.3,-71.5,-42C-66.6,-52.8,-52,-58.8,-38.4,-63.7C-24.9,-68.7,-12.5,-72.7,-0.4,-71.9C11.6,-71.2,23.2,-65.8,32,-58.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default HomeTitleSection;
