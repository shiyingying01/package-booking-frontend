import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import parcelStorage from './components/parcelStorage.vue'
import Reservation from './components/Reservation.vue'
import Welcome from './components/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/parcelStorage',
      name: 'parcelStorage',
      component: parcelStorage
    },
    {
      path: '/Reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
