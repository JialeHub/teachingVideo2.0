const router = {
  state: {
    routerNowName: "",
    routeConsole: []
  },
  getters: {},
  mutations: {
    SET_routeConsole(state, value) {
      state.routeConsole = value;
    },
    SET_routerNowName(state, value) {
      state.routerNowName = value;
    }
  },
  actions: {},
  namespaced: true
};
export default router;
