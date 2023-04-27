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
      staggerChildren: 0.5,
    },
  },
};

export const FadeUp = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeup}>
      {children}
    </motion.div>
  );
};

export const FadeUpScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      className={className}
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
}: {
  children: React.ReactNode;
  variants?: Object;
}) => {
  <motion.div variants={fadeup}>{children}</motion.div>;
};
