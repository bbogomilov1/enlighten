import styles from "./MeetTeachers.module.css";
import laritaImage from "../../static/311373822_5340375706012360_6099292886436765504_n.jpg";
import betinaImage from "../../static/Screenshot 2023-06-01 202659.jpg";
import { useTranslation } from "react-i18next";

function MeetTheTeachers() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div>
        <h1>{t("Meet The Teachers")}</h1>
        <div className={styles.teacherContainer}>
          <div className={styles.teacherLarita}>
            <img
              src={laritaImage}
              alt="Larita"
              className={styles.teacherImage}
            />
          </div>
          <div className={styles.teacherDescription}>
            <h2>{t("Larita Vutova")}</h2>
            <p>{t("Meet Larita...")}</p>
          </div>
        </div>
        <div
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
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeachers;
