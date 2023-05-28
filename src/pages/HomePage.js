import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.mindmap}>
        <img
          src="https://instagram.fsof9-1.fna.fbcdn.net/v/t51.2885-19/334786535_1253085591991643_8723896673674430860_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsof9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=aaEL_xLKwnoAX-XUJQ8&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCeshpkIKs_LTCsRVDjbtxvNVxBCB__NJtYQTTygw2WaQ&oe=647808FC&_nc_sid=f70a57"
          alt="Mindmap"
        />
      </div>
      <div className={styles.motivational}>
        <p>Start your English learning journey today!</p>
        <p>Enroll now and unlock new opportunities.</p>
      </div>
    </div>
  );
}

export default HomePage;
