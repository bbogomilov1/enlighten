import React from "react";
import { useTranslation } from "react-i18next";
import bulgarianFlag from "./static/bulgarian flag.png";
import englishFlag from "./static/english flag.png";
import styles from "./LanguageSwitched.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Use the i18n object to change the language
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.flagButton}
        onClick={() => changeLanguage("en")}
      >
        <img src={englishFlag} alt="English Flag" />
      </button>
      <button
        className={styles.flagButton}
        onClick={() => changeLanguage("bg")}
      >
        <img src={bulgarianFlag} alt="Bulgarian Flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
