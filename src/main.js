import Vue from 'vue'
import { DialogDrag, DropArea } from 'vue-dialog-drag'

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
Vue.component('DialogDrag', DialogDrag)
Vue.component('DropArea', DropArea)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
