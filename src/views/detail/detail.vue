<template>
<div class="detail">
     <detail-nav @btnclick="btnclick" ref="nav"/>
  <scroll class="content" 
        :probeType="3"
        :pullUpLoad="true" ref="scroll" @scrollPosition="currentPosition">    
    <detail-swiper :img="topImages"/>
    <detail-base :goods="goodsInfo"/>
    <detail-shop :shops="shopInfo"/>
    <detail-good :good="goods"  @imageLoad="imageLoad"/>
    <detail-params :params="paramInfo" ref="params" />
    <detail-comment :comment="comment" ref="comment" />
    <goods-list :goods="recommend" ref="recommend" />

  </scroll>
      <back-top @click.native="backtop" :class="{active:isshow}"></back-top>
    <detail-bottom @addCart="addCart"/>
  <toast :message="message" :isshow="isshow1"/>
</div>
</template>
<script>
 import {getDetailData,Goods,Shop,GoodsParam,getDetailRecommend} from 'network/detail.js'
 import detailNav from './children/detailNav.vue'
 import detailSwiper from './children/detailSwiper.vue'
 import detailBase from './children/detailBase.vue'
 import detailShop from './children/detailShop.vue'
 import Scroll from 'components/common/scroll/scroll'
 import detailGood from './children/detailGoods'
 import detailParams from './children/detailParams'
 import detailComment from './children/detailComment.vue'
 import detailRecommend from './children/detailRecomment.vue'
 import goodsList from 'components/content/goods/goodsList.vue'
 import detailBottom from './children/detailBottom.vue'
 import {debounce} from 'common/utils.js'
 import {mixin} from 'common/mixin.js'
 import toast from 'components/common/toast/toast.vue'
 
 
export default {

name: 'detail',
mixins: [mixin],
data(){
    return {
        id:'',
        topImages:[],
        goodsInfo:{},
        shopInfo:{},
        goods:{},
        paramInfo:{},
        comment:[],
        recommend:[],
        itemTopY:[],
        getItemY:null,
        currentIndex:0,
        message:'',
        isshow1:''
    }
},
components: {
    detailNav,
    detailSwiper,
    detailBase,
    detailShop,
    Scroll,
    detailGood,
    detailParams,
    detailComment,
    goodsList,
    detailBottom,
    toast
    
},
created () {
    this.id = this.$route.params.iid
    getDetailData(this.id).then(res =>{
        // 获取轮播图 
        this.topImages = res.result.itemInfo.topImages
        
          //获取商品基本信息
        this.goodsInfo = new Goods(res.result.itemInfo,res.result.columns, res.result.shopInfo.services)
        // console.log(res)
        // console.log(this.goodsInfo)
        // 获取商铺信息
        this.shopInfo = new Shop(res.result.shopInfo)
        // console.log(res)
        // 详情
        this.goods = res.result.detailInfo
        // 参数
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        // 评论
        this.comment = res.result.rate.list
        this.getItemY = debounce(()=>{
        this.itemTopY.push(0)
        this.itemTopY.push(this.$refs.params.$el.offsetTop)
        this.itemTopY.push(this.$refs.comment.$el.offsetTop)
        this.itemTopY.push(this.$refs.recommend.$el.offsetTop)
        this.itemTopY.push(Number.MAX_VALUE)
        },100)

    })
    

    getDetailRecommend().then(res=>{
        this.recommend = res.data.list
        // console.log(res.data.list)
    })

},
mounted () {
      
},
updated () {
       

        // console.log(this.itemTopY)
},
methods: {
    addCart(){
        const product={}
        product.img = this.topImages[0],
        product.name = this.goodsInfo.title,
        product.desc = this.goodsInfo.desc
        product.price = this.goodsInfo.realPrice
        product.iid = this.id
        
        this.$store.dispatch('addCart',product).then(res=>{
            this.$toast.show(res,1000)
        })

    },
   imageLoad(){
    this.$refs.scroll.refresh()
    this.getItemY()
   },
   btnclick(index){
        this.$refs.scroll.bs.scrollTo(0,-this.itemTopY[index],200)
   },
   currentPosition(position){
       this.isshow = -position.y < 1000
       const positionY = -position.y
        const length =this.itemTopY.length
       for(let i=0;i<length-1;i++){
        if(this.currentIndex !== i && (positionY >= this.itemTopY[i] && positionY<this.itemTopY[i+1])){
            this.currentIndex = i 
            this.$refs.nav.currentIndex = this.currentIndex
        }
        
       }
   }
}
}

</script>
<style scoped>

.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content{
    height: calc(100vh - 44px);
}
.active{
    display: none
}
</style>