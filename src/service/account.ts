import type { CreateAccountModel, SearchAccountModel, UpdateAccountViewModel } from "@/model/accountModel";
import type { LoginModel } from "@/model/authModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class AccountService {
  searchAccounts(body: SearchAccountModel) {
    return axiosClient.post(`/Account/searchAccount`, body);
  }

  createAccountService(body: CreateAccountModel) {
    return axiosClient.post(`/Account/createAccount`, body);
  }
  
  updateAccountService(body: UpdateAccountViewModel) {
    return axiosClient.post(`/Account/updateAccount`, body);
  }

  deleteAccountService(id: number) {
    return axiosClient.get(`/Account/deleteAccount/${id}`);
  }
}
export default new AccountService();
