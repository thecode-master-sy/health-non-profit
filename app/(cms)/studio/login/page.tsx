"use client"

import { FormEvent, useEffect, useState } from "react";
import { protect, verify } from "@/utils/handleform";
import { Axios } from "@/lib/auth/axios";
import { setcookie } from "@/lib/auth/cookies/cookies";
import { redirect, useRouter } from "next/navigation";
import { Auth } from "@/lib/auth/user";

type formvalues = {
    password: string;
    email: string;
}

type errorvalues = {
    password?:string;
    email?: string;
}


// export function protect()

export default function Page() {

    useEffect(() => {
        const user = Auth();
        if(user) {
            redirect("/studio/dashboard");
        } 
    }, [])

    const router = useRouter();
    const [formValues, setFormValues] = useState<formvalues>({password: "", email: ""});
    const [errors, setErrors] = useState<errorvalues>({});
    const [loading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    async function handleLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        const data:formvalues = {
            email: protect(formValues.email),
            password: protect(formValues.password)
        } 

        try {
            setIsLoading(true)
            const {email, password} = data;

            const headers = {
                'Authorization': `Basic ${btoa(`${email}:${password}`)}`
            };
              
            const response = await Axios.get("/api/admin/login", {headers})

            if(response.data) {
                setIsLoading(false);

                const user = {
                    ...response.data.data,
                    access_token: response.data.token.access_token,
                    refresh_token: response.data.token.refresh_token
                }
                
                setcookie("user", JSON.stringify(user), 86400 * 30);

                router.push("/studio/dashboard");
            }

        } catch (error:any) {
            const {message} = error.response.data;

            setErrorMessage(message);
            setIsLoading(false);
        }
       
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage("")
        }, 3000)
    }, [errorMessage])
    
  return (
      <div className="py-4 min-h-screen grid px-4">
          <form className="grid gap-4 m-auto  w-full max-w-[400px]" onSubmit={(e) => handleLogin(e)}>
               <p className="text-center text-red-500">{errorMessage}</p>
              <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={(e) => setFormValues(prevState => ({...prevState, email:e.target.value}))}  className="py-2 px-2 bg-light-bg text-gray-600 rounded border border-solid border-light-border focus:border-primary-light focus:outline-none transition-all"/>
              {errors.email ? (<p>{errors.email}</p>) : ""}

              <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={(e) => setFormValues(prevState => ({...prevState, password:e.target.value}))}  className="py-2 px-2 bg-light-bg text-gray-600 rounded border border-solid border-light-border focus:border-primary-light focus:outline-none transition-all"/>
              {errors.password ? (<p>{errors.password}</p>) : ""}

              <button className="btn-primary">{loading ? "loading..." : "Submit"}</button>
          </form>
      </div>
  )
}