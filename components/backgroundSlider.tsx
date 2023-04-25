"use client";
import Image from "next/image";
import imageOne from "@/public/images/background-1.jpg";
import imageTwo from "@/public/images/background-3.jpg";
import imageThree from "@/public/images/background-4.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const imageArray = [
  {
    label: "imageone",
    src: imageOne,
  },

  {
    label: "imagetwo",
    src: imageTwo,
  },

  {
    label: "imagethree",
    src: imageThree,
  },
];

const backgroundVariants = {
  inital: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const BackGroundSlider = () => {
  const [hasChange, setHasChanged] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const [currentBackground, setBackground] = useState(imageArray[0]);

  useEffect(() => {
    setInterval(() => {
      setIndex((currentIndex) => (currentIndex >= 2 ? 0 : currentIndex + 1));
      setHasChanged(true);
    }, 6000);
  }, []);

  useEffect(() => {
    setBackground(imageArray[currentIndex]);
  }, [currentIndex]);

  //console.log(imageArray[currentIndex]);

  return (
    <div className="bg-image">
      <div className="bg-image-fixed">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBackground ? currentBackground.label : "empty"}
            variants={backgroundVariants}
            initial={hasChange ? "inital" : "empty"}
            animate={hasChange ? "animate" : "empty"}
            exit={hasChange ? "exit" : "empty"}
            transition={{ duration: 0.5 }}
            className="w-full image-container relative"
          >
            <Image
              src={currentBackground.src}
              layout="fill"
              objectFit="cover"
              alt="imageOne"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div className="bg-overlay"></motion.div>
    </div>
  );
};
