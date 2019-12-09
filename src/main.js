import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import cookie from "cookie_js";
import "normalize-scss/sass/normalize/_import-now.scss"; //清除默认样式
import "./router/premit";
import {
  addClass,
  hasClass,
  removeClass,
  toggleClass,
  getStyle
} from "./utils/classManage";

Vue.use(VueAxios, axios);
Vue.use(ElementUI, { size: "medium", zIndex: 3000 }); //size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  ElementUI,
  cookie,
  render: h => h(App)
}).$mount("#app");
