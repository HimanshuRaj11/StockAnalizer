import Cookie from "js-cookie";

export default function GetCookie(cookieName){
  const Cookies = Cookie.get(cookieName);
  console.log(Cookies);
  if(Cookies){
    return Cookies
  }
  else {
    return null
  }
};
