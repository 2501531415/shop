<template>
<div id="app">
<div id="tabbar">
  <slot></slot>
</div>
</div>
</template>
<script>
export default {
name: 'Tabbar'
}
</script>
<style scoped>
#tabbar{
  display:flex;
   height: 49px;
  background-color:#f6f6f6;
  font-size:14px;
  position: fixed;
  bottom:0px;
  left: 0px;
  right: 0px;
  box-shadow:0px -3 1px rgba(100,100,100,0.2);
    text-align: center;
}
/* #tabbar .tabbar-item{
  flex: 1;
  height: 49px;
}
.tabbar-item img{
height: 24px;
width: 24px
} */
</style>