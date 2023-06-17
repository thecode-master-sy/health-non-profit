import AxiosAuth, {Axios} from "@/lib/auth/axios";
import { cookies } from "next/headers";
import { updateUser } from "./user";

export async function getAccessToken (user:any, authorization: string) {
    try {
        const newAuthorization = await Axios.get('/api/admin/token/access-token', {
            headers: {
               "Authorization": `Bearer ${authorization}`
            }
        })
        
        if(newAuthorization.data.error) {
            return {error: true, message: newAuthorization.data.message}  
        }
        
        const newAccessToken = newAuthorization.data.admin_token;
        
       return newAccessToken; 
    }catch (error) {
        return {error: true};
    }

}

export async function getAdminToken(authorization:string) {
    try {
        const response = await AxiosAuth.get("/api/main-admin/token/admin-token", {
            headers: {
                "Authorization": `Bearer ${authorization}`
            }
        })

        return response;

    }catch(error)  {
        return {error: true}      
    }
   
}

