"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "./RotatingBanners.module.css";

const banners = [
  { src: "/banner1-removebg-preview.webp", alt: "Healthcare Banner 1" },
  { src: "/banner2-removebg-preview.webp", alt: "Healthcare Banner 2" },
  { src: "/banner3-removebg-preview.webp", alt: "Healthcare Banner 3" },
  { src: "/banner4-removebg-preview.webp", alt: "Healthcare Banner 4" },
  { src: "/banner5-removebg-preview.webp", alt: "Healthcare Banner 5" },
  { src: "/banner6-removebg-preview.webp", alt: "Healthcare Banner 6" },
  { src: "/banner7-removebg-preview.webp", alt: "Healthcare Banner 7" },
  { src: "/banner8-removebg-preview.webp", alt: "Healthcare Banner 8" },
  { src: "/banner9-removebg-preview.webp", alt: "Healthcare Banner 9" },
  { src: "/banner10-removebg-preview.webp", alt: "Healthcare Banner 10" },
  { src: "/banner11-removebg-preview.webp", alt: "Healthcare Banner 11" },
  { src: "/banner12-removebg-preview.webp", alt: "Healthcare Banner 12" },
  { src: "/banner13-removebg-preview.webp", alt: "Healthcare Banner 13" },
];

const RotatingBanners = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    });
  }, [controls]);

  const allBanners = [...banners, ...banners]; // Duplicate banners for seamless loop

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <motion.div className={styles.bannerWrapper} animate={controls}>
          {allBanners.map((banner, index) => (
            <div key={index} className={styles.banner}>
              <Image
                src={banner.src || "/placeholder.svg"}
                alt={banner.alt}
                width={100}
                height={100}
                objectFit="contain"
                quality={100}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RotatingBanners;
