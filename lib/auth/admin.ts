import { Axios } from "@/lib/auth/axios";
import { getAdminToken } from "./token";
import { getCookie } from "cookies-next";

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

            const authorization = await getAdminToken(access_token);

           

            // if(authorization) {
            //     const response = await Axios.post("/api/admin/create-admin", data, {
            //         headers: {
            //           'Content-Type': 'application/json',
            //           'Authorization': `Bearer ${authorization.adm}`
            //         }
            //       })
        
            // }
            return {error: false}
        }
    }catch(error) {
        console.log(error)
        return {error: "unAuthorized"}
    }
}