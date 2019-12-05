export default [
  {
    name: "login",
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/auth/login")
  }
];
