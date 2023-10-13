import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";
import EnlightenKidsCourse from "../components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "../components/courses/EnlightenPrivateCourse";
import YoungPresentersCourse from "../components/courses/YoungPresentersCourse";
import styles from "./CoursesPage.module.css";
import kidsImage from "../static/elementary-school-resources.jpg";
import stars from "../static/bluestars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEarthAmerica,
  faBrain,
  faPaintbrush,
  faChildReaching,
  faLockOpen,
  faMicrophone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function CoursesPage() {
  const slides = [
    <ConcentrateCourse />,
    <WorldReadyCourse />,
    <SmartArtCourse />,
    <EnlightenKidsCourse />,
    <EnlightenPrivateCourse />,
    <YoungPresentersCourse />,
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ENlightEN предлага курсове за деца и възрастни, в които английският език
        се изучава посредством развитието на ключови компетенции
      </h1>

      <div className={styles.teacherLarita}>
        <img src={kidsImage} alt="kids" className={styles.kidsImage} />
      </div>

      {/* <img src={stars} alt="stars" className={styles.stars} /> */}

      <div className={styles.descriptionContainer}>
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
        <p className={styles.description}>
          В нашата академия събираме екип от висококвалифицирани и опитни
          преподаватели по английски език. С техния опит и страст към
          преподаването, вашето дете ще получи първокласни насоки за овладяване
          на английски език.
        </p>
      </div>

      <img src={stars} alt="stars" className={styles.stars} />

      {/* <h1 className={styles.coursesTitle}>НАШИТЕ КУРСОВЕ</h1> */}

      <div className={styles.courses}>
        <div className={`${styles.courseContainer} ${styles.kids}`}>
          <FontAwesomeIcon
            icon={faChildReaching}
            className={styles.coursesIcons}
          />
          <p className={styles.courseTitle}>
            ENlightEN <br /> Kids
          </p>
        </div>

        <div className={`${styles.courseContainer} ${styles.smartart}`}>
          <FontAwesomeIcon
            icon={faPaintbrush}
            className={styles.coursesIcons}
          />
          <p className={styles.courseTitle}>SmartArt</p>
        </div>

        <div className={`${styles.courseContainer} ${styles.concentrate}`}>
          <FontAwesomeIcon icon={faBrain} className={styles.coursesIcons} />
          <p className={styles.courseTitle}>ConcENtrate</p>
        </div>

        <div className={`${styles.courseContainer} ${styles.worldready}`}>
          <FontAwesomeIcon
            icon={faEarthAmerica}
            className={styles.coursesIcons}
          />
          <p className={styles.courseTitle}>WorldReady</p>
        </div>

        <div className={`${styles.courseContainer} ${styles.private}`}>
          <FontAwesomeIcon icon={faLockOpen} className={styles.coursesIcons} />
          <p className={styles.courseTitle}>
            ENlightEN <br /> Private
          </p>
        </div>

        <div className={`${styles.courseContainer} ${styles.business}`}>
          <FontAwesomeIcon icon={faUserTie} className={styles.coursesIcons} />
          <p className={styles.courseTitle}>Business</p>
        </div>

        <div className={`${styles.courseContainer} ${styles.presenters}`}>
          <FontAwesomeIcon
            icon={faMicrophone}
            className={styles.coursesIcons}
          />
          <p className={styles.courseTitle}>
            Young <br /> PresENters
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
