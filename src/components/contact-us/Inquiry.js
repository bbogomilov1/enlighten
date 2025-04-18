import styles from "./Inquiry.module.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

function Inquiry() {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_8fo9rae", // Replace with your EmailJS service ID
        "template_pkbwzk6", // Replace with your EmailJS template ID
        e.target,
        "jCu2uK0BBUSwS8fQi" // Replace with your EmailJS user ID
      );

      alert("Изпратихте запитването успешно.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h2>{t("Make an Inquiry")}</h2>
        <p>{t("Want to learn more...")}</p>
        <div className={styles.formContainer}>
          <form
            action="#"
            className={styles.inquiryForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="from_name"
                placeholder={t("Full Name") + " *"}
                required
              />
            </div>
            <div className={styles.inquiryGroup}>
              <input
                type="email"
                name="from_email"
                placeholder="Email *"
                required
              />
              <input
                type="tel"
                name="from_phone"
                placeholder={t("Phone Number") + " *"}
                required
              />
            </div>
            <textarea
              name="from_message"
              placeholder={t("Your Message") + " *"}
              required
            ></textarea>
            <button type="submit" className={styles.formButton}>
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
