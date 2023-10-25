import styles from "./CoursesPage.module.css";
import kidsImage from "../static/100 Would You Rather Questions for Teachers-600x400.jpg";
import stars from "../static/bluestars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faBrain,
  faPaintbrush,
  faChildReaching,
  faLockOpen,
  faMicrophone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CoursesPage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>· Нашите курсове ·</h1>

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

        <div className={styles.iconContainer}>
          <img src={stars} alt="stars" className={styles.icon} />
        </div>

        <div>
          <table>
            <tr>
              <th>Ден</th>
              <th>Час</th>
              <th>Курс</th>
              <th>Години</th>
              <th></th>
            </tr>

            {/* вторник */}
            <tr>
              <td>Вторник</td>
              <td>16:20ч. - 17:45ч.</td>
              <td>Enlighten Kids</td>
              <td>5-7г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            {/* сряда */}
            <tr>
              <td>Сряда</td>
              <td>10:30ч. - 11:30ч.</td>
              <td>ConcENtrate</td>
              <td>3-4г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>16:20ч. - 17:45ч.</td>
              <td>WorldReady</td>
              <td>7-9г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            {/* четвъртък */}
            <tr>
              <td>Четвъртък</td>
              <td>16:20ч. - 17:45ч.</td>
              <td>Enlighten Kids</td>
              <td>5-7г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            {/* петък */}
            <tr>
              <td>Петък</td>
              <td>10:30ч. - 11:30ч.</td>
              <td>ConcENtrate</td>
              <td>3-4г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>16:20ч. - 17:45ч.</td>
              <td>WorldReady</td>
              <td>10-12г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>

            {/* събота */}
            <tr>
              <td>Събота</td>
              <td>12:00ч. - 13:00ч.</td>
              <td>Enlighten Kids</td>
              <td>5-7г.</td>
              <td>
                <Link
                  to="/courses"
                  className={styles.enrollButton}
                  type="button"
                >
                  Запиши се
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <img src={stars} alt="stars" className={styles.icon} />
      </div>

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
          to="/courses/enlighten-private"
          className={`${styles.courseContainer} ${styles.private}`}
        >
          <FontAwesomeIcon icon={faLockOpen} className={styles.coursesIcons} />
          <p className={styles.courseTitle}>
            ENlightEN <br /> Private
          </p>
        </Link>

        <Link
          to="/courses/enlighten-private"
          className={`${styles.courseContainer} ${styles.business}`}
        >
          <FontAwesomeIcon icon={faUserTie} className={styles.coursesIcons} />
          <p className={styles.courseTitle}>Business</p>
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
    </div>
  );
}

export default CoursesPage;
