import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    add(store, form) {
      axios.post("http://localhost:8080/packagers", form).then(function (response) {
       // alert(response.data)
      })
    }
  }
})
