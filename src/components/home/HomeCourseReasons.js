import styles from "./HomeCourseReasons.module.css";

function HomeCourseReasons() {
  return (
    <div className={styles.container}>
      <h2>Find the best English course for you</h2>
      <p>We developed some courses which will fill every need.</p>
      <div className={styles.reasons}>
        <div className={styles.column}>
          <p>
            <span>→</span>Fun and Interactive Learning
          </p>
          <p>
            <span>→</span>Experienced and Dedicated Teachers
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <span>→</span>Personalized Attention
          </p>
          <p>
            <span>→</span>Comprehensive Development
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCourseReasons;
