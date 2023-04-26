import { Container, Title, Text } from "@/components/utility";
import stackImage from "@/public/images/about.jpg";
import storyImage from "@/public/images/who-we-are.jpg";
import Image from "next/image";

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
        <Container className="mt-7">
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
    </main>
  );
}
