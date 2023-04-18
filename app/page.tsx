import { Container, Title, Text } from "@/components/utility";
import { Logo } from "@/components/Logo";
import { MobileNav, NavBar } from "@/components/Navbar";
import Link from "next/link";
import { BackGroundSlider } from "@/components/backgroundSlider";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { Hamburger } from "@/components/Hamburger";

export default function Home() {
  return (
    <div className="scroll-origin">
      <div className="bg-hero">
        <header>
          <Container>
            <div className="flex gap-7 justify-between md:justify-normal items-center">
              <Logo />

              <NavBar />

              <Hamburger />

              <div className="md:flex gap-4 ml-auto hidden">
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

              <button className="btn-primary ml-auto hidden md:block">
                contact us
              </button>
            </div>
          </Container>
        </header>

        <Container className="py-8">
          <div className="hero-section max-w-xl">
            <p className="text-md">Here at COMPSHI we</p>
            <Title>Promote sexual reproductive health and rights</Title>
            <Text className="mt-4">
              To promote sexual reproductive health and right, HIV/AIDS/malaria
              and TB reduction among women youth and vulnerable population in
              Nigeria
            </Text>
          </div>

          <div className="mt-4 flex gap-4">
            <button className="btn-primary">contact us</button>
            <button className="btn-glass">about</button>
          </div>
        </Container>

        <BackGroundSlider />
      </div>

      <div className="bg-white">
        <Container className="py-4">
          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>

          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
          <p>this is just random content to text the sticky attachment</p>
        </Container>
      </div>
    </div>
  );
}
