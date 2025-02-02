import Link from "next/link"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa"
import styles from "./BlogCard.module.css"
import type React from "react"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  author: string
  date: string
  readTime: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, slug, author, date, readTime }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Link href={`/blog/${slug}`} className={styles.blogCard}>
        <div className={styles.blogContent}>
          <h2>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.meta}>
            <span>
              <FaUser /> {author}
            </span>
            <span>
              <FaCalendarAlt /> {date}
            </span>
            <span>
              <FaClock /> {readTime}
            </span>
          </div>
          <span className={styles.readMore}>Read More →</span>
        </div>
      </Link>
    </motion.div>
  )
}

export { BlogCard }

