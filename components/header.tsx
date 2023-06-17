"use client";

import Link from "next/link";
import { Container } from "@/components/utility";
import { Hamburger } from "@/components/Hamburger";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CmsNavBar, NavBar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./lib/ui/button";
import { Logout } from "@/components/logout";
import { Auth } from "@/lib/auth/user";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-1 z-10 bg-glass rounded lg:container mx-auto px-2">
      <div className="flex gap-4 justify-between md:justify-normal items-center">
        <Logo />

        <NavBar />

        <Hamburger />

        <div className="md:flex gap-4 hidden ml-auto">
          <a href="https://twitter.com" className="link">
            <FaTwitter />
          </a>

          <a href="https://instagram.com" className="link">
            <FiInstagram />
          </a>

          <a href="https://facebook.com" className="link">
            <FaFacebookF />
          </a>
        </div>

        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbFXcGjzVkFNGvDjqXGPCcXmdwmhkhdJCCJfkSBkkqpbFlNvnNgKXpZTTzbRVLXCsLVDvh" className="hidden md:block">
          <button className="btn-primary ml-auto hidden md:block">
            contact us
          </button>
        </a>
      </div>
    </header>
  );
};


export const CmsHeader = ({Links, accountType}: {Links: {label: string; path: string}[]; accountType: string;}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const user = Auth();

  useEffect(() => {
      if(user) {
        setLoggedIn(true)
      }
  }, [])


  return (
    <header className="fixed left-0 right-0 top-1 z-10 bg-glass rounded lg:container mx-auto px-2 py-2">
      <div className="flex gap-4 justify-between md:justify-normal items-center">
        <CmsNavBar links={Links}/>

        <Hamburger />

        <div className="ml-auto">
          {isLoggedIn ? (<Logout/>):""}

          {accountType === "main" ? (
          <Link href={'/studio/create-account'} className="hidden md:inline">
            <button className="btn border border-solid border-primary py-1 px-4 rounded ml-4">Add new member</button>
          </Link>): ""}

          <Link href={'/studio/create'} className="ml-4">
           <Button className="btn-primary h-auto mx-auto py-1">Create</Button>
          </Link>
        </div>
      </div>
    </header>

  )  
}

