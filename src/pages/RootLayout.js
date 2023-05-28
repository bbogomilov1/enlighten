import { Outlet } from "react-router-dom/dist";
import MainNavigation from "../components/MainNavigation";
import styles from "./RootLayout.module.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default RootLayout;
