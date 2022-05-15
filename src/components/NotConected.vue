<template>
<div class="container">
    <p>To get your monthly dump</p>
    <ConnectBtn/>
</div>
  
</template>

<script>
import ConnectBtn from '@/components/connectBtn.vue'
export default {
    components:{
        ConnectBtn
    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 6rem;
}
p{
    font-size: 2.5rem;
    text-transform: uppercase;
    color: white;
    margin-bottom: 10px;
}
@media (max-width: 1300px) {
  p{
    font-size: 2rem;
  }
}
@media (max-width: 800px) {
  p{
    font-size: 1.3rem;
  }
}
</style>