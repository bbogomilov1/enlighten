import styles from "./TheAcadamy.module.css";
import kidsImage from "../../static/1669412766.jpg";

function TheAcademy() {
  return (
    <div className={styles.container}>
      {/* <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobOne}
      >
        <path
          fill="#f9e888"
          d="M34,-38.2C48.9,-35.9,69.4,-32.5,73.6,-23.1C77.8,-13.7,65.7,1.9,55.6,13.6C45.6,25.2,37.7,33.1,28.7,38.2C19.8,43.4,9.9,45.9,-3,50C-15.9,54.2,-31.8,60,-40.7,54.8C-49.6,49.6,-51.5,33.5,-54.7,18.9C-58,4.3,-62.6,-8.8,-62,-23.1C-61.4,-37.4,-55.6,-52.9,-44.4,-56.4C-33.1,-59.9,-16.6,-51.4,-3.5,-46.6C9.5,-41.7,19,-40.4,34,-38.2Z"
          transform="translate(100 100)"
        />
      </svg> */}
      <h1>The Academy</h1>
      <div className={styles.description}>
        <div>
          <img src={kidsImage} alt="kids" className={styles.image} />
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
