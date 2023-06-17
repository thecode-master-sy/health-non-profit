"use client"
import { Button } from "@/components/lib/ui/button";
import { Input } from "@/components/lib/ui/input";
import { Label } from "@/components/lib/ui/label";
import { Container, SubTitle } from "@/components/utility";
import { Auth } from "@/lib/auth/user";
import { useState, useEffect } from "react"
import { redirect, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { updateUserName, updateUserPassword, updateUserEmail } from "@/utils/account"
import { useToast } from "@/components/lib/ui/use-toast";
import { UpdateUserComponent } from "@/components/user"

export default function Page() {

    const user = Auth();

    useEffect(() => {
        if(!user) {
            redirect("/studio/login")
        }
    }, [])

    const { toast } = useToast()

    const [name, setName] = useState({value: "", updating: false});
    const [password, setPassword] = useState({password:"", newPassword:"", updating:false});
    const [email, setEmail] = useState({value: "", updating:false});
    const [newAccessToken, setAccessToken] = useState(null);


    async function updateName(e) {
        e.preventDefault();

        setName((prevState) => ({...prevState, updating:true}));

        const response = await updateUserName(name.value, user);

        if(!response.error) {
            setName({value: "", updating: false})
            setAccessToken(response.newAccessToken)

            toast({
                description: "name has been updated successfully"
            })
        }else {
            setName((prevState) => ({...prevState, updating:false}));
            console.log(response.msg)
        }
    }

    async function updatePassword(e) {
        e.preventDefault();

        setPassword((prevState) => ({...prevState, updating:true}));

        const response = await updateUserPassword(password.password, password.newPassword, user);

        if(!response.error) {
            setPassword((prevState) => ({password: "", newPassword: "", updating:false}));
            setAccessToken(response.newAccessToken);

            toast({
                description: "password has been updated successfully",
            })
        }else {
            setPassword((prevState) => ({...prevState, updating:false}));
            console.log(error)
        }
    }

    async function updateEmail(e) {
        e.preventDefault();

        setEmail((prevState) => ({...prevState, updating:true}));

        const response = await updateUserEmail(email.value, user);

        if(!response.error) {
            setEmail((prevState) => ({value:"", updating:false}));
            setAccessToken(response.newAccessToken);

            toast({
                description: "email has been updated successfully",
            })
        }else {
            setEmail((prevState) => ({...prevState, updating:false}));
            console.log(error)
        }
    }

    return(
        <Container className="py-9">
            <UpdateUserComponent newvalue={newAccessToken ? {...user, access_token:newAccessToken}: null}>
                <div>
                    <SubTitle>Settings</SubTitle>
                </div>
                
                <div className="mt-7 max-w-[800px]">
                    <form onSubmit={(e) => updateName(e)}>
                        <div className="pb-4 mb-4 border-b border-gray-300">
                            <SubTitle>Update Name</SubTitle>
                        </div>

                        <Label htmlFor="name">name</Label>
                        <Input type="text" id="name" value={name.value} onChange={(e) => setName((prevState) => ({...prevState, value:e.target.value}))} placeholder="update your name" className="h-auto mt-2"/>
                        
                        <div className="flex">
                            {
                               name.updating ? (
                                    <Button disabled className="btn-primary h-auto py-1 mt-4">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ):(
                                    <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
                                )
                            } 
                        </div>      
                    </form>
                        
                    <form className="mt-7" onSubmit={(e) => updatePassword(e)}>
                        <div className="pb-4 mb-4 border-b border-gray-300">
                            <SubTitle>Change Password</SubTitle>
                        </div>
                            
                        <div>
                            <Label htmlFor="password">old password</Label>
                            <Input type="password" value={password.password} onChange={(e) => setPassword((prevState) => ({...prevState, password:e.target.value}))} id="password" placeholder="old password" className="h-auto mt-2"/>
                        </div>
                            
                        <div className="mt-4">
                            <Label htmlFor="newpassword">new password</Label>
                            <Input type="password" value={password.newPassword} onChange={(e) => setPassword((prevState) => ({...prevState, newPassword: e.target.value}))} id="newpassword" placeholder="new password" className="h-auto mt-2"/>
                        </div> 
                        
                        <div className="flex">
                              {
                               password.updating ? (
                                    <Button disabled className="btn-primary h-auto py-1 mt-4">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ):(
                                    <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
                                )
                            } 
                        </div>
                    </form>
                        

                    <form className="mt-7" onSubmit={(e) => updateEmail(e)}>
                        <div className="pb-4 mb-4 border-b border-gray-300">
                            <SubTitle>Change Email</SubTitle>
                        </div>
                        
                        <Label htmlFor="email">email</Label>
                        <Input type="email" id="email" value={email.value} onChange={(e) => setEmail((prevState) => ({...prevState, value:e.target.value}))} placeholder="new email" className="h-auto mt-2"/>

                        <div className="flex">
                           {
                               email.updating ? (
                                    <Button disabled className="btn-primary h-auto py-1 mt-4">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ):(
                                    <Button className="btn-primary h-auto py-1 mt-4">Update</Button>
                                )
                            } 
                        </div>
                    </form>
                     
                </div>
            </UpdateUserComponent>
        </Container>
    ) 
}


//rfvbnmkkoiufgfaqzazxc476800964