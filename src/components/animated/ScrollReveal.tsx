"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function ScrollReveal({ children, className, delay = 0, y = 30 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
