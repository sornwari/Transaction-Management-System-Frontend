import type { CreateAccountModel, SearchAccountModel, UpdateAccountViewModel } from "@/model/accountModel";
import type { LoginModel } from "@/model/authModel";
import type { CreateTransactionModel, SearchTransactionsModel, UpdateTransactionViewModel } from "@/model/transactionModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class TransactionService {
  searchTransactions(body: SearchTransactionsModel) {
    return axiosClient.post(`/Transaction/searchTransaction`, body);
  }

  createTransactionService(body: CreateTransactionModel) {
    return axiosClient.post(`/Transaction/createTransaction`, body);
  }
  
  updateTransactionService(body: UpdateTransactionViewModel) {
    return axiosClient.put(`/Transaction/updateTransaction`, body);
  }

  deleteTransactionService(id: number) {
    return axiosClient.delete(`/Transaction/deleteTransaction/${id}`);
  }
}
export default new TransactionService();
