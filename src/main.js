import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'
// import fastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(toast)
// fastClick.attach(document.body)
//使用图片的懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/home/placeholder.png')
})
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
