import { Button } from "@/components/lib/ui/button";
import { Container, SubTitle } from "@/components/utility";
import { getServerCookie } from "@/lib/auth/cookies/server-cookie";
import { getAllArticles } from "@/utils/articles";
import { FaAngleUp, FaEdit } from "react-icons/fa";
import noArticleImage from "@/public/images/noarticles.png";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/lib/ui/card";
import noImage from "@/public/images/no-image.jpg";
import { getcookie } from "@/lib/auth/cookies/cookies";
import { UpdateUserComponent } from "@/components/user";
import { CmsArticle } from "@/components/article";
import { Paginate } from "@/components/paginate";

interface ArticleInterface {
    _id: string;
    title: string;
    created_at: string;
    image_url: string | null;
    body: string;
    updated_at: string | null;
    
}

export default async function Page() {
    const user = getServerCookie("user");

    if(!user) {
        redirect("/studio/login");
    }
    
    const {access_token} = user;

    const page = 1;

    const limit = 6;

    const {articles, newAccessToken} = await getAllArticles(page, limit, user)

    const data = articles ? articles.data : [];
    

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
                  data.length === 0 ? (
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
                  ):(
                     <UpdateUserComponent newvalue={newAccessToken ? {...user, access_token:newAccessToken}: null}>
                        <Paginate articles={articles} user={user}/>
                     </UpdateUserComponent>
                  )
                }   
            </div>
        </Container>
    )
}