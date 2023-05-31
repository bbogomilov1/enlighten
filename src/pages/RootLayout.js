import { Outlet } from "react-router-dom/dist";
import MainNavigation from "../components/MainNavigation";
import styles from "./RootLayout.module.css";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <Outlet>
        <main className={styles.main}>{children}</main>
      </Outlet>
      <Footer />
    </>
  );
};

export default RootLayout;
