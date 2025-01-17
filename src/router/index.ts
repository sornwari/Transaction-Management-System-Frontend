import { createWebHistory, createRouter } from "vue-router";
import Cookies from "js-cookie";
import Auth from "@/pages/Auth.vue";
// import Auth from "./../pages/auth.vue";
import Main from "./../pages/main.vue";
import User from "./../pages/user.vue";
import Transaction from "./../pages/transaction.vue";
import Account from "./../pages/account.vue";
import Dashboard from "./../pages/dashboard.vue";

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/home",
    component: Main,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/account",
        name: "account",
        component: Account,
      },
      {
        path: "/transaction",
        name: "transaction",
        component: Transaction,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const cookie = Cookies.get("auth-token");

  if (to.path !== "/" && cookie == undefined) {
    next("/");
  } else {
    next();
  }
});

export default router;
