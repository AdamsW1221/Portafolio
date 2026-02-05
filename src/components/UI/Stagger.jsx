import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useScrollRoot } from "../../contexts/ScrollRoot";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function StaggerList({ children, className, amount = 0.2, once = true }) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const scrollRootRef = useScrollRoot();

  const isInView = useInView(ref, {
    root: scrollRootRef?.current ?? null,
    amount,
    once,
  });

  if (shouldReduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
