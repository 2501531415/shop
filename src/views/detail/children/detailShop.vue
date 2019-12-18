<template>
<div class="detailShop">
    <div class="nav">
        <img src="~assets/img/home/logo.jpg" alt="">
        <span class="name">{{shops.name}}</span>
    </div>
    <div class="message">
        <div class="total">{{shops.total}}万
        <p>总销量</p>  
        </div>
        <div class="product">{{shops.product}}
        <p>全部宝贝</p>  
        </div>
        <div class="line"></div>
       <div class="info">
            <table>
            <tr>
                <td>描述推荐</td>
                <td class="state">{{shops.state}}</td>
                <td><span class="active">低</span></td>
            </tr>
            <tr>
                <td>价格合理</td>
                <td class="state">{{shops.price}}</td>
                <td><span class="active">低</span></td>
            </tr>
            <tr>
                <td>质量满意</td>
                <td  class="state2">{{shops.mass}}</td>
                <td><span class="active2">高</span></td>
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
    vertical-align: middle
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
.state{
    color: aquamarine;

}
.active{
    width: 16px;
    height: 18px;
    background-color: aquamarine;
    color: white

}
.state2{
    color: red;

}
.active2{
    width: 16px;
    height: 18px;
    background-color: red;
    color: white
}

.info table {
    width: 120px
}
.info table tr td{
    padding: 5px 0px
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