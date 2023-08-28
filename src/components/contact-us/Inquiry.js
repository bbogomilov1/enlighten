import styles from "./Inquiry.module.css";

function Inquiry() {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li>Sofia 1619, Something bul. 47</li>
        <li>+359 (0) 123 456 789</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Tik-Tok</li>
        <li>office@enlighten.bg</li>
      </ul>
    </div>
  );
}

export default Inquiry;
