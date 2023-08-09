import Vue from 'vue'
import Vuex from 'vuex'
import actionsOne from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import apiRequest from './actions/api-request'

Vue.use(Vuex)

const actions = {...apiRequest, ...actionsOne}

export default new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    card: []
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
