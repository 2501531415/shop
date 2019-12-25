<template>
    <swiper class="detailSwiper">
        <swiper-item v-for="(item,index) in img" :key="index" class="swiper-item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
name: 'detailSwiper',
props: {
    img:{
        type:Array,
        default(){
            return []
        }
    }
},
components: {
    Swiper, 
    SwiperItem
}
}
</script>
<style scoped>
.detailSwiper img{
    height: 300px;
}
</style>