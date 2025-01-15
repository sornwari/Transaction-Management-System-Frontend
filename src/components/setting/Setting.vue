<template>
  <div class="user-container w-full px-10">
    <div class="flex flex-row py-4 space-x-5 justify-center items-center">
      <div>
        <label class="form-control w-full max-w-xs ">
          <div class="label">
            <span class="label-text">Name</span>
          </div>
          <input
            type="text"
            v-model="name"
            placeholder="Name..."
            class="input input-bordered w-full max-w-xs rounded-xl"
          />
        </label>
      </div>
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Username</span>
          </div>
          <input
            type="text"
            v-model="username"
            placeholder="Username..."
            class="input input-bordered w-full max-w-xs rounded-xl"
          />
        </label>
      </div>
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Role</span>
          </div>
          <select v-model="selectedRole" class="select select-bordered rounded-xl">
            <option value="">Select role ...</option>
            <option
              v-for="roleItem in role"
              :key="roleItem"
              :value="roleItem.name"
            >
              {{ roleItem.name }}
            </option>
          </select>
        </label>
      </div>
      
      <!-- <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Date From</span>
          </div>
          <input
            type="date"
            v-model="datefrom"
            placeholder="Name..."
            class="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Date To</span>
          </div>
          <input
            type="date"
            v-model="dateto"
            placeholder="Name..."
            class="input input-bordered w-full max-w-xs"
          />
        </label>
      </div> -->

      <div class="flex flex-col space-y-2">
        <p class="invisible">place</p>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="btn rounded-full w-5 h-5 bg-sky-500 text-white"  @click="searchUser"/>
      </div>
    </div>

    <table class="table">
      <thead class="bg-gray-200 rounded-lg">
        <tr>
          <th><div class="flex justify-center items-center">Name</div></th>
          <th><div class="flex justify-center items-center">Username</div></th>
          <th><div class="flex justify-center items-center">Password</div></th>
          <th><div class="flex justify-center items-center">Role</div></th>
          <th><div class="flex justify-center items-center"><CreateUserModal /></div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><div class="flex justify-center items-center">{{ user.name }}</div></td>
          <td><div class="flex justify-center items-center">{{ user.userName }}</div></td>
          <td><div class="flex justify-center items-center">{{ user.password }}</div></td>
          <td><div class="flex justify-center items-center">{{ user.role.name }}</div></td>
          <td>
            <div class="flex flex-row space-x-5 items-center w-full justify-center">
            <UpdateUserModal :user="user" />
            <!-- <button @click="deleteUser(user.id)">Delete</button> -->
            <font-awesome-icon :icon="['fas', 'trash']"  @click="deleteUser(user.id)" class="btn rounded-full w-5 h-5 bg-red-500 text-white"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../../stores/user";
import { useRoleStore } from "../../stores/role";
import CreateUserModal from "./create.vue";
import UpdateUserModal from "./edit.vue";
import Swal from "sweetalert2";

const userStore = useUserStore();
const roleStore = useRoleStore();

const name = ref("");
const username = ref("");
const role = ref("");
const datefrom = ref("");
const dateto = ref("");
const selectedRole = ref("");

const users = ref([]);

onMounted(async () => {
  await roleStore.getRoles();
  role.value = roleStore.roles;

  searchUser();
});

const getRoles = async () => {
  console.log("Get roles");
  const roleList = await userStore.getRoles();
  role.value = roleList.data;
};

const searchUser = async () => {
  console.log("Search user with selectedRole:", selectedRole.value);
  console.log("Search datefrom:", datefrom.value);
  console.log("Search dateto:", dateto.value);

  const searchbody = {
    name: name.value,
    userName: username.value,
    roleName: selectedRole.value,
    fromDate: datefrom.value == '' ? null : datefrom.value,
    toDate: dateto.value == '' ? null : dateto.value,
  };
  console.log(searchbody);
  var user = await userStore.searchUser(searchbody);
  console.log(user);
  if (user.status == 200) {
    users.value = user.data;
  }
  // Handle search user logic here
};

const addUser = async () => {
  console.log("Add user");
  // Handle add user logic here
};

const editUser = async (user) => {
  console.log("Edit user:", user);
  // Handle edit user logic here
};

const deleteUser = async (userId) => {
  console.log("Delete user with ID:", userId);

  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to delete this user?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      var user = await userStore.deleteUser(userId);
      console.log(user);
      if (user.status == 200) {
        Swal.fire("Deleted!", "User has been deleted.", "success");
        searchUser();
      }
    } else {
      console.log("Delete canceled");
    }
  });
};
</script>

<style scoped>
.user-container {
  margin: 0 auto;
  padding: 1em;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 0.5em;
  border: 1px solid #ccc;
  text-align: left;
}
button {
  margin-right: 0.5em;
  padding: 0.3em 0.6em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
