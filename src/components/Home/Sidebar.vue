<template>
  <div class="sidebar">
    <div class="sidebar-item" @click="navigateTo('transaction')">
      <i class="fas fa-exchange-alt"></i>
      <span>Transaction Page</span>
    </div>
    <div class="sidebar-item" @click="navigateTo('user')">
      <i class="fas fa-user"></i>
      <span>User Page</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateTo = (page) => {
      router.push({ name: page });
    };

    return {
      navigateTo
    };
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #343a40;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 1em;
  cursor: pointer;
}
.sidebar-item i {
  margin-right: 0.5em;
}
.sidebar-item:hover {
  background-color: #495057;
}
</style>
