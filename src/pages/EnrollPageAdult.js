import styles from "./EnrollPageAdult.module.css";
import Form from "react-bootstrap/Form";

import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState } from "react";

function EnrollPage() {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_8fo9rae", // Replace with your EmailJS service ID
        "template_bh8pz5t", // Replace with your EmailJS template ID
        e.target,
        "jCu2uK0BBUSwS8fQi" // Replace with your EmailJS user ID
      );

      alert("Изпратихте запитването успешно.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.enrollContainer}>
          <div className={styles.listContainer}>
            <h2 className={styles.title}>
              <span>·</span> ЗАПИШИ СЕ ЗА ЧАС <span>·</span>
            </h2>
            <div className={styles.formContainer}>
              <form
                action="#"
                className={styles.inquiryForm}
                onSubmit={handleSubmit}
              >
                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Име и фамилия:</p>
                  <input
                    type="text"
                    name="parent_name"
                    placeholder={t("Full Name") + " *"}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Години:</p>
                  <input
                    type="text"
                    name="child_age"
                    placeholder={"Години" + " *"}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Телефон за връзка:</p>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("Phone Number") + " *"}
                    required
                  />
                </div>

                <div className={styles.formButtonContainer}>
                  <button type="submit" className={styles.formButton}>
                    Изпрати запитване
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollPage;
