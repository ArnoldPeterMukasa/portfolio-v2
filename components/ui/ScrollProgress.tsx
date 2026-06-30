"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 bg-cyan-500"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        width: "100%",
      }}
    />
  );
}