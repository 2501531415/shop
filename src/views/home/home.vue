<template>
<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :title="['流行','新款','精选']" v-show="istop" @btnclick="itemclick" ref="tabControl1" class="tab1"/>
    <scroll class="wrapper" 
    :pullUpLoad="true" 
    :probeType="3" ref="scroll" 
    @scrollPosition="backshow"
    @scrollPulling="getmore"
    >
        <home-swiper :banners="banners" @imageLoad="tabImage"/>
        <home-recomment :recomments="recomments"/>
        <home-feature></home-feature>
        <tab-control :title="['流行','新款','精选']"  @btnclick="itemclick" ref="tabControl2"/>
        <good-list :goods="showItem"/>
    </scroll>
    <back-top @click.native="backtop" :class="{active:isshow}"></back-top>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/Nav.vue'
import HomeSwiper from './childcomps/Homeswiper.vue'
import {getHomeMultidata, getHomeData} from 'network/home.js'
import HomeRecomment from './childcomps/Homerecomment'
import HomeFeature from './childcomps/Homefeature'
import TabControl from 'components/content/Tabcontrol.vue'
import GoodList from 'components/content/goods/goodsList.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/content/backtop/backtop.vue'
import {debounce} from 'common/utils.js'


export default {
name: 'home',
data(){
    return {
        banners:[],
        currenttype:'pop',
        recomments:[],
        goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}

        },
        isshow:true,
        currentTabControl:'',
        istop:false,
        saveY:''

    }
},
components:{
    NavBar,
    HomeSwiper,
    HomeRecomment,
    HomeFeature,
    TabControl,
    GoodList,
    Scroll,
    BackTop
},
computed: {
    showItem(){
        return this.goods[this.currenttype].list
    }    
},

created () {
    this.getHomeMultidata()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')

    // 1.监听图片加载完成
   
},
mounted () {
     const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad',()=>{
        refresh()
    })
   
},
activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
},
deactivated () {
    this.saveY = this.$refs.scroll.bs.y
},
methods: {
    //调用的方法
    tabImage(){
        this.currentTabControl = this.$refs.tabControl2.$el.offsetTop
    },
    getmore(){
        this.getHomeData(this.currenttype)
    },
    backshow(position){
        //回到顶部
        this.isshow = -position.y <1000
        // 置顶效果
        this.istop = -position.y > this.currentTabControl
    },
    backtop(){
       this.$refs.scroll.scrollTo(0,0,500)
    },
    itemclick(index){
        switch(index){
            case 0:
                this.currenttype = 'pop'
                break;
            case 1:
                this.currenttype = 'new'
                break;
            case 2:this.currenttype = 'sell'
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index

    },
    //网络请求方法
    getHomeMultidata(){
        getHomeMultidata().then(res =>{
    this.banners = res.data.banner.list
    this.recomments = res.data.recommend.list
},err=>{
    console.log(err)
})
    },
    getHomeData(type){
        let page = this.goods[type].page +1
         getHomeData(type,page).then(res=>{
            //  console.log(res.data.list)
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
         this.$refs.scroll.finishpullup()
        //  console.log(this.goods[type].list)
     },err=>{
         console.log(err)
     })
    }
},

}
</script>
<style scoped>
#home{
    height: 100vh;
    position: relative;
}
.home-nav{
    background-color:var(--color-tint);
    color: white;
    z-index: 9;
}
.wrapper{
    /* height:calc(100% - 93px); */
    position:absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
.active{
    display: none
}
.tab1{
  position: relative;
}
</style>