"use client"
import { Button } from "@/components/lib/ui/button";
import { Input } from "@/components/lib/ui/input";
import { Label } from "@/components/lib/ui/label";
import { Container, SubTitle } from "@/components/utility";

export default function Page() {
    return(
        <Container className="py-9">
            <div>
                <SubTitle>Settings</SubTitle>
            </div>
            
            <div className="mt-7 max-w-[800px]">
                <form>
                    <div className="pb-4 mb-4 border-b border-gray-300">
                        <SubTitle>Update Name</SubTitle>
                    </div>

                    <Label htmlFor="name">name</Label>
                    <Input type="text" id="name" placeholder="update your name" className="h-auto mt-2"/>
                    
                    <div className="flex">
                        <Button className="h-auto py-1 mt-4 border-primary ml-auto" variant="outline">Update</Button>
                    </div>      
                </form>
                    
                <form className="mt-7">
                    <div className="pb-4 mb-4 border-b border-gray-300">
                        <SubTitle>Change Password</SubTitle>
                    </div>
                        
                    <div>
                        <Label htmlFor="password">old password</Label>
                        <Input type="password" id="password" placeholder="old password" className="h-auto mt-2"/>
                    </div>
                        
                    <div className="mt-4">
                        <Label htmlFor="newpassword">new password</Label>
                        <Input type="password" id="newpassword" placeholder="new password" className="h-auto mt-2"/>
                    </div> 
                    
                    <div className="flex">
                        <Button className="h-auto py-1 mt-4 border-primary ml-auto" variant="outline">Update</Button>
                    </div>
                </form>
                    

                <form className="mt-7">
                    <div className="pb-4 mb-4 border-b border-gray-300">
                        <SubTitle>Change Email</SubTitle>
                    </div>
                    
                    <Label htmlFor="email">email</Label>
                    <Input type="email" id="email" placeholder="new email" className="h-auto mt-2"/>

                    <div className="flex">
                        <Button className="h-auto py-1 mt-4 border-primary ml-auto" variant="outline">Update</Button>
                    </div>
                </form>
                 
            </div>
        </Container>
    ) 
}