import axios, { InternalAxiosRequestConfig } from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { getAccessToken } from './token';
import { updateUser } from './user';
import { getcookie } from './cookies/cookies';

const baseURL = 'https://blog-api-2hen.onrender.com'

export const Axios = axios.create({
    baseURL: baseURL
});

const AxiosAuth = axios.create({
    baseURL: baseURL,

    withCredentials: true,
})

const user:any = getcookie("user");


AxiosAuth.interceptors.request.use(async (req:InternalAxiosRequestConfig<any>) => {
    
       
    if(!req.headers["Authorization"]) {
        req.headers["Authorization"]  = `Bearer ${user?.access_token}`;    
    }  
    
    return req
}, 
(error) => Promise.reject(error)
)

AxiosAuth.interceptors.response.use(
    response => response,

    async (error) => {
        const prevRequest = error?.config;
        
        if(error?.response?.status === 401 && !prevRequest?.sent) {
           prevRequest.sent = true; 
            
           try{
                const newAccessToken = await getAccessToken(user?.refresh_token);
           
                updateUser({...user, access_token: newAccessToken});
                        
                prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
           
                return AxiosAuth(prevRequest)

           }catch(err) {
                return Promise.reject(err)
           }
        }
        
        return Promise.reject(error)
    }
)

export default AxiosAuth;