import { defineStore } from "pinia";
import auth from "./../service/auth";
import user from "./../service/user";
import type { LoginModel } from "@/model/authModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";

export const useUserStore = defineStore("user", {
  state: () => ({}),
  actions: {
    async searchUser(body: SearchUserModel) {
      try {
        const response = await user.searchUsers(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async createUser(body: CreateUserModel) {
      try {
        const response = await user.createUser(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updateUser(body: UpdateUserViewModel) {
      try {
        const response = await user.updateUser(body);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteUser(id: number) {
      try {
        const response = await user.deleteUser(id);
        console.log("response", response);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
