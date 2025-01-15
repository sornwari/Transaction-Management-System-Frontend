import { createWebHistory, createRouter } from "vue-router";
// import Main from "@/pages/main.vue";
// import Customer from "@/pages/customer.vue";
// import Setting from "@/pages/setting.vue";
import Auth from "./../pages/auth.vue";
import Main from "./../pages/main.vue";
import User from "./../pages/user.vue";
import Transaction from "./../pages/transaction.vue";

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
