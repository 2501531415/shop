<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from './components/content/MainTabbar'

export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
