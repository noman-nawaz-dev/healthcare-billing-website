import styles from "./Hero.module.css";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heading}>Boost Revenue, Elevate HealthCare</h1>
        <p className={styles.subheading}>
          We specialize in simplifying healthcare billing and maximizing revenue
          for practices nationwide. Our expert team provides tailored Revenue
          Cycle Management (RCM) services, ensuring accuracy, compliance, and
          operational efficiency. Partner with us to navigate the complexities
          of healthcare billing while you focus on what truly matters—your
          patients.
        </p>
        <CallToAction />
      </div>
    </section>
  );
};

export default Hero;
