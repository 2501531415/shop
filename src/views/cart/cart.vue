<template>
<div class="cart">
<nav-bar class="nav">
    <div slot="center">购物车({{length}})</div>
</nav-bar>
    <cart-list/>
    <cart-bottom/>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/Nav.vue'
import CartList from './children/cartList.vue'
import CartBottom from './children/cartBottom.vue'
import {mapGetters} from 'vuex'
export default {
name: 'cart',
components: {
    NavBar,
    CartList,
    CartBottom
},
computed: {
    ...mapGetters({
        length:'CartLength'
    })
}
}
</script>
<style scoped>
.nav{
    background-color: var(--color-tint);
    color: white;
}
</style>