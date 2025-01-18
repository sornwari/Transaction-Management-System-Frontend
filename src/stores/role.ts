import { defineStore } from "pinia";
import auth from "./../service/auth";
import user from "./../service/user";
import type { LoginModel } from "@/model/authModel";
import type { SearchUserModel } from "@/model/userModel";
import role from "@/service/role";

export const useRoleStore = defineStore("role", {
  state: () => ({
    roles:[],
  }),
  actions: {
    async getRoles() {
      try {
        const response = await role.getRoles();
        console.log("response", response);
        if(response.status == 200){
          this.roles = response.data;
        }
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
