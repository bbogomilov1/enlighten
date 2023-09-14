import styles from "./HomeCourseReasons.module.css";
import { useTranslation } from "react-i18next";

function HomeCourseReasons() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{t("find the best course")}</h2>
      <p>{t("we developed some courses")}</p>
      <div className={styles.reasons}>
        <div className={styles.column}>
          <p>
            <span>→</span>
            concENtrate
          </p>
          <p>
            <span>→</span>
            WorldReady
          </p>
          <p>
            <span>→</span>
            SmartArt
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <span>→</span>
            ENlightEN Kids
          </p>
          <p>
            <span>→</span>
            ENlightEN Private
          </p>
          <p>
            <span>→</span>
            Business
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCourseReasons;
