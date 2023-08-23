import { Link } from "react-router-dom";
import styles from "./HomeTitleSection.module.css";
import bookImage from "../../static/book logo.png";

function HomeTitleSection() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWidth}>
        <h1>
          EN<span>light</span>EN
        </h1>
        <img src={bookImage} alt="book" className={styles.bookImage} />
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
          className={styles.blob}
        >
          <path
            fill="#f9e888"
            d="M32,-58.1C40.8,-50.4,46.8,-40.4,56.5,-30.3C66.2,-20.3,79.7,-10.1,83.6,2.2C87.5,14.6,81.8,29.3,72.2,39.7C62.7,50.1,49.4,56.3,36.7,61.5C24,66.7,12,71,-1.4,73.5C-14.9,76,-29.8,76.7,-39.6,69.8C-49.3,62.9,-53.9,48.3,-57.5,35.4C-61.2,22.5,-63.8,11.3,-67.6,-2.2C-71.4,-15.6,-76.3,-31.3,-71.5,-42C-66.6,-52.8,-52,-58.8,-38.4,-63.7C-24.9,-68.7,-12.5,-72.7,-0.4,-71.9C11.6,-71.2,23.2,-65.8,32,-58.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default HomeTitleSection;
