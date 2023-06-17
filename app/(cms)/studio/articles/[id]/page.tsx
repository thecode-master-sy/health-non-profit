import { Container, Title } from "@/components/utility";
import { getServerCookie } from "@/lib/auth/cookies/server-cookie";
import { getArticle } from "@/utils/articles";
import { MoreVertical, OptionIcon, Edit3, Trash } from "lucide-react";
import Image from "next/image";
import noImage from "@/public/images/no-image.jpg";
import { redirect } from "next/navigation";
import { Fa500Px } from "react-icons/fa";
import { Button } from "@/components/lib/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/lib/ui/dropdown-menu";
import Link from "next/link";
import { DeleteDialog } from "@/components/dialog";

type ParamsType = {
  params: {
    id: string;
  };
};


export default async function Page({params: {id}}:ParamsType) {
    const user = getServerCookie("user");

    if(!user) {
      redirect("/studio/login")
    }

    const response = await getArticle(id, user);

    const article = response.article?response.article:null;

    //console.log(article);

    return (
        <Container className="py-9">      
              <div className="max-w-[750px] mx-auto">
                  <div className="flex justify-between items-center">
                      <span>{article.created_at}</span>
                      
                      <div className="flex items-center">
                          <Button variant="ghost" className="h-auto flex items-center gap-2" asChild>
                              <Link href={`/studio/edit?id=${article._id}`}>
                                  <Edit3 className="text-gray-500"/>
                                  <span>Edit</span>
                              </Link>
                          </Button>

                          <DeleteDialog id={article._id} user={user}/>
                      </div>
                  </div>

                  <div className="mt-4">
                      <Title>
                          {article.title}
                      </Title>

                      <div className="relative mt-4 aspect-[1/0.8]">
                          <Image src={article.image_url ? article.image_url : noImage} className="object-cover object-center" fill  alt={article.title}/>
                      </div>

                      <div className="mt-4">
                          <p>{article.body}</p>
                      </div>
                  </div>
                
                  <div className="flex mt-4">
                      <Button className="btn-primary h-auto py-1 mx-auto" asChild>
                          <Link href={"/studio/articles"}>
                            Back To Articles
                          </Link>
                      </Button>
                  </div>
              </div>
        </Container>
    ) 
}