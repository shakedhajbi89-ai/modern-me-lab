import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

/**
 * Parallax — translates child Y based on scroll progress through viewport.
 * Subtle by default; keeps the "quiet" tone.
 */
export default function Parallax({
  children,
  offset = 60,
  className,
}: {
  children: ReactNode;
  /** Total Y travel in px across the viewport pass. */
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Thin progress bar at top of viewport — global scroll indicator. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-[2px] bg-primary/70 origin-left z-[70] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
