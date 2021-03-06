import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router'
import './assets/css/base.css'
import './assets/css/index.css'

Vue.use(VueAxios,Axios);
Vue.config.productionTip = false

new Vue({
  router : Router,
  render: h => h(App),
}).$mount('#app')
