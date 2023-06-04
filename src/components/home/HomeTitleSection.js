import { Link } from "react-router-dom";
import starsImg from "../../static/bluestars.png";
import styles from "./HomeTitleSection.module.css";

function HomeTitleSection() {
  return (
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
          <img src={starsImg} alt="kids" />
        </div>
      </div>
    </div>
  );
}

export default HomeTitleSection;
