import { Container, Title, Text } from "@/components/utility";
import stackImage from "@/public/images/about.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <main
      className="relative"
      style={{
        zIndex: 1,
      }}
    >
      <div
        className="bg-light-bg absolute w-3/4 top-0 left-0"
        style={{
          height: "38rem",
          zIndex: -1,
        }}
      ></div>
      <Container className="py-9 grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-4 pr-4">
          <p className="text-sm uppercase font-light">our vision statement</p>
          <Title>
            COMHPSI envisioned a Nigeria nation with improved sexual health and
            psychosocial wellbeing of its citizen
          </Title>
        </div>

        <div className="col-span-full lg:col-start-5">
          <Text>
            Our mission is to promote sexual reproductive health and rights,
            HIV/AIDS/malaria and TB reduction among women youth and vulnerable
            population through advocacy, communication, social mobilization and
            community empowerment.
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
    </main>
  );
}
