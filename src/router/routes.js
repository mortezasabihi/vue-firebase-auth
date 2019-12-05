export default [
  {
    path: "*",
    redirect: "/login"
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "login",
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/auth/login")
  },
  {
    name: "register",
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/auth/register")
  }
];
