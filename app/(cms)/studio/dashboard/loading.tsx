import { Card, CardDescription, CardFooter, CardTitle } from "@/components/lib/ui/card";
import { Container, SubTitle } from "@/components/utility";
import { Skeleton } from "@/components/lib/ui/skeleton";
import Link from "next/link";
import { FaAngleUp, FaEdit } from "react-icons/fa";
import { title } from "process";

export default function Loader() {
    const array = [1,2,3,4,5,6];

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
                        
                        array.map((item:number, index:number) => (
                            <Card>
                                <div className="p-4">
                                    <div className="w-full  aspect-[1/0.8]">
                                        <Skeleton className="h-full w-full" />
                                    </div>
                                </div>
                                                                        
                                <CardFooter className="justify-between px-4 py-4">
                                    <div>
                                        <CardTitle className="leading-normal tracking-normal">
                                            <Skeleton className="h-4 w-[200px]" />
                                        </CardTitle>
                                        <CardDescription>
                                            <Skeleton className="h-4 w-[150px] mt-2" />    
                                        </CardDescription> 
                                    </div>
                                                                     
                                </CardFooter>
                            </Card>
                        ))
                    }
               </div>
            </div>
        </Container>
    )
}