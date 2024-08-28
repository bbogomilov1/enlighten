import styles from "./SchedulePage.module.css";
import Schedule from "../components/schedule/Schedule";

function SchedulePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>·</span> График <span>·</span>
      </h1>

      <Schedule />

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blobTwo}
      >
        <path
          fill="#f9e888"
          d="M37.7,-27.1C46.9,-18.6,51,-3,48.4,12.1C45.8,27.2,36.5,41.9,21.6,51.6C6.7,61.4,-13.7,66.2,-25.8,58.5C-37.9,50.8,-41.7,30.6,-46.6,10.2C-51.6,-10.1,-57.8,-30.6,-50.2,-38.7C-42.7,-46.9,-21.3,-42.7,-3.5,-39.9C14.3,-37.1,28.6,-35.6,37.7,-27.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        class={styles.blobOne}
      >
        <path
          fill="rgb(186 218 246)"
          d="M65.4,-20.5C67.9,-13.5,41.5,3.6,16.5,21.5C-8.5,39.4,-32.1,58,-45.7,51C-59.3,43.9,-62.8,11.2,-53.6,-5.1C-44.3,-21.4,-22.1,-21.2,4.7,-22.7C31.5,-24.2,62.9,-27.4,65.4,-20.5Z"
          transform="translate(100 100)"
        ></path>
      </svg>
    </div>
  );
}

export default SchedulePage;
