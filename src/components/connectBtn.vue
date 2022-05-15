<template>
    <router-link :to="{ name: 'auth' }" class="connectBtn">
          <img src="@/assets/img/darkLogo.png" alt="darkLogo" />
          <p>Login with Spotify</p>
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.connectBtn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  height: 35px;
  background-color: var(--accent-color);
  border-radius: 30px;
  margin-top: 5px;
}
.connectBtn img {
  width: 15px;
  height: auto;
}
.connectBtn p {
  font-size: 0.8em;
  color: var(--primary-color);
}
</style>