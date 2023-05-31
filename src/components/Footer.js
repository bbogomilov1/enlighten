import styles from "./Footer.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.jpg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.footerSections}>
        <h3>Contact Us</h3>
        <p>
          Sofia 1619, <br /> Something bul. 47
        </p>
        <p>+359 (0) 123 456 789</p>
        <p>office@masterminds.bg</p>
      </div>

      <div className={styles.footerSections}>
        <h3>Information</h3>
        <p>About Us</p>
        <p>Contacts</p>
      </div>
    </div>
  );
}

export default Footer;
