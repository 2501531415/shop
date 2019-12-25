<template>
<div class="bottom">
<div class="bottom-tar">
    <div class="left">
        <div>
        <i class="icon serve"></i>
        <span>客服</span>
    </div>
    <div>
        <i class="icon store"></i>
        <span>店铺</span>
    </div>
    <div>
        <i class="icon collect"></i>
        <span>收藏</span>
    </div>
    </div>
    
    <div class="right">
    <div class="cart" @click="addCart">
        <span>加入购物车</span>
        </div>
    <div class="buy">
        <span>购买</span>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
name: 'detailBottom',
methods: {
    addCart(){
        this.$emit('addCart')
    }
}
}
</script>
<style scoped>
.bottom{
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;


}
.bottom-tar{
    display: flex;
    text-align: center;
}

.bottom-tar .left{
    flex: 1;
    display: flex;
    justify-content: space-around;
        background-color:#fff

}
.serve span{
    margin-top: 20px;
}
.bottom-tar .left>div{
    flex: 1;
}

.bottom-tar .right{
    flex: 1;
    display: flex;
    justify-content: center
}
.bottom-tar .right>div{
    flex: 1;
}
.left .icon{
    display: block;
    margin: 0px 0px 0px 15px;
    background:url('~assets/img/detail/detail_bottom.png') 0 0/100%;
    width: 24px;
    height: 24px;
}
.left .serve{
    background-position: 0 107px;
}
.left .store{
    background-position: 0 57px;
}
.cart{
    background-color: yellow;
    height: 49px;
    line-height: 49px;

}
.buy{
    background-color:var(--color-tint);
    height: 49px;
    line-height: 49px;
    color:white

}
</style>