<template>
    <div class="container">
    <img v-if="this.user.images.length !=0" :src="this.user.images[0].url" alt="avatar">
    <h1>{{this.user.display_name}}</h1>
    </div>
    
</template>

<script>
export default {
    props:{
        user:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
*{
    color: white;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
        
    margin-top: 6rem;
    gap: 2rem;
}
h1{
    font-size: 1.5rem;
}
.container > img{
    width: 150px;
    border-radius: 50px;
}
@media (max-width: 1000px) {
  .container > img{
      width: 100px;
  }
}

</style>