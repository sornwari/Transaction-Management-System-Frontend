<template>
  <div>
    <!-- <button class="btn" @click="showModal()">open modal</button> -->
    <font-awesome-icon
      :icon="['fas', 'plus']"
      class="btn rounded-full w-5 h-5 text-white bg-green-500"
      @click="showModal()"
    />
    <dialog ref="myModal" class="modal">
      <div class="modal-box">
        <div class="flex flex-col items-center justify-center">
          <div class="text-2xl font-bold mb-5">
            Create User
          </div>
          <div>
            <label class="form-control w-full max-w-xs">
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
                <span class="label-text">username</span>
              </div>
              <input
                type="text"
                v-model="username"
                placeholder="Name..."
                class="input input-bordered w-full max-w-xs rounded-xl"
              />
            </label>
          </div>
          <div>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">password</span>
              </div>
              <input
                type="text"
                v-model="password"
                placeholder="Name..."
                class="input input-bordered w-full max-w-xs rounded-xl"
              />
            </label>
          </div>
          <div>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Role</span>
              </div>
              <select v-model="selectedRole" class="select select-bordered w-full max-w-xs rounded-xl">
                <option value="">Select role ...</option>
                <option
                  v-for="roleItem in role"
                  :key="roleItem"
                  :value="roleItem.id"
                >
                  {{ roleItem.name }}
                </option>
              </select>
            </label>
          </div>
      <div class="pt-5">
        <font-awesome-icon
          :icon="['fas', 'floppy-disk']"
          @click="handleSubmit"
          class="btn rounded-full w-5 h-5 text-white bg-blue-500"
        />
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          @click="closeModal"
          class="btn rounded-full w-5 h-5 text-white bg-red-500"
        />
        <!-- <button class="btn" @click="handleSubmit">Save</button> -->
        <!-- <button class="btn" @click="closeModal">Close</button> -->
      </div>
        </div>
      </div>

    </dialog>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useRoleStore } from "../../stores/role";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const authStore = useAuthStore();
const roleStore = useRoleStore();

const myModal = ref(null);

const name = ref(null);
const username = ref(null);
const password = ref(null);
const role = ref([]);
const selectedRole = ref("");

onMounted(async () => {
  await roleStore.getRoles();
  role.value = roleStore.roles;
});

const showModal = () => {
  console.log("Show modal");
  myModal.value.show();
};

const closeModal = () => {
  myModal.value.close();
};

const handleSubmit = async () => {
  console.log("Name:", name.value);
  console.log("Name:", authStore.name);

  var response = await userStore.createUser({
    name: name.value,
    userName: username.value,
    password: password.value,
    roleId: selectedRole.value,
    createBy: authStore.name,
  });
  console.log(response);
  if (response.status == 200 && response.data == true) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Data has been saved",
    });
  }
  closeModal();
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button[type="button"] {
  background-color: #f0f0f0;
  color: #333;
}

button[type="button"]:hover {
  background-color: #e0e0e0;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
