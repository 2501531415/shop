<template>
<tabbar>
    <tabbaritem path="/home" activeColor="red">
      <img src="~assets/img/tabBar/home.png" alt="" slot="item-icon">
       <img src="~assets/img/tabBar/home.fill.png" alt="" slot="item-active">
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/sort" activeColor="red">
       <img src="~assets/img/tabBar/order.png" alt="" slot="item-icon">
       <img src="~assets/img/tabBar/order.fill.png" alt="" slot="item-active">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activeColor="red">
       <img src="~assets/img/tabBar/shoppingCart.png" alt="" slot="item-icon">
       <img src="~assets/img/tabBar/shoppingCart.fill.png" alt="" slot="item-active">
      <div slot="item-text">购物车</div>
    </tabbaritem >
    <tabbaritem path="/profile" activeColor="red">
       <img src="~assets/img/tabBar/mine.png" alt="" slot="item-icon">
       <img src="~assets/img/tabBar/mine.fill.png" alt="" slot="item-active">
      <div slot="item-text">我的</div>
    </tabbaritem>
     </tabbar>
</template>
<script>
import tabbar from 'components/common/tabbar/Tabbar'
import tabbaritem from 'components/common/tabbar/Tabtar-item'
export default {
name: 'MainTabbar',
components: {
      tabbar,
    tabbaritem
}
}
</script>
<style scoped>

</style>