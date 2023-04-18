"use client";
import Image from "next/image";
import imageOne from "@/public/images/background-1.jpg";
import imageTwo from "@/public/images/background-3.jpg";
import imageThree from "@/public/images/background-4.jpg";

export const BackGroundSlider = () => {
  return (
    <div className="bg-image">
      <div className="bg-image-fixed">
        <div className="w-full image-container relative">
          <Image
            src={imageOne}
            layout="fill"
            objectFit="cover"
            alt="imageOne"
          />
        </div>
      </div>
      <div className="bg-overlay"></div>
    </div>
  );
};
