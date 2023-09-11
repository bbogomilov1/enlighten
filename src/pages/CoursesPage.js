import styles from "./CoursesPage.module.css";
import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";
import EnlightenKidsCourse from "../components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "../components/courses/EnlightenPrivateCourse";

function CoursesPage() {
  return (
    <div className={styles.container}>
      <ConcentrateCourse />
      <WorldReadyCourse />
      <SmartArtCourse />
      <EnlightenKidsCourse />
      <EnlightenPrivateCourse />
    </div>
  );
}

export default CoursesPage;
