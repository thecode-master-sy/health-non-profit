"use client";

import { CancelDialog } from "@/components/dialog";
import { Button } from "@/components/lib/ui/button";
import { Input } from "@/components/lib/ui/input";
import { Label } from "@/components/lib/ui/label";
import { Textarea } from "@/components/lib/ui/textarea";
import { Container, SubTitle } from "@/components/utility";
import { FormEvent } from "react";

export default function Page() {

    const  handleSubmission = async (e:FormEvent<HTMLFormElement>) => {
       e.preventDefault();
        console.log("submitted");
    }

    return (
        <Container className="py-9">
            <div className="flex justify-between">
                <SubTitle>Create a New article</SubTitle>
                <CancelDialog/>
            </div>
            

            <div>
                <form className="grid max-w-[800px]" onSubmit={(e) => handleSubmission(e)}>
                    <div className="mt-6">
                        <Label htmlFor="text">Blog Title</Label>
                       <Input type="text" id="text" className="h-auto mt-2" placeholder="Enter blog title"/>
                        <p className="text-base text-gray-400 mt-2">Enter the blog title, the title should not be more than 150 characters, keep it simple!</p>
                    </div>
                    
                    <div className="mt-7">
                        <Label htmlFor="picture">Blog Image</Label>
                        <Input id="picture" type="file" className="h-auto mt-2" />                           
                        <p className="text-base text-gray-400 mt-2">Choose from your files</p>
                    </div>
                    
                    <div className="mt-7">
                        <Label htmlFor="message">Blog Body</Label>
                        <Textarea placeholder="Write the Blog Body" id="message"  className="mt-2 min-h-[600px] text-base"/>
                    </div>

                    <div className="mt-4">
                        <Button className="btn-primary h-auto py-1">Publish</Button>
                    </div> 
                </form>
            </div>        
        </Container>
    )
}