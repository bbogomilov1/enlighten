import styles from "./TheAcadamy.module.css";
import castleImage from "../../static/Screenshot 2023-06-03 160311.png";

function TheAcademy() {
  return (
    <div className={styles.container}>
      <h1>The Academy</h1>
      <div className={styles.description}>
        <div className={styles.teacherLarita}>
          <img src={castleImage} alt="Larita" className={styles.teacherImage} />
        </div>
        <div>
          <p>
            At MasterMinds, we provide engaging and interactive English classes
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
    </div>
  );
}

export default TheAcademy;
