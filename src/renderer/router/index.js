import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/config',
      name: 'config',
      component: require('@/components/Config').default
    },
    {
      path: '/sites',
      name: 'sites',
      component: require('@/components/Sites').default
    },
    {
      path: '*',
      redirect: '/sites'
    }
  ]
})
