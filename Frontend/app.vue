<template>
  <div class="app-container">
    <!-- Header with title and Steam login button -->
    <header class="header">
      <h1 class="title">TF2 Tradeup Calculator</h1>
      <button class="login-button" @click="loginWithSteam">Login with Steam</button>
    </header>

    <!-- Main area with 10 item boxes -->
    <main class="main">
      <div class="item-grid">
        <div v-for="n in 10" :key="n" class="item-box">
          <span class="plus">+</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // Redirect to backend Steam OpenID auth endpoint
    loginWithSteam() {
      window.location.href = 'http://localhost:8080/auth/steam';
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.login-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #1b2838;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

.item-grid {
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-gap: 1rem;
}

.item-box {
  width: 80px;
  height: 80px;
  border: 2px dashed #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.item-box:hover {
  background-color: #eaeaea;
}

.plus {
  font-size: 1.5rem;
  color: #666;
}
</style>