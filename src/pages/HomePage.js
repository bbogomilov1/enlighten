import styles from "./HomePage.module.css";
import "../static/fonts.css";
import { Link } from "react-router-dom";
import KidsImg from "../static/Screenshot 2023-05-29 163908.png";
import logoImage from "../static/334786535_1253085591991643_8723896673674430860_n.jpg";

function HomePage() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.container}>
        <div>
          <h1>
            Welcome to <br /> <section> MasterMinds Academy! </section>
          </h1>
          <p>Unlock the power of English learning with us.</p>
          <p>
            Join us now on our journey today and unlock the door to endless
            opportunities.
          </p>
          <div>
            <Link to="/schedule" className={styles.enrollButton} type="button">
              Enroll Now
            </Link>
          </div>
          <div className={styles.image}>
            <img src={KidsImg} alt="kids" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
