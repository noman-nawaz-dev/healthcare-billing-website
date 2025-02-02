import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <h3>About AthlonMD</h3>
          <p>
            AthlonMD is dedicated to simplifying healthcare billing processes
            and maximizing revenue for practices. We deliver accuracy,
            compliance, and personalized solutions tailored to your needs.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Healthcare Lane, Medical City, HC 12345
          </p>
          <p>
            <FaPhone /> (123) 456-7890
          </p>
          <p>
            <FaEnvelope /> info@athlonmd.com
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} AthlonMD. All rights reserved.
          </p>
          {/* <nav className={styles.footerNav}>
            <Link href="/" className={styles.footerLink}>
              Privacy Policy
            </Link>
            <Link href="/" className={styles.footerLink}>
              Terms of Service
            </Link>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
