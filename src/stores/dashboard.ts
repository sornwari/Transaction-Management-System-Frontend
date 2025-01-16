import { defineStore } from "pinia";
import auth from "./../service/auth";
import user from "./../service/user";
import type { LoginModel } from "@/model/authModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";
import type { SearchDashboardModel } from "@/model/dashboardModel";
import dashboard from "@/service/dashboard";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    totalBalance: 0,
    totalDeposit: 0,
    totalWithdraw: 0,
  }),
  actions: {
    async searchDashboard(body: SearchDashboardModel) {
      try {
        const response = await dashboard.searchDashboards(body);
        if(response.status == 200){
          this.totalBalance = response.data.totalBalance;
          this.totalDeposit = response.data.totalDeposit;
          this.totalWithdraw = response.data.totalWithdraw;
        }
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
