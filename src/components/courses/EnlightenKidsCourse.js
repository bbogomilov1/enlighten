import styles from "./EnlightenKidsCourse.module.css";
import stars from "../../static/blackstars.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function EnlightenKidsCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>· the</h2>
        <h1>ENlightEN Kids</h1>
        <h2>course ·</h2>
      </div>
      <div className={styles.description}>
        <p>
          В <b>ENlightEN</b> следваме два важни принципа:
        </p>

        <h4>
          1. Децата учат по-бързо от възрастните и това е доказано с редица
          научни изследвания.
        </h4>

        <p>
          Чували сме израза "попиват като гъби". Това е така, защото в тази
          ранна възраст, мозъкът приема и запаметява информация по-бързо и
          по-лесно.
        </p>

        <h4>2. Децата са децата и обичат да играят! </h4>

        <p>
          Следователно, трябва да играят! Когато съберем тези два принципа,
          откриваме формулата, по която най-успешно да дадем знания на децата,
          така че те да искат да учат и да усвояват качествено преподадения
          материал: Децата могат да научат много и с лекота, стига да е като на
          игра!
        </p>
        <p>
          Учим се да разбираме и да говорим на английски език, да четем и да
          пишем, развивайки въображението, логическата мисъл и уменията за
          учене. Под игрова форма трупаме знания и изграждаме умения, ключови за
          бъдещото развитие на малчуганите.
        </p>

        <h2 className={styles.phrase}>
          И така, вместо задължение, уроците са очаквано приключение!
        </h2>
      </div>

      <div className={styles.starsContainer}>
        <img src={stars} alt="stars" className={styles.stars} />
      </div>

      <div className={styles.courseScheduleContainer}>
        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>5-7 г.</p>
          <p className={styles.courseScheduleDescription}>
            ВТОРНИК и ЧЕТВЪРТЪК
          </p>
          <p className={styles.courseScheduleDescription}>16:20 - 17:45</p>
        </div>

        <div className={styles.courseSchedule}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <p className={styles.courseScheduleDescription}>5-7 г.</p>
          <p className={styles.courseScheduleDescription}>СЪБОТА</p>
          <p className={styles.courseScheduleDescription}>12:00 - 13:00</p>
        </div>
      </div>

      <p className={styles.courseScheduleNote}>
        *Запишете Вашето дете чрез препочитаната от Вас форма на{" "}
        <Link to="/enroll" className={styles.courseScheduleLink}>
          <b>контакт</b>
        </Link>{" "}
        или чрез бързия чат в долния десен ъгъл.
      </p>
    </div>
  );
}

export default EnlightenKidsCourse;
