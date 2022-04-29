<template>
  <div class="container">
    <div class="text">
        <p class="subtitle">get your monthly</p>
        <p class="pagetitle">spotify dump</p>
        <router-link :to="{ name: 'login' }" class="connectBtn">
          <img src="@/assets/img/darkLogo.png" alt="darkLogo" />
          <p>Login with Spotify</p>
        </router-link>
    </div>
  </div>
  <img class="characterImg" src="@/assets/img/girlCharacter.png" alt="IguanaImg">
</template>


<script>
export default {};
</script>

<style scoped>

.container{
  height: 100vh;
}
.text{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: whitesmoke;
  text-transform:uppercase;
  line-height: 0.9;
}
.subtitle{
  font-size: 2em;
}
.pagetitle{
  font-size: 6em;
}
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
.characterImg{
  position: absolute;
  bottom: 5px;
  right: 10px;
  height: 90vh;
  aspect-ratio: 1 / 1;
}

@media (max-width: 1300px) {
  .characterImg {
    visibility: hidden;
  }
  .container{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    
  }
  .connectBtn {
    align-self: center;
  }
}
@media (max-width: 1000px) {
  
  .subtitle{
  font-size: 1.8em;
  }
.pagetitle{
  font-size: 5.8em;
  }
}
</style>