import {Axios} from "@/lib/auth/axios";

export async function getAccessToken (authorization: string) {
    try {
        // const newAuthorization = await Axios.get('')
    }catch (error) {
        return {error: true};
    }

}

export async function getAdminToken(authorization:string) {
    try{
        const response = await Axios.get("/api/main-admin/token/admin-token", {
            headers: {
                Authorization: `Bearer ${authorization}`
            }
        })

        return response;
    }catch(error) {
        return error;
    }
}
