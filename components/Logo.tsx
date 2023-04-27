"use client";
import { SubTitle, Title } from "@/components/utility";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logoImg} width={80} height={80} alt="logo" priority />
    </Link>
  );
};
