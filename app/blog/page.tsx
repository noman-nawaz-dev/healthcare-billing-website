"use client";
import { BlogCard } from "@/components/BlogCard";
import styles from "./blog.module.css";

const blogPosts = [
  {
    id: 1,
    title: "Medical Billing & Coding Process",
    excerpt:
      "Understanding the systematic process of translating healthcare services into universal codes for accurate billing and reimbursement.",
    slug: "medical-billing-coding-process",
    author: "John Doe",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title:
      "Unleashing the Power of AI: How Medical Billing Revolutionizes Revenue for Providers",
    excerpt:
      "Explore how artificial intelligence is reshaping medical billing and empowering providers to boost their revenue streams.",
    slug: "ai-in-medical-billing",
    author: "Jane Smith",
    date: "June 1, 2023",
    readTime: "7 min read",
  },
  {
    id: 3,
    title:
      "Unlocking Financial Health: The Power of Outsourcing Medical Billing Services",
    excerpt:
      "Discover how outsourcing medical billing services can breathe new life into the financial health of healthcare providers.",
    slug: "outsourcing-medical-billing-services",
    author: "Mike Johnson",
    date: "June 15, 2023",
    readTime: "6 min read",
  },
  {
    id: 4,
    title:
      "Simplifying Insurance Coverage: Empowering Patients with Help Desk Support",
    excerpt:
      "Learn how comprehensive help desk support services can simplify insurance inquiries and empower patients on their healthcare journey.",
    slug: "simplifying-insurance-coverage",
    author: "Sarah Lee",
    date: "July 1, 2023",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Revolutionizing Medical Billing: The Power of RPA",
    excerpt:
      "Explore how Robotic Process Automation (RPA) is transforming the landscape of medical billing and empowering providers.",
    slug: "rpa-in-medical-billing",
    author: "David Brown",
    date: "July 15, 2023",
    readTime: "8 min read",
  },
  {
    id: 6,
    title:
      "Maximizing Revenue Through Claims Management: Key Tips and Insights",
    excerpt:
      "Discover key tips and insights to help healthcare organizations enhance their claims management processes and achieve financial success.",
    slug: "maximizing-revenue-through-claims-management",
    author: "Emily Chen",
    date: "August 1, 2023",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className={styles.blog}>
      <div className="container">
        <h1 className={styles.heading}>Our Blog</h1>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
