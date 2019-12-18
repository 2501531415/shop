<template>
<div class="base-info">
   <div class="title">{{goods.title}}</div>
   <div class="info-price">
       <span class="n-price">￥{{goods.newPrice}}</span>
       <span class="o-price">￥{{goods.oldPrice}}</span>
        <span class="sport">{{sport}}</span>

   </div>
   <div class="message">
       <span class="discount">销量{{goods.discount}}</span>
       <span class="columns">收藏{{goods.columns}}人</span>
       <span class="services">{{goods.services}}</span>
   </div>
   <div class="info">
       <span class="discount">{{post}}</span>
        <span class="columns">{{post2}}</span>
        <span class="services">{{post3}}</span>
   </div>

</div>
</template>
<script>
export default {
name: 'detailBase',
data(){
    return {
        post:'退货补运费',
        post2:'全国包邮',
        post3:'7天无理由退货',
        sport:'活动价'
    }
},
props: {
    goods:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>
<style scoped>
.base-info {
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .title{
      font-size: 12px
  }
  .info-price{
      margin-top: 5px;
      color: var(--color-tint)
  }
  .o-price{
      text-decoration: line-through;
      padding-left: 5px;
      font-size: 10px
  }
  .message{
      display:flex;
      font-size: 10px;
      padding-top: 15px;
      padding-bottom: 4px;
      border-bottom: 2px solid #f2f5f8
  }
  .message>span{
      flex: 1
  }
  .discount{
      text-align: left
  }
  .columns{
      text-align: center
  }
  .services{
      text-align: right
  }
  .info{
      display: flex;
      font-size: 10px;
      padding-top: 15px;
      padding-bottom: 15px
  }
  .info>span{
      flex: 1
  }
  .sport{
      font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-tint);
    border-radius: 8px;
    margin-left: 5px;
  }

</style>