<!-- Login.vue -->

<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    
    console.log('Logging in with:', { username: username.value, password: password.value });
    
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 50px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    padding: 8px;
    margin-bottom: 16px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  