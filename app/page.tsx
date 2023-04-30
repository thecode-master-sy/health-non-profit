import {
  Container,
  Title,
  Text,
  ResponsiveGridContainer,
  SubTitle,
} from "@/components/utility";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/Navbar";
import Link from "next/link";
import { BackGroundSlider } from "@/components/backgroundSlider";
import { FaTwitter, FaPlus } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaAngleRight } from "react-icons/fa";
import { Hamburger } from "@/components/Hamburger";
import placeholder from "@/public/images/activities-placeholder.jpg";
import valueImage from "@/public/images/values.jpg";
import healthImage from "@/public/images/health.jpg";
import { Cards, MemberCard, propsCardInterface } from "@/components/card";
import Image from "next/image";
import { DropDown } from "@/components/dropdown";
import { Slider } from "@/components/slider";
import { FadeUp, FadeUpScroll } from "@/components/lib/framer/scroll";

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
    <div>
      <div className="bg-hero flex align-center">
        <Container className="py-8 flex items-center flex-col text-center justify-center">
          <FadeUp>
            <div className="hero-section max-w-3xl">
              <p className="text-md">Here at COMPSHI we</p>
              <Title>Promote sexual reproductive health and rights</Title>
              <Text className="mt-4 fs-mid">
                To promote sexual reproductive health and right,
                HIV/AIDS/malaria and TB reduction among women youth and
                vulnerable population in Nigeria
              </Text>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="mt-4 flex gap-4">
              <Link href={"/contact"}>
                <button className="btn-primary">contact us</button>
              </Link>

              <Link href={"/about"}>
                <button className="btn-glass">about</button>
              </Link>
            </div>
          </FadeUp>
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

          <FadeUpScroll className="grid mt-4 activities-container">
            {activitiesArray.map((activity, index) => (
              <Cards
                key={index}
                placeholder={activity.placeholder}
                description={activity.description}
              />
            ))}
          </FadeUpScroll>
        </Container>

        <div className="mt-9 bg-light-bg">
          <div className="grid grid-cols-5 gap-4">
            <div className="relative rounded overflow-hidden md:h-full md:aspect-auto aspect-[2/1] md:col-span-3 col-span-5">
              <Image
                src={valueImage}
                layout="fill"
                objectFit="cover"
                alt="value-image"
                priority
              />
            </div>
            <div className="col-span-5 md:col-span-2 md:py-5 md:px-0 md:pr-4 px-4 pb-5">
              <SubTitle className="text-center font-bold">Core Values</SubTitle>

              <div>
                <DropDown
                  title="Care and concern"
                  content="For the wellbeing of our staff and communities we serve"
                />

                <DropDown title="Integrity" content="High standard of ethics" />

                <DropDown
                  title="Accountability"
                  content="Openness and prudent in management of resources"
                />

                <DropDown
                  title="Care and concern"
                  content="For the wellbeing of our staff and communities we serve"
                />

                <DropDown
                  title="Professionalism"
                  content="Conduct organization’s activities with expert knowledge and skills"
                />

                <DropDown
                  title="Respect"
                  content="Treats everybody with respect irrespective of ethnicity, religion, gender
                    and sexual orientation"
                />

                <DropDown
                  title="Innovation"
                  content="Constantly explores local and international best practices in promoting
                    sexual reproductive health and HIV/AIDS reduction, malaria and TB
                    control."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 py-5 md:py-7">
          <Container>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <FadeUpScroll>
                  <Title>
                    COMHPSI envisioned a Nigeria nation with improved sexual
                    health
                  </Title>
                </FadeUpScroll>

                <FadeUpScroll>
                  <Text className="mt-5">
                    Our mission is to promote sexual reproductive health and
                    rights, HIV/AIDS/malaria and TB reduction among women and
                    youth
                  </Text>
                </FadeUpScroll>

                <Link href={"/about"} className="inline-block mt-5">
                  <button className="btn-primary">Learn More</button>
                </Link>
              </div>

              <div className="relative w-auto rounded overflow-hidden md:h-full md:aspect-auto aspect-[2/1]">
                <Image
                  src={healthImage}
                  layout="fill"
                  objectFit="cover"
                  alt="value-image"
                  priority
                />
              </div>
            </div>
          </Container>
        </div>

        <div className="mt-9 py-5 md:py-7">
          <Container>
            <Title className="text-center">
              Members of the Board of Trustees
            </Title>

            <div className="mt-7">
              <Slider>
                <MemberCard
                  image={healthImage}
                  name="Rev. Sister Chika Dibia"
                  title="Chairperson of the BOT"
                />

                <MemberCard
                  image={healthImage}
                  name="Mr. Basil Akunana"
                  title="Estate Manager and project management consultant"
                />
                <MemberCard
                  image={healthImage}
                  name="Dr. Phina Okeke"
                  title="medical doctor"
                />
                <MemberCard
                  image={healthImage}
                  name="Mr. Durueke Sixtus"
                  title="businessman and a social entrepreneuredical doctor"
                />
                <MemberCard
                  image={healthImage}
                  name="Mrs. Jessica Fadoju"
                  title="Chairperson of the BOT"
                />
                <MemberCard
                  image={healthImage}
                  name="Dr.Item Justin Atangwho"
                  title="academician"
                />
                <MemberCard
                  image={healthImage}
                  name="Mrs. Ezeyibeya Syndy"
                  title="economist"
                />
                <MemberCard
                  image={healthImage}
                  name="Mrs Durueke Chinyere F"
                  title="Professional Nurse"
                />
                <MemberCard
                  image={healthImage}
                  name="Rev. Sister Chika Dibia"
                  title="Chairperson of the BOT"
                />
              </Slider>
            </div>

            <div className="flex justify-center  mt-5">
              <Link href={"/about"}>
                <button className="btn-primary">Learn More</button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
