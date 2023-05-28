import RootLayout from "./RootLayout";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <>
      <RootLayout />
      <div className={styles.errorContainer}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </div>
    </>
  );
}

export default ErrorPage;
