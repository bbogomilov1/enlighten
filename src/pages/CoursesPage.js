import styles from "./CoursesPage.module.css";
import kidsImage from "../static/IMG_4239.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faBrain,
  faPaintbrush,
  faChildReaching,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CoursesPage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>·</span> Нашите курсове <span>·</span>
        </h1>

        <div className={styles.courses}>
          <Link
            to="/courses/enlighten-kids"
            className={`${styles.courseContainer} ${styles.kids}`}
          >
            <FontAwesomeIcon
              icon={faChildReaching}
              className={styles.coursesIcons}
            />
            <p className={styles.courseTitle}>
              ENlightEN <br /> Kids
            </p>
          </Link>

          <Link
            to="/courses/smartart"
            className={`${styles.courseContainer} ${styles.smartart}`}
          >
            <FontAwesomeIcon
              icon={faPaintbrush}
              className={styles.coursesIcons}
            />
            <p className={styles.courseTitle}>SmartArt</p>
          </Link>

          <Link
            to="/courses/concentrate"
            className={`${styles.courseContainer} ${styles.concentrate}`}
          >
            <FontAwesomeIcon icon={faBrain} className={styles.coursesIcons} />
            <p className={styles.courseTitle}>ConcENtrate</p>
          </Link>

          <Link
            to="/courses/worldready"
            className={`${styles.courseContainer} ${styles.worldready}`}
          >
            <FontAwesomeIcon
              icon={faEarthAmerica}
              className={styles.coursesIcons}
            />
            <p className={styles.courseTitle}>WorldReady</p>
          </Link>

          <Link
            to="/courses/young-presenters"
            className={`${styles.courseContainer} ${styles.presenters}`}
          >
            <FontAwesomeIcon
              icon={faMicrophone}
              className={styles.coursesIcons}
            />
            <p className={styles.courseTitle}>
              Young <br /> PresENters
            </p>
          </Link>
        </div>

        <div className={styles.titleInfo}>
          <div className={styles.descriptionContainer}>
            <p className={styles.titleDescription}>
              ENlightEN предлага курсове за деца и възрастни, в които
              английският език се изучава посредством развитието на ключови
              компетенции.
            </p>
            <p className={styles.titleDescription}>
              В нашата академия събираме екип от висококвалифицирани и опитни
              преподаватели по английски език. С техния опит и страст към
              преподаването, вашето дете ще получи първокласни насоки за
              овладяване на английски език.
            </p>
          </div>

          <div className={styles.teacherLarita}>
            <img src={kidsImage} alt="kids" className={styles.kidsImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
