const state = {
  count: 11
}

const mutations = {
  add (state, param) {
    state.count +=param
    // state.count++
  },
  reduce (state) {
    state.count--
  }
}

const actions = {
  add: ({commit}, param) => {
    commit('add', param)
  },
  reduce: ({commit}) => {
    commit('reduce')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}