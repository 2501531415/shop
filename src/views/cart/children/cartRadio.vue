<template>
<div class="radio" :class={check:ischeck}>
<img src="~assets/img/cart/tick.svg" alt="" >
</div>
</template>
<script>
export default {
name: 'cartRadio',
props: {
    ischeck:{
        type:Boolean,
        default(){
            return false
        }
    }
}
}
</script>
<style scoped>
.radio{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c0c0c0;
    vertical-align: middle;
    margin-bottom: 6px;
  }

.check{
    border: 2px solid red !important;
    background-color: red;
}
</style>