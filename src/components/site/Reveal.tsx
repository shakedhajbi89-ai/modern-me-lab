import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

/**
 * Reveal — wraps a section/element and animates it into view on scroll.
 * Quiet Intelligence: fade-up + tiny scale, slow organic easing.
 */

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — direct <RevealItem> children animate in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y, scale: 0.985, filter: "blur(6px)" },
    show: reduce
      ? { opacity: 1, transition: { duration: 0.5 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.85, ease },
        },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
