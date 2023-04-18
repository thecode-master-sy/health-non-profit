"use client";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNav, NavContextInterface } from "./NavContext";

export const Hamburger = () => {
  const { updateNav } = useNav() as NavContextInterface;
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1 }}
      className="cursor-pointer fs-mid inline-block md:hidden px-2 py-2 border border-white rounded border-solid"
      onClick={() => updateNav()}
    >
      <RxHamburgerMenu />
    </motion.div>
  );
};
