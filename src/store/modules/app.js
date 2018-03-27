const store = {
  namespaced: true,
  state: {
    pageLoading: true,
    pageDirection: '',
    homeScrollTop: 0,
    nowTime: ''
  },
  mutations: {
    updateNowTime(state, data) {
      state.nowTime = data
    },
    updateLoading(state, data) {
      state.pageLoading = data
    },
    updateDirection(state, data) {
      state.pageDirection = data
    },
    updateHomeScrollTop(state, data) {
      state.homeScrollTop = data
    }
  },
  actions: {
    updateNowTime({
      commit
    }, data) {
      commit('updateNowTime', data)
    },
    updateDirection({
      commit
    }, data) {
      commit('updateDirection', data)
    },
    updateLoading({
      commit
    }, data) {
      commit('updateLoading', data)
    },
    updateHomeScrollTop({
      commit
    }, top) {
      commit('updateHomeScrollTop', top)
    }
  }
}

export default store
