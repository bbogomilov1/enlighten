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
            {t("Fun and Interactive Learning")}
          </p>
          <p>
            <span>→</span>
            {t("Experienced and Dedicated Teachers")}
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <span>→</span>
            {t("Personalized Attention")}
          </p>
          <p>
            <span>→</span>
            {t("Comprehensive Development")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCourseReasons;
