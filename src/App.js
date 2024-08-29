import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import ContactUsPage from "./pages/ContactUsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

import TheAcademy from "./components/about-us/TheAcademy";
import OurMission from "./components/about-us/OurMission";
import MeetTheTeachers from "./components/about-us/MeetTeachers";

import ConcentrateCourse from "./components/courses/ConcentrateCourse";
import WorldReadyCourse from "./components/courses/WorldReadyCourse";
import SmartArtCourse from "./components/courses/SmartArtCourse";
import EnlightenKidsCourse from "./components/courses/EnlightenKidsCourse";
import EnlightenPrivateCourse from "./components/courses/EnlightenPrivateCourse";
import YoungPresentersCourse from "./components/courses/YoungPresentersCourse";
import EnrollPage from "./pages/EnrollPage";
import EnrollPageAdult from "./pages/EnrollPageAdult";
import SchedulePage from "./pages/SchedulePage";

const routeChildren = [
  <Route key="home" index="true" element={<HomePage />} />,
  <Route key="about" path="about-us" element={<AboutUsPage />} />,
  <Route key="academy" path="about-us/the-academy" element={<TheAcademy />} />,
  <Route key="mission" path="about-us/our-mission" element={<OurMission />} />,
  <Route
    key="teachers"
    path="about-us/meet-the-teachers"
    element={<MeetTheTeachers />}
  />,

  <Route key="courses" path="courses" element={<CoursesPage />} />,
  <Route
    key="concentrate"
    path="courses/concentrate"
    element={<ConcentrateCourse />}
  />,
  <Route
    key="worldready"
    path="courses/worldready"
    element={<WorldReadyCourse />}
  />,
  <Route key="smartart" path="courses/smartart" element={<SmartArtCourse />} />,
  <Route
    key="kids"
    path="courses/enlighten-kids"
    element={<EnlightenKidsCourse />}
  />,
  <Route
    key="private"
    path="courses/enlighten-private"
    element={<EnlightenPrivateCourse />}
  />,
  <Route
    key="presenters"
    path="courses/young-presenters"
    element={<YoungPresentersCourse />}
  />,

  <Route key="schedule" path="schedule" element={<SchedulePage />} />,
  <Route key="contact" path="contact-us" element={<ContactUsPage />} />,
  <Route key="enroll" path="enroll" element={<EnrollPage />} />,
  <Route
    key="enroll-adult"
    path="enroll-adult"
    element={<EnrollPageAdult />}
  />,
];

const routeDefinitions = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path="/" element={<RootLayout />} children={routeChildren} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
