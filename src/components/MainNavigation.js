import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import "../static/fonts.css";
import LogoProvider from "./Logo";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              {t("home")}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about-us" className={styles.navLink}>
              {t("about us")}
            </Link>
          </li>
          <LogoProvider />

          <li className={styles.navItem}>
            <Link to="/schedule" className={styles.navLink}>
              {t("schedule")}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact-us" className={styles.navLink}>
              {t("contact us")}
            </Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
