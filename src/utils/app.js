import cookie from "cookie_js";

export function getToken() {
  return cookie.get("userToken") !== undefined ? cookie.get("userToken") : "";
}
export function getUserName() {
  if (getToken()) {
    return cookie.get("userName") !== undefined
      ? cookie.get("userName")
      : "请登录";
  } else {
    return "请登录";
  }
}
export function getUserIcon() {
  if (getToken()) {
    return cookie.get("userIcon") !== undefined ? cookie.get("userIcon") : "";
  } else {
    return "";
  }
}
export function getUserPassword() {
  return cookie.get("userPassword") !== undefined
    ? cookie.get("userPassword")
    : "";
}
export function getUserAccount() {
  return cookie.get("userAccount") !== undefined
    ? cookie.get("userAccount")
    : "";
}
export function getIdentity() {
  return cookie.get("userIdentity") !== undefined
    ? cookie.get("userIdentity")
    : "";
}

export function setToken(value) {
  return cookie.set("userToken", value, { expires: 0.08333, path: "" });
}
export function setUserName(value) {
  return cookie.set("userName", value, { expires: 0.08333, path: "" });
}
export function setUserIcon(value) {
  return cookie.set("userIcon", value, { expires: 0.08333, path: "" });
}
export function setUserPassword(value) {
  return cookie.set("userPassword", value, { expires: 14, path: "" });
}
export function setUserAccount(value) {
  return cookie.set("userAccount", value, { expires: 14, path: "" });
}
export function setIdentity(value) {
  return cookie.set("userIdentity", value, { expires: 0.08333, path: "" });
}

export function removeToken() {
  return cookie.remove("userToken");
}
export function removeUserName() {
  return cookie.remove("userName");
}
export function removeUserIcon() {
  return cookie.remove("userIcon");
}
export function removeUserPassword() {
  return cookie.remove("userPassword");
}
export function removeUserAccount() {
  return cookie.remove("userAccount");
}
export function removeIdentity() {
  return cookie.remove("userIdentity");
}
