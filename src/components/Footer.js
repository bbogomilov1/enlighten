import styles from "./Footer.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.png";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.footerSectionContainer}>
          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <p>
              Sofia 1619, <br /> Something bul. 47
            </p>
            <p>+359 (0) 123 456 789</p>
            <p>office@masterminds.bg</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Information</h3>
            <p>F.A.Q.</p>
            <p>Prices</p>
            <p>Find Us</p>
            <p>About Us</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Socials</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Tik-Tok</p>
          </div>
        </div>
      </div>

      <div className={styles.creator}>
        <p>Design & Development by BBogomilov</p>
      </div>
    </div>
  );
}

export default Footer;
