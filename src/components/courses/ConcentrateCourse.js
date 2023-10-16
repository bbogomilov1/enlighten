import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ConcentrateCourse.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ConcentrateCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>the</h2>
        <h1>concENtrate</h1>
        <h2>course</h2>
      </div>
      <div className={styles.description}>
        <p>
          Във времето на бързо сменящите се картини на екрана, но и бързо
          загубения интерес, на ярките и стимулиращи видеа, но бледия поглед към
          истинския свят - на детството в ерата на технологиите - едно от
          най-големите предизвикателства за децата се оказва да запазят{" "}
          <b>КОНЦЕНТРАЦИЯ</b>.
        </p>
        <p>
          Не защото не искат, не защото не им е интересно, а защото са
          привикнали към света онлайн. Така книгите вече не изглеждат така
          интересни, ученето е монотонно и скучно, игрите в реалния свят не са
          така вълнуващи...
        </p>
        <h1 className={styles.phrase}>Но могат да бъдат!</h1>
        <p>
          Нови времена - нови нужди - нови подходи! <b>ConcENtrate</b> е курс,
          който комбинира изучаването на английски език с методи за повишаване
          на концентрацията при децата.
        </p>
        <p>
          Разнообразието от игри и образователни задачи, забавни
          предизвикателства и творчески проекти помагат на децата да трупат
          практически знания и осъзнато да насочват вниманиено си към
          поставените цели.
        </p>
        <h2 className={styles.phrase}>
          Защото ученето е интересно,
          <br /> а да знаеш и да можеш е истински вълнуващо
          <br />- наистина, не онлайн!
        </h2>
      </div>

      <div className={styles.courseScheduleContainer}>
        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>3-4 г.</p>
          <p className={styles.courseScheduleDescription}>СРЯДА и ПЕТЪК</p>
          <p className={styles.courseScheduleDescription}>10:30 - 11:30</p>
        </div>

        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>5-7 г.</p>
          <p className={styles.courseScheduleDescription}>ПЕТЪК</p>
          <p className={styles.courseScheduleDescription}>16:20 - 17:45</p>
        </div>
      </div>
    </div>
  );
}

export default ConcentrateCourse;
