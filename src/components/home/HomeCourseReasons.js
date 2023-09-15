import { Link } from "react-router-dom";
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
