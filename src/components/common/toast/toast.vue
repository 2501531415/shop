<template>
<div class="toast" v-show="isshow">
    <div>{{message}}</div>
</div>
</template>
<script>
export default {
name: 'toast',
data(){
    return {
        message:'',
        isshow:false
    }
},
methods: {
  show(message,duration){
      this.message = message
      this.isshow = true
      setTimeout(()=>{
          this.message = ''
          this.isshow = false
      },duration)
  }  
}
}
</script>
<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 20%;
    background-color: rgba(0,0,0,.75);
    color: white;
    border-radius: 4px;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    z-index: 999;

}
</style>