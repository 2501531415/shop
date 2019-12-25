<template>
<div class="cart-bottom">
    <div class="left">
    <radio class="radio" :ischeck="isSelectAll" @click.native="check"/>
    <span>全选</span>
    </div>
    <div class="count">
        总价：{{totalPrice}}
    </div>
    <div class="buy">
        <span class="text">去计算({{count}})</span>
    </div>
   
</div>
</template>
<script>
import Radio from './cartRadio.vue'
export default {
name: 'carBottom',
components: {
    Radio
},
computed: {
    totalPrice(){
        return '￥'+this.$store.state.cartList.filter(item=>{
            return item.checked === true
        }).reduce((prev,item)=>{
            return prev + item.price*item.count
        },0).toFixed(2)
    },
    count(){
        return this.$store.state.cartList.filter(item=>{
            return item.checked === true
        }).length
    },
    isSelectAll(){
        if(this.$store.state.cartList.length === 0){
            return false
        }
        return !this.$store.state.cartList.find(item=>{
            return !item.checked
        })
    }

},
methods: {
    check(){
        if(this.isSelectAll){
            this.$store.state.cartList.forEach(item => item.checked=false)
        }else{
            this.$store.state.cartList.forEach(item => item.checked=true)
        }
    }
}
}
</script>
<style scoped>
.cart-bottom{
    height: 40px;
    background-color:#eee;
    position: relative;
    bottom: 49px;
    display: flex;
    justify-content: space-between
}
.left{
    display: flex;
    line-height: 40px
}
.count{
    line-height: 40px
}
.radio{
    width: 22px;
    height: 22px;
    line-height: 20px;
    margin: 10px 5px
}
.buy{
    background-color:red;
    width: 100px;
    text-align: center;
    line-height:40px;
    color: white
}
</style>