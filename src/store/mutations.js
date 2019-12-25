export default  {
    aaddCart(state,payload){
       payload.count+=1
    },
    pushCart(state,payload){
        payload.count=1
        payload.checked = true
        state.cartList.push(payload)
    }
}