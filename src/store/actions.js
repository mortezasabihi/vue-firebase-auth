import firebase from "firebase";
import router from "@/router";
import { setUser, destroyUser } from "@/services/jwt.service";

export default {
  register({ commit }, payload) {
    commit("setLoading", true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        setUser(response.user);
        router.push("/");
      })
      .catch(error => commit("setErrors", error))
      .finally(() => commit("setLoading", false));
  },

  login({ commit }, payload) {
    commit("setLoading", true);

    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        setUser(response.user);
        router.push("/");
      })
      .catch(error => commit("setErrors", error))
      .finally(() => commit("setLoading", false));
  },

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => router.push("/login"));

    destroyUser();
  }
};
