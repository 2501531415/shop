<template>
<div class="goods-list" @click="itemback">
<img v-lazy="showImage" alt="" @load="imgLoad">
<div class="message">
    <p class="text">{{goodsitem.title}}</p>
    <span class="price">￥{{goodsitem.price}}</span>
    <span class="cfav">{{goodsitem.cfav}}</span>
</div>
</div>
</template>
<script>
export default {
name: 'goodsListItem',
props: {
    goodsitem:{
        type:Object,
        default(){
            return {}
        }
    }
},
computed: {
  showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
  }  
},
methods: {
    imgLoad(){
        this.$bus.$emit('itemImageLoad')
    },
    itemback(){
        this.$router.push('/detail/' + this.goodsitem.iid)
        
    }
}
}
</script>
<style scoped>
.goods-list{
    width: 48%;
    position: relative;
    padding-bottom: 40px


}
.goods-list img{
    width: 100%;
    border-radius: 4px;

}
.message{
    text-align: center;
    position: absolute;
    font-size: 12px;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
}
.message p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
 .message .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

  .message .cfav {
    position: relative;
  }

  .message .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
</style>