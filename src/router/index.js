import Vue from 'vue'
import Router from 'vue-router'
import LocationSearch from '@/components/LocationSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LocationSearch',
      component: LocationSearch
    }
  ]
})
