import { createWebHistory, createRouter } from "vue-router";
// import Main from "@/pages/main.vue";
// import Customer from "@/pages/customer.vue";
// import Setting from "@/pages/setting.vue";
import Auth from "./../pages/Auth.vue";
import Main from "./../pages/Main.vue";
import User from "./../pages/User.vue";
import Transaction from "./../pages/Transaction.vue";

const routes = [
  {
    path: "/",
    component: Auth,
  },
  // {
  //   path: "/user",
  //   component: User,
  // },
  // {
  //   path: "/transaction",
  //   component: Tran,
  // },
  {
    path: "/home",
    component: Main,
    // children: [
    //   {
    //     path: "/customer",
    //     component: Customer,
    //   },
    //   {
    //     path: "/setting",
    //     component: Setting,
    //   },
    // ],
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Transaction
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
