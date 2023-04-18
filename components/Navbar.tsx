"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

export const NavBar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={`relative ${className ? className : ""}`}>
      <ul
        className={`navigation transition-all z-10 ${
          showNav ? "scale-100" : "scale-0"
        } md:scale-100`}
      >
        <span
          className="text-4xl absolute md:hidden top-2 right-2 cursor-pointer"
          onClick={() => setShowNav(false)}
        >
          &times;
        </span>
        {children}
      </ul>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        className="cursor-pointer fs-mid inline-block md:hidden px-2 py-2 border border-black rounded border-solid dark:border-white"
        onClick={() => setShowNav(!showNav)}
      >
        <RxHamburgerMenu />
      </motion.div>
    </nav>
  );
};
