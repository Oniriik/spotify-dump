<template>
  <TheNavBar :currentPage="this.$store.state.currentPage" @transitionDirection="transitionDirection" />
  <router-view v-slot="{ Component }">
    <transition :name="transition">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <TheFooter/> -->
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'
// import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheNavBar,
    // TheFooter
  },
  data(){
    return{
      transition: null
    }
  },
  methods:{
    transitionDirection(from,to){
    from < to ? this.transition = "fade-in-left" : this.transition = "fade-in-right"

    document.documentElement.style.overflow = 'hidden'
    setTimeout(()=>{
      to == 2 ? document.documentElement.style.overflowY = 'visible': document.documentElement.style.overflowY = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }, 1000);
    
    }
    
  }
  
}
</script>

<style>
@import "@/assets/styles/style.css";


@keyframes fadeInRight {
  from {
    transform: translate3d(40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-right-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-right-enter {
  opacity: 0;
  transform: translate3d(40px, 0, 0);
}

.fade-in-right-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}

@keyframes fadeInLeft {
  from {
    transform: translate3d(-40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-left-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-left-enter {
  opacity: 0;
  transform: translate3d(-40px, 0, 0);
}

.fade-in-left-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}
</style>
