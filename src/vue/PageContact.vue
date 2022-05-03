<template>
  <div class="wrapper"> 
    <div class="container">
      <p class="title">Contact:</p >
      <div class="contact-option">
        <p class="title2">Dump for Spotify related:</p>
        <div class="contact-infos">
          <p>Instagram:</p><a href="https://www.instagram.com/spotifydump.xyz/">@spotifydump.xyz</a>
          <p>Email:</p>
          <a href="mailto:contact@spotify-dump.xyz">contact@spotify-dump.xyz</a>
        </div>
        <p class="title2">Developpement related:</p>
        <div class="contact-infos">
          <p>Instagram:</p><a href="https://www.instagram.com/xtimothe/">@xtimothe</a>
          <p>Email:</p>
          <a href="mailto:contact@timothelim.me">contact@timothelim.me</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  beforeMount(){
    this.$store.dispatch('updateCurrentPage',3)
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6rem;
  margin-bottom: 3rem;
  gap: 1.2rem;
}
.title{
  color: white;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.contact-option{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-infos{
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
}
.title2{
  color: var(--accent-color);
  font-size: 1.6rem;
  text-transform: uppercase;
}
p{
  color: white;
  font-size: 1.2rem;
}

a{
  color: white;
  text-decoration: none;
}

@media (max-width: 700px) {
  .contact-infos{
    grid-template-columns: 1fr;
    text-align: center;
  }
  .title{
    font-size: 1.3rem;
    
  }
  .title2{
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  a{
    margin-bottom: 1em;
  }

}
</style>