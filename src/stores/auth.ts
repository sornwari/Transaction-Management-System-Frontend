import { defineStore } from "pinia";
import auth from "./../service/auth";
import type { LoginModel } from "@/model/authModel";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    password: "",
    role: "",
    name: "",
  }),
  actions: {
    async login(body: LoginModel) {
      try {
        const response = await auth.login(body);
        console.log("response", response);
        if (response.status == 200) {
          const token = response.data.token;
          this.username = response.data.user.userName;
          this.password = response.data.user.password;
          this.role = response.data.user.role;
          this.name = response.data.user.name;
          
          document.cookie = `auth-token=${token}; Path=/; Max-Age=86400; SameSite=Strict`;
          if (window.location.protocol === "https:") {
            document.cookie += "; Secure";
          }
        } else {
          console.error("Login failed or token not found in response");
        }
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
