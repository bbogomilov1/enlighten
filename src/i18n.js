import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        "about us": "About us",
        schedule: "Schedule",
        "contact us": "Contact us",
        "unlock the power": "Unlock the power of English learning with us.",
        "join us":
          "Join us now on our journey today and open the door to endless opportunities.",
        "enroll now": "Enroll now",
        "find the best course": "Find the best English course for you",
        "we developed some courses":
          "We developed some courses which will fill every need.",
        "Fun and Interactive Learning": "Fun and Interactive Learning",
        "Experienced and Dedicated Teachers":
          "Experienced and Dedicated Teachers",
        "Personalized Attention": "Personalized Attention",
        "Comprehensive Development": "Comprehensive Development",
      },
    },
    bg: {
      translation: {
        home: "Начало",
        "about us": "За нас",
        schedule: "Програма",
        "contact us": "Контакти",
        "unlock the power":
          "Отключи възможностите си на изучаването на английски език с нас.",
        "join us":
          "Присъединете се към нас в нашето приключение и отворете вратите към безкрайни възможности.",
        "enroll now": "Запиши се",
        "find the best course": "Изберете най-подходящия курс за Вас",
        "we developed some courses":
          "Разработихме няколко курса, които ще задоволят всяка нужда.",
        "Fun and Interactive Learning": "Забавно и интерактивно обучение",
        "Experienced and Dedicated Teachers": "Опитни и всеотдайни учители",
        "Personalized Attention": "Персонализирано внимание",
        "Comprehensive Development": "Цялостно развитие",
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
