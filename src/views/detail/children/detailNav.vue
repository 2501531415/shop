<template>
<div class="detail">
    <nav-bar class="nav">
        <div class="navImg" slot="left" @click="back">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <span class="detailList" slot="center" v-for="(item ,index) in detailList" :key="index" 
        @click="backItem(index)" :class="{active:index == currentIndex}">{{item}}</span>
    </nav-bar>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/Nav.vue'
export default {
name: 'detailNav',
data () {
    return {
        detailList:['商品','参数','评论','推荐'],
        currentIndex:0
    }
},
methods: {
    back(){
        this.$router.back(-1)
    },
    backItem(index){
        this.currentIndex = index
    }
},
components: {
    NavBar
}
}
</script>
<style scoped>
.nav{
    display:flex;
      font-size:14px
}
.detailList{
    flex: 1;
    margin-right: 10px
  
}
.navImg{
    margin-top: 6px;
    margin-left: 15px
}
.active{
    color:var(--color-tint)
}
</style>