<template>
  <div class="main-container">
    <Sidebar class="sidebar" />
    <div class="content">
      <Topbar class="topbar" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Home/Sidebar.vue';
import Topbar from '@/components/Home/Topbar.vue';

export default {
  components: {
    Sidebar,
    Topbar
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 200px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.topbar {
  height: 60px;
}
</style>
