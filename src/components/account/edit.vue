<template>
  <div>
    <!-- <button class="btn" @click="showModal()">edit modal</button> -->
    <font-awesome-icon :icon="['fas', 'pen-to-square']"  @click="showModal()" class="btn rounded-full w-5 h-5 bg-orange-500 text-white"/>
    <dialog ref="myModal" class="modal">
      <div class="modal-box">
        <div class="flex flex-col items-center justify-center">
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
import { onMounted, ref } from "vue";
import { defineProps } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useAccountStore } from "../../stores/account";
import { useRoleStore } from "../../stores/role";
import { useUserStore } from "../../stores/user";

const roleStore = useRoleStore();
const accountStore = useAccountStore();
const userStore = useUserStore();
const authStore = useAuthStore();

const open = ref(false);
const myModal = ref(null);

const accountNo = ref("");
const userId = ref(0);

const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
});

onMounted(async () => {
  console.log("account:", props.account);
  // await roleStore.getRoles();
  // role.value = roleStore.roles;
});

const showModal = () => {
  console.log("Show modal : ", props.account);
  
  accountNo.value = props.account.accountNo;
  userId.value = props.account.userId;

  myModal.value.show();
};

const closeModal = () => {
  myModal.value.close();
};

const handleSubmit = async () => {
  // console.log("Name:", name.value);

  var response = await accountStore.updateAccount({
    id: props.account.id,
    accountNo: accountNo.value,
    userId: userId.value,
    updateBy: authStore.name
  });
  console.log(response);
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
