"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.topBanner}>
        <div className="container">
          <div className={styles.topBannerContent}>
            <div className={styles.address}>AthlonMDhelp@gmail.com</div>
            <div className={styles.slogan}>
              Boost Revenue, Elevate HealthCare
            </div>
            <div className={styles.rightSection}>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/share/19yWoubM85/?mibextid=qi2Omg"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/athlonmdllc/"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
              <Link href="/contact" className={styles.expertLink}>
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container ${styles.headerContent}`}
        style={{ padding: "6px 0px" }}
      >
        <Link href="/" className={styles.logo}>
          <Image
            src="/logos.webp"
            alt="AthlonMD Logo"
            width={200}
            height={240}
            priority
            className={styles.logoImage}
          />
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/services"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/blog" className={styles.navLink} onClick={toggleMenu}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
