<template>
<div id="home">
<nav-bar class="home-nav">
    <div slot="cneter">购物街</div>
</nav-bar>
</div>
</template>
<script>
import NavBar from '../../components/common/navbar/Nav.vue'
export default {
name: 'home',
components:{
    NavBar
}
}
</script>
<style scoped>
.home-nav{
    background-color:var(--color-tint);
    color: white
}
</style>