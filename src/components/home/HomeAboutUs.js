import styles from "./HomeAboutUs.module.css";

function HomeAboutUs() {
  return (
    <div className={styles.container}>
      <h1>
        Learn English in an innovative <br />{" "}
        <section> and interactive way!</section>
      </h1>
      <div className={styles.info}>
        <div className={styles.number}>1</div>
        <div className={styles.reasonOne}>
          <h2>Engage with the Best English Teachers</h2>
          <p>
            At our academy, we bring together a team of highly qualified and
            experienced English teachers. With their expertise and passion for
            teaching, your child will receive top-notch guidance to master the
            English language.
          </p>
        </div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobOne}
        >
          <path
            fill="rgb(186 218 246)"
            d="M65.4,-20.5C67.9,-13.5,41.5,3.6,16.5,21.5C-8.5,39.4,-32.1,58,-45.7,51C-59.3,43.9,-62.8,11.2,-53.6,-5.1C-44.3,-21.4,-22.1,-21.2,4.7,-22.7C31.5,-24.2,62.9,-27.4,65.4,-20.5Z"
            transform="translate(100 100)"
          />
        </svg>
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
        <div className={styles.number}>2</div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobTwo}
        >
          <path
            fill="#c4ffde"
            d="M66.9,-21.8C73.7,-0.7,57.4,27.9,39.7,36.5C22,45,3,33.5,-18.3,19.4C-39.5,5.3,-63.1,-11.4,-60.5,-26.8C-57.8,-42.2,-28.9,-56.3,0.6,-56.5C30,-56.7,60.1,-43,66.9,-21.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={styles.info}>
        <div className={styles.number}>3</div>
        <div className={styles.reasonTwo}>
          <h2>Innovative Teaching Methodology</h2>
          <p>
            We follow a dynamic and innovative teaching methodology tailored to
            the needs of young learners. Our approach combines the best of
            traditional and modern techniques, incorporating multimedia
            resources, interactive technology, and personalized learning plans.
          </p>
        </div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobThree}
        >
          <path
            fill="rgb(249, 232, 136)"
            d="M26.2,-19.8C34.9,-17.6,43.5,-8.8,47.5,4C51.5,16.8,51,33.7,42.4,48C33.7,62.2,16.8,74,6.6,67.3C-3.6,60.7,-7.2,35.8,-18.6,21.5C-29.9,7.2,-49,3.6,-52.3,-3.3C-55.5,-10.2,-43,-20.3,-31.7,-22.5C-20.3,-24.7,-10.2,-18.9,-0.7,-18.2C8.8,-17.5,17.6,-21.9,26.2,-19.8Z"
            transform="translate(100 100)"
          />
        </svg>
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
        <div className={styles.number}>4</div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.blobFour}
        >
          <path
            fill="rgb(186 218 246)"
            d="M44.4,-41.9C58.3,-30.4,71,-15.2,70.7,-0.3C70.4,14.5,57,29.1,43,43.6C29.1,58.2,14.5,72.8,0.3,72.4C-13.8,72.1,-27.7,56.8,-38.8,42.2C-49.9,27.7,-58.2,13.8,-57.7,0.5C-57.2,-12.8,-47.9,-25.7,-36.8,-37.2C-25.7,-48.6,-12.8,-58.7,1.2,-59.9C15.2,-61.1,30.4,-53.3,44.4,-41.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default HomeAboutUs;
