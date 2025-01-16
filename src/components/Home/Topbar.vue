<template>
  <div class="topbar">
    <div></div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-sky-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a @click="logout"><div class="text-black">Logout</div></a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

const router = useRouter();
const logout = () => {
  console.log("Logout");
  Cookies.remove("auth-token");
  router.push("/");
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
