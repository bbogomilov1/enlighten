import styles from "./SmartArtCourse.module.css";
import stars from "../../static/whitestars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SmartArtCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>· the</h2>
        <h1>SmartArt</h1>
        <h2>course ·</h2>
      </div>
      <div className={styles.description}>
        <p>
          Изучаването на английски език преминава през призмата на изкуството.
          Тематичните ни творчески проекти откриват нови хоризонти на познания -
          работим на английски език, развивайки фината моторика, креативността,
          въображението и уменията за работа в екип -{" "}
          <b>качества, необходими за успешната реализация</b>.
        </p>
        <p>
          Устно, писмено, творческо развитие - английската ни работилница
          разкрива нови светове на познания и практическото им приложение.
        </p>
      </div>

      <p className={styles.courseScheduleNote}>
        *Запишете Вашето дете от{" "}
        <Link to="/enroll" className={styles.courseScheduleLink}>
          <b>контакти</b>
        </Link>{" "}
        или чрез бързия чат в долния десен ъгъл.
      </p>
    </div>
  );
}

export default SmartArtCourse;
