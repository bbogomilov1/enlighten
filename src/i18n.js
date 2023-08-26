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
        "Learn English in an innovative and interactive way":
          "Learn English in an innovative and interactive way",
        "Engage with the Best English Teachers":
          "Engage with the Best English Teachers",
        "at our academy":
          "At our academy, we bring together a team of highly qualified and experienced English teachers. With their expertise and passion for teaching, your child will receive top-notch guidance to master the English language.",
        "Immerse in Fun and Interactive Learning":
          "Immerse in Fun and Interactive Learning",
        "we believe in making":
          "We believe in making English learning enjoyable and interactive for kids. Our classes are designed to spark their curiosity and engage them in hands-on activities, games, and creative projects. Your child will have a blast while developing language skills.",
        "Innovative Teaching Methodology": "Innovative Teaching Methodology",
        "we follow":
          "We follow a dynamic and innovative teaching methodology tailored to the needs of young learners. Our approach combines the best of traditional and modern techniques, incorporating multimedia resources, interactive technology, and personalized learning plans.",
        "Cultivate Confidence and Communication Skills":
          "Cultivate Confidence and Communication Skills",
        "communication is key":
          "Communication is key! We focus on nurturing your child's confidence in using English through interactive speaking, listening, reading, and writing exercises. Our goal is to equip them with strong communication skills that will empower them in their personal and academic journeys.",
      },
    },
    bg: {
      translation: {
        home: "Начало",
        "about us": "За нас",
        schedule: "Програма",
        "contact us": "Контакти",
        "unlock the power":
          "Отключи възможностите си към изучаването на английски език с нас.",
        "join us":
          "Присъединете се към нас в нашето приключение и отворете вратите към безкрайни възможности.",
        "enroll now": "Запиши се",
        "find the best course": "Открий най-подходящия курс за теб",
        "we developed some courses":
          "Разработихме няколко курса, които ще задоволят всяка нужда.",
        "Fun and Interactive Learning": "Забавно и интерактивно обучение",
        "Experienced and Dedicated Teachers": "Опитни и всеотдайни учители",
        "Personalized Attention": "Персонализирано внимание",
        "Comprehensive Development": "Цялостно развитие",
        "Learn English in an innovative and interactive way":
          "Научи английски език по иновативен и интерактивен начин",
        "Engage with the Best English Teachers":
          "Работете с най-добрите учители по английски език",
        "at our academy":
          "В нашата академия събираме екип от висококвалифицирани и опитни преподаватели по английски език. С техния опит и страст към преподаването, вашето дете ще получи първокласни насоки за овладяване на английски език.",
        "Immerse in Fun and Interactive Learning":
          "Потопете се в забавно и интерактивно обучение",
        "we believe in making":
          "Ние вярваме в това да направим изучаването на английски език приятно и интерактивно за децата. Нашите класове са предназначени да разпалят любопитството им и да ги ангажират в практически дейности, игри и творчески проекти. Вашето дете ще се забавлява, докато развива езикови умения.",
        "Innovative Teaching Methodology":
          "Иновативна методология на преподаване",
        "we follow":
          "Ние използваме динамична и иновативна методология на преподаване, съобразена с нуждите на малките ученици. Нашият подход съчетава най-доброто от традиционните и съвременните техники, включвайки мултимедийни ресурси, интерактивни технологии и персонализирани планове за обучение.",
        "Cultivate Confidence and Communication Skills":
          "Придобиване на увереност и комуникативни умения",
        "communication is key":
          "Комуникацията е отговорът! Ние се фокусираме върху придобиването на увереност на вашето дете в използването на английски чрез интерактивни упражнения за говорене, слушане, четене и писане. Нашата цел е да ги оборудваме със силни комуникационни умения, които ще им помогнат в техните лични и академични пътувания.",
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
