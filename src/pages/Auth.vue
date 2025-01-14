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

<script>
import { onMounted, ref } from 'vue';
import { useAuthStore } from "./../stores/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    onMounted(() => {
      console.log('asdasd:', import.meta.env.VITE_APP_API_URL);
    });
    const login = async () => {
      console.log('Username:', username.value);
      console.log('Password:', password.value);

      const loginModel = {
        username: username.value,
        password: password.value
      };
    const res = await authStore.login(loginModel);
    
    router.push("/home");
    console.log(res);
    };

    return {
      username,
      password,
      login
    };
  }
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
