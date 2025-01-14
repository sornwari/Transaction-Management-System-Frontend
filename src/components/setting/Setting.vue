<template>
  <div class="user-container">
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button @click="editUser(user)">Edit</button>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const users = ref([
      { id: 1, username: 'user1', password: 'pass1' },
      { id: 2, username: 'user2', password: 'pass2' },
      // Add more users as needed
    ]);

    const editUser = (user) => {
      console.log('Edit user:', user);
      // Handle edit user logic here
    };

    const deleteUser = (userId) => {
      console.log('Delete user with ID:', userId);
      // Handle delete user logic here
    };

    return {
      users,
      editUser,
      deleteUser
    };
  }
};
</script>

<style scoped>
.user-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.5em;
  border: 1px solid #ccc;
  text-align: left;
}
button {
  margin-right: 0.5em;
  padding: 0.3em 0.6em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
