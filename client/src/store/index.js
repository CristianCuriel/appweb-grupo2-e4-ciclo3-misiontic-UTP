import Vue from 'vue'
import Vuex from 'vuex'

const urlSever = process.env.VUE_APP_ROOT;
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdata: undefined,
  },
  mutations: {
    setUser(state, userData){
      state.userdata = userData;
    }
  },
  actions: {
   async login({commit}, userData){
      this.commit('setUser', userData);
    },
    saveLogoutUser(){
      this.commit('setUser', undefined)
    }
  },
  modules: {
  }
})
