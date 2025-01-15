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

export const useReportStore = defineStore("report", {
  state: () => ({}),
  actions: {
    async searchUser(body: SearchUserModel) {
      try {
        const response = await user.searchUsers(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async searchAccount(body: SearchAccountModel) {
      try {
        const response = await account.searchAccounts(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async searchTransaction(body: SearchTransactionsModel) {
      try {
        const response = await transaction.searchTransactions(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
