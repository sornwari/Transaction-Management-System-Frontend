<template>
  <div class="transaction-container w-full px-10">
    <div class="flex flex-row py-4 space-x-5 justify-center items-center">
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
            <span class="label-text">Transaction Name</span>
          </div>
          <input
            type="text"
            v-model="transactionName"
            placeholder="Transaction Name..."
            class="input input-bordered w-full max-w-xs rounded-xl"
          />
        </label>
      </div>
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Transaction type</span>
          </div>
          <select
            v-model="selectedTransactionType"
            class="select select-bordered rounded-xl"
          >
            <option value="">Select type ...</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </label>
      </div>
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Status</span>
          </div>
          <select
            v-model="selectedStatus"
            class="select select-bordered rounded-xl"
          >
            <option value="">Select Status ...</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </label>
      </div>

      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Date From</span>
          </div>
          <input
            type="date"
            v-model="datefrom"
            placeholder="Name..."
            class="input input-bordered w-full max-w-xs rounded-xl"
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
            class="input input-bordered w-full max-w-xs rounded-xl"
          />
        </label>
      </div>

      <div class="flex flex-col space-y-2">
        <p class="invisible">place</p>
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="btn rounded-full w-5 h-5 bg-sky-500 text-white"
          @click="searchTransaction"
        />
      </div>
    </div>

    <table class="table">
      <thead class="bg-gray-200 rounded-lg">
        <tr>
          <th>
            <div class="flex justify-center items-center">Account No.</div>
          </th>
          <th><div class="flex justify-center items-center">Name</div></th>
          <th>
            <div class="flex justify-center items-center">Transaction Name</div>
          </th>
          <th>
            <div class="flex justify-center items-center">Transaction Type</div>
          </th>
          <th>
            <div class="flex justify-center items-center">
              Balance before transaction
            </div>
          </th>
          <th>
            <div class="flex justify-center items-center">
              Balance after transaction
            </div>
          </th>
          <th><div class="flex justify-center items-center">Amount</div></th>
          <th><div class="flex justify-center items-center">Status</div></th>
          <th>
            <div class="flex justify-center items-center">Create Date</div>
          </th>
          <th>
            <div class="flex justify-center items-center">
              <CreateTransactionModal />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.accountNo }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.name }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.transactionName }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.transactionType }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.totalBeforeTransaction }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.totalAfterTransaction }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.amount }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.status }}
            </div>
          </td>
          <td>
            <div class="flex justify-center items-center">
              {{ transaction.createDate }}
            </div>
          </td>
          <td>
            <div
              class="flex flex-row space-x-5 items-center w-full justify-center"
            >
              <UpdateTransactionModal :transaction="transaction" />
              <!-- <button @click="deleteUser(user.id)">Delete</button> -->
              <font-awesome-icon
                :icon="['fas', 'trash']"
                @click="deleteTransaction(transaction.id)"
                class="btn rounded-full w-5 h-5 bg-red-500 text-white"
              />
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
import { useTransactionStore } from "../../stores/transaction";
import { useRoleStore } from "../../stores/role";
import CreateTransactionModal from "./create.vue";
import UpdateTransactionModal from "./edit.vue";
import Swal from "sweetalert2";

const userStore = useUserStore();
const transactionStore = useTransactionStore();
const roleStore = useRoleStore();

const name = ref("");
const accountNo = ref("");
const transactionName = ref("");
const selectedStatus = ref("");
const selectedTransactionType = ref("");
const datefrom = ref("");
const dateto = ref("");

const transactions = ref([]);

onMounted(async () => {
  searchTransaction();
});

const searchTransaction = async () => {
  const searchbody = {
    name: name.value,
    accountNo: accountNo.value,
    transactionName: transactionName.value,
    transactionType: selectedTransactionType.value,
    status: selectedStatus.value,
    fromDate: datefrom.value == "" ? null : datefrom.value,
    toDate: dateto.value == "" ? null : dateto.value,
  };
  console.log(searchbody);
  var transaction = await transactionStore.searchTransaction(searchbody);
  console.log(transaction);
  if (transaction.status == 200) {
    transactions.value = transaction.data;
  }
};

const deleteTransaction = async (transactionId) => {
  console.log("Delete transactionId with ID:", transactionId);

  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to delete this user?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      var user = await transactionStore.deleteTransaction(transactionId);
      console.log(user);
      if (user.status == 200) {
        Swal.fire("Deleted!", "Transaction has been deleted.", "success");
        searchTransaction();
      }
    } else {
      console.log("Delete canceled");
    }
  });
};
</script>

<style scoped>
.transaction-container {
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
