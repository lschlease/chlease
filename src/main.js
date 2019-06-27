import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials=true  //带钥匙
Vue.prototype.axios=axios            //强行给vue的原型对象添加axios  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
