import styles from "./CoursesPage.module.css";
import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";

function CoursesPage() {
  return (
    <div className={styles.container}>
      <ConcentrateCourse />
      <WorldReadyCourse />
      <SmartArtCourse />
    </div>
  );
}

export default CoursesPage;
