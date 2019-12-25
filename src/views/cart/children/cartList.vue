<template>
<div class="cart-list">
    <scroll class="content" ref="scroll">
    <cart-item v-for="(item,index) in CartList" :key="index" :product="item"/>
    </scroll>
</div>
</template>
<script>
import scroll from 'components/common/scroll/scroll.vue'
import CartItem from './cartListItem.vue'
import {mapGetters} from 'vuex'
export default {
name: 'cartList',
computed: {
    ...mapGetters(['CartList'])
},
activated () {
    this.$refs.scroll.refresh()
},
components: {
    scroll,
    CartItem
}
}
</script>
<style scoped>
.content{
    height: calc(100vh - 44px - 40px);
    overflow: hidden;
}
</style>