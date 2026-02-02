import Cookies from "js-cookie";
export function setCookies(token) {
  Cookies.set("accessToken", token, {
    expires: 1,
    secure: true,
    sameSite: "strict",
  });
}

export function getCookies() {
  return Cookies.get("accessToken");
}

export function removeCookies(token) {
  return Cookies.remove("accessToken");
}
