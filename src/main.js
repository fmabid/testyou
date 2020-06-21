import Vue from 'vue'
import router from './routers'

import App from './App.vue'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
