"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useNav, NavContextInterface } from "./NavContext";

const UlVariant = {
  hidden: {
    x: -1000,
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
  const pathname = usePathname();
  const { showNav } = useNav() as NavContextInterface;
  const { updateNav } = useNav() as NavContextInterface;

  useEffect(() => {
    updateNav(false);
  }, [pathname]);

  return (
    <nav
      className={`md:hidden ${showNav ? "block" : "hidden"} ${
        className ? className : ""
      }`}
    >
      <motion.ul
        variants={UlVariant}
        animate={showNav ? "visible" : "hidden"}
        className={`navigation navigation-mobile z-20`}
      >
        <span
          className="text-4xl absolute top-2 right-2 cursor-pointer"
          onClick={() => updateNav(false)}
        >
          &times;
        </span>

        <Link href={"/"} className="link">
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

const links = [
  {
    path: "/",
    label: "Home",
  },

  {
    path: "/about",
    label: "About",
  },

  {
    path: "/blog",
    label: "Blog",
  },

  {
    path: "/events",
    label: "Events",
  },
];

export const NavBar = () => {
  const activeLink = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="navigation navigation-desktop">
        {links.map((link, index) => (
          <Link href={link.path} key={index} className="relative link">
            {activeLink === link.path ? (
              <motion.span
                className="absolute w-full h-[3px] left-0 top-full bg-primary-light"
                layoutId="active"
              ></motion.span>
            ) : (
              ""
            )}
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export const CmsNavBar = ({links}: {links: {label:string; path: string}[]}) => {
  const activeLink = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="navigation navigation-desktop">
        {links.map((link:any, index:number) => (
          <Link href={link.path} key={index} className="relative link">
            {activeLink === link.path ? (
              <motion.span
                className="absolute w-full h-[3px] left-0 top-full bg-primary-light"
                layoutId="active"
              ></motion.span>
            ) : (
              ""
            )}
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
