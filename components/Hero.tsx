import styles from "./Hero.module.css"
import CallToAction from "./CallToAction"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heading}>Simplifying Healthcare Billing – Focus on Care, We Handle the Rest</h1>
        <p className={styles.subheading}>
          At AthlonMD, our mission is to simplify healthcare billing processes and maximize revenue for practices. We're
          dedicated to delivering accuracy, compliance, and personalized solutions tailored to your needs.
        </p>
        <CallToAction />
      </div>
    </section>
  )
}

export default Hero

