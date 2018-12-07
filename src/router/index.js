import Vue from 'vue'
import Router from 'vue-router'
import Sundial from '@/components/Sundial'
import LocationSearch from '@/components/LocationSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sundial',
      component: Sundial
    },
    {
      path: '/locationsearch',
      name: 'LocationsSearch',
      component: LocationSearch
    }
  ]
})
