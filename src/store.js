import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: []
  },
  getters: {
    getMsg: function (state) {
      return state.msg
    }
  },
  mutations: {
    setMsg: function (state, data) {
      state.msg.data
    }
  },
  actions: {
    add(store, form) {
      axios.post("http://localhost:8080/packagers", form)
      // .then(function (response) {
      // alert(response.data)
      // })
    },
    updateTime(store, form) {
      let id = form.id;
      let getTime = form.getTime;
      axios.patch("http://localhost:8080/packagers/"+id+'?getTime='+getTime)
    },
    getMsg(store) {
      axios.get("http://localhost:8080/packagers", form)
      .then(function (response) {
      store.commit('setMsg',response.data)
      })
    }
  }
})
