"use client";
import { SubTitle, Title } from "@/components/utility";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";

export const Logo = () => {
  return (
    <div>
      <Image src={logoImg} width={80} height={80} alt="logo" priority />
    </div>
  );
};
