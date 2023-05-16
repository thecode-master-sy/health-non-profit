"use client";

import { motion } from "framer-motion";
import React from "react";

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

export const moveup = {
  initial: {
    y: 100,
  },
  animate: {
    y:0,

    transition: {
      duration: 0.8,
      staggerChildren: 0.8
    }
  }
}


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

export const MoveUp = ({children, className}: {children: React.ReactNode, className?: string;}) => {
  return (
    <motion.div variants={moveup} initial="initial" animate="animate" className={`${className ? className : ""}`}>
      {children}
    </motion.div>
  )
}

export const MoveUpScroll = ({children, className}: {children: React.ReactNode, className?: string;}) => {
  return (
    <motion.div variants={moveup} initial="initial" whileInView="animate" viewport={{once: true}} className={`${className ? className : ""}`}>
      {children}
    </motion.div>
  )
}

export const FadeInLeft = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <motion.div initial={{x:-100}} animate={{x: 0, transition: { duration: 0.8, staggerChildren: 0.8}}} className={`${className ? className: ""}`}>
      {children}
    </motion.div>
  )
}

export const FadeInRight = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
      <motion.div initial={{x: 1000}} animate={{x:0, transition: {duration:0.8, staggerChildren: 0.8}}} className={`${className ? className: ""}`}>
        {children}
      </motion.div>
  )
}

export const FadeInLeftScroll = ({children, className}:{children: React.ReactNode, className?: string}) => {
  return (
    <motion.div initial={{x:-100}} whileInView={{x: 0, transition: { duration: 0.8, staggerChildren: 0.8}}} viewport={{once: true, amount: 0.5}} className={`${className ? className : ""}`}>
      {children}
    </motion.div>
  )
}

export const FadeInRightScroll = ({children, className}:{children: React.ReactNode, className?:string}) => {
  return (
      <motion.div initial={{x: 1000}} whileInView={{x:0, transition: {duration:0.8, staggerChildren: 0.8}}} viewport={{once: true, amount: 0.5}} className={`${className? className: ""}`}>
        {children}
      </motion.div>
  )
}

