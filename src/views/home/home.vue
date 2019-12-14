<template>
<div id="home">
<nav-bar class="home-nav"><div slot="cneter">购物街</div></nav-bar>
<home-swiper :banners="banners"/>
<home-recomment :recomments="recomments"/>
<home-feature></home-feature>
<tab-control :title="['流行','新款','精选']" class="tab-control"/>
<ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
</ul>

</div>
</template>
<script>
import NavBar from 'components/common/navbar/Nav.vue'
import HomeSwiper from './childcomps/Homeswiper.vue'
import {getHomeMultidata, getHomeData} from 'network/home.js'
import HomeRecomment from './childcomps/Homerecomment'
import HomeFeature from './childcomps/Homefeature'
import TabControl from 'components/content/Tabcontrol.vue'


export default {
name: 'home',
data(){
    return {
        banners:[],
        recomments:[],
        good:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}

        }
    }
},
created () {
    getHomeMultidata().then(res =>{
    // console.log(res.data.recommend)
    this.banners = res.data.banner.list
    this.recomments = res.data.recommend.list
},err=>{
    console.log(err)
})
     getHomeData('pop',1).then(res=>{
         console.log(res)
     })
},
methods: {

},
components:{
    NavBar,
    HomeSwiper,
    HomeRecomment,
    HomeFeature,
    TabControl
}
}
</script>
<style scoped>
#home{
    padding-top: 44px
}
.home-nav{
    background-color:var(--color-tint);
    color: white;
    position:fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
}
.tab-control{
    position: sticky;
    top:44px
}

</style>