import { Button } from "@/components/lib/ui/button";
import { Container, SubTitle } from "@/components/utility";
import { getServerCookie } from "@/lib/auth/cookies/server-cookie";
import { getAllArticles } from "@/utils/articles";
import { FaAngleUp } from "react-icons/fa";
import noArticleImage from "@/public/images/noarticles.png";
import Image from "next/image";
import Link from "next/link";

interface ArticleInterface {
    
}

export default async function Page() {
    const user = getServerCookie("user");
    
    const {access_token} = user;
    
    //console.log(access_token)

    const page = 1;

    const limit = 8;

    const {articles}= await getAllArticles(page, limit, access_token)
    
    //console.log(articles)

    return (
        <Container className="py-9">
            <div className="flex justify-between">
                <SubTitle>Manage Articles</SubTitle>

                <div>
                    <Button variant="ghost" className="h-auto py-1 flex items-center">
                        <span>Sort</span>
                        <FaAngleUp className="ml-1 text-gray-500"/>
                    </Button>
                </div>
            </div>
            
            <div>
                {
                  articles.length === 0 ? (
                    <div>
                        <div className="relative w-[250px] h-[250px] mx-auto">
                            <Image src={noArticleImage} fill objectFit="contain" objectPosition="center" alt="no articles"/>
                        </div>
                            
                        <div className="text-center mt-4">
                            <p>You Have no written articles click the create button to get started</p>
                        </div>

                        <div className="flex mt-4">
                            <Button className="btn-primary h-auto mx-auto py-1" asChild>
                                <Link href={"/studio/create"}>Create</Link>
                            </Button>
                        </div> 
                    </div>
                  ): articles.map((article:any, index:any) => (
                    <div key={index}></div>
                  ))
                }   
            </div>
        </Container>
    )
}