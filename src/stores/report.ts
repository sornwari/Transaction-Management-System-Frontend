import { defineStore } from "pinia";
import auth from "./../service/auth";
import user from "./../service/user";
import type { LoginModel } from "@/model/authModel";
import type {
  CreateUserModel,
  SearchUserModel,
  UpdateUserViewModel,
} from "@/model/userModel";
import type { SearchAccountModel } from "@/model/accountModel";
import account from "@/service/account";
import type { SearchTransactionsModel } from "@/model/transactionModel";
import transaction from "@/service/transaction";
import report from "@/service/report";

export const useReportStore = defineStore("report", {
  state: () => ({}),
  actions: {
    async getReportUser(body: SearchUserModel) {
      try {
        const response = await report.getReportUsers(body);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getReportAccounts(body: SearchAccountModel) {
      try {
        const response = await report.getReportAccounts(body);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getReportTransaction(body: SearchTransactionsModel) {
      try {
        const response = await report.getReportTransactions(body);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
