<template>
<recomments class="home-recomment">
    <recomments-item v-for="(item,i) in recomments" :key="i" class="home-recomment-item">
        <a :href="item.link">
        <img :src="item.image" alt="">
    </a>
    <div>{{item.title}}</div>
        
    </recomments-item>
</recomments>
</template>
<script>
import {Recomments,RecommentsItem} from 'components/content/Recommend'

export default {
name: 'Homerecomment',
components: {
      Recomments,
    RecommentsItem
},
props: {
    recomments:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>
<style scoped>
.home-recomment{
    display: flex;
    justify-content: space-around;
    padding: 20px 5px;
    font-size: 14px;
    text-align: center;
    border-bottom: 10px solid #eee;
}
.home-recomment-item img{
    width: 60px;
    height: 60px;
    margin-bottom: 4px
}
</style>