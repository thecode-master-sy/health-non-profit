import { Axios } from "@/lib/auth/axios";
import { getAccessToken, getAdminToken } from "./token";
import { getCookie } from "cookies-next";
import { updateUser } from "./user";
import { User } from "@/modules/data";

interface dataInterface{
    name: string;
    password: string;
    email: string;
}

export async function createUser(data:dataInterface) {
    try {
        const user:any = getCookie("user");


        if(user) {
            const { access_token } = JSON.parse(user);
            
            const authorization:any = await getAdminToken(access_token);

            
            const {admin_token} = authorization.data;

            const response = await Axios.post("/api/admin/create-admin", data, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${admin_token}`
                }
            })
            
            
            return {error: false, data: response.data};
        }
    }catch(error) {
        console.log(error)
        return {error: error}
    }
}