"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./Header.module.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          AthlonMD
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className={styles.navLink} onClick={toggleMenu}>
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
  )
}

export default Header

