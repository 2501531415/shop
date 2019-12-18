import {request} from './request.js'

export function getDetailData(id){
    return request({
        url:'/detail',
        params:{
            id
        }
    })
}
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
    }
  }
export class Shop {
    constructor(shopMessage){
        this.img = shopMessage.imageUrl,
        this.name = shopMessage.name,
        this.total = shopMessage.total,
        this.product = shopMessage.product,
        this.state =shopMessage.state,
        this.price = shopMessage.price,
        this.mass = shopMessage.mass
    }
}