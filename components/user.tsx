"use client";

import { updateUser } from "@/lib/auth/user";
import { User } from "@/modules/data";

export function UpdateUserComponent({children, newvalue, className}:{children:React.ReactNode, newvalue:User, className?:string}){
    if(newvalue) {
        updateUser(newvalue);
    }
  
    return (
        <div className={className ? className : ""}>
            {children}
        </div>
    )   
}