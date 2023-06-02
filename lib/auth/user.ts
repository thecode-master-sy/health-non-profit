import { getcookie, setcookie } from './cookies/cookies';
import { setCookie } from 'cookies-next';
import { User } from '@/modules/data';

export function Auth() {
    
    const user = getcookie("user");

    if(!user) {
        return false
    }
       
    return user;
}


export function updateUser(newvalue:User){
    setCookie("user", newvalue, {
        path: "/",
    })
    
    return getcookie("user");
}
