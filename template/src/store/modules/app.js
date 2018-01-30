import Vue from 'vue'

const state = {
  app: ''
}

const mutations = {
  setApp (state, data) {
    state.app = data
  }
}

const actions = {
  fetchApp ({ commit }) {
    const data = 'app'
    commit('setApp', data)
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
