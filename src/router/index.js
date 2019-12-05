import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next({ path: "/login" });
  else if (!requiresAuth && currentUser) next({ path: "/" });
  else next();
});

export default router;
