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
      console.log(payload)
      // mutate state
      state.filteredPlanets = payload
      state.totalPages = payload.length / 12
    },
    setAllPlanets (state, payload) {
      // mutate state
      state.allPlanets = payload
    }
  },
  actions: {
    setFilteredPlanets (context) {
      context.commit('setFilteredPlanets')
    },
    setAllPlanets (context) {
      context.commit('setAllPlanets')
    }
  },
  modules: {
  }
})
