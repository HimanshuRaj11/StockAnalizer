import Cookie from "js-cookie";


export default function SetCookie(cookieName, usrin){
  Cookie.set(cookieName, usrin, {
    // expires: 1, // 1 day
    // secure: true,
    sameSite: "strict",
    path: "/",
  });
};
