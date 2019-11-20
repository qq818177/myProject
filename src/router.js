import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/cart'
import Addr from './pages/address'
Vue.use(Router)
export default new Router({
    routes : [
        {
            path : '/',
            name : 'cart',
            meta : {
                auth : true
            },
            component : Cart
        },{
            path : '/addr',
            name : 'addr',
            component : Addr
        }
    ]
})