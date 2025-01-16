<template>
  <div class="dashboard-container w-full px-10">
    <div class="flex flex-row py-4 space-x-5 justify-center items-center">
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Date From</span>
          </div>
          <input
            type="date"
            v-model="datefrom"
            @change="searchDashboard"
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
            @change="searchDashboard"
            placeholder="Name..."
            class="input input-bordered w-full max-w-xs rounded-xl"
          />
        </label>
      </div>

      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Status</span>
          </div>
          <select v-model="status" @change="searchDashboard" class="select select-bordered rounded-xl">
            <option value="">Select Status ...</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </label>
      </div>
      
      <div class="flex flex-col space-y-2">
        <p class="invisible">place</p>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="btn rounded-full w-5 h-5 bg-sky-500 text-white"  @click="searchDashboard"/>
      </div>
    </div>
    <div class="flex py-4 justify-center items-center">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4h18M3 10h18M3 16h18M3 20h18"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total balance</div>
          <div class="stat-value">{{ totalBalance }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8l-8 8-8-8"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Deposit</div>
          <div class="stat-value">{{ totalDeposit }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 20V4m8 8l-8-8-8 8"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Withdraw</div>
          <div class="stat-value">{{ totalWithdraw }}</div>
        </div>
      </div>
    </div>
    <div>
      <ChartGraph />
    </div>
  </div>
</template>

<script setup>
import { onActivated, onUpdated, onMounted, ref } from "vue";
import { useAccountStore } from "../../stores/account";
import { useDashboardStore } from "../../stores/dashboard";
import { useReportStore } from "../../stores/report";
import { useUserStore } from "../../stores/user";
import { useRoleStore } from "../../stores/role";
import ChartGraph from "./chartGraph.vue";
// import CreateAccountModal from "./create.vue";
// import UpdateAccountModal from "./edit.vue";
import Swal from "sweetalert2";

const accountStore = useAccountStore();
const userStore = useUserStore();
const roleStore = useRoleStore();
const dashboardStore = useDashboardStore();
const reportStore = useReportStore();

const status = ref("");
const datefrom = ref("");
const dateto = ref("");

const dashboardData = ref({});
const totalBalance = ref(0);
const totalDeposit = ref(0);
const totalWithdraw = ref(0);

onMounted(async () => {
  searchDashboard();
});

const searchDashboard = async () => {
  var body = {
    status: status.value,
    fromDate: datefrom.value == "" ? null : datefrom.value,
    toDate: dateto.value == "" ? null : dateto.value,
  };
  var response = await dashboardStore.searchDashboard(body);
  console.log(response);
  if (response.status == 200) {
    totalBalance.value = dashboardStore.totalBalance;
    totalDeposit.value = dashboardStore.totalDeposit;
    totalWithdraw.value = dashboardStore.totalWithdraw;
  }
};
</script>

<style scoped>
.dashboard-container {
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
