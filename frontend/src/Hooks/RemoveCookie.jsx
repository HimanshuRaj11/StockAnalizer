import Cookie from "js-cookie";

export default function RemoveCookie(cookieName){
  Cookie.remove(cookieName);
};
