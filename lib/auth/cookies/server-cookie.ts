import { cookies } from "next/headers";
import { cache } from "react";

export const  getServerCookie = cache((name:string) => {
   const cookieStore = cookies();

   const cookie:any = cookieStore.get(name);

   if(!cookie) {
      return null
   }

   return JSON.parse(cookie?.value);
})