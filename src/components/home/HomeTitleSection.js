import { Link } from "react-router-dom";
import KidsImg from "../../static/Screenshot 2023-05-29 163908.png";
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
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobGreen}
        >
          <path
            fill="#FFFAF4"
            d="M48.1,-58.5C61.8,-45.9,71.7,-30.2,74.6,-13.2C77.5,3.7,73.3,21.8,64.3,36.9C55.3,51.9,41.5,64,24.9,71.3C8.3,78.6,-11.1,81.3,-28.8,76.1C-46.5,71,-62.4,58.1,-73.6,41.3C-84.8,24.4,-91.3,3.6,-86.3,-13.6C-81.4,-30.8,-65,-44.4,-48.7,-56.5C-32.4,-68.6,-16.2,-79.2,0.5,-79.8C17.3,-80.5,34.5,-71.1,48.1,-58.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobWhite}
        >
          <path
            fill="#FFFAF4"
            d="M51.4,-58.3C67.3,-47.8,81.5,-32.4,85.6,-14.4C89.6,3.6,83.4,24.1,73,42C62.5,59.8,47.6,74.9,29.3,82.5C10.9,90.2,-11,90.2,-30.6,83.4C-50.1,76.5,-67.4,62.7,-76,45.2C-84.7,27.6,-84.6,6.4,-80.9,-14.1C-77.1,-34.6,-69.6,-54.4,-55.5,-65.1C-41.4,-75.9,-20.7,-77.8,-1.5,-76C17.7,-74.2,35.4,-68.8,51.4,-58.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className={styles.image}>
          <img src={KidsImg} alt="kids" />
        </div>
      </div>
    </div>
  );
}

export default HomeTitleSection;
