"use client";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
  FaBrain,
  FaTeeth,
  FaWheelchair,
  FaUserNurse,
} from "react-icons/fa";
import styles from "./services.module.css";
import Image from "next/image";

const services = [
  {
    title: "Revenue Cycle Management (RCM) Services",
    icon: <FaStethoscope />,
    items: [
      "Charge Creation & Coding",
      "Claims Processing and Submission",
      "Payment Posting and Reconciliation",
      "Denial Management and Appeals",
      "Revenue Analysis and Reporting",
    ],
  },
  {
    title: "Credentialing",
    icon: <FaUserMd />,
    items: ["Credentialing", "Re-Credentialing", "Information Updates"],
  },
  {
    title: "Enrollment",
    icon: <FaHospital />,
    items: ["Provider Enrollment", "ERA Enrollment", "EFT Enrollment"],
  },
  {
    title: "Virtual Help Desk",
    icon: <FaHeartbeat />,
    items: [
      "Appointment Scheduling",
      "Billing Support for Patients",
      "Insurance and Eligibility Verifications",
      "Claim Status Inquiries",
    ],
  },
  {
    title: "Audit",
    icon: <FaBrain />,
    items: [
      "Ensuring Payment at contracted Rates",
      "Minimize Compliance Risks",
      "Maximize Reimbursements",
      "Enhance Operational Efficiency",
    ],
  },
];

const specialties = [
  { name: "Internal Medicine", icon: <FaStethoscope /> },
  { name: "Primary Care and General Medicine", icon: <FaUserMd /> },
  { name: "Surgical Specialties", icon: <FaUserMd /> },
  { name: "Diagnostic and Imaging Services", icon: <FaHeartbeat /> },
  { name: "Specialized Medical Care", icon: <FaBrain /> },
  { name: "Mental Health and Counseling Services", icon: <FaBrain /> },
  { name: "Therapies and Rehabilitation", icon: <FaWheelchair /> },
  { name: "Dental and Oral Health", icon: <FaTeeth /> },
  { name: "Alternative and Complementary Medicine", icon: <FaHeartbeat /> },
  { name: "Anesthesiology and Anesthetists", icon: <FaUserMd /> },
  { name: "Specialized Nursing Care", icon: <FaUserNurse /> },
  { name: "Specialized Dental Procedures", icon: <FaTeeth /> },
];

export default function Services() {
  return (
    <div className={styles.services}>
      <div className="container">
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ourServicesImage}>
            <Image
              src="/our-services.png"
              alt="Medical Billing Process"
              width={1400}
              height={600}
              layout="responsive"
            />
          </div>
        </motion.h1>

        <div className={styles.rcmImage}>
          <Image
            src="/service1.png"
            alt="Medical Billing Process"
            width={1400}
            height={600}
            layout="responsive"
          />
        </div>

        <section className={styles.servicesList}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <motion.section
          className={styles.specialties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2>Specialties We Handle</h2>
          <div className={styles.specialtiesList}>
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className={styles.specialtyItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.specialtyIcon}>{specialty.icon}</div>
                {specialty.name}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2>Ready to streamline your healthcare billing?</h2>
          <p>
            Let's work together to maximize your revenue and minimize your
            administrative burden.
          </p>
          <motion.a
            href="/contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
