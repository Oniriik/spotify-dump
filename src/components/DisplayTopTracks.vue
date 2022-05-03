<template>
  <div class="container">
    <p class='title'>your monthly top tracks:</p>
    <div v-for="(track, index) in tracks" :key="track" class="track">
      <p class="track-index">{{ index + 1 }}</p>
        <div class="track-infos">
            <p class="track-name">{{track.name}}</p>
            <DisplayArtists :artists="track.artists"/>
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
.title{
  margin-top: 2rem;
  color : var(--accent-color);
  text-transform: uppercase;
}
.track{
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  
}
.track-name{
  font-size: 1.3rem;
  line-height: 0.9;
}
.track-index{
  font-size: 3rem;
}

@media (max-width: 1000px) {

.track-name{
  font-size: 1.2rem;
}
.track-index{
  font-size: 2rem;
}
}
</style>