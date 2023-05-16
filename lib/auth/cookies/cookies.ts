import { getCookie, setCookie } from "cookies-next";

export function setcookie(name:string, value:string, age:any) {
    setCookie(name, value, {
      path: "/",
      maxAge: age,
    });

}

export function getcookie(name:string) {
  const cookie = getCookie(name);

  return cookie;
}