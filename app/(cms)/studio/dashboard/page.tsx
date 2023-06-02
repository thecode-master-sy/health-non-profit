import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/lib/ui/card";
import { Container, SubTitle } from "@/components/utility";
import { getAllArticles } from "@/utils/articles";
import {cookies} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { FaAngleUp, FaArrowUp, FaEdit } from "react-icons/fa";

const articles = [
    {
       id: 1,
       title: "This is a Dummy title",
       body: "This is a dummy content",
       image_url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
       date: "20th May 2023"
    },
    {
       id: 2,
       title: "This is a Dummy title",
       body: "This is a dummy content",
       image_url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
       date: "23th May 2023"

    },
    {
       id: 3,
       title: "This is a Dummy title",
       body: "This is a dummy content",
       image_url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80",
       date: "24th May 2023"

    }
    
]


export default async function Page() {
    const cookieStore = cookies();

    const user:any = cookieStore.get("user");

    if(!user) {
        redirect("/studio/login")
    }
    
    const {_id, name, type, access_token} = JSON.parse(user.value);
    
    //const articles = await getAllArticles(1, 4, access_token);
    
    //console.log(articles);
    
    
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
                
                <div className="grid mx:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                   {
                        articles.map((article, index) => (
                            <Card key={index}>
                                <div className="p-4">
                                    <div className="w-full relative overflow-hidden aspect-[1/0.8]">
                                        <Image src={article.image_url} fill objectFit="contain" objectPosition="center" priority alt={article.title}/>
                                    </div>
                                </div>
                                                               
                                <CardFooter className="justify-between px-4 py-4">
                                    <div>
                                        <CardTitle className="leading-normal tracking-normal">{article.title}</CardTitle>
                                        <CardDescription>{article.date}</CardDescription> 
                                    </div>
                                    
                                    <Link href={`/studio/articles/${article.id}`}>
                                        <FaEdit className="text-gray-400 text-xl"/>
                                    </Link>
                                </CardFooter>
                            </Card>
                        )) 
                   } 

                   
                </div>
            </div>
            
            
        </Container>
    )
}
