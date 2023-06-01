import styles from "./MeetTeachers.module.css";
import laritaImage from "../../static/311373822_5340375706012360_6099292886436765504_n.jpg";
import betinaImage from "../../static/Screenshot 2023-06-01 2026599.jpg";

function MeetTheTeachers() {
  return (
    <div className={styles.container}>
      <div className={styles.meetTheTeachers}>
        <h1>Meet The Teachers</h1>
        <div className={styles.teacherContainer}>
          <div className={styles.teacherLarita}>
            <img
              src={laritaImage}
              alt="Larita"
              className={styles.teacherImage}
            />
          </div>
          <div className={styles.teacherDescription}>
            <h2>Larita Vutova</h2>
            <p>
              Meet Larita, our enthusiastic and dedicated English teacher. With
              a passion for language and a knack for making learning fun, Lari
              creates an engaging classroom environment where students feel
              motivated to excel. She brings creativity into her lessons and
              encourages interactive participation to foster a love for English
              language and literature. Lari's warm and patient approach ensures
              that every child feels supported and inspired on their language
              learning journey.
            </p>
          </div>
        </div>
        <div className={styles.teacherContainer}>
          <div className={styles.teacherDescription}>
            <h2>Betina Kremenova</h2>
            <p>
              Say hello to Betina, our experienced and caring English teacher.
              With a background in child education, Betty understands the unique
              needs of young learners and tailors his teaching methods to suit
              different learning styles. Betty's friendly demeanor and effective
              communication skills make him a favorite among students, building
              a positive and encouraging classroom atmosphere that promotes
              language development and personal growth.
            </p>
          </div>
          <div className={styles.teacherBetina}>
            <img
              src={betinaImage}
              alt="Betina"
              className={styles.teacherImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeachers;
