import { createWebHistory, createRouter } from "vue-router";
import Cookies from "js-cookie";
import Auth from "./../pages/auth.vue";
import Main from "./../pages/main.vue";
import User from "./../pages/user.vue";
import Transaction from "./../pages/transaction.vue";
import Account from "./../pages/account.vue";

// const routes = [
//   {
//     path: "/",
//     component: Auth,
//   },
//   {
//     path: "/home",
//     component: Main,
//     children: [
//       {
//         path: "/user",
//         name: "user",
//         component: User,
//       },
//       {
//         path: "/transaction",
//         name: "transaction",
//         component: Transaction,
//       },
//     ],
//   },
// ];

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
