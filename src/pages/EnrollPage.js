import styles from "./EnrollPage.module.css";
import Form from "react-bootstrap/Form";

import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState } from "react";

function EnrollPage() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionHour, setSelectedOptionHour] = useState("");
  const courseOptions = [
    "concENtrate",
    "WorldReady",
    "SmartArt",
    "ENlightEN Kids",
    "ENlightEN Private",
    "Young PresENters",
  ];

  const courseOptionsHours = {
    concENtrate: [
      "Сряда - 10:30ч. - 11:30ч. (3-4г.)",
      "Петък - 10:30ч. - 11:30ч. (3-4г.)",
    ],
    WorldReady: [
      "Сряда - 16:20ч. - 17:45ч. (7-9г.)",
      "Петък - 16:20ч. - 17:45ч. (10-12г.)",
    ],
    SmartArt: ["Hour A", "Hour B", "Hour C"],
    "ENlightEN Kids": [
      "Вторник - 16:20ч. - 17:45ч. (5-7г.)",
      "Четвъртък - 16:20ч. - 17:45ч. (5-7г.)",
      "Събота - 12:00ч. - 13:00ч. (5-7г.)",
    ],
    "ENlightEN Private": ["Hour A", "Hour B", "Hour C"],
    "Young PresENters": ["Hour A", "Hour B", "Hour C"],
  };

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
    const selectedCourse = event.target.value;
    setSelectedOption(selectedCourse);
    setSelectedOptionHour(null);
  };

  const handleOptionHourChange = (event) => {
    const selectedHour = event.target.value;
    setSelectedOptionHour(selectedHour);
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
                      {courseOptions.map((course) => {
                        return (
                          <div
                            className={styles.courseOption}
                            key={course}
                            onClick={() =>
                              handleOptionChange({ target: { value: course } })
                            }
                          >
                            <input
                              type="radio"
                              id={course}
                              name={course}
                              value={course}
                              checked={selectedOption === course}
                              onChange={handleOptionChange}
                            />
                             {" "}
                            <label
                              htmlFor="course"
                              style={{ cursor: "pointer" }}
                            >
                              {course}
                            </label>
                            {selectedOption === course && (
                              <div className={styles.radioGroupInputsOptions}>
                                <Form.Select
                                  aria-label="Default select example"
                                  onChange={handleOptionHourChange}
                                  value={selectedOptionHour}
                                  className={styles.radioGroupInputsOptions}
                                >
                                  <option value="">Избери ден и час</option>
                                  {courseOptionsHours[selectedOption].map(
                                    (hour) => (
                                      <option key={hour} value={hour}>
                                        {hour}
                                      </option>
                                    )
                                  )}
                                </Form.Select>
                              </div>
                            )}
                          </div>
                        );
                      })}
                      <br />
                    </div>
                  </div>
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
