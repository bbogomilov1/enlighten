import styles from "./EnlightenKidsCourse.module.css";

function EnlightenKidsCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>the</h2>
        <h1>ENlightEN Kids</h1>
        <h2>course</h2>
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
    </div>
  );
}

export default EnlightenKidsCourse;
