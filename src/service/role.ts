import type { LoginModel } from "@/model/authModel";
import type { SearchUserModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class RoleService {
  getRoles() {
    return axiosClient.get("/Role/getRoles");
  }
}
export default new RoleService();
