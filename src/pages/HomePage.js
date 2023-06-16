import "../static/fonts.css";
import HomeTitleSection from "../components/home/HomeTitleSection";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeCourseReasons from "../components/home/HomeCourseReasons";

function HomePage() {
  return (
    <div>
      {/* <LogoProvider /> */}
      <HomeTitleSection />
      <HomeCourseReasons />
      <HomeAboutUs />
    </div>
  );
}

export default HomePage;
