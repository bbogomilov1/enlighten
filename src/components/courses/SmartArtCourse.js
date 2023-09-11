import styles from "./SmartArtCourse.module.css";

function SmartArtCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>the</h2>
        <h1>SmartArt</h1>
        <h2>course</h2>
      </div>
      <div className={styles.description}>
        <p>
          Изучаването на английски език преминава през призмата на изкуството.
          Тематичните ни творчески проекти откриват нови хоризонти на познания -
          работим на английски език, развивайки фината моторика, креативността,
          въображението и уменията за работа в екип - качества, необходими за
          успешната реализация. Устно, писмено, творческо развитие - английската
          ни работилница разкрива нови светове на познания и практическото им
          приложение.
        </p>
      </div>
    </div>
  );
}

export default SmartArtCourse;
