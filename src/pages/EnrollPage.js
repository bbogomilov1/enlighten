import styles from "./EnrollPage.module.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

function EnrollPage() {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_hu5cf6p", // Replace with your EmailJS service ID
        "template_bh8pz5t", // Replace with your EmailJS template ID
        e.target,
        "jCu2uK0BBUSwS8fQi" // Replace with your EmailJS user ID
      );

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.enrollContainer}>
          <div className={styles.listContainer}>
            <h2 className={styles.title}>· ЗАПИШИ СЕ ЗА ЧАС ·</h2>
            {/* <p>{t("Want to learn more...")}</p> */}
            <div className={styles.formContainer}>
              <form
                action="#"
                className={styles.inquiryForm}
                onSubmit={handleSubmit}
              >
                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>
                    Имена на родител/настойник
                  </p>
                  <input
                    type="text"
                    name="parent_name"
                    placeholder={t("Full Name") + " *"}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Имена на дете</p>
                  <input
                    type="text"
                    name="child_name"
                    placeholder={"Имена на дете" + " *"}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Телефон за връзка</p>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("Phone Number") + " *"}
                    required
                  />
                </div>

                <div className={styles.radioGroup}>
                  <p className={styles.inputTitle}>Избери курс</p>
                  <input
                    type="radio"
                    id="concentrate"
                    name="course"
                    value="concENtrate"
                  />
                    <label for="concentrate">concENtrate</label>
                  <br />
                  <input
                    type="radio"
                    id="worldready"
                    name="course"
                    value="WorldReady"
                  />
                    <label for="worldready">WorldReady</label>
                  <br />
                  <input
                    type="radio"
                    id="smartart"
                    name="course"
                    value="SmartArt"
                  />
                    <label for="smartart">SmartArt</label>
                  <br />
                  <input
                    type="radio"
                    id="kids"
                    name="course"
                    value="ENlightEN Kids"
                  />
                    <label for="kids">ENlightEN Kids</label>
                  <br />
                  <input
                    type="radio"
                    id="private"
                    name="course"
                    value="ENlightEN Private"
                  />
                    <label for="private">ENlightEN Private</label>
                  <br />
                  <input
                    type="radio"
                    id="presenters"
                    name="course"
                    value="Young PresENters"
                  />
                    <label for="presenters">Young PresENters</label>
                  <br />
                </div>

                {/* <textarea
                  name="from_message"
                  placeholder={t("Your Message") + " *"}
                  required
                ></textarea> */}

                <div className={styles.formButtonContainer}>
                  <button type="submit" className={styles.formButton}>
                    {t("Send")}
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
