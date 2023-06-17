"use client";

import { CancelDialog } from "@/components/dialog";
import { Button } from "@/components/lib/ui/button";
import { Input } from "@/components/lib/ui/input";
import { Label } from "@/components/lib/ui/label";
import { Textarea } from "@/components/lib/ui/textarea";
import { useToast } from "@/components/lib/ui/use-toast";
import { Container, SubTitle } from "@/components/utility";
import { Auth } from "@/lib/auth/user";
import { createArticle } from "@/utils/articles";
import { imageToBase64, protect } from "@/utils/handleform";
import { Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image"

interface formvalues {
    title: string;
    image_url: string;
    body: string
}

type errorvalues = {
    title?: string;
    image_url?:string;
    body?: string;
}

export default function Page() {
    
     useEffect(() => {
        const user = Auth();
        if(!user) {
            redirect("/studio/login");
        }
    }, [])

    const {toast} = useToast();
    const [formValues, setFormValues] = useState<formvalues>({title: "", image_url: "", body: ""});
    const [errors, setErrors] = useState<errorvalues>({});
    const [loading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();




    const  handleSubmission = async (e:FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       
        const errorObj:errorvalues = {}
        
        for (let key in formValues) {
            if (formValues.hasOwnProperty(key)) {
                /*@ts-ignore*/
                if (formValues[key] === '') {
                    /*@ts-ignore*/
                    errorObj[key] = `${key} cannot be empty`;
                } 
            }
        }

        if(Object.keys(errorObj).length == 0) {
            const data:formvalues = {
                title: protect(formValues.title),
                image_url: formValues.image_url,
                body: protect(formValues.body)
           }
            
           setIsLoading(true);

           const response = await createArticle(data);

           if(response.error && response.message) {
                setErrorMessage(response.message)
                setIsLoading(false)
           }else {
                setIsLoading(false)
                toast({
                    description: "Article created successfully"
                }) 
           }
        }else {
            console.log(errorObj);
            setErrors(errorObj);
        }
    }
    
     useEffect(() => {
        setTimeout(() => {
            setErrorMessage("");
        }, 7000)
    }, [errorMessage])
     

    return (
        <Container className="py-9">
            <div className="flex justify-between">
                <SubTitle>Create a New article</SubTitle>
                <CancelDialog/>
            </div>
            
            
            <div>
                <p className="text-red-500 text-center">{errorMessage}</p>
                <form className="grid max-w-[800px]" onSubmit={(e) => handleSubmission(e)}>
                    <div className="mt-6">
                        <Label htmlFor="text">Blog Title</Label>
                       <Input type="text" id="text" className="h-auto mt-2" placeholder="Enter blog title" value={formValues.title} onChange={(e) => setFormValues((prevState) => ({...prevState, title: e.target.value}))}/>
                        <p className="text-base text-gray-400 mt-2">Enter the blog title, the title should not be more than 150 characters, keep it simple!</p>
                    </div>
                    
                    <div className="mt-7">
                        <Label htmlFor="picture">Blog Image</Label>
                        <Input id="picture" type="file" className="h-auto mt-2" onChange={(e) => imageToBase64(e, (value:string) => setFormValues((prevState) => ({...prevState, image_url:value})))} />                           
                        <p className="text-base text-gray-400 mt-2">Choose from your files</p>
                    </div>

                    <Image src={formValues.image_url} className="mt-2" width={100} height={100} alt="image"/>
                    
                    <div className="mt-7">
                        <Label htmlFor="message">Blog Body</Label>
                        <Textarea placeholder="Write the Blog Body" id="message" value={formValues.body}  className="mt-2 min-h-[600px] text-base" onChange={(e) => setFormValues((prevState) => ({...prevState, body:e.target.value}))}/>
                    </div>

                    <div className="mt-4">
                        {
                            loading ? (
                                <Button disabled className="btn-primary h-auto py-1">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                            ):(
                                <Button className="btn-primary h-auto py-1">Publish</Button>
                            )
                        } 
                    </div> 
                </form>
            </div>        
        </Container>
    )
}