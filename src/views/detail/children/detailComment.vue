<template>
<div id="comment" v-if="Object.keys(comment).length !==0">
    <div class="nav">
        <span class="useComment">用户评价</span>
        <span class="more">更多</span>
    </div>
    <div class="user">
        <i><img :src="comment[0].user.avatar" alt=""></i>
        <span class="name">{{comment[0].user.uname}}</span>
    </div>
    <div class="text"><p>{{comment[0].content}}</p></div>
    <div class="info">
        <span class="time">{{comment[0].created | showDate}}</span>
        <span class="style">{{comment[0].style}}</span>
    </div>
    <div class="img">
        <img v-for="(item,index) in comment[0].images" :key="index" :src="item" alt="">
    </div>
</div>
</template>
<script>
import {formatDate} from 'common/utils'
export default {
name: 'detailComment',
props: {
    comment:{
        type:Array,
        default(){
            return []
        }
    }
},
data () {
    return {
        time:1574664007
    }
},
filters: {
    showDate(value){
        const date = new Date(value *1000)
        return formatDate(date,'yyyy-MM-dd')
    }
}
}
</script>
<style scoped>
#comment{
    padding-bottom: 20px;
    border-bottom: 2px solid #f2f5f8;
}
.nav{
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f2f5f8
}
.nav .more{
    float: right;
    padding-right:10px 
}
.user{
    margin-top: 10px;
    color: black;
}
.user i{
    display:inline-block
}
.user img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    vertical-align: middle

}
.user .name{
    padding-left: 5px
}
.text{
    margin-top: 10px;
    margin-bottom: 10px;
}
.info{
    font-size: 13px
}
.info .style{
    padding-left: 5px
}
.img{
    display: flex
}
.img img{
    width: 80px;
    height: 80px;
    margin-top: 10px
}
</style>