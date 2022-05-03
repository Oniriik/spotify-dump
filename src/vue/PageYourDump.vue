<template>
      <DisplayProfile :user="this.user"/>
      <DisplayTopTracks :tracks="this.user.top_tracks.items"/>
</template>

<script>
import DisplayProfile from '@/components/DisplayProfile.vue'
import DisplayTopTracks from '@/components/DisplayTopTracks.vue'
export default {
  components:{
    DisplayProfile,
    DisplayTopTracks
  },
  data(){
    return{
      user:this.$store.state.user.data
    }
    
  },
  beforeMount(){
    this.$store.dispatch('updateCurrentPage',1)
  },
  mounted(){
    console.log(this.user)
  }
}
</script>

<style scoped>

</style>