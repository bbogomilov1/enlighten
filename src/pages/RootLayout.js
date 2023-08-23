import { Outlet, useLocation } from "react-router-dom/dist";
import MainNavigation from "../components/MainNavigation";
import styles from "./RootLayout.module.css";
import Footer from "../components/Footer";
import { useEffect } from "react";

const RootLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
