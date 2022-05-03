<template>
    <div class="artists">
        <p v-for="artist in artists" :key="artist">
            {{artist.name}}
        </p>
    </div>
    
</template>

<script>
export default {
    props:{
        artists:{
            type : Array,
            required: true
        }
    }
}
</script>

<style>
.artists{
    font-size: 0.7rem;
    display: flex;
    flex-direction:row;
    gap: 0.5rem;
}
</style>