import router from "./index";
import store from "@/store/index";
import {
  getToken,
  getIdentity,
  removeUserName,
  removeUserIcon,
  removeIdentity
} from "@/utils/app";

const whileRouter = ["/", "/login", "/register", "/home"]; //白名单 //indexOf方法：判断数组中是否存在某个对象，不存在则返回-1

//路由守卫：
router.beforeEach((to, from, next) => {
  store.commit("user/SET_user");
  if (getToken()) {
    //console.log("存在Token" + getToken());
    if (getIdentity() === "teacher") {
      if (to.meta.isTeacherFlag === false || to.path === "/") {
        next("/console");
      } else {
        next();
        if (from.name !== null) {
          window.consoleHeader_this.headTitle = to.meta.name;
        }
      }
    } else {
      if (to.meta.isTeacherFlag === true) {
        next("/home");
      } else if (to.name === "login") {
        next("/personal");
      } else {
        next();
      }
    }
  } else {
    //console.log("不存在Token");
    removeUserName();
    removeUserIcon();
    removeIdentity();
    if (whileRouter.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  } /*
  console.log(to);
  console.log(from);
  console.log(next);*/
});
