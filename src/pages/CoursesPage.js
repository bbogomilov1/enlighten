import styles from "./CoursesPage.module.css";
import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";

function CoursesPage() {
  return (
    <div className={styles.container}>
      <ConcentrateCourse />
      <WorldReadyCourse />
    </div>
  );
}

export default CoursesPage;
