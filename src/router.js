import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Frontpage from "./views/Frontpage.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  meta: {
    requiresAuth: true
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          name: "frontpage",
          component: Frontpage
        },
        {
          path: "/skratima",
          name: "skratima",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/SkraTima.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});

router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser;
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // if (requiresAuth && !currentUser) next("/login");
  // else if (!requiresAuth && currentUser) next("/");
  // else next();

  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  console.log(to.path);

  if (authRequired && !loggedIn) {
    // localStorage.setItem("user", true);
    next("/login");
  }

  next();
});

export default router;
