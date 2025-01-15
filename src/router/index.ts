import { createWebHistory, createRouter } from "vue-router";
import Cookies from "js-cookie";
import Auth from "./../pages/Auth.vue";
import Main from "./../pages/Main.vue";
import User from "./../pages/User.vue";
import Transaction from "./../pages/Transaction.vue";
import Account from "./../pages/Account.vue";

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
  console.log("cookie : ", cookie);
  console.log("to.path : ", to.path);

  if (to.path !== "/" && cookie == undefined) {
    console.log("to.path !== '/' && !currentUserId");
    next("/");
  } else {
    console.log("else && currentUserId == ", cookie);
    next();
  }
});

export default router;
