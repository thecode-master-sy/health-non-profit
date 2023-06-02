import { cookies } from "next/headers";

export function getServerCookie(name:string) {
   const cookieStore = cookies();

   const cookie:any = cookieStore.get(name);

   return JSON.parse(cookie?.value);
}