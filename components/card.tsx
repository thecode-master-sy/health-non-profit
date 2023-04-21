"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export interface propsCardInterface {
  placeholder: StaticImageData;
  description: string;
}

export const Cards = ({ placeholder, description }: propsCardInterface) => {
  return (
    <div className="flex gap-4 p-3 card">
      <div className="relative card--image">
        <Image
          src={placeholder}
          layout="fill"
          objectFit="cover"
          alt="placeholder"
          priority
        />
      </div>
      <div className="flex items-center">
        <p className="fs-mid font-semibold capitalize">{description} </p>
      </div>
    </div>
  );
};
