"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type React from "react" // Added import for React

interface AnimatedSectionProps {
  children: ReactNode
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

export default AnimatedSection

