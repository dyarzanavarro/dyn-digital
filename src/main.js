import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'
import vuetify from './plugins/vuetify'
// eslint-disable-next-line import/order

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
