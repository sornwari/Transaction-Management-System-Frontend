import { defineStore } from "pinia";
import auth from "./../service/auth";
import type { LoginModel } from "@/model/authModel";
import type {
  CreateAccountModel,
  SearchAccountModel,
  UpdateAccountViewModel,
} from "@/model/accountModel";
import transaction from "@/service/transaction";
import type { CreateTransactionModel, SearchTransactionsModel, UpdateTransactionViewModel } from "@/model/transactionModel";

export const useTransactionStore = defineStore("transaction", {
  state: () => ({}),
  actions: {
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
    async createTransaction(body: CreateTransactionModel) {
      try {
        const response = await transaction.createTransactionService(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updateTransaction(body: UpdateTransactionViewModel) {
      try {
        const response = await transaction.updateTransactionService(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteTransaction(id: number) {
      try {
        const response = await transaction.deleteTransactionService(id);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
