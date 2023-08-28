import Contacts from "../components/contact-us/Contacts";
import Inquiry from "../components/contact-us/Inquiry";
import Map from "../components/contact-us/MapContainer";
import styles from "./ContactUsPage.module.css";

function ContactUsPage() {
  return (
    <div>
      <Map />
      <div className={styles.container}>
        <Contacts />
        <Inquiry />
      </div>
    </div>
  );
}

export default ContactUsPage;
