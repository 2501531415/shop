<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
name: 'Scroll',
data(){
    return{
        bs:''
    }
},
props:{
    probeType:{
        type:Number,
        default:0
    },
    click:{
        type:Boolean,
        default:true
    },
    pullUpLoad:{
        type:Boolean,
        default:false
    }
    
    
},
mounted () {
  this.bs = new BScroll(this.$refs.wrapper, {
      probeType:this.probeType,
      click:this.click,
      pullUpLoad:this.pullUpLoad,
})
  if(this.probeType == 2 || this.probeType == 3){
        this.bs.on('scroll',(position)=>{
    // console.log(position)
    this.$emit('scrollPosition',position)
    })
  }

    this.bs.on('pullingUp', () => {
        this.$emit('scrollPulling')
      })
},
methods: {
    scrollTo(x,y,time){
        this.bs.scrollTo(x,y,time)
    },
    finishpullup(){
        this.bs.finishPullUp()
    },
    refresh(){
        this.bs.refresh()
    },

}
}
</script>
<style scoped>

</style>