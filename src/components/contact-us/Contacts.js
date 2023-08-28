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
        <li>
          <FontAwesomeIcon icon={faMap} className={styles.icon} />
          Sofia 1619, Something bul. 47
        </li>
        {/* <li>
           +359
          (0) 88 574 1278
        </li> */}
        <a href="tel:+359 885 741 278">
          <FontAwesomeIcon icon={faMobileScreen} className={styles.icon} />
          +359 (0) 88 574 1278
        </a>

        <li>
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
          Facebook
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          Instagram
        </li>
        <li>
          <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
          Tik-Tok
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faEnvelopeOpen} className={styles.icon} />
          office@enlighten.bg
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
