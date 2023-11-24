
<template>
    <div>
      <ViteLink></ViteLink>
      <h1>โปรไฟล์</h1>
      <router-link to="/">กลับไปที่หน้าหลัก</router-link>
    </div>
  </template>
  <div class="profile"></div>
  <h1>โปรไฟล์</h1>
  <div class="user-info"></div>
  <img src="./assets/profile-zego.jpg" alt="Profile Picture" />
</template>
  <style scoped>
  .profile {
  text-align: center;
  padding: 20px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.user-info img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.details {
  text-align: left;
}

.router-link {
  display: block;
  margin-top: 20px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}
  </style>
  