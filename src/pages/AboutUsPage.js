import styles from "./AboutUsPage.module.css";
import LogoProvider from "../components/Logo";
import MeetTheTeachers from "../components/about-us/MeetTeachers";

function AboutUsPage() {
  return (
    <div>
      <LogoProvider />
      <div className={styles.container}>
        <div>
          <h1>The Academy</h1>
          <p>
            At MasterMinds, we provide engaging and interactive English classes
            designed specifically for kids. Our experienced teachers make
            learning English fun and exciting through games, activities, and
            creative lessons.
          </p>
          <p>
            Whether your child is a beginner or already has some English
            knowledge, our academy offers a structured curriculum tailored to
            their needs. We focus on building strong foundations in listening,
            speaking, reading, and writing, ensuring steady progress and
            confidence.
          </p>
        </div>
        <div>
          <h1>Our Mission</h1>
          <p>
            At MasterMinds Kids Academy, our mission is to provide a nurturing
            and engaging learning environment where children can develop a
            strong foundation in English language skills. We believe that every
            child has the potential to excel and grow, and we are dedicated to
            unlocking their linguistic abilities through interactive and
            immersive teaching methods.
          </p>
          <p>
            Our experienced and passionate educators strive to create a
            supportive atmosphere that fosters creativity, critical thinking,
            and a love for learning. By combining innovative techniques,
            personalized attention, and a comprehensive curriculum, we aim to
            empower children to become confident communicators, lifelong
            learners, and global citizens. Our mission is to make the journey of
            English language acquisition an enjoyable and enriching experience,
            equipping children with the tools they need to thrive academically
            and beyond.
          </p>
        </div>
      </div>
      <MeetTheTeachers />
    </div>
  );
}

export default AboutUsPage;
