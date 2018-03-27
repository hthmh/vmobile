const store = {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    updateToken(state, token) {
      state.token = data
    }

  },
  actions: {
    updateToken({
      commit
    }, token) {
      commit('updateToken', token)
    }

  }
}

export default store
