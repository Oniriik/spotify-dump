<template>
  <div class="container">
    <div class="dump">
    <div class="tracks">
    <p class="title">
      My Spotify Dump
    </p>
    <div class="tracks">
      <div v-for="(track, index) in tracks" :key="track" class="track">
      <p class="track-index">{{ index + 1 }}</p>
        <div class="track-infos">
            <p class="track-name">{{track.name}}</p>
            <DisplayArtists :artists="track.artists"/>
        </div>
    </div>
    </div>
    
    </div>
    

    </div>
    <div class="dump2">
    <div class="tracks2">
    <p class="title2">
      My Spotify dump
    </p>
    <div class="tracks2">
      <div v-for="(track, index) in tracks" :key="track" class="track">
      <p class="track-index2">{{ index + 1 }}</p>
        <div class="track-infos2">
            <p class="track-name2">{{track.name}}</p>
            <div class="artists2">
              <p v-for="artist in track.artists" :key="artist">
                  {{artist.name}}
              </p>
            </div>
        </div>
    </div>
    </div>
    
    </div>
    

    </div>
  </div>
</template>

<script>
import DisplayArtists from '@/components/DisplayArtists.vue'
export default {
  components:{
    DisplayArtists
  },
  props: {
    tracks: {
      type: Array,
      required: true,
    },
  },
};
</script>
    
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.dump{
  padding: 2rem;
  background-image: url(@/assets/img/dump.jpg);
  width: 90%;
  aspect-ratio: 9/16;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  border-top: solid 1px rgb(67, 67, 67);
  border-bottom:solid 1px rgb(67, 67, 67);
}
.title{
    font-size: 2rem;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
}
.tracks{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.track-index{
  width: 1em;
  text-align: end;
  font-size: 2rem;
}
.track-infos{
  margin-left: 10px;
}
.track{
  display: flex;
  flex-direction: row;
  color: white;
}
.dump2{
  position: absolute;
  top: -1000vh;
  right: 0;
  padding: 50px;
  background-image: url(@/assets/img/dump.jpg);
  height: 1920px;
  width: 1080px;
  
  background-repeat: no-repeat;
  background-size: cover;
}
.title2{
    font-size: 70px;
    margin-bottom: 50px;
    color: white;
    text-align: center;
}
.tracks2{
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.track-index2{
  width: 1em;
  text-align: end;
  font-size: 80px;
}
.track-infos2{
  margin-left: 20px;
}
.track-name2{
  font-size: 50px;
}
.artists2{
    font-size: 20px;
    display: flex;
    flex-direction:row;
    gap: 10px;
}
@media (max-width: 1000px) {
  .dump{
  padding: 4vw;
  width: 90vw;
}
.title{
    font-size: 7vw;
    margin-bottom: 2vh;
}
.tracks{
  gap: 1vh;
}
.track-index{
  width: 6vw;
  font-size: 3vh;
}
.track-infos{
  margin-left: 3vw;
}
.track{
  font-size: 1.5vh;
  display: flex;
  flex-direction: row;
  color: white;
}
.artists{
  font-size: 1vh;
}
}
</style>