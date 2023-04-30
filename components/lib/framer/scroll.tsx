"use client";

import { motion } from "framer-motion";

export const fadeup = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.8,
      staggerChildren: 0.8,
    },
  },
};

export const FadeUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeup}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  );
};

export const FadeUpScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className ? className : ""}
      initial="initial"
      whileInView="animate"
      variants={fadeup}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const Stagger = ({
  children,
  variants,
  className,
}: {
  children: React.ReactNode;
  variants?: Object;
  className?: string;
}) => {
  return (
    <motion.div variants={fadeup} className={className ? className : ""}>
      {children}
    </motion.div>
  );
};
