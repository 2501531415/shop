<template>
<div class="detail">
     <detail-nav/>
  <scroll class="content" 
        :probeType="3"
        @scrollPosition="position"
        :pullUpLoad="true" ref="scroll">    
    <detail-swiper/>
    <detail-base :goods="goodsInfo"/>
    <detail-shop :shops="shops"/>
    <ul>
        <li>iii1</li>
        <li>iii2</li>
        <li>iii3</li>
        <li>iii4</li>
        <li>iii5</li>
        <li>iii6</li>
        <li>iii7</li>
        <li>iii8</li>
        <li>iii9</li>
        <li>iii10</li>
        <li>iii11</li>
        <li>iii12</li>
        <li>iii13</li>
        <li>iii14</li>
        <li>iii15</li>
        <li>iii16</li>
        <li>iii17</li>
        <li>iii18</li>
        <li>iii19</li>
        <li>iii20</li>
    </ul>
  </scroll>
  
</div>
</template>
<script>
 import {getDetailData,Goods,Shop} from 'network/detail.js'
 import detailNav from './children/detailNav.vue'
 import detailSwiper from './children/detailSwiper.vue'
 import detailBase from './children/detailBase.vue'
 import detailShop from './children/detailShop.vue'
 import Scroll from 'components/common/scroll/scroll'
export default {

name: 'detail',
data(){
    return {
        id:'',
        goodsInfo:{},
        shops:{},
        itemInfo:[
            {
            title:'【仲陌美】2018春秋季新款风长袖T恤 上衣大地',
            price:38.50,
            oldPrice:69.00,
            discountDesc:1500,
            },
        ],
        shopMessage:{
            imageUrl:'',
            name:'仲陌美',
            total:5.8,
            product:99,
            state:4.64,
            price:5,
            mass:4.62
        },
        columns:33,
        serveices:'72小时发货',
    }
},
components: {
    detailNav,
    detailSwiper,
    detailBase,
    detailShop,
    Scroll
},
created () {
    // this.id = this.$route.params.id
  const goods= new Goods(this.itemInfo[0],this.columns,this.serveices)
  this.goodsInfo = goods
  
  const shop = new Shop(this.shopMessage)
  this.shops = shop
  console.log(this.shops)
},
mounted () {
    console.log(this.$refs.scroll.bs)
},
methods: {
    position(position){
        console.log(position)
    }
}
}

</script>
<style scoped>

.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content{
    height: calc(100vh - 44px);
}
</style>