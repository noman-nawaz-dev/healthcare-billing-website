import Link from "next/link"
import styles from "./CallToAction.module.css"
import { FaRocket, FaComments, FaListUl } from "react-icons/fa"

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <Link href="/contact" className={`${styles.ctaButton} ${styles.primary}`}>
        <FaRocket className={styles.icon} /> Get Started Today
      </Link>
      <Link href="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>
        <FaComments className={styles.icon} /> Talk to an Expert
      </Link>
      <Link href="/services" className={`${styles.ctaButton} ${styles.secondary}`}>
        <FaListUl className={styles.icon} /> Explore Our Services
      </Link>
    </div>
  )
}

export default CallToAction

