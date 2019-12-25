<template>
<div class="item" @click="btnchick">
<div class="left">
    <radio :ischeck="product.checked"/>
</div>

<div class="right-img">
    <img :src="product.img" alt="">
</div>
    <div class="item-info">
        <div class="top">
        <div class="name">{{product.name}}</div>
        <div class="desc">{{product.desc}}</div>
        </div>
      
        <div class="bottom">
            <div class="price">￥{{product.price}}</div>
            <div class="count">x{{product.count}}</div>
        </div>
      
    </div>

</div>
</template>
<script>
import Radio from './cartRadio.vue'
export default {
name: 'cartListItem',
data(){
    return {
        check:null
    }
},
props: {
    product:{
        type:Object,
        default(){
            return {}
        }
    }
},
methods: {
  btnchick(){
     this.product.checked = !this.product.checked
  }  
},
components: {
    Radio
}
}
</script>
<style scoped>
.item{
    height: 120px;
    display: flex;
    border-bottom: 2px solid #f2f5f8
}
.left{
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 10px */

}
.right-img{
    margin: 10px 0px 5px 5px
}
.item-info{
    margin-left: 10px;
    margin-top: 10px
}
.name,.desc{
    /* overflow: hidden; */
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.name{
    font-size: 17px
}
.desc{
    font-size: 13px;
    margin-top: 15px
}

.right-img img{
    width: 80px;
    height: 100px;
    border-radius: 2px;
}
.price{
    color: orange;
    font-size: 14px
}
.count{
    font-size: 14px
}
.bottom{
    margin-top: 30px;
    width: 200px;
    display: flex;
    justify-content: space-between
}
</style>