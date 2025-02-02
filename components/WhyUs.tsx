import styles from "./WhyUs.module.css"
import { FaUserMd, FaRobot, FaShieldAlt } from "react-icons/fa"

const WhyUs = () => {
  const reasons = [
    {
      title: "Experienced Staff",
      description: "Our team of experts brings years of industry knowledge to your practice.",
      icon: <FaUserMd />,
    },
    {
      title: "Automation",
      description: "Cutting-edge technology to streamline your billing processes and reduce errors.",
      icon: <FaRobot />,
    },
    {
      title: "Regular HIPAA Training",
      description: "Ensuring compliance and protecting your patients' sensitive information.",
      icon: <FaShieldAlt />,
    },
  ]

  return (
    <section className={styles.whyUs}>
      <div className="container">
        <h2 className={styles.heading}>Why Choose Us</h2>
        <div className={styles.reasons}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reason}>
              <div className={styles.iconWrapper}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

