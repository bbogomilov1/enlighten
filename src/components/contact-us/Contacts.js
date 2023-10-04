import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faMap,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <h2>{t("contact us")}</h2>

        <a href="https://goo.gl/maps/pKdAPG9mHcHZ3rZs9" target="_blank">
          <FontAwesomeIcon icon={faMap} className={styles.icon} />
          {t("Sofia, g.k. Belite brezi 9, 1st floor")}
        </a>

        <a href="tel:+359 885 741 278">
          <FontAwesomeIcon icon={faMobileScreen} className={styles.icon} />
          +359 (0) 88 574 1278
        </a>

        <li>
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
          Facebook
        </li>

        <a href="https://www.instagram.com/enlighten.lv/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          Instagram
        </a>

        {/* <li>
          <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
          Tik-Tok
        </li> */}

        <a href="mailto:office@enlighten.bg">
          <FontAwesomeIcon icon={faEnvelopeOpen} className={styles.icon} />
          office@enlighten.bg
        </a>
      </ul>
    </div>
  );
}

export default Contacts;
