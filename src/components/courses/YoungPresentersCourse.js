import { Link } from "react-router-dom";
import styles from "./YoungPresentersCourse.module.css";

function YoungPresentersCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <span>·</span> the
        </h2>
        <h1>Young PresENters</h1>
        <h2>
          course <span>·</span>
        </h2>
      </div>
      <div className={styles.description}>
        <p>
          <b>Увереност, яснота, доверие</b> - да грабнеш аудиторията от първия
          миг.
          <br /> Да умееш да изкажеш мнението си и да представиш работата си по
          увлекателен, интересен и представителен начин.
          <br /> Да разказваш с вълнение, вместо с притеснение, да комуникираш
          смело, вместо плахо, да бъдеш очакван презентатор, защото думите ти
          звучат дълго след представянето ти.
        </p>
        <p>
          Това са уменията, които развиваме в нашия{" "}
          <b>Young Presenters Course</b>! Защото как се представяме е също
          толкова важно, колкото какво представяме!
        </p>
        <p>
          Даваме възможност на учениците да се научат да говорят уверено и
          увлекателно, правилно и с отношение, за да могат да покажат на света
          колко много знаят и могат!
        </p>
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

export default YoungPresentersCourse;
