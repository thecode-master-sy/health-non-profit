"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useNav, NavContextInterface } from "./NavContext";

const UlVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const MobileNav = ({ className }: { className?: string }) => {
  const { showNav } = useNav() as NavContextInterface;
  const { updateNav } = useNav() as NavContextInterface;

  return (
    <nav className={`md:hidden ${className ? className : ""}`}>
      <motion.ul
        variants={UlVariant}
        animate={showNav ? "visible" : "hidden"}
        className={`navigation navigation-mobile z-10`}
      >
        <span
          className="text-4xl absolute top-2 right-2 cursor-pointer"
          onClick={() => updateNav()}
        >
          &times;
        </span>

        <Link href={"/home"} className="link">
          <motion.li variants={listVariants}>Home</motion.li>
        </Link>

        <Link href={"/about"} className="link">
          <motion.li variants={listVariants}>About</motion.li>
        </Link>

        <Link href={"/blog"} className="link">
          <motion.li variants={listVariants}>Blog</motion.li>
        </Link>

        <Link href={"/events"} className="link">
          <motion.li variants={listVariants}>Events</motion.li>
        </Link>
      </motion.ul>
    </nav>
  );
};

export const NavBar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="navigation navigation-desktop">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Events</li>
      </ul>
    </nav>
  );
};
