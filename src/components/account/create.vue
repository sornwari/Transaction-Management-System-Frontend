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
            Create Account
          </div>
          <div>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Account No.</span>
              </div>
              <input
                type="text"
                v-model="accountNo"
                placeholder="Account No..."
                class="input input-bordered w-full max-w-xs rounded-xl"
              />
            </label>
          </div>
          <div>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">User Id</span>
              </div>
              <input
                type="text"
                v-model="userId"
                placeholder="User Id..."
                class="input input-bordered w-full max-w-xs rounded-xl"
              />
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
import { useAccountStore } from "../../stores/account";
import { useAuthStore } from "../../stores/auth";
import { useRoleStore } from "../../stores/role";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const accountStore = useAccountStore();
const authStore = useAuthStore();
const roleStore = useRoleStore();

const myModal = ref<HTMLDialogElement | null>(null);

const accountNo = ref("");
const userId = ref(0);

onMounted(async () => {
});

const showModal = () => {
  console.log("Show modal");
  if (myModal.value) {
    myModal.value.show();
  }
};

const closeModal = () => {
  // myModal.value.close();
  if (myModal.value) {
    myModal.value.close();
  }
};

const handleSubmit = async () => {
  console.log("Name:", accountNo.value);
  console.log("Name:", authStore.name);

  var response = await accountStore.createAccount({
    accountNo: accountNo.value,
    userId: userId.value,
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
