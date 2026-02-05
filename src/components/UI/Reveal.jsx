import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useScrollRoot } from "../../contexts/ScrollRoot";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  amount = 0.2,
  once = true,
}) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const scrollRootRef = useScrollRoot();

  const isInView = useInView(ref, {
    root: scrollRootRef?.current ?? null,
    amount,
    once,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y }}
      animate={shouldReduce ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
