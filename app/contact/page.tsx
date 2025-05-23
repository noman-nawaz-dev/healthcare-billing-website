import ContactForm from "@/components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="container">
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <h2>Business Phone Number</h2>
            <p>athlonmdhelp@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <h2>Email Address</h2>
            <p>athlonmdhelp@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <h2>Physical Address</h2>
            <p>1942 Broadway Ste 314C # 95437, Boulder, CO, 80302</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
