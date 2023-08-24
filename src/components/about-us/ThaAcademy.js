import styles from "./TheAcadamy.module.css";
import kidsImage from "../../static/1669412766.jpg";

function TheAcademy() {
  return (
    <div className={styles.container}>
      <h1>The Academy</h1>
      <div className={styles.description}>
        <div>
          <img src={kidsImage} alt="kids" className={styles.image} />
        </div>
        <div className={styles.textDescription}>
          <p>
            At EnlightEN, we provide engaging and interactive English classes
            designed specifically for kids. Our experienced teachers make
            learning English fun and exciting through games, activities, and
            creative lessons.
          </p>
          <p>
            Whether your child is a beginner or already has some English
            knowledge, our academy offers a structured curriculum tailored to
            their needs. We focus on building strong foundations in listening,
            speaking, reading, and writing, ensuring steady progress and
            confidence.
          </p>
        </div>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobTwo}
      >
        <path
          fill="#f9e888"
          d="M37.7,-27.1C46.9,-18.6,51,-3,48.4,12.1C45.8,27.2,36.5,41.9,21.6,51.6C6.7,61.4,-13.7,66.2,-25.8,58.5C-37.9,50.8,-41.7,30.6,-46.6,10.2C-51.6,-10.1,-57.8,-30.6,-50.2,-38.7C-42.7,-46.9,-21.3,-42.7,-3.5,-39.9C14.3,-37.1,28.6,-35.6,37.7,-27.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default TheAcademy;
