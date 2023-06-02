"use client"
import { Container } from "@/components/utility";
import { FormEvent, useEffect, useState } from "react";
import { protect, verify } from "@/utils/handleform";
import { Axios } from "@/lib/auth/axios";
import { createUser } from "@/lib/auth/admin";
import { redirect, useRouter } from "next/navigation";
import { Auth } from "@/lib/auth/user";

type formvalues = {
    name: string;
    password: string;
    email: string;
}

type errorvalues = {
    name?: string;
    password?:string;
    email?: string;
}


// export function protect()

export default function Page() {
    
    useEffect(() => {
        const user = Auth();
        if(!user) {
            redirect("/studio/login");
        }
    }, [])
       
    const [formValues, setFormValues] = useState<formvalues>({name: "", password: "", email: ""});
    const [errors, setErrors] = useState<errorvalues>({});
    const [loading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    async function handleLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const patterns = {
            name: /^(?!.*\s{2,})[A-Za-z]+(?:\s[A-Za-z]+)*[A-Za-z]$/,
            email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            password: /^.{6,30}$/
        }

        const errorObj:errorvalues = {}

        if(!verify(formValues.name, patterns.name)) {
            //setErrors((prev) => ({...prev, name: "invalid name"}))
            errorObj.name = "invalid name";
        }

        if(!verify(formValues.email, patterns.email)) {
            //setErrors((prev) => ({...prev, email: "invalid email"}))
            errorObj.email = "invalid email";
        }

        if(!verify(formValues.password, patterns.password)) {
            //setErrors((prev) => ({...prev, password: "invalid password"}))
            errorObj.password = "invalid password"
        }
 
       
        if (Object.keys(errorObj).length === 0) {

           const data:formvalues = {
                name: protect(formValues.name),
                email: protect(formValues.email),
                password: protect(formValues.password)
           } 

          
           setIsLoading(true)
           const response:any = await createUser(data);
            
           if(response.error) {
            setErrorMessage(response.error)
            
            setTimeout(() => {
                router.push("/studio/login")                
            }, 6000)
           }else {
                console.log("user created successfully!!")
                router.push("/studio/dashboard");
           }
      

        } else {
           setErrors(errorObj);
        }
       
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage("");
        }, 6000)
    }, [errorMessage])
    
  return (
      <div className="py-4 min-h-screen grid px-4">
          <form className="grid gap-4 m-auto  w-full max-w-[500px]" onSubmit={(e) => handleLogin(e)}>
              <p className="text-red-500 text-center">{errorMessage}</p>
              <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={(e) => setFormValues(prevState => ({...prevState, name:e.target.value}))} className="py-2 px-2 bg-light-bg text-gray-500 rounded border border-solid border-light-border focus:border-primary-light focus:outline-none transition-all"/>
              {errors.name ? (<p>{errors.name}</p>) : ""}

              <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={(e) => setFormValues(prevState => ({...prevState, email:e.target.value}))}  className="py-2 px-2 bg-light-bg text-gray-500 rounded border border-solid border-light-border focus:border-primary-light focus:outline-none transition-all"/>
              {errors.email ? (<p>{errors.email}</p>) : ""}

              <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={(e) => setFormValues(prevState => ({...prevState, password:e.target.value}))}  className="py-2 px-2 bg-light-bg text-gray-500 rounded border border-solid border-light-border focus:border-primary-light focus:outline-none transition-all"/>
              {errors.password ? (<p>{errors.password}</p>) : ""}

              <button className="btn-primary">Submit</button>
          </form>
      </div>
  )
}