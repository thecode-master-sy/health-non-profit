import { cookies } from "next/headers";

export function getServerCookie(name:string) {
   const cookieStore = cookies();

   const cookie:any = cookieStore.get(name);

   if(!cookie) {
      return null
   }

   return JSON.parse(cookie?.value);
}