import styles from "./WorldReadyCourse.module.css";
import stars from "../../static/whitestars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function WorldReadyCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>· the</h2>
        <h1>WorldReady</h1>
        <h2>course ·</h2>
      </div>
      <div className={styles.description}>
        <p>
          "Учим английски език, изкарваме 6-ци, после отиваме в чужбина и си
          оплитаме езика". Много родители са идвали при мен с въпроса "
          <b>защо се получава така?</b>".
        </p>
        <p>
          Често изучаването на английски език е свързано с натрупването на
          речников запас и изучаването на граматически структури. Децата успяват
          да запомнят представените формули и да попълнят упражненията в
          учебника и учебната тетрадка, но прилагането на изученото стига дотам.
          А когато преминат към следващия урок, предишният избледнява в
          съзнанието им.
        </p>
        <p>
          Това се случва, защото преподаденият материал остава въображаем.
          Вместо да бъде използван в реални ситуации, с които децата да го
          асоциират и затвърдят, той остава в страниците на попълнените
          тетрадки.
        </p>
        <p>
          <b>WorldReady</b> е курс, който подготвя децата за реална комуникация
          на английски език. Вместо да учим пасивно думи и граматика, ние
          създаваме ситуации, чрез които да обогатяваме речниковия си запас и да
          използваме активно граматическите структури. Пасивните знания -
          превръщаме в активни!
        </p>
        <p>
          От най-често срещаните ситуации като тези на летището, в ресторанта, в
          магазина (всеки трябва да може сам да си купи сладолед все пак), до
          задълбочени разговори на различни теми с нови приятели, учители и
          съученици. Възможностите са безкрайни, когато имаш свободата да
          комуникираш успешно!
        </p>
        <h2 className={styles.phrase}>
          Not only "small talk" - real quality talk!
        </h2>
      </div>

      <div className={styles.starsContainer}>
        <img src={stars} alt="stars" className={styles.stars} />
      </div>

      <div className={styles.courseScheduleContainer}>
        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>7-9 г.</p>
          <p className={styles.courseScheduleDescription}>СРЯДА</p>
          <p className={styles.courseScheduleDescription}>16:20 - 17:45</p>
        </div>

        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>10-12 г.</p>
          <p className={styles.courseScheduleDescription}>ПЕТЪК</p>
          <p className={styles.courseScheduleDescription}>16:20 - 17:45</p>
        </div>
      </div>

      <p className={styles.courseScheduleNote}>
        *Запишете Вашето дете от{" "}
        <Link to="/enroll" className={styles.courseScheduleLink}>
          <b>контакти</b>
        </Link>{" "}
        или чрез бързия чат в долния десен ъгъл.
      </p>
    </div>
  );
}

export default WorldReadyCourse;
