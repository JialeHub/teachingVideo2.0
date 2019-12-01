import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "/devApi",
  timeout: 3000
}); //创建axios赋给变量service

// 添加请求拦截器 一般用于验证是否登陆
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
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
    // 对响应数据做点什么
    return response;
    //return Promise.resolve(response);
  },
  function(error) {
    // 对响应错误做点什么
    // console.log(error.response);
    /*Message({
      message: error.response.data.message,
      type: "error",
      duration: 3000
    });*/
    return Promise.reject(error);
  }
);

/*
 * 1.在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 2.通过export方式导出，在导入时要加{ }，export default则不需要
 * */
export default service;
