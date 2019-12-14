<template>
<div class="tab-control">
<div class="tab-control-item">
    <div v-for="(item,index) in title" :key="index" :class="{active:index === currentIndex}" @click="change(index)">
        <span>{{item}}</span>
    </div>
</div>
</div>
</template>
<script>
export default {
name: 'Tabcontrol',
data(){
    return {
        currentIndex:0
    }
},
methods: {
    change(index){
        this.currentIndex = index
    }
},

props: {
    title:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>
<style scoped>
.tab-control{
    font-size: 14px;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
     display:flex;
    height: 44px;
}
.tab-control-item span{
    font-size: 16px;
    padding: 10px;
  }
.tab-control-item>div{
    flex:1;
}
.active{
    color:var(--color-tint);
}
.active span{
      border-bottom:3px solid var(--color-tint);
}
</style>