import Image from "next/image";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import EMRList from "@/components/EMRList";
import CallToAction from "@/components/CallToAction";
import AnimatedSection from "@/components/AnimatedSection";
import RotatingBanners from "@/components/RotatingBanners";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <AnimatedSection>
        <RotatingBanners />
      </AnimatedSection>
      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>
      <AnimatedSection>
        <section className={styles.imageSection}>
          <div className="container">
            <Image
              src="/medical_billing1.webp"
              alt="Medical Billing Process"
              width={1200}
              height={600}
              layout="responsive"
            />
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <EMRList />
      </AnimatedSection>
      <AnimatedSection>
        <RotatingBanners />
      </AnimatedSection>
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
}
