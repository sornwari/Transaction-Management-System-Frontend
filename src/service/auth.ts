import type { LoginModel } from "@/model/authModel";
import { axiosClient } from "@/utils/axiosClient";
class AuthService {
  login(body: LoginModel) {
    return axiosClient.post("/Auth/login", body);
  }
}
export default new AuthService();
