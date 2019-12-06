export default {
  setUser(state, payload) {
    state.user = payload;
  },
  destroyUser(state) {
    state.user = "";
  },
  setLoginStatus(state, payload) {
    state.isLoggedIn = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  clearErrors(state) {
    state.errors = "";
  }
};
