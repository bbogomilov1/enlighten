import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import "../static/fonts.css";
import LogoProvider from "./Logo";
import hamIcon from "../static/hamburger icon.png";

import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const MainNavigation = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.mobileToggle}>
          <a href="#" onClick={toggleMenu}>
            <img src={hamIcon} className={styles.hamIcon} alt="menu" />
          </a>
          <LogoProvider />
          <LanguageSwitcher />
        </div>

        {menuOpen ? (
          <ul className={`${menuOpen ? styles.open : ""}`}>
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

            {/* <LogoProvider /> */}

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
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
