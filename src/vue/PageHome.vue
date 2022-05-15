<template>
  <div class="wrapper">
    <div class="container">
    <div class="text">
        <p class="subtitle">get your monthly</p>
        <p class="pagetitle">spotify dump</p>
        <router-link :to="{ name: 'yourdump' }" class="connectBtn">
          <p>Now</p>
        </router-link>
    </div>
  </div>
  <img class="characterImg" src="@/assets/img/girlCharacter.png" alt="girlimg">

  </div>
  
</template>


<script>
export default {
  beforeMount(){
    this.$store.dispatch('updateCurrentPage',0)
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
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
  justify-content: center;
  width: 180px;
  height: 35px;
  background-color: var(--accent-color);
  border-radius: 30px;
  margin-top: 5px;
}
.connectBtn p {
  font-size: 1em;
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
    display: none;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
  .connectBtn {
    align-self: center;
  }
  .subtitle{
  font-size: 1.5em;
  }
  .pagetitle{
  font-size: 5em;
  }
}

</style>