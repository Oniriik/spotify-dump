<template>
  <TheNavBar/>
  <router-view/>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>

<style>
  @import "@/assets/styles/style.css";
</style>
