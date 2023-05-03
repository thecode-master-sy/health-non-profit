"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import healthImage from "@/public/images/health.jpg";
import { fadeup } from "@/components/lib/framer/scroll";

export interface propsCardInterface {
  placeholder: StaticImageData;
  description: string;
}

export const Cards = ({ placeholder, description }: propsCardInterface) => {
  return (
    <motion.div className="flex gap-4 py-3 pr-3 card" variants={fadeup}>
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
    </motion.div>
  );
};

export interface memberCardInterface {
  image: StaticImageData;
  name: string;
  title?: string;
}

export const MemberCard = ({ image, name, title }: memberCardInterface) => {
  return (
    <div className="flex flex-col min-w-[200px] items-center md:items-stretch">
      <div className="relative aspect-[1/1.1] rounded overflow-hidden w-[200px] md:w-full">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="value-image"
          priority
          draggable="false"
        />
      </div>

      <div className="mt-5 text-center md:text-left">
        <p className="fs-mid font-bold uppercase">{name}</p>
        <p className="mt-1 capitalize text-gray-400">{title}</p>
      </div>
    </div>
  );
};
