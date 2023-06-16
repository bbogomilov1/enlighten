import styles from "./HomeCourseReasons.module.css";

function HomeCourseReasons() {
  return (
    <div className={styles.container}>
      <h2>Find the best English course for you</h2>
      <p>We developed some courses which will fill every need.</p>
      <div className={styles.reasons}>
        <div className={styles.column}>
          <p>
            <section>→</section>Fun and Interactive Learning
          </p>
          <p>
            <section>→</section>Experienced and Dedicated Teachers
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <section>→</section>Personalized Attention
          </p>
          <p>
            <section>→</section>Comprehensive Development
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCourseReasons;
