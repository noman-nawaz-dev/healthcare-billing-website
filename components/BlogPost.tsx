import Image from "next/image"
import { FaCalendarAlt, FaUser, FaClock, FaTags } from "react-icons/fa"
import styles from "./BlogPost.module.css"
import type React from "react"

interface BlogPostProps {
  title: string
  author: string
  date: string
  image: string
  readTime: string
  tags: string[]
  content: string
}

const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, image, readTime, tags, content }) => {
  return (
    <article className={styles.blogPost}>
      <Image src={image || "/placeholder.svg"} alt={title} width={1200} height={600} className={styles.featuredImage} />
      <h1 className={styles.title}>{title}</h1>
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
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            <FaTags /> {tag}
          </span>
        ))}
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default BlogPost

