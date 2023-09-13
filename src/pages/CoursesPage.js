import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";
import EnlightenKidsCourse from "../components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "../components/courses/EnlightenPrivateCourse";

function CoursesPage() {
  return (
    <div>
      <div id="concentrate">
        <ConcentrateCourse />
      </div>
      <div id="world-ready">
        <WorldReadyCourse />
      </div>
      <div id="smart-art">
        <SmartArtCourse />
      </div>
      <div id="enlighten-kids">
        <EnlightenKidsCourse />
      </div>
      <div id="enlighten-private">
        <EnlightenPrivateCourse />
      </div>
    </div>
  );
}

export default CoursesPage;
