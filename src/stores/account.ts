import { defineStore } from "pinia";
import auth from "./../service/auth";
import type { LoginModel } from "@/model/authModel";
import type {
  CreateAccountModel,
  SearchAccountModel,
  UpdateAccountViewModel,
} from "@/model/accountModel";
import account from "@/service/account";

export const useAccountStore = defineStore("account", {
  state: () => ({}),
  actions: {
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
    async createAccount(body: CreateAccountModel) {
      try {
        const response = await account.createAccountService(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updateAccount(body: UpdateAccountViewModel) {
      try {
        const response = await account.updateAccountService(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteAccount(id: number) {
      try {
        const response = await account.deleteAccountService(id);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
