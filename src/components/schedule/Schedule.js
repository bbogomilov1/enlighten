import styles from "./Schedule.module.css";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div>
      <table>
        <tr>
          <th>Курс</th>
          <th>Години</th>
          <th>Ден</th>
          <th>Час</th>
          <th></th>
        </tr>

        {/* вторник */}
        <tr>
          <td>
            <Link to="/courses/enlighten-kids" className={styles.linkItem}>
              ENlightEN Kids
            </Link>
          </td>
          <td>5-7г.</td>
          <td>Вторник</td>
          <td>16:20ч. - 17:45ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        {/* сряда */}
        <tr>
          <td>
            <Link to="/courses/concentrate" className={styles.linkItem}>
              ConcENtrate <i class="fa-solid fa-circle-info"></i>
            </Link>
          </td>
          <td>3-4г.</td>
          <td>Сряда</td>
          <td>10:30ч. - 11:30ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        <tr>
          <td>
            <Link to="/courses/worldready" className={styles.linkItem}>
              WorldReady
            </Link>
          </td>
          <td>7-9г.</td>
          <td>Сряда</td>
          <td>16:20ч. - 17:45ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        {/* четвъртък */}
        <tr>
          <td>
            <Link to="/courses/enlighten-kids" className={styles.linkItem}>
              ENlightEN Kids
            </Link>
          </td>
          <td>5-7г.</td>
          <td>Четвъртък</td>
          <td>16:20ч. - 17:45ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        {/* петък */}
        <tr>
          <td>
            <Link to="/courses/concentrate" className={styles.linkItem}>
              ConcENtrate <i class="fa-solid fa-circle-info"></i>
            </Link>
          </td>
          <td>3-4г.</td>
          <td>Петък</td>
          <td>10:30ч. - 11:30ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        <tr>
          <td>
            <Link to="/courses/worldready" className={styles.linkItem}>
              WorldReady
            </Link>
          </td>
          <td>10-12г.</td>
          <td>Петък</td>
          <td>16:20ч. - 17:45ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>

        {/* събота */}
        <tr>
          <td>
            <Link to="/courses/enlighten-kids" className={styles.linkItem}>
              ENlightEN Kids
            </Link>
          </td>
          <td>5-7г.</td>
          <td>Събота</td>
          <td>12:00ч. - 13:00ч.</td>
          <td>
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Schedule;
