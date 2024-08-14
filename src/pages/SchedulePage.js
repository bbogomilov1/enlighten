import styles from "./SchedulePage.module.css";
import { Link } from "react-router-dom";

function SchedulePage() {
  return (
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
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
            <Link to="/enroll" className={styles.enrollButton} type="button">
              Запиши се
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SchedulePage;
