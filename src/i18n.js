import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "unlock-the-power": "Unlock the power of English learning with us.",
        "join-us":
          "Join us now on our journey today and open the door to endless opportunities.",
        "enroll-now": "Enroll now",
      },
    },
    bg: {
      translation: {
        "unlock-the-power":
          "Отключи възможностите си на изучаването на английски с нас.",
        "join-us":
          "Присъединете се към нас в нашето приключение и отворете вратите към безкрайни възможности.",
        "enroll-now": "Запиши се",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
