import LogoProvider from "../components/Logo";
import MeetTheTeachers from "../components/about-us/MeetTeachers";
import TheAcademy from "../components/about-us/ThaAcademy";
import OurMission from "../components/about-us/OurMission";

function AboutUsPage() {
  return (
    <div>
      <LogoProvider />
      <TheAcademy />
      <OurMission />
      <MeetTheTeachers />
    </div>
  );
}

export default AboutUsPage;
