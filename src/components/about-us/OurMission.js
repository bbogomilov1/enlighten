import styles from "./OurMission.module.css";
import kidsImage from "../../static/preschool.jpg";
import { useTranslation } from "react-i18next";

function OurMission() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>{t("Our Mission")}</h1>
      <div className={styles.description}>
        <div className={styles.paragraphsContainer}>
          <p>{t("Our mission is to...")}</p>
          <p>{t("Our experienced and passionate educators...")}</p>
        </div>
        <div>
          <img src={kidsImage} alt="kids" className={styles.kidsImage} />
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
