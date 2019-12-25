<template>
<div class="base-info" v-if="Object.keys(goods).length !== 0">
   <div class="title">{{goods.title}}</div>
   <div class="info-price">
       <span class="n-price">{{goods.newPrice}}</span>
       <span class="o-price">{{goods.oldPrice}}</span>
        <span class="sport">{{goods.discount}}</span>

   </div>
   <div class="message">
       <span class="discount">{{goods.columns[0]}}</span>
       <span class="columns">{{goods.columns[1]}}</span>
         <span class="services">{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
   </div>
</div>
</template>
<script>
export default {
name: 'detailBase',
props: {
    goods:{
        type:Object,
        default(){
            return []
        }
    }
}
}
</script>
<style scoped>
.base-info {
    padding: 0px 2px;
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
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
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