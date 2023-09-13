import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import "../static/fonts.css";
import LogoProvider from "./Logo";
import hamIcon from "../static/hamburger icon.png";

import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const MainNavigation = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownMenuOpen, setdropdownMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const toggledropdownMenu = () => {
    setdropdownMenuOpen(!dropdownMenuOpen);
  };

  const closeMenu = () => {
    setdropdownMenuOpen(false);

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

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.mobileToggle}>
          <a href="#" onClick={toggleMenu}>
            <img src={hamIcon} className={styles.hamIcon} alt="menu" />
          </a>
          {screenWidth < 768 ? <LogoProvider /> : ""}
          <LanguageSwitcher />
        </div>

        {menuOpen ? (
          <ul className={`${menuOpen ? styles.open : ""}`}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink} onClick={closeMenu}>
                {t("home")}
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link
                to="/about-us"
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t("about us")}
              </Link>
            </li>

            <LogoProvider />

            <li className={styles.navItem}>
              <Link
                to="/courses"
                className={styles.navLink}
                onMouseEnter={() => toggledropdownMenu(true)}

                // onClick={toggledropdownMenu}
              >
                {t("courses")}
              </Link>

              {dropdownMenuOpen && (
                <ul
                  className={styles.courseDropdown}
                  onMouseLeave={() => toggledropdownMenu(false)}
                >
                  <li>
                    <a
                      href="#concentrate"
                      onClick={() => handleCourseClick("concentrate")}
                    >
                      Concentrate
                    </a>
                  </li>
                  <li>
                    <a
                      href="#world-ready"
                      onClick={() => handleCourseClick("world-ready")}
                    >
                      WorldReady
                    </a>
                  </li>
                  <li>
                    <a
                      href="#smart-art"
                      onClick={() => handleCourseClick("smart-art")}
                    >
                      SmartArt
                    </a>
                  </li>
                  <li>
                    <a
                      href="#enlighten-kids"
                      onClick={() => handleCourseClick("enlighten-kids")}
                    >
                      ENlightEN Kids
                    </a>
                  </li>
                  <li>
                    <a
                      href="#enlighten-private"
                      onClick={() => handleCourseClick("enlighten-private")}
                    >
                      ENlightEN Private
                    </a>
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
