<template>
<div id="app">
<swiper>
     <swiper-item v-for="(item,i) in banners" :key="i">
    <a :href="item.link">
    <img :src="item.image" alt="" @load="imgLoad">
    </a>
     </swiper-item>
</swiper>

</div>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
name: 'Homeswiper',
data(){
    return {
        isshow:true
    }
},
props: {
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
components: {
      Swiper,
    SwiperItem
},
methods: {
    imgLoad(){
        if(!this.isshow) return
       this.$emit('imageLoad')
       this.isshow = false
    }
}

}
</script>
<style scoped>

</style>