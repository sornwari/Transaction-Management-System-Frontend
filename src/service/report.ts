import type { SearchAccountModel } from "@/model/accountModel";
import type { LoginModel } from "@/model/authModel";
import type { SearchTransactionsModel } from "@/model/transactionModel";
import type { SearchUserModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class ReportService {
  getReportUsers(body: SearchUserModel) {
    return axiosClient.post(`/Report/getReportUser`, body, {
      responseType: "blob",
    });
  }

  getReportAccounts(body: SearchAccountModel) {
    return axiosClient.post(`/Report/getReportAccount`, body, {
      responseType: "blob",
    });
  }

  getReportTransactions(body: SearchTransactionsModel) {
    return axiosClient.post(`/Report/getReportTransaction`, body, {
      responseType: "blob",
    });
  }
}
export default new ReportService();
