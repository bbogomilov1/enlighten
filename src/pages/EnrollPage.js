import styles from "./EnrollPage.module.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState } from "react";

function EnrollPage() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);

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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.enrollContainer}>
          <div className={styles.listContainer}>
            <h2 className={styles.title}>· ЗАПИШИ СЕ ЗА ЧАС ·</h2>
            <div className={styles.formContainer}>
              <form
                action="#"
                className={styles.inquiryForm}
                onSubmit={handleSubmit}
              >
                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>
                    Имена на родител/настойник:
                  </p>
                  <input
                    type="text"
                    name="parent_name"
                    placeholder={t("Full Name") + " *"}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.inputTitle}>Имена на дете:</p>
                  <input
                    type="text"
                    name="child_name"
                    placeholder={"Имена на дете" + " *"}
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

                <div className={styles.radioGroupContainer}>
                  <div className={styles.radioGroup}>
                    <p className={styles.inputTitle}>Избери курс:</p>
                    <div className={styles.radioGroupInputs}>
                      <input
                        type="radio"
                        id="concentrate"
                        name="course"
                        value="concENtrate"
                        checked={selectedOption === "concENtrate"}
                        onChange={handleOptionChange}
                      />
                        <label htmlFor="concentrate">concENtrate</label>
                      {/* {selectedOption === "concENtrate" && (
                        <div>
                          <input
                            type="radio"
                            name="sub-option1"
                            value="sub-option1-1"
                          />
                          <label htmlFor="sub-option1-1">Sub-option 1.1</label>
                          <br />
                          <input
                            type="radio"
                            name="sub-option1"
                            value="sub-option1-2"
                          />
                          <label htmlFor="sub-option1-2">Sub-option 1.2</label>
                        </div>
                      )} */}
                      <br />
                      <input
                        type="radio"
                        id="worldready"
                        name="course"
                        value="WorldReady"
                      />
                        <label htmlFor="worldready">WorldReady</label>
                      <br />
                      <input
                        type="radio"
                        id="smartart"
                        name="course"
                        value="SmartArt"
                      />
                        <label htmlFor="smartart">SmartArt</label>
                      <br />
                      <input
                        type="radio"
                        id="kids"
                        name="course"
                        value="ENlightEN Kids"
                      />
                        <label htmlFor="kids">ENlightEN Kids</label>
                      <br />
                      <input
                        type="radio"
                        id="private"
                        name="course"
                        value="ENlightEN Private"
                      />
                        <label htmlFor="private">ENlightEN Private</label>
                      <br />
                      <input
                        type="radio"
                        id="presenters"
                        name="course"
                        value="Young PresENters"
                      />
                        <label htmlFor="presenters">Young PresENters</label>
                      <br />
                    </div>
                  </div>

                  {/* <div className={styles.radioGroup}>
                    <p className={styles.inputTitle}>Избери ден и час:</p>
                    <div className={styles.radioGroupInputs}>
                      <input
                        type="radio"
                        id="concentrate"
                        name="course"
                        value="concENtrate"
                      />
                        <label htmlFor="concentrate">concENtrate</label>
                      <br />
                      <input
                        type="radio"
                        id="worldready"
                        name="course"
                        value="WorldReady"
                      />
                        <label htmlFor="worldready">WorldReady</label>
                      <br />
                      <input
                        type="radio"
                        id="smartart"
                        name="course"
                        value="SmartArt"
                      />
                        <label htmlFor="smartart">SmartArt</label>
                      <br />
                      <input
                        type="radio"
                        id="kids"
                        name="course"
                        value="ENlightEN Kids"
                      />
                        <label htmlFor="kids">ENlightEN Kids</label>
                      <br />
                      <input
                        type="radio"
                        id="private"
                        name="course"
                        value="ENlightEN Private"
                      />
                        <label htmlFor="private">ENlightEN Private</label>
                      <br />
                      <input
                        type="radio"
                        id="presenters"
                        name="course"
                        value="Young PresENters"
                      />
                        <label htmlFor="presenters">Young PresENters</label>
                      <br />
                    </div>
                  </div> */}
                </div>

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
