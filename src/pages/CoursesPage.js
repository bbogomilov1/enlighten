import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";
import EnlightenKidsCourse from "../components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "../components/courses/EnlightenPrivateCourse";
import YoungPresentersCourse from "../components/courses/YoungPresentersCourse";

function CoursesPage() {
  return (
    <div>
      <ConcentrateCourse />
      <WorldReadyCourse />
      <SmartArtCourse />
      <EnlightenKidsCourse />
      <EnlightenPrivateCourse />
      <YoungPresentersCourse />
    </div>
  );
}

export default CoursesPage;
