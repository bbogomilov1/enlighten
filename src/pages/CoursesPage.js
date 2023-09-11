import styles from "./CoursesPage.module.css";
import ConcentrateCourse from "../components/courses/ConcentrateCourse";

function CoursesPage() {
  return (
    <div className={styles.container}>
      <ConcentrateCourse />
    </div>
  );
}

export default CoursesPage;
