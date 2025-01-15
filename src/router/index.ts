import { createWebHistory, createRouter } from "vue-router";
// import Main from "@/pages/main.vue";
// import Customer from "@/pages/customer.vue";
// import Setting from "@/pages/setting.vue";
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

export default router;
