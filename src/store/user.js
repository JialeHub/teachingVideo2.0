import {
  getToken,
  getUserName,
  getUserAccount,
  getUserIcon
} from "@/utils/app";
const user = {
  state: {
    userName: getUserName(),
    userIcon: getUserIcon(),
    userToken: getToken(),
    userAccount: getUserAccount(),
    isTeacherFlag: false
  },
  getters: {
    userName: function(state) {
      window.head_this.userName = state.userName;
      window.head_this.userDropdown = !!getToken();
    },
    userIcon: function(state) {
      window.head_this.circleUrl = state.userIcon;
    }
  },
  mutations: {
    SET_isTeacherFlag(state, value) {
      state.isTeacherFlag = value;
    },
    SET_userName(state, value) {
      state.userName = value;
    },
    SET_userIcon(state, value) {
      state.userIcon = value;
    },
    SET_userToken(state, value) {
      state.userToken = value;
    },
    SET_userAccount(state, value) {
      state.userAccount = value;
    },
    SET_user(state) {
      state.userName = getUserName();
      state.userIcon = getUserIcon();
      state.userToken = getToken();
      state.userAccount = getUserAccount();
    }
  },
  actions: {},
  namespaced: true
};
export default user;
