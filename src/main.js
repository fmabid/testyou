import Vue from 'vue'
//import Vuex from 'vuex'

import App from './App.vue'
import router from './routers'
import {store} from './stores'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
