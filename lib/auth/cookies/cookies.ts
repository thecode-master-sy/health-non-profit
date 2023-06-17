import { getCookie, setCookie, deleteCookie  } from "cookies-next";

export function setcookie(name:string, value:string, age?:any) {
    setCookie(name, value, {
      path: "/",
      maxAge: age,
    });

}

export function getcookie(name:string) {
  const cookie:any = getCookie(name);

  if(cookie) {
    return JSON.parse(cookie)
  }
  
  return null
}

export function deletecookie(name:string) {
    deleteCookie(name, { path: '/path' });

    return true
}