const router = {
  state: {
    routeConsole: []
  },
  getters: {},
  mutations: {
    SET_routeConsole(state, value) {
      state.routeConsole = value;
    }
  },
  actions: {},
  namespaced: true
};
export default router;
