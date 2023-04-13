"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Slider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState<number>(0);
  const constraintsRef = useRef<any>(null);

  useEffect(() => {
    setWidth(
      constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth
    );
  }, []);

  return (
    <motion.div
      className="w-full overflow-hidden"
      ref={constraintsRef}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="min-w-full flex gap-4"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
