<template>

 <div class="tabbar-item" @click="btnclick">
   <!-- <img src="../../assets/img/tabbar/home.png" alt="">
      <div slot="slot-text">首页</div> -->
      <div v-if="!isactive"><slot name="item-active"></slot></div>
      <div v-else> <slot name="item-icon"></slot></div>
     <div :style="isactiveColor"><slot name="item-text"></slot></div>
      
</div>

</template>
<script>
export default {
name: 'App',
props:{
    path:String,
    activeColor:{
        type:String,
        default:'black'
    }
},
// data(){
//     return{
//         isactive:true
//     }
// },
computed:{
    isactive(){
        return this.$route.path !== this.path
    },
    isactiveColor(){
        return !this.isactive? {color:this.activeColor} : {}
    }
},
methods:{
btnclick(){
    // this.isactive = true
    // console.log(this.$route.path)
    // console.log(this.path)
    if(this.$route.path !==this.path){
    this.$router.replace(this.path)
    }
},
}

}
</script>
<style scoped>
#tabbar .tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img{
height: 24px;
width: 24px
}
</style>