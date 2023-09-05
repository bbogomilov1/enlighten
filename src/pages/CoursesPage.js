import styles from "./CoursesPage.module.css";
import { useTranslation } from "react-i18next";

function CoursesPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{t("Courses")}</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>10:00 AM - 11:30 AM</td>
            <td>Beginner English</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>2:00 PM - 3:30 PM</td>
            <td>Intermediate English</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>4:00 PM - 5:30 PM</td>
            <td>Advanced English</td>
            <td>Available</td>
          </tr>
          {/* Add more courses rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default CoursesPage;
