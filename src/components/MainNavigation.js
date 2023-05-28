// import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About us
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/schedule" className={styles.navLink}>
            Schedule
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contacts" className={styles.navLink}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
