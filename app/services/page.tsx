"use client";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaUserMd,
  FaHeartbeat,
  FaBrain,
  FaTeeth,
  FaWheelchair,
  FaUserNurse,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaPhoneAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import styles from "./services.module.css";
import Image from "next/image";

const services = [
  {
    title: "Complete Revenue Cycle Management (RCM) Solutions",
    icon: <FaMoneyBillWave />,
    description:
      "At AthlonMD we specialize in end-to-end RCM services for healthcare providers across the U.S. Our comprehensive approach ensures optimized revenue streams, reduced claim denials, and improved operational efficiency. From patient registration to payment collection, we manage the entire revenue cycle, allowing you to focus on delivering quality patient care.",
    items: [
      "Maximize Revenue & Get Paid Faster",
      "Stay Compliant & Secure",
      "Eliminate RCM Headaches",
      "Optimize Collections & Boost Profitability",
      "Seamless Solutions for Every Practice",
    ],
  },
  {
    title: "Patient Virtual Help Desk Services",
    icon: <FaPhoneAlt />,
    description:
      "At AthlonMD, we simplify patient interactions by handling billing inquiries, appointment scheduling, and medical record requests. Our 24/7 Patient Virtual Help Desk ensures seamless communication between patients and providers, delivering timely responses, accurate information, and a hassle-free support system.",
    items: [
      "Appointment Scheduling & Reminders",
      "Insurance & Eligibility Verification",
      "Billing & Payment Assistance",
      "Medical Record Requests & Documentation Support",
      "Prescription Refills & Coordination",
      "Multilingual Support",
      "HIPAA-Compliant Communication",
    ],
  },
  {
    title: "Medical Billing and Coding",
    icon: <FaClipboardCheck />,
    description:
      "At AthlonMD, we understand the complexities of medical billing and coding. Our expert team helps healthcare providers optimize financial performance while ensuring compliance with industry regulations. By outsourcing your medical billing and coding to AthlonMD, you can focus on patient care while we handle the financial operations of your practice efficiently.",
    items: [
      "Swift claim submission minimizes delays and denials",
      "Error-free coding with ICD-10, CPT, and HCPCS reduces rejections",
      "Credentialing support ensures seamless insurance enrollment",
      "Billing audits identify and fix inconsistencies",
      "End-to-end RCM covers verification to denial management",
      "Denial management recovers lost revenue through proactive appeals",
    ],
  },
  {
    title: "Medical Billing Audit Services",
    icon: <FaChartLine />,
    description:
      "Efficient medical billing is critical for financial stability in today's healthcare landscape. At AthlonMD, we help healthcare providers eliminate billing errors, reduce claim denials, and optimize revenue with our expert Medical Billing Audit Services.",
    items: [
      "Identify Billing Errors & Claim Denials",
      "Optimize Reimbursement & Revenue Flow",
      "Stay Compliant & Reduce Risks",
      "Uncover Billing Loopholes",
      "Enhance Revenue Cycle Efficiency",
    ],
  },
  {
    title: "Credentialing & Enrollment Services",
    icon: <FaShieldAlt />,
    description:
      "Navigating provider credentialing and enrollments can be complex and time-consuming. AthlonMD ensures quick and seamless enrollment with Medicare, Medicaid, and commercial payers, allowing healthcare providers to focus on patient care while we handle the paperwork, payer negotiations, and compliance requirements.",
    items: [
      "Hassle-Free Credentialing",
      "Seamless Payer Enrollment",
      "Accelerated Electronic Transactions",
      "Regulatory Compliance & Maintenance",
      "Maximized Revenue & Efficiency",
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

const whyChooseUs = [
  "Maximize Revenue & Get Paid Faster – Our efficient billing processes ensure quicker reimbursements and reduce revenue leakage.",
  "Smooth Operations in Just 2 Months – Optimize workflows, minimize administrative burdens, and enhance financial stability rapidly.",
  "Expert-Driven Accuracy & Compliance – Certified professionals ensure error-free coding and billing while maintaining full HIPAA and payer compliance.",
  "Data-Driven Decision Making – Leverage advanced analytics and automation to improve claim approvals and boost profitability.",
  "Cost-Effective & Scalable Solutions – Premium services at competitive rates, tailored for solo providers and large healthcare facilities alike.",
  "End-to-End Revenue Cycle Optimization – From claim submission to collections, we streamline every step to enhance cash flow and efficiency.",
  "90-Day Revenue Growth Guarantee – Measurable improvement in your billing outcomes within just three months.",
  "HIPAA-Compliant & Secure – Full regulatory compliance with industry-leading data security.",
  "Error-Free Claim Submissions – Reduce denials and accelerate reimbursements with precision-driven billing.",
  "Specialty-Focused Solutions – Custom billing strategies designed for your practice's unique needs.",
  "Real-Time Reporting & Transparency – Stay informed with detailed insights and performance tracking.",
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
              alt="Our Services"
              width={1400}
              height={600}
              layout="responsive"
            />
          </div>
        </motion.h1>

        <motion.div
          className={styles.introText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Comprehensive Revenue Cycle Management Services</h2>
          <p>
            Optimize Cash Flow with AthlonMD's End-to-End RCM Cycle: At
            AthlonMD, we provide a comprehensive Revenue Cycle Management (RCM)
            solution, ensuring healthcare providers maximize reimbursements,
            reduce denials, and improve financial performance. Our experts
            handle every aspect of the RCM cycle, from patient registration to
            final payment reconciliation, so providers can focus on quality
            patient care while we optimize their revenue stream.
          </p>
          <p>
            Our streamlined billing, coding, claims submission, and collections
            process ensures clean claim submissions, faster reimbursements, and
            compliance with payer regulations. By minimizing errors and denials,
            we help healthcare providers of all sizes improve cash flow and
            reduce revenue losses.
          </p>
        </motion.div>

        <div className={styles.rcmImage}>
          <Image
            src="/service1.png"
            alt="End-to-End Revenue Cycle Management"
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
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <motion.section
          className={styles.whyChooseUs}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Why Choose AthlonMD?</h2>
          <div className={styles.whyChooseUsList}>
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className={styles.whyChooseUsItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={styles.checkmark}>✓</div>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
          <h2>Not Sure Which AthlonMD Services Are Right for Your Practice?</h2>
          <p>
            Let us help you maximize efficiency and revenue with the right
            solutions! Contact us today for a free consultation, and our experts
            will assess your needs to provide a tailored medical billing and RCM
            strategy for your practice.
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
