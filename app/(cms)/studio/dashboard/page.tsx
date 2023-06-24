import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/lib/ui/card";
import { Container, SubTitle } from "@/components/utility";
import { getAllArticles } from "@/utils/articles";
import {cookies} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { FaAngleUp, FaArrowUp, FaEdit } from "react-icons/fa";
import { CmsArticle } from "@/components/article";
import { getServerCookie } from "@/lib/auth/cookies/server-cookie";
import { Paginate } from "@/components/paginate";
import { UpdateUserComponent } from "@/components/user";


export default async function Page() {
   const user = getServerCookie("user");

    if(!user) {
        redirect("/studio/login");
    }
    
    const {access_token} = user;

    const page = 1;

    const limit = 3;

    const {articles, newAccessToken} = await getAllArticles(page, limit, user)

    const data = articles ? articles.data : [];

    
    return (
        <Container className="py-9">
            <div>
                <div className="flex">
                    <SubTitle>
                        Your Articles      
                    </SubTitle> 

                    <div className="ml-auto flex items-center"> 
                        <span className="py-1 px-4 flex items-center rounded cursor-pointer">
                            <span>recent</span>
                            <span className="ml-2 text-gray-500"><FaAngleUp/></span>
                        </span>
                    
                        <Link href={"/studio/articles"} className="ml-4">
                            view all  
                        </Link>
                    </div>
                </div>
                
               
                <UpdateUserComponent newvalue={newAccessToken ? {...user, access_token:newAccessToken}: null}>
                    <Paginate articles={articles} user={user}/>
                </UpdateUserComponent>
            </div>
            
            
        </Container>
    )
}
