"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStethoscope,
  FaIdCard,
  FaPhone,
  FaQuestionCircle,
  FaComments,
} from "react-icons/fa"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    state: "",
    specialty: "",
    npi: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    alert("Thank you for your inquiry. We will get back to you soon!")
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={styles.form}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="fullName">
          <FaUser /> Full Name *
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">
          <FaEnvelope /> Email Address *
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="johndoe@example.com"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="state">
          <FaMapMarkerAlt /> State
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="California"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="specialty">
          <FaStethoscope /> Specialty
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Cardiology"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="npi">
          <FaIdCard /> NPI (Optional)
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="npi"
          name="npi"
          value={formData.npi}
          onChange={handleChange}
          placeholder="1234567890"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phoneNumber">
          <FaPhone /> Phone Number
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="inquiryType">
          <FaQuestionCircle /> Inquiry Type
        </label>
        <motion.select
          whileFocus={{ scale: 1.02 }}
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Billing">Billing</option>
          <option value="Credentialing">Credentialing</option>
          <option value="General Support">General Support</option>
        </motion.select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">
          <FaComments /> Message/Inquiry
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Please provide details about your inquiry..."
        ></motion.textarea>
      </div>
      <motion.button
        type="submit"
        className={styles.submitButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit Inquiry
      </motion.button>
    </motion.form>
  )
}

export default ContactForm

