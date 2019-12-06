export default {
  getUser: state => state.user,
  getLoading: state => state.loading,
  getLoginStatus: state => state.isLoggedIn,
  getErrors: state => state.errors
};
