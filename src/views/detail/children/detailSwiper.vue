<template>
    <swiper class="detailSwiper">
        <swiper-item v-for="(item,index) in swiper" :key="index" class="swiper-item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
name: 'detailSwiper',
data () {
    return {
        swiper:[
            'http://172.16.114.42/zerg/public/cms/imgs/lunbotu1.png',
            'http://172.16.114.42/zerg/public/cms/imgs/lunbotu2.jpg',
            'http://172.16.114.42/zerg/public/cms/imgs/lunbotu3.jpg',
            'http://172.16.114.42/zerg/public/cms/imgs/lunbotu4.jpg'
        ]
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
    height: 200px;
}
</style>