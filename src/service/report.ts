import type { SearchAccountModel } from "@/model/accountModel";
import type { LoginModel } from "@/model/authModel";
import type { SearchTransactionsModel } from "@/model/transactionModel";
import type { SearchUserModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class ReportService {
  searchUsers(body: SearchUserModel) {
    return axiosClient.post(`/User/searchUser`, body);
  }

  searchAccounts(body: SearchAccountModel) {
    return axiosClient.post(`/Account/searchAccount`, body);
  }

  searchTransactions(body: SearchTransactionsModel) {
    return axiosClient.post(`/Transaction/searchTransaction`, body);
  }
}
export default new ReportService();
