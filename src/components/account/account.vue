<template>
  <div class="user-container w-full px-10">
    <div class="flex flex-row py-4 space-x-5 justify-center items-center">
      <div>
        <label class="form-control w-full max-w-xs ">
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
      <div class="flex flex-col space-y-2">
        <p class="invisible">place</p>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="btn rounded-full w-5 h-5 bg-sky-500 text-white"  @click="searchAccount"/>
      </div>
      
      <div class="flex flex-col space-y-2">
        <p class="invisible">place</p>
        <font-awesome-icon :icon="['fas', 'file-export']" class="btn rounded-full w-5 h-5 bg-pink-500 text-white"  @click="getReportAccount"/>
      </div>
    </div>

    <table class="table">
      <thead class="bg-gray-200 rounded-lg">
        <tr>
          <th><div class="flex justify-center items-center">Account No.</div></th>
          <th><div class="flex justify-center items-center">Name</div></th>
          <th><div class="flex justify-center items-center">Total deposit</div></th>
          <th><div class="flex justify-center items-center">Total withdraw</div></th>
          <th><div class="flex justify-center items-center">Total balance</div></th>
          <th><div class="flex justify-center items-center"><CreateAccountModal /></div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td><div class="flex justify-center items-center">{{ account.accountNo }}</div></td>
          <td><div class="flex justify-center items-center">{{ account.name }}</div></td>
          <td><div class="flex justify-center items-center">{{ account.deposit }}</div></td>
          <td><div class="flex justify-center items-center">{{ account.withdraw }}</div></td>
          <td><div class="flex justify-center items-center">{{ account.balance }}</div></td>
          <td>
            <div class="flex flex-row space-x-5 items-center w-full justify-center">
            <UpdateAccountModal :account="account" />
            <!-- <button @click="deleteUser(user.id)">Delete</button> -->
            <font-awesome-icon :icon="['fas', 'trash']"  @click="deleteAccount(account.id)" class="btn rounded-full w-5 h-5 bg-red-500 text-white"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAccountStore } from "../../stores/account";
import { useReportStore } from "../../stores/report";
import { useUserStore } from "../../stores/user";
import { useRoleStore } from "../../stores/role";
import CreateAccountModal from "./create.vue";
import UpdateAccountModal from "./edit.vue";
import Swal from "sweetalert2";

const accountStore = useAccountStore();
const userStore = useUserStore();
const roleStore = useRoleStore();
const reportStore = useReportStore();

const accountNo = ref("");
const name = ref("");

const accounts = ref([]);

onMounted(async () => {
  console.log("Account component is mounted");
  searchAccount();
});

const searchAccount = async () => {
  const searchbody = {
    accountNo: accountNo.value,
    name: name.value,
  };
  console.log(searchbody);
  var account = await accountStore.searchAccount(searchbody);
  console.log(account);
  if (account.status == 200) {
    accounts.value = account.data;
  }
};

const getReportAccount = async () => {
  const searchbody = {
    accountNo: accountNo.value,
    name: name.value,
  };
  var reportAccount = await reportStore.getReportAccounts(searchbody);
  console.log(reportAccount);
  if (reportAccount.status == 200) {
    var blob = new Blob([reportAccount.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "report-account.xlsx";
    link.click();
  }
}

const deleteAccount = async (accountId) => {
  console.log("Delete accountId with ID:", accountId);

  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to delete this account?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      var account = await accountStore.deleteAccount(accountId);
      console.log(account);
      if (account.status == 200) {
        Swal.fire("Deleted!", "Account has been deleted.", "success");
        searchAccount();
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
