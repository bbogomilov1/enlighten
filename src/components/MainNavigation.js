import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import "../static/fonts.css";
import LogoProvider from "./Logo";
import hamIcon from "../static/hamburger icon.png";

// import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const MainNavigation = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const toggleCoursesMenu = () => {
    setCoursesMenuOpen(!coursesMenuOpen);
  };

  const closeMenu = () => {
    setCoursesMenuOpen(false);

    if (screenWidth < 768) {
      setMenuOpen(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth > 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.mobileToggle}>
          <a href="#" onClick={toggleMenu}>
            <img src={hamIcon} className={styles.hamIcon} alt="menu" />
          </a>
          {screenWidth < 768 ? <LogoProvider /> : ""}
          {/* <LanguageSwitcher /> */}
        </div>

        {menuOpen ? (
          <ul className={`${menuOpen ? styles.open : ""}`}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink} onClick={closeMenu}>
                {t("home")}
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to="/about-us" className={styles.navLink}>
                {t("about us")}
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to="/about-us" className={styles.navLink}>
                Курсове за деца
              </Link>
            </li>

            <LogoProvider />

            <li className={styles.navItem}>
              <Link
                to="/courses"
                className={styles.navLink}
                onMouseEnter={toggleCoursesMenu}
                onClick={toggleCoursesMenu}
              >
                Курсове за възрастни
              </Link>

              {coursesMenuOpen && (
                <ul
                  className={styles.courseDropdown}
                  onMouseLeave={toggleCoursesMenu}
                >
                  <li>
                    <a href="/courses/concentrate">Concentrate</a>
                  </li>
                  <li>
                    <a href="/courses/worldready">WorldReady</a>
                  </li>
                  <li>
                    <a href="/courses/smartart">SmartArt</a>
                  </li>
                  <li>
                    <a href="/courses/enlighten-kids">ENlightEN Kids</a>
                  </li>
                  <li>
                    <a href="/courses/enlighten-private">ENlightEN Private</a>
                  </li>
                  <li>
                    <a href="/courses/young-presenters">Young PresENters</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={styles.navItem}>
              <Link
                to="/contact-us"
                className={styles.navLink}
                onClick={closeMenu}
              >
                График
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link
                to="/contact-us"
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("contact us")}
              </Link>
            </li>

            {/* <LanguageSwitcher /> */}
          </ul>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
