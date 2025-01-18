import type { LoginModel } from "@/model/authModel";
import { axiosClient } from "@/utils/axiosClient";

class AuthService {
  login(body: LoginModel) {
    try {
      var response = axiosClient.post("/Auth/login", body);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}
export default new AuthService();
