import styles from "./Logo.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.png";

function LogoProvider() {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="Logo" className={styles.logo} />
    </div>
  );
}

export default LogoProvider;
