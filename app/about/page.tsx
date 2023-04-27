import { Objective} from "@/components/objective";
import { Container, Title, Text, SubTitle } from "@/components/utility";
import stackImage from "@/public/images/about.jpg";
import storyImage from "@/public/images/who-we-are.jpg";
import Image from "next/image";

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
    value: "Care and concern",
    description: " For the wellbeing of our staff and communities we serve",
  },

  {
    value: "Integrity",
    description: "High standard of ethics",
  },

  {
    value: "Accountability",
    description: "Openness and prudent in management of resources",
  },

  {
    value: "Professionalism",
    description:
      "Conduct organization’s activities with expert knowledge and skills",
  },

  {
    value: "Respect",
    description:
      "Treats everybody with respect irrespective of ethnicity, religion, gender and sexual orientation",
  },

  {
    value: "Innovation",
    description:
      "Constantly explores local and international best practices in promoting sexual reproductive health and HIV/AIDS reduction, malaria and TB control.",
  },
];

export default function Page() {
  return (
    <main>
      <div className="relative z-[1]">
        <div className="bg-light-bg absolute w-full lg:w-3/4 top-0 left-0  h-3/4 z-[-1]"></div>

        <Container className="pt-9 grid grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-4 pr-4">
            <p className="text-sm uppercase font-light">our vision statement</p>
            <Title>
              COMHPSI envisioned a Nigeria nation with improved sexual health
              and psychosocial wellbeing of its citizen
            </Title>
          </div>

          <div className="col-span-full lg:col-start-5">
            <Text>
              Our mission is to promote sexual reproductive health and rights,
              HIV/AIDS/malaria and TB reduction among women youth and vulnerable
              population through advocacy, communication, social mobilization
              and community empowerment.
            </Text>
          </div>

          <div className="relative w-full aspect-[2/1] col-span-full rounded overflow-hidden">
            <Image
              src={stackImage}
              layout="fill"
              objectFit="cover"
              alt="aboutimage"
              priority
            />
          </div>
        </Container>
      </div>

      <div>
        <Container className="mt-9">
          <Title className="text-center">who we are</Title>

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

            <div className="py-4 md:pl-4 md:py-0 md:flex-1">
              <p>
                Community Health Promotion and Sustenance Initiative (COMHPSI)
                is a non-governmental, not for profit organization that is focus
                on improving the sexual reproductive health status of Nigerian
                citizens, particularly women, youth and vulnerable population
                through sexuality and HIV/AIDS education, psychosocial services
                and economic empowerment programs.
              </p>

              <p className="mt-4">
                The organization was founded in 2008 and registered with the
                Corporate Affairs Commission of Nigeria under the Company and
                Allied Matters Decree of 1990.{" "}
              </p>

              <p className="mt-4">
                The organization is governed by Board of Trustees and executive
                committee that provide oversight to the day to day management of
                its activities.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-9">
        <Container className="flex flex-col md:flex-row-reverse">
          <div className="flex-1">
            <SubTitle className="uppercase text-primary-light">
              our objectives
            </SubTitle>

            <div>
              {Objectives.map((objective, index) => (
                <Objective
                  numbering={objective.numbering}
                  content={objective.content}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 mt-9 md:mt-0 md:mr-4">
            <SubTitle className="uppercase text-primary-light">
              Core Values
            </SubTitle>

            <div>
              {values.map((value, index) => (
                <div key={index} className="mt-4">
                  <h3 className="font-bold fs-mid text-primary-light">
                    {value.value}
                  </h3>

                  <p className="font-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
