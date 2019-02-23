import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Frontpage from "./views/Frontpage.vue";
import ErrorPage from "./views/Error.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      meta: {
        requiresAuth: true
      },
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          name: "frontpage",
          component: Frontpage
        },
        {
          path: "/skodatima",
          name: "skodatima",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/SkodaTima.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: {
        requiresAuth: false
      },
      component: Login
    },
    {
      path: "*",
      name: "Error",
      component: ErrorPage
    }
    // {
    //   path: "/register",
    //   name: "register",
    //   component: Register
    // }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("/login");
  else if (!requiresAuth && currentUser) next("/");
  else next();
});

export default router;
