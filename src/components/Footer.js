import styles from "./Footer.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.footerSectionContainer}>
          <div className={styles.footerSection}>
            <h3>{t("contact us")}</h3>
            <a href="https://goo.gl/maps/pKdAPG9mHcHZ3rZs9" target="_blank">
              {t("Sofia, g.k. Belite brezi 9, 1st floor")}
            </a>
            <a href="tel:+359 885 741 278">+359 (0) 88 574 1278</a>
            <a href="mailto:bdbogomilov@gmail.com">bdbogomilov@gmail.com</a>
          </div>

          <div className={styles.footerSection}>
            <h3>{t("Information")}</h3>
            <a href="/contact-us">{t("Find us")}</a>
            <a href="/about-us">{t("about us")}</a>
          </div>

          <div className={styles.footerSection}>
            <h3>{t("Socials")}</h3>
            <p>Facebook</p>
            <a href="https://www.instagram.com/enlighten.lv/" target="_blank">
              Instagram
            </a>
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
