import { Container, Title, Text } from "@/components/utility";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import imageOne from "@/public/images/background-1.jpg";
import imageTwo from "@/public/images/background-3.jpg";
import imageThree from "@/public/images/background-4.jpg";

export default function Home() {
  return (
    <div className="bg-hero">
      <header>
        <Container>
          <div className="flex gap-7 justify-between md:justify-normal items-center">
            <Logo />

            <NavBar>
              <Link href={"/home"}>
                <li>Home</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/blog"}>
                <li>Blog</li>
              </Link>
            </NavBar>

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

        <div className="mt-4">
          <button className="btn-primary">contact us</button>
        </div>
      </Container>

      <div className="bg-image">
        <div className="w-full min-h-screen relative">
          <Image
            src={imageOne}
            layout="fill"
            objectFit="cover"
            alt="imageOne"
          />
        </div>
        <div className="bg-overlay"></div>
      </div>
    </div>
  );
}
