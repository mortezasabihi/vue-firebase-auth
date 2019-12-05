export default [
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
