import {
  Container,
  Title,
  Text,
  ResponsiveGridContainer,
} from "@/components/utility";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/Navbar";
import Link from "next/link";
import { BackGroundSlider } from "@/components/backgroundSlider";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaAngleRight } from "react-icons/fa";
import { Hamburger } from "@/components/Hamburger";
import placeholder from "@/public/images/activities-placeholder.jpg";
import { Cards, propsCardInterface } from "@/components/card";
import Image from "next/image";

const activitiesArray: propsCardInterface[] = [
  {
    placeholder: placeholder,
    description:
      "Independent monitoring of polio, measles vaccination and Vitamin A supplementation",
  },
  {
    placeholder: placeholder,
    description:
      "Malaria prevention and treatment campaign in Sanni Olopa and Shasha Ilupeju ",
  },
  {
    placeholder: placeholder,
    description:
      "Male and female condom campaign and distribution in Alimosho,Oshodi and Isolo LGAs",
  },
  {
    placeholder: placeholder,
    description:
      "Olaoluwa Health day-sickle cell disease campaign, HIV/AIDS awareness and Malaria prevention campaign",
  },
  {
    placeholder: placeholder,
    description:
      "HIV/AIDS and Family Planning education among women in Agodo, Alimosho",
  },
  {
    placeholder: placeholder,
    description:
      "Gender Partners Forum on hormonal contraceptive use and HIV infection in women",
  },
  {
    placeholder: placeholder,
    description:
      "Working with women on HIV vaccine research advocacy and research literacy in Alimosho LGA",
  },
  {
    placeholder: placeholder,
    description:
      "International sex workers right day celebration in partnership with SafeHaven International",
  },
];

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
        <Container className="pt-7">
          <div className="pb-1 border-b border-b-gray-300">
            <div className="flex justify-between items-center">
              <h1 className="fs-mid font-semibold">Activities</h1>

              <Link
                href={"/acitivies"}
                className="underline text-primary-light flex gap-1 items-center"
              >
                <span>veiw all activites</span>
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid mt-4 activities-container">
            {activitiesArray.map((activity, index) => (
              <Cards
                key={index}
                placeholder={activity.placeholder}
                description={activity.description}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
