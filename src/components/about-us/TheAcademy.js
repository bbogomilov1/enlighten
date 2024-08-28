import styles from "./TheAcadamy.module.css";
import kidsImage from "../../static/1669412766.jpg";
import { useTranslation } from "react-i18next";

function TheAcademy() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>·</span> Езиковият център <span>·</span>
      </h1>
      <div className={styles.description}>
        <div>
          <img src={kidsImage} alt="kids" className={styles.image} />
        </div>
        <div>
          <p>{t("When I became a teacher...")}</p>
          <p>{t("The many lessons in the classroom showed me that...")}</p>
        </div>
      </div>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobTwo}
      >
        <path
          fill="#f9e888"
          d="M37.7,-27.1C46.9,-18.6,51,-3,48.4,12.1C45.8,27.2,36.5,41.9,21.6,51.6C6.7,61.4,-13.7,66.2,-25.8,58.5C-37.9,50.8,-41.7,30.6,-46.6,10.2C-51.6,-10.1,-57.8,-30.6,-50.2,-38.7C-42.7,-46.9,-21.3,-42.7,-3.5,-39.9C14.3,-37.1,28.6,-35.6,37.7,-27.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default TheAcademy;
