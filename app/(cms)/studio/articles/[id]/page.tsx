import { Container } from "@/components/utility";

type ParamsType = {
  params: {
    id: string;
  };
};

export default function Page({params: {id}}:ParamsType) {
    return (
        <Container>      
              <span>{id}</span>
        </Container>
    ) 
}