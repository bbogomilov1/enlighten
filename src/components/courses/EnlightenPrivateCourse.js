import { Link } from "react-router-dom";
import styles from "./EnlightenPrivateCourse.module.css";

function EnlightenPrivateCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <span>·</span> the
        </h2>
        <h1>ENlightEN Private</h1>
        <h2>
          course <span>·</span>
        </h2>
      </div>
      <div className={styles.description}>
        <p>
          Детето учи усърдно, но все нещо остава неясно, не се чувства сигурно
          или въпреки усилията, оценките в училище остават незадоволителни?
          Часовете наред пред тетрадките и безкрайните повторения само водят до
          повече умора и липса на желание? Всяко дете може да научи английски
          език, но са различни методите, чрез които това се случва.
        </p>
        <p>
          Затова в <b>ENlightEN</b> предлагаме индивидуални уроци, с които да
          помогнем на децата да разберат и усвоят преподадения материал и да
          открият начините, по които самите те учат най-успешно, за да ги
          прилагат всеки път, когато се изправят пред нови уроци.
        </p>
        <p>
          Запълваме пропуските, изграждаме знания чрез разбиране, мислим и
          прилагаме наученото, за да остане в ума ни, не само в попълнените
          тетрадки. И когато ни се наложи да използваме английския език извън
          училище, да се втурнем към това предизвикателсво с увереност и
          ентусиазъм!
        </p>
      </div>

      <p className={styles.courseScheduleNote}>
        *Запишете се от{" "}
        <Link to="/enroll-adult" className={styles.courseScheduleLink}>
          <b>контакти</b>
        </Link>{" "}
        или чрез бързия чат в долния десен ъгъл.
      </p>
    </div>
  );
}

export default EnlightenPrivateCourse;
