import styles from "./HomeAboutUs.module.css";

function HomeAboutUs() {
  return (
    <div className={styles.container}>
      <h1>
        Learn English in an innovative <br /> and interactive way!
      </h1>
      <section>
        <h2>Engage with the Best English Teachers</h2>
        <p>
          At our academy, we bring together a team of highly qualified and
          experienced English teachers. With their expertise and passion for
          teaching, your child will receive top-notch guidance to master the
          English language.
        </p>
      </section>
      <section>
        <h2>Immerse in Fun and Interactive Learning</h2>
        <p>
          We believe in making English learning enjoyable and interactive for
          kids. Our classes are designed to spark their curiosity and engage
          them in hands-on activities, games, and creative projects. Your child
          will have a blast while developing language skills.
        </p>
      </section>
      <section>
        <h2>Innovative Teaching Methodology</h2>
        <p>
          We follow a dynamic and innovative teaching methodology tailored to
          the needs of young learners. Our approach combines the best of
          traditional and modern techniques, incorporating multimedia resources,
          interactive technology, and personalized learning plans.
        </p>
      </section>
      <section>
        <h2>Cultivate Confidence and Communication Skills</h2>
        <p>
          Communication is key! We focus on nurturing your child's confidence in
          using English through interactive speaking, listening, reading, and
          writing exercises. Our goal is to equip them with strong communication
          skills that will empower them in their personal and academic journeys.
        </p>
      </section>
    </div>
  );
}

export default HomeAboutUs;
