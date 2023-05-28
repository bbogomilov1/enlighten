// import { Link } from "react-router-dom";
// import styles from "./MainNavigation.module.css";
// import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.jpg";

// const MainNavigation = () => {
//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logoContainer}>
//         <img src={logoImage} alt="Logo" className={styles.logo} />
//       </div>
//       <ul className={styles.navList}>
//         <li className={styles.navItem}>
//           <Link to="/" className={styles.navLink}>
//             Home
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/about-us" className={styles.navLink}>
//             About us
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/schedule" className={styles.navLink}>
//             Schedule
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/contact-us" className={styles.navLink}>
//             Contact us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default MainNavigation;
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.jpg";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </div>
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
