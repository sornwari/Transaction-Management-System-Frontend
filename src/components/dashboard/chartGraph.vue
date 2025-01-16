<template>
  <div class="p-10">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed, watch } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { defineProps } from "vue";
import { useDashboardStore } from "../../stores/dashboard";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const dashboardStore = useDashboardStore();

const totalBalance = computed(() => dashboardStore.totalBalance);

onMounted(() => {
  console.log("Dashboard:", dashboardStore.totalBalance);
  if(dashboardStore.totalBalance > 0){
    chartData.value = {
    labels: ["Total balance", "Deposit balance", "Withdraw balance"],
    datasets: [
      {
        label: "Balances",
        data: [
          dashboardStore.totalBalance,
          dashboardStore.totalDeposit,
          dashboardStore.totalWithdraw,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  }
});

watch(totalBalance, (newValue, oldValue) => {
  console.log(`Total balance changed from ${oldValue} to ${newValue}`);
  chartData.value = {
    labels: ["Total balance", "Deposit balance", "Withdraw balance"],
    datasets: [
      {
        label: "Balances",
        data: [
          newValue,
          dashboardStore.totalDeposit,
          dashboardStore.totalWithdraw,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
});

const chartData = ref({
  labels: ["Total balance", "Deposit balance", "Withdraw balance"],
  datasets: [
    {
      label: "Balances",
      data: [0, 0, 0],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgb(75, 192, 192)",
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Account Balances",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});
</script>
