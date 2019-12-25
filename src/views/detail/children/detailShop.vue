<template>
<div class="detailShop">
    <div class="nav">
        <img :src="shops.logo" alt="">
        <span class="name">{{shops.name}}</span>
    </div>
    <div class="message">
        <div class="total">{{shops.sells}}
        <p>总销量</p>  
        </div>
        <div class="product">{{shops.goodsCount}}
        <p>全部宝贝</p>  
        </div>
        <div class="line"></div>
       <div class="shop-middle-right">
            <table>
            <tr v-for="(item,index) in shops.score" :key="index">
                <td>{{item.name}}</td>
                <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
            </tr>
        </table>
       </div>
    </div>
     <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
</div>

</template>
<script>
export default {
name: 'detailShop',
props: {
    shops:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>
<style scoped>
.detailShop{
    border-bottom: 5px solid #f2f5f8;
}
.nav{
    display: inline-block;
    padding-top: 20px;
    padding-left: 5px;
}
.nav img{
    vertical-align: middle;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgb(0, 0, 0,.1)
}
.nav .name{
    padding-left: 10px
}
.total{
    text-align: center;
    padding-top: 20px
}
.product{
    text-align: center;
    padding-top: 20px
}
.line{
    height: 50px;
    width: 1px;
    background-color:#999;
    margin-top: 20px
}
.message{
    padding-top: 15px;
    display:flex;
    justify-content: space-around
}
  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }

</style>