import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import "../static/fonts.css";
import LogoProvider from "./Logo";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about-us" className={styles.navLink}>
              About us
            </Link>
          </li>
          <LogoProvider />

          <li className={styles.navItem}>
            <Link to="/schedule" className={styles.navLink}>
              Schedule
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact-us" className={styles.navLink}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
