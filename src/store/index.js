import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./user";
import router from "./router";
import teacherLayout from "./teacherLayout";

export default new Vuex.Store({
  state: {
    ex: "ex",
    count: 10
  },
  getters: {
    //computed
    count: state => state.count + 10
  },
  mutations: {
    //同步函数
    SET_COUNT(state, value) {
      state.count = value;
      console.log(state.count);
    }
  },
  actions: {},
  modules: {
    user,
    router,
    teacherLayout
  }
});
