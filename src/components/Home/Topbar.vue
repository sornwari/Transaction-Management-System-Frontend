<template>
  <div class="topbar">
    <div class="logo">MyApp</div>
    <div class="avatar pr-3">
      <div class="w-9 h-9 rounded-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #007bff;
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
