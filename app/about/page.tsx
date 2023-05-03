import { Objective } from "@/components/objective";
import {
  Container,
  Title,
  Text,
  SubTitle,
  ResponsiveGridContainer,
} from "@/components/utility";
import stackImage from "@/public/images/about.jpg";
import storyImage from "@/public/images/who-we-are.jpg";
import Image from "next/image";
import { MemberCard, propsCardInterface } from "@/components/card";
import { FadeUp, FadeUpScroll, Stagger } from "@/components/lib/framer/scroll";

const Objectives = [
  {
    numbering: "01",
    content:
      "To provide sexual reproductive health education including HIV/AIDS among women youth and vulnerable populations",
  },
  {
    numbering: "02",
    content:
      "To engage in advocacy, seminars, and workshops for the promotion of sexual production health and HIV reduction among women, youth and vulnerable population",
  },
  {
    numbering: "03",
    content:
      "To promote sexual health and sustenance through psychosocial services and economic empowerment programs",
  },
  {
    numbering: "04",
    content:
      "To engage in the prevention of morbidity and mortality arising from communicable and non communicable diseases",
  },
  {
    numbering: "05",
    content:
      "To promote community engagement and participation in sexual health research includingHIV Prevention and treatment research.",
  },
  {
    numbering: "06",
    content:
      "Engaging and mobilizing local and international partnership and support for the promotion of sexual reproductive health and sustenance.",
  },
];

const values = [
  {
    numbering: "01",
    value: "Care and concern",
    description: " For the wellbeing of our staff and communities we serve",
  },

  {
    numbering: "02",
    value: "Integrity",
    description: "High standard of ethics",
  },

  {
    numbering: "03",
    value: "Accountability",
    description: "Openness and prudent in management of resources",
  },

  {
    numbering: "04",
    value: "Professionalism",
    description:
      "Conduct organization’s activities with expert knowledge and skills",
  },

  {
    numbering: "05",
    value: "Respect",
    description:
      "Treats everybody with respect irrespective of ethnicity, religion, gender and sexual orientation",
  },

  {
    numbering: "06",
    value: "Innovation",
    description:
      "Constantly explores local and international best practices in promoting sexual reproductive health and HIV/AIDS reduction, malaria and TB control.",
  },
];

export default function Page() {
  return (
    <main>
      <div className="relative z-[1]">
        <div className="bg-light-bg absolute w-full lg:w-3/4 top-0 left-0  h-3/4 z-[-1] hidden sm:block"></div>

        <Container className="pt-9 grid grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-4 pr-4">
            <FadeUp>
              <p className="text-sm uppercase font-light">
                our vision statement
              </p>
              <Title>
                COMHPSI envisioned a Nigeria nation with improved sexual health
                and psychosocial wellbeing of its citizen
              </Title>
            </FadeUp>
          </div>

          <div className="col-span-full lg:col-start-5">
            <FadeUp>
              <Text>
                Our mission is to promote sexual reproductive health and rights,
                HIV/AIDS/malaria and TB reduction among women youth and
                vulnerable population through advocacy, communication, social
                mobilization and community empowerment.
              </Text>
            </FadeUp>
          </div>

          <FadeUp className="relative w-full aspect-[2/1] col-span-full rounded overflow-hidden">
            <Image
              src={stackImage}
              layout="fill"
              objectFit="cover"
              alt="aboutimage"
              priority
            />
          </FadeUp>
        </Container>
      </div>

      <div>
        <Container className="mt-9">
          <Title className="text-center capitalize">who we are</Title>

          <div className="flex flex-col-reverse md:flex-row md:mt-4">
            <div className="relative w-full aspect-[2/1] rounded overflow-hidden md:flex-1">
              <Image
                src={storyImage}
                layout="fill"
                objectFit="cover"
                alt="who we are"
                priority
              />
            </div>

            <FadeUpScroll className="py-4 md:pl-4 md:py-0 md:flex-1">
              <Stagger>
                <p>
                  Community Health Promotion and Sustenance Initiative (COMHPSI)
                  is a non-governmental, not for profit organization that is
                  focus on improving the sexual reproductive health status of
                  Nigerian citizens, particularly women, youth and vulnerable
                  population through sexuality and HIV/AIDS education,
                  psychosocial services and economic empowerment programs.
                </p>
              </Stagger>

              <Stagger>
                <p className="mt-4">
                  The organization was founded in 2008 and registered with the
                  Corporate Affairs Commission of Nigeria under the Company and
                  Allied Matters Decree of 1990.{" "}
                </p>
              </Stagger>

              <Stagger>
                <p className="mt-4">
                  The organization is governed by Board of Trustees and
                  executive committee that provide oversight to the day to day
                  management of its activities.
                </p>
              </Stagger>
            </FadeUpScroll>
          </div>
        </Container>
      </div>

      <div className="mt-9">
        <Container className="flex flex-col md:flex-row-reverse">
          <div className="flex-1">
            <FadeUpScroll>
              <SubTitle className="uppercase text-primary-light">
                our objectives
              </SubTitle>
            </FadeUpScroll>

            <FadeUpScroll>
              {Objectives.map((objective, index) => (
                <Stagger key={index}>
                  <Objective
                    numbering={objective.numbering}
                    content={objective.content}
                  />
                </Stagger>
              ))}
            </FadeUpScroll>
          </div>

          <div className="flex-1 mt-9 md:mt-0 md:mr-4">
            <FadeUpScroll>
              <SubTitle className="uppercase text-primary-light">
                Core Values
              </SubTitle>
            </FadeUpScroll>

            <FadeUpScroll>
              {values.map((value, index) => (
                <Stagger key={index}>
                  <div key={index} className="mt-4 flex gap-4">
                    <span className="align-top font-semibold text-primary-light">
                      {value.numbering}
                    </span>

                    <div>
                      <h3 className="font-bold fs-mid text-primary-light">
                        {value.value}
                      </h3>

                      <p className="font-light">{value.description}</p>
                    </div>
                  </div>
                </Stagger>
              ))}
            </FadeUpScroll>
          </div>
        </Container>
      </div>

      <div className="mt-9">
        <Container>
          <Title className="text-center">
            Members of the Board of Trustees
          </Title>

          <ResponsiveGridContainer minSize={200} className="mt-6">
            <MemberCard
              image={storyImage}
              name="Rev. Sister Chika Dibia"
              title="Chairperson of the BOT"
            />

            <MemberCard
              image={storyImage}
              name="Mr. Basil Akunana"
              title="Estate Manager and project management consultant"
            />
            <MemberCard
              image={storyImage}
              name="Dr. Phina Okeke"
              title="medical doctor"
            />
            <MemberCard
              image={storyImage}
              name="Mr. Durueke Sixtus"
              title="businessman and a social entrepreneuredical doctor"
            />
            <MemberCard
              image={storyImage}
              name="Mrs. Jessica Fadoju"
              title="Chairperson of the BOT"
            />
            <MemberCard
              image={storyImage}
              name="Dr.Item Justin Atangwho"
              title="academician"
            />
            <MemberCard
              image={storyImage}
              name="Mrs. Ezeyibeya Syndy"
              title="economist"
            />
            <MemberCard
              image={storyImage}
              name="Mrs Durueke Chinyere F"
              title="Professional Nurse"
            />
            <MemberCard
              image={storyImage}
              name="Rev. Sister Chika Dibia"
              title="Chairperson of the BOT"
            />
          </ResponsiveGridContainer>
        </Container>
      </div>
    </main>
  );
}
