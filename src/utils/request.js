import axios from "axios";
import { Loading } from "element-ui";
import {
  getToken,
  getUserAccount,
  getUserPassword,
  removeToken,
  setToken
} from "./app";
import { loginApi } from "@/api/login";

//开始加载动画
let loading;
function startLoading() {
  loading = Loading.service({
    lock: true, //是否锁定
    text: "加载中...", //加载中需要显示的文字
    background: "rgba(0,0,0,.7)" //背景颜色
  });
}
//结束加载动画
function endLoading() {
  loading.close();
}

const service = axios.create({
  baseURL: "http://129.204.189.149:8089",
  timeout: 3000
}); //创建axios赋给变量service

// 添加请求拦截器 一般用于验证是否登陆
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = "Bearer " + getToken();
    startLoading(); //请求时的加载动画
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    endLoading(); //结束加载动画
    // 对响应数据做点什么
    return response;
    //return Promise.resolve(response);
  },
  function(error) {
    endLoading(); //结束加载动画
    // 对响应错误做点什么
    // console.log(error.response);
    /*Message({
      message: error.response.data.message,
      type: "error",
      duration: 3000
    });*/
    if (error.response.status === 401) {
      if (getUserPassword()) {
        removeToken();
        let data = {
          username: getUserAccount(),
          password: getUserPassword()
        };
        loginApi(data)
          .then(response => {
            setToken(response.data.token);
            this.$store.commit("user/SET_user");
            this.$router.go(0);
          })
          .catch(() => {});
      }
    }
    return Promise.reject(error);
  }
);

/*
 * 1.在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 2.通过export方式导出，在导入时要加{ }，export default则不需要
 * */
export default service;
