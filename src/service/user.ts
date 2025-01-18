import type { LoginModel } from "@/model/authModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class UserService {
  searchUsers(body: SearchUserModel) {
    return axiosClient.post(`/User/searchUser`, body);
  }

  createUser(body: CreateUserModel) {
    return axiosClient.post(`/User/createUser`, body);
  }

  updateUser(body: UpdateUserViewModel) {
    return axiosClient.put(`/User/updateUser`, body);
  }
  
  deleteUser(id: number) {
    return axiosClient.delete(`/User/deleteUser/${id}`);
  }
}
export default new UserService();
