<template>
<div id="goods-list">
<goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item">
    
</goods-list-item>
</div>
</template>
<script>
import GoodsListItem from './goodsListItem'
export default {
name: 'goodsList',
props: {
    goods:{
        type:Array,
        default(){
            return []
        }
    }
},
components:{
    GoodsListItem
}
}
</script>
<style scoped>
#goods-list{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:2px;
}
</style>