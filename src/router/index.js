import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../views/home/home.vue')
const sort = () => import('../views/sort/sort.vue')
const cart = () => import('../views/cart/cart.vue')
const profile = () => import('../views/profile/profile.vue')
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: '/home'
        },
        {
            path:'/home',
            name:'home',
            component:home
        },
        {
            path:'/sort',
            name:'sort',
            component:sort
        },
        {
            path:'/cart',
            name:'cart',
            component:cart
        },
        {
            path:'/profile',
            name:'profile',
            component:profile
        },

    ],
    mode:'history'
})
export default router