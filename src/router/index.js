import Vue from 'vue'
import Router from 'vue-router'
import SunTimes from '@/components/SunTimes'
import LocationSearch from '@/components/LocationSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SunTimes',
      component: SunTimes
    },
    {
      path: '/locationsearch',
      name: 'LocationsSearch',
      component: LocationSearch
    }
  ]
})
