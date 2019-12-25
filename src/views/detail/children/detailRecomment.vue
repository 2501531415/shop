<template>
<div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <img v-lazy="item.image" alt="">
    <div class="message">
        <div class="title">{{item.title}}</div>
        <div>
            <div class="info">
        <span class="price">￥{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
        </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
name: 'detailRecommend',
props: {
    recommend:{
        type:Array,
        default(){
            return []
        }        
    }
}
}
</script>
<style scoped>
.recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 12px;
}
.recommend-item{
    width:48%;
    position: relative;
}
.recommend-item img{
    width: 100%;
    border-radius: 4px;


}
.title{
    text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
}
.info{
    text-align: center
}
.info .price{
    color: var(--color-tint)
}
.info .cfav{
    padding-left: 15px;
    position: relative;
    
}
.info .cfav::before{
    position: absolute;
    content: '';
    left: 1px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>