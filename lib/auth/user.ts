import { cookies } from 'next/headers';

export function Auth() {
    const cookieStore = cookies();
    
    const user = cookieStore.get("user");

    if(!user) {
        return false
    }
       
    return JSON.parse(user.value);
}


export function updateUser(newValue:string){

}
