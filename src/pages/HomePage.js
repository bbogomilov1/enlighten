import "../static/fonts.css";
import styles from "./HomePage.module.css";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.jpg";
import HomeTitleSection from "../components/home/HomeTitleSection";
import HomeAboutUs from "../components/home/HomeAboutUs";

function HomePage() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </div>
      <HomeTitleSection />
      <HomeAboutUs />
    </div>
  );
}

export default HomePage;
