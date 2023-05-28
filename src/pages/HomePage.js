import styles from "./HomePage.module.css";
import "../static/fonts.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Start your English learning
          <br /> <section> journey today!</section>
        </h1>
        <p>Enroll now and unlock new opportunities.</p>
      </div>
    </div>
  );
}

export default HomePage;
