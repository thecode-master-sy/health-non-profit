"use client";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

interface DropDownProps {
  title: string;
  content: string;
}

const DropDownVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const toggleVariants = {
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: 45,
  },
};

export const DropDown = ({ title, content }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="drop-down py-4 border-b border-b-gray-500 border-solid">
      <div className="drop-down--top flex justify-between items-center">
        <h1 className="fs-mid capitalize font-bold">{title}</h1>

        <motion.span
          className={`p-1 fs-small rounded-full border-gray-500 border border-solid cursor-pointer transition-all ${
            isOpen ? "border-none bg-primary-light text-white" : "text-gray-500"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          variants={toggleVariants}
          animate={isOpen ? "show" : "hidden"}
        >
          <FaPlus />
        </motion.span>
      </div>

      <motion.div
        className={`drop-down--body mt-3`}
        variants={DropDownVariants}
        animate={isOpen ? "show" : "hidden"}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p>{content}</p>
      </motion.div>
    </motion.div>
  );
};
