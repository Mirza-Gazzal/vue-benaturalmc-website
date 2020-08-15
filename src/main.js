import Vue from 'vue'
import MainPage from '@/views//MainPage.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(MainPage)
}).$mount('#app')
