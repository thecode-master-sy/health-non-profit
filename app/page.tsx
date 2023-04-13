import { Slider } from "@/components/slider";
import { ThemeSwitch } from "@/components/themeSwitch";
import {
  Button,
  Container,
  FlexContainer,
  GridContainer,
  ResponsiveGridContainer,
  Section,
  SubTitle,
  Text,
  Title,
} from "@/components/utility";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline text-green-600">
        Hello World
      </h1>

      <FlexContainer gap={3} className="bg-orange-500">
        <div>this is a boy</div>
        <div>this is a boy</div>
      </FlexContainer>

      <GridContainer className="bg-blue-600">
        <div>this is a grid container</div>
        <div>this is a grid container</div>
      </GridContainer>

      <ResponsiveGridContainer minSize={200}>
        <div>this si a very responsive grid container and you will see it</div>
        <div>this si a very responsive grid container and you will see it</div>
        <div>this si a very responsive grid container and you will see it</div>
        <div>this si a very responsive grid container and you will see it</div>
        <div>this si a very responsive grid container and you will see it</div>
        <div>this si a very responsive grid container and you will see it</div>
      </ResponsiveGridContainer>

      <Section separation={7}>
        <Text> this is a separation</Text>
        <Title>this is a title</Title>
        <SubTitle>this is a subtitle</SubTitle>
      </Section>

      <Button rounded={true} className="text-white bg-secondary">
        <span>this is a button</span>
      </Button>

      <Slider>
        <div className="border-black">
          <p>this is a paragraph text</p>
        </div>

        <div className="border border-solid border-black">
          this is another paragraphy text
        </div>
      </Slider>

      <Section separation={5} className="mt-7">
        <ThemeSwitch />
      </Section>
    </Container>
  );
}
