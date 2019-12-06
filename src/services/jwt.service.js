import store from "@/store";

const setUser = user => {
  localStorage.setItem("user", JSON.stringify(user));
  store.commit("setUser", user);
};

const getUser = () => JSON.parse(localStorage.getItem("user"));

const destroyUser = () => localStorage.removeItem("user");

export { setUser, getUser, destroyUser };
