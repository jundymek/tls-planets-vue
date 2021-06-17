import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filteredPlanets: [],
    allPlanets: [],
    totalPages: null
  },
  mutations: {
    setFilteredPlanets (state, payload) {
      state.filteredPlanets = payload
    },
    setAllPlanets (state, payload) {
      state.allPlanets = payload
    },
    setTotalPages (state, payload) {
      state.totalPages = payload
    }
  },
  actions: {
    setFilteredPlanets (context) {
      context.commit('setFilteredPlanets')
    },
    setAllPlanets (context) {
      context.commit('setAllPlanets')
    },
    setTotalPages (context) {
      context.commit('setTotalPages')
    }
  },
  modules: {
  }
})
