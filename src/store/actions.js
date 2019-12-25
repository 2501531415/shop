export default {
    addCart(context,payload){
        // 第一种方法
        // let oldProduct = null
        // for(let i=0;i<state.cartList.length;i++){

        //     if(state.cartList[i].iid === payload.iid){
        //         oldProduct = state.cartList[i]
        //     }
        // }
        //第二种方法
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if(oldProduct){
            context.commit('aaddCart',oldProduct)
            resolve('商品+1')
        }else{
            context.commit('pushCart',payload)
            resolve('添加商品成功')
        }
      })
}
}