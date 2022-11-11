import Vue from 'vue'
import App1 from './App1.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App1),
  router,
  store
}).$mount('#app1')
