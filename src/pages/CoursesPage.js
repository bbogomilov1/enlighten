import ConcentrateCourse from "../components/courses/ConcentrateCourse";
import WorldReadyCourse from "../components/courses/WorldReadyCourse";
import SmartArtCourse from "../components/courses/SmartArtCourse";
import EnlightenKidsCourse from "../components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "../components/courses/EnlightenPrivateCourse";
import YoungPresentersCourse from "../components/courses/YoungPresentersCourse";
import Slideshow from "../components/courses/Slideshow";

function CoursesPage() {
  const slides = [
    <ConcentrateCourse />,
    <WorldReadyCourse />,
    <SmartArtCourse />,
    <EnlightenKidsCourse />,
    <EnlightenPrivateCourse />,
    <YoungPresentersCourse />,
  ];
  return <Slideshow slides={slides} />;
}

export default CoursesPage;
