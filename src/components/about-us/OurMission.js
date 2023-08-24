import styles from "./OurMission.module.css";
import kidsImage from "../../static/preschool.jpg";

function OurMission() {
  return (
    <div className={styles.container}>
      <h1>Our Mission</h1>
      <div className={styles.description}>
        <div className={styles.paragraphsContainer}>
          <p>
            At EnlightEN, our mission is to provide a nurturing and engaging
            learning environment where children can develop a strong foundation
            in English language skills. We believe that every child has the
            potential to excel and grow, and we are dedicated to unlocking their
            linguistic abilities through interactive and immersive teaching
            methods.
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
        <div>
          <img src={kidsImage} alt="kids" className={styles.kidsImage} />
        </div>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobOne}
      >
        <path
          fill="#c28e00"
          d="M37.1,-14.8C44.3,10,43.7,34.6,26.7,50.1C9.7,65.6,-23.6,72,-46.6,56.9C-69.6,41.9,-82.3,5.5,-72.8,-22.4C-63.3,-50.4,-31.7,-69.9,-8.3,-67.2C15,-64.5,30,-39.6,37.1,-14.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default OurMission;
