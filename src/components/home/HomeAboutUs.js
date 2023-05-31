import styles from "./HomeAboutUs.module.css";
import TeacherImg from "../../static/Screenshot 2023-05-31 151624.png";
import WhaleImg from "../../static/Screenshot 2023-05-31 162209.png";
import CubesImg from "../../static/Screenshot 2023-05-31 164607.png";
import ConversationImg from "../../static/Screenshot 2023-05-31 170648.png";

function HomeAboutUs() {
  return (
    <div className={styles.container}>
      <h1>
        Learn English in an innovative <br />{" "}
        <section> and interactive way!</section>
      </h1>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={TeacherImg} alt="teacher" />
        </div>
        <div className={styles.reasonOne}>
          <h2>Engage with the Best English Teachers</h2>
          <p>
            At our academy, we bring together a team of highly qualified and
            experienced English teachers. With their expertise and passion for
            teaching, your child will receive top-notch guidance to master the
            English language.
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.reasonTwo}>
          <h2>Immerse in Fun and Interactive Learning</h2>
          <p>
            We believe in making English learning enjoyable and interactive for
            kids. Our classes are designed to spark their curiosity and engage
            them in hands-on activities, games, and creative projects. Your
            child will have a blast while developing language skills.
          </p>
        </div>
        <div className={styles.reasonTwoImg}>
          <img src={WhaleImg} alt="whale" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={CubesImg} alt="cubes" />
        </div>
        <div className={styles.reasonTwo}>
          <h2>Innovative Teaching Methodology</h2>
          <p>
            We follow a dynamic and innovative teaching methodology tailored to
            the needs of young learners. Our approach combines the best of
            traditional and modern techniques, incorporating multimedia
            resources, interactive technology, and personalized learning plans.
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.reasonFour}>
          <h2>Cultivate Confidence and Communication Skills</h2>
          <p>
            Communication is key! We focus on nurturing your child's confidence
            in using English through interactive speaking, listening, reading,
            and writing exercises. Our goal is to equip them with strong
            communication skills that will empower them in their personal and
            academic journeys.
          </p>
        </div>
        <div className={styles.image}>
          <img src={ConversationImg} alt="cubes" />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
