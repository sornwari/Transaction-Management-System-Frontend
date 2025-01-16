<template>
  <div class="login-container">
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = async () => {
      console.log('Username:', username.value);
      console.log('Password:', password.value);

      const loginModel = {
        username: username.value,
        password: password.value
      };
    const res = await authStore.login(loginModel);
    
    console.log("asdasdsada:",res);
    router.push("/dashboard");
    };
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-container div {
  margin-bottom: 1em;
}
.login-container label {
  display: block;
  margin-bottom: 0.5em;
}
.login-container input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
.login-container button {
  width: 100%;
  padding: 0.7em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-container button:hover {
  background-color: #0056b3;
}
</style>
