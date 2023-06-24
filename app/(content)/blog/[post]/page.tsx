import { Container, Title } from "@/components/utility";
import Image from "next/image";
import noImage from "@/public/images/no-image.jpg";
import { Button } from "@/components/lib/ui/button";
import Link from "next/link";
import { baseURL } from "@/lib/auth/axios";
import { ContentDisplay } from "@/components/content";

type ParamsType = {
  params: {
    post: string;
  };
};

const getPublicArticle = async (id:string) => {
    try {
        const response = await fetch(`${baseURL}/api/public-article/get-article/${id}`);

        const data = await response.json();

        return data.data;
    }catch(error) {
      console.log(error)
    }
}


export default async function Page({params: {post}}:ParamsType) {
    const article = await getPublicArticle(post)


    return (
        <Container className="py-9">      
              <div className="max-w-[750px] mx-auto">
                  <div className="flex justify-between items-center">
                      <span>{article.created_at}</span>
                  </div>

                  <div className="mt-4">
                      <Title>
                          {article.title}
                      </Title>

                      <div className="relative mt-4 aspect-[1/0.8]">
                          <Image src={article.image_url ? article.image_url : noImage} className="object-cover object-center" fill  alt={article.title}/>
                      </div>

                      <div className="mt-4">
                            <ContentDisplay retrievedContent={article.body}/>
                      </div>
                  </div>
                
                  <div className="flex mt-4">
                      <Button className="btn-primary h-auto py-1 mx-auto" asChild>
                          <Link href={"/blog"}>
                            Back To Articles
                          </Link>
                      </Button>
                  </div>
              </div>
        </Container>
    ) 
}