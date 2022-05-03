<template>
  <div class="wrapper">
    <div class="container">
      <p class="title">frequently asked questions:</p>
      <div class="question">
        <p class="ask">What is Dump for Spotify ?</p>
        <p class="answer">Dump for spotify gives your most listened to tracks each month in the form of an image that you can post on socials.</p>
      </div>
      <div class="question">
        <p class="ask">Is it safe to login with Spotify ?</p>
        <p class="answer">Yes, you don't login to our site but to Spotify's site and they give us your statistics. So at no time do we have access to your private informations.</p>
      </div>
      <div class="question">
        <p class="ask">are you affiliated with spotify ?</p>
        <p class="answer">
          No, We are not related to Spotify AB or any of it´s partners in any way 
        </p>
      </div>
      <div class="question">
        <p class="ask">do you collect our datas ?</p>
        <p class="answer">
          We use Google Analytics on our website. This is a web analytics service provided by Google Ireland Limited. <br>
          Through certification according to the <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank">EU-US Privacy Shield </a>Google guarantees that it will follow the EU's data protection regulations when processing data in the United States. <br>
          The Google Analytics service is used to analyze how our website is used. The legal basis is (<a href="https://www.privacy-regulation.eu/en/6.htm" target="_blank">Art. 6 Para. 1 lit. f</a> ) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our site.
        </p>
      </div>
      <div class="question">
        <p class="ask">who are you ?</p>
        <p class="answer">
          I'm Timothé, a computing student and this is one of my personal project.<br>
          My friend Eliza is also helping me with all the artworks ! You can see her works <a href="https://instagram.com/rizedraw" target="_blank">here</a>.
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("updateCurrentPage", 2);
  },
};
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
.question{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ask{
  color: var(--accent-color);
  font-size: 1.6rem;
  text-transform: uppercase;
}
.answer{
  color: white;
  font-size: 1.2rem;
  max-width: 60vw;
}
br{
  margin-bottom: 10px;
}
a{
  text-decoration: underline;
}

@media (max-width: 1300px) {
  .title{
    font-size: 2rem;
  }
  .ask{
    font-size: 1.1rem;
  }
  .answer{
    font-size: 1rem;
    max-width: 80vw;
  }

}
@media (max-width: 800px) {
  .title{
    font-size: 1.3rem;
  }
  .ask{
    font-size: 1.1rem;
  }
  .answer{
    font-size: 1rem;
    max-width: 80vw;
  }

}
</style>