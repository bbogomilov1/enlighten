import "../static/fonts.css";
import HomeTitleSection from "../components/home/HomeTitleSection";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeCourseReasons from "../components/home/HomeCourseReasons";
import ReviewsCarousel from "../components/home/ReviewsCarousel";

function HomePage() {
  return (
    <div>
      {/* <LogoProvider /> */}
      <HomeTitleSection />
      <HomeCourseReasons />
      <HomeAboutUs />
      <ReviewsCarousel />
    </div>
  );
}

export default HomePage;
