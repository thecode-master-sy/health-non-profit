import Link from "next/link";
import { Container } from "@/components/utility";
import { Hamburger } from "@/components/Hamburger";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { NavBar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";

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

        <Link href={"/contact"} className="hidden md:block">
          <button className="btn-primary ml-auto hidden md:block">
            contact us
          </button>
        </Link>
      </div>
    </header>
  );
};
