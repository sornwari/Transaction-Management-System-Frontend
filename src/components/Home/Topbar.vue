<template>
  <div class="topbar">
    <div class="logo">MyApp</div>
    <div class="user-icon">
      <i class="fas fa-user"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #007BFF;
  color: white;
}
.logo {
  font-size: 1.5em;
  font-weight: bold;
}
.user-icon {
  font-size: 1.5em;
  cursor: pointer;
}
</style>
