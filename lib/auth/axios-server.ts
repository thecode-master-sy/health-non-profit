import axios, { InternalAxiosRequestConfig } from "axios";
import { baseURL } from "./axios";
import { getServerCookie } from "./cookies/server-cookie";
import { getAccessToken } from "./token";

const AxiosServer = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

const user = getServerCookie("user");


AxiosServer.interceptors.request.use(async (req:InternalAxiosRequestConfig<any>) => {
    
       
    if(!req.headers["Authorization"]) {
        req.headers["Authorization"]  = `Bearer ${user?.access_token}`;    
    }  
    
    return req
}, 
(error) => Promise.reject(error)
)

AxiosServer.interceptors.response.use(
    response => response,

    async (error) => {
        const prevRequest = error?.config;
        
        if(error?.response?.status === 401 && !prevRequest?.sent) {
           prevRequest.sent = true; 
            
           try{
                const newAccessToken = await getAccessToken(user, user?.refresh_token);
                         
                prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
           
                return AxiosServer(prevRequest)

           }catch(err) {
                return Promise.reject(err)
           }
        }
        
        return Promise.reject(error)
    }
)

export default AxiosServer;