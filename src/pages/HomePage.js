import "../static/fonts.css";
import HomeTitleSection from "../components/home/HomeTitleSection";
import HomeAboutUs from "../components/home/HomeAboutUs";
import LogoProvider from "../components/Logo";

function HomePage() {
  return (
    <div>
      <LogoProvider />
      <HomeTitleSection />
      <HomeAboutUs />
    </div>
  );
}

export default HomePage;
