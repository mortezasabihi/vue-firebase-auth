import firebase from "firebase";
import router from "@/router";
import { setUser } from "@/services/jwt.service";

export default {
  register({ commit }, payload) {
    commit("setLoading", true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        setUser(response.user);
        setTimeout(() => router.push("/"), 2000);
      })
      .catch(error => {
        commit("setError", error);
      })
      .finally(() => commit("setLoading", false));
  }
};
