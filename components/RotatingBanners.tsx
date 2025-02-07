"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
            className={styles.bannerWrapper}
          >
            <Image
              src={banners[currentBanner].src || "/placeholder.svg"}
              alt={banners[currentBanner].alt}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RotatingBanners;
