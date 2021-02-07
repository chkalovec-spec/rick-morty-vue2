import Vue from 'vue'
import Vuex from 'vuex'

import { axiosInstance } from '@/api'
import { CHARACTERS_BY_PAGE } from '../api/routes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: {
      currentPage: 1,
      totalPages: null,
      results: [],
    },
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
  },
  actions: {
    async fetchCharacter({ commit }, page = 1) {
      try {
        const {
          data: {
            info: { pages },
            results,
          },
        } = await axiosInstance.get(CHARACTERS_BY_PAGE(page))
        commit('setCharacters', { totalPages: pages, results, currentPage: page })
        return
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
})
