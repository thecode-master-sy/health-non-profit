import { Button } from "@/components/lib/ui/button";
import { Card, CardFooter, CardTitle, CardDescription } from "@/components/lib/ui/card";
import { Skeleton } from "@/components/lib/ui/skeleton";
import { Container, SubTitle } from "@/components/utility";
import { Link } from "lucide-react";
import { FaAngleUp } from "react-icons/fa";

export default function Loader() {
    const array = [1,2,3,4,5,6];

    return (
        <Container className="py-9">
            <div>
            <div className="flex justify-between">
                <SubTitle>Manage Articles</SubTitle>

                <div>
                    <Button variant="ghost" className="h-auto py-1 flex items-center">
                        <span>Sort</span>
                        <FaAngleUp className="ml-1 text-gray-500"/>
                    </Button>
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