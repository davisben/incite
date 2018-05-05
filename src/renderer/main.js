import Vue from 'vue'
import AwesomeIcon from 'vue-awesome/components/Icon'
import App from './App'
import router from './router'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.component('icon', AwesomeIcon)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
